import React from "react";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import { backendUrl,strapiUrl } from "@/utils/axios";
import { AiTwotoneExclamationCircle } from "react-icons/ai";
import moment from "moment";

export async function generateStaticParams() {
    const data = await fetch(
      `${strapiUrl}/api/blogs?fields[0]=slug&pagination[pageSize]=1000000`
    ).then((res) => res.json());
  
    console.log(data);
  
    return data?.data?.map((blog: any) => ({
      slug: blog?.slug,
    }));
  }

  async function getSingleBlog(slug: string) {
    const res =await fetch(
        `${strapiUrl}/api/blogs?filters[slug][$eq]=${slug}&populate=*`
      );
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
  
    return data.data;
  }

  export async function generateMetadata(
    { params }: { params: { slug: string } },
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const slug = params.slug;
  
    // fetch data
    const res =await fetch(
        `${strapiUrl}/api/blogs?filters[slug][$eq]=${slug}&populate=*`
      );
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    const blog = data?.data;
  
    return {
      title: blog?.seo?.metaTitle,
      description: blog?.seo?.metaDescription,
      // metadataBase: new URL(''),
      // alternates:{
      //   canonical:"/"
      // }
    };
  }

  export default async function Page({ params }: { params: { slug: string } }) {

    const blogs =await getSingleBlog(params.slug);
    const blog = blogs[0]

    const renderContent = (node: any) => {
      switch (node?.type) {
        case 'paragraph':
          return (
            <p className="mb-4 inter">
              {node?.children?.map((child: any, idx: number) =>
                child?.type === 'text' ? (
                  <span key={idx} className="spartan text-gray-700" >{child?.text}</span>
                ) : (
                  renderContent(child)
                )
              )}
            </p>
          );
        case 'heading':
          const HeadingTag = `h${node?.level}` as keyof JSX.IntrinsicElements;
          return (
            <HeadingTag className={`text-${node?.level * 2}xl font-bold mb-4 spartan`}>
              {node?.children[0]?.text}
            </HeadingTag>
          );
        case 'list':
          const ListTag = node?.format === 'ordered' ? 'ol' : 'ul';
          return (
            <ListTag className="list-inside spartan list-decimal mb-4">
              {node?.children?.map((item: any, idx: number) => (
                <li key={idx} className="mb-2 spartan">
                  {item?.children?.map((child: any, idx: number) => (
                    <span key={idx} className="spartan" >
                      {child?.bold && <strong className="spartan" >{child?.text}</strong>}
                      {child?.italic && <em className="spartan">{child?.text}</em>}
                      {child?.strikethrough && <s className="spartan">{child?.text}</s>}
                      {child?.underline && <u className="spartan">{child?.text}</u>}
                      {!child?.bold && !child?.italic && !child?.strikethrough && !child?.underline && (
                        <span className="spartan"> {child?.text}</span>
                      )}
                    </span>
                  ))}
                </li>
              ))}
            </ListTag>
          );
        case 'code':
          return (
            <pre className="bg-gray-100 p-4 rounded mb-4">
              <code>{node?.children[0]?.text}</code>
            </pre>
          );
        case 'image':
          const { url, caption, formats } = node.image;
          return (
            <div className="my-4">
              <Image
                src={url}
                alt={caption || 'Image'}
                width={formats?.medium?.width || 400}
                height={formats?.medium?.height || 400}
                className="rounded w-full"
              />
              {caption && <p className="text-sm spartan text-center mt-2">{caption}</p>}
            </div>
          );
        case 'link':
          return (
            <a href={node?.url} className="text-blue-500 underline spartan" target="_blank" rel="noopener noreferrer">
              {node?.children[0]?.text}
            </a>
          );
        case 'quote':
          return (
            <blockquote className="border-l-4 spartan border-gray-500 pl-4 italic mb-4">
              {node?.children[0]?.text}
            </blockquote>
          );
        default:
          return null;
      }
    };

  return (
    <section className="pt-8 mt-16 spartan pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
              
                <div>
                  <a
                    href="#"
                    rel="author"
                    className="text-xl spartan font-bold text-gray-900 dark:text-white"
                  >
                   {blog?.author}
                  </a>
                  
                  <p className="text-base text-gray-500 dark:text-gray-400 spartan">
                   {moment(blog?.published_date).format("D MMMM, YYYY")}
                  </p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 spartan text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
             {blog?.title}
            </h1>
          </header>
          <div className="prose spartan max-w-none">{blog?.content?.map((node:any, idx:number) => renderContent(node))}</div>
    
        </article>
      </div>
    </section>
  );
};


