import Categories from "@/components/Category/Categories";
import Services from "@/components/Category/Services";
import Image from "next/image";
import { backendUrl } from "@/utils/axios";
export async function generateStaticParams() {
  const data = await fetch(`${backendUrl}/category/getAllCategories`).then(
    (res) => res.json()
  );

  return data?.categories?.map((category: any) => ({
    id: category.slug,
  }));
}

async function getSingleCategory(id: string) {
  const url = `${backendUrl}/category/getCategoryBySlug/${id}`;

  const res = await fetch(url);

  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  console.log(typeof data.category);
  
  
  return data.category; 
}

export default async function Page({ params }: { params: { id: string } }) {
  const category = await getSingleCategory(params.id);

 
  return (
    <div className="w-full flex flex-col gap-16 md:py-28 ">
      <div className="w-full px-8 mt-20 sm:px-12 md:px-20 lg:px-32 py-16 flex flex-col gap-12 md:gap-20">
        <div className="w-full grid-cols-1  grid sm:grid-cols-2 gap-12 items-start">
          <Image
            src={category?.image}
            width={600}
            height={600}
            alt={category?.name}
            className="rounded-3xl cursor-pointer  "
          />
          <div className="w-full flex flex-col gap-8">
            <h1 className="inter text-3xl text-primary font-semibold">
              {category?.name}
            </h1>
            <div
              className="w-full text-gray-600 inter text-base "
              dangerouslySetInnerHTML={{
                __html: category?.description || "",
              }}
            ></div>
          </div>
        </div>
      </div>
      <Categories id={params.id} />
      <Services id={params.id} />
    </div>
  );
}
