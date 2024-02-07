import Image from "next/image";
import { backendUrl } from "@/utils/axios";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import Choose from "@/components/Home/Choose";
import parse from 'html-react-parser';
import Services from "@/components/Category/Services";


export async function generateStaticParams() {
  console.log(`${backendUrl}/subCategory/getAllSubCategoriesSlug`);

  const data = await fetch(
    `${backendUrl}/subCategory/getAllSubCategoriesSlug`
  ).then((res) => res.json());

  return data?.subCategories?.map((service: any) => ({
    slug: service?.slug,
  }));
}

async function getSingleSubCategory(slug: string) {
  const res = await fetch(
    `${backendUrl}/subCategory/getSubCategoryBySlug/${slug}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return data.subCategory;
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const res = await fetch(
    `${backendUrl}/subCategory/getSubCategoryBySlug/${slug}`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const service = data.subCategory;

  return {
    title: service?.title,
    description: service?.metaDescription,
    // metadataBase: new URL(''),
    // alternates:{
    //   canonical:"/"
    // }
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  const category = await getSingleSubCategory(params.slug);
  console.log(category);

  return (
    <>
      <div className="w-full flex flex-col gap-4 py-16 md:py-28 ">
        <div className="w-full bg-orange-100 px-8 sm:px-12 md:px-20 lg:px-32 py-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="md:col-span-2 flex flex-col  justify-center gap-4">
            <h1 className="inter text-center md:text-left text-2xl md:text-3xl text-primary font-semibold">
              {category?.name}
            </h1>
            <div className="flex items-center gap-2 mt-1 mb-2.2p">
              <div>
                <Image
                  src="https://assets.nobroker.in/hs-new/public/Home-Services/event-icon.svg"
                  alt="event"
                  className="block"
                  width={12}
                  height={12}
                />
              </div>
              <div className="md:text-15 inter text-gray-500">
                {category?.bookingCount}
                {/* */} bookings near you{" "}
              </div>
              <div> | </div>
              <div>
                <img
                  src="https://assets.nobroker.in/hs-new/public/Home-Services/star-icon.svg"
                  alt="star"
                  className="block"
                  width={12}
                  height={12}
                />
              </div>
              <div className="md:text-15 inter text-gray-500">
                {category?.rating}
                {/* */} ({/* */}
                {category?.noOfReviews}
                {/* */} reviews)
              </div>
            </div>
            <div className="w-full md:w-1/3 grid grid-cols-2 gap-2">
              {category?.specs?.map((spec: any) => {
                return (
                  <div className="border border-primary rounded-full p-1 flex items-center justify-center ">
                    <p className="spartan text-sm text-primary">spec</p>
                  </div>
                );
              })}
            </div>
          </div>
          <Image
            src={category?.image}
            height={600}
            width={600}
            alt="image"
            className="w-full h-full rounded-lg"
          />
        </div>
        <Services id={category?._id} />
        <Choose />
        <div className="w-full px-4 sm:px-12 md:px-20 lg:px-32 py-8 flex flex-col gap-4 ">
          <h6 className="inter text-2xl text-primary font-semibold">
            Description
          </h6>
          <div
            className="p-4  flex flex-col gap-2 mb-2 bg-white text-sm inter"
           
              // style={{
              //   listStyle:"auto"
              // }}

          >
            {parse(category?.description)}
          </div>
        </div>
      </div>
    </>
  );
}
