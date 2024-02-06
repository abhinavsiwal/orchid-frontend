import Image from "next/image";
import { backendUrl } from "@/utils/axios";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import Choose from "@/components/Home/Choose";
import parse from 'html-react-parser';

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
      <div className="w-full flex flex-col gap-4 md:py-28 ">
        <div className="w-full bg-orange-100 px-8 sm:px-12 md:px-20 lg:px-32 py-4 grid grid-cols-3 gap-4 md:gap-8">
          <div className="col-span-2 flex flex-col  justify-center gap-4">
            <h1 className="inter text-3xl text-primary font-semibold">
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
            <div className="w-1/3 grid grid-cols-2 gap-2">
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
        <section className="flex items-center py-4 bg-white font-poppins dark:bg-gray-900 ">
          <div className="justify-center flex-1 max-w-7xl px-4 py-4 mx-auto text-left lg:py-10 ">
            <div className="grid grid-cols-1 mb-6 md:grid-cols-[40%,1fr] border-gray-200 rounded-md border dark:border-gray-800  gap-2">
              <div>
                <img
                  src="https://i.postimg.cc/MKrLbcmm/pexels-max-fischer-5212345.jpg"
                  alt=""
                  className="object-cover w-full rounded-md h-80 md:h-full"
                />
              </div>
              <div className="px-4 py-4 lg:px-2 ">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 ">
                  starts from <b>Rs.2222</b>
                </p>
                <div className="w-8 pb-1 mb-4 border-b border-gray-600 dark:border-gray-400" />
                <h2 className="mt-2 mb-4 text-xl font-semibold text-gray-600 dark:text-gray-300 ">
                  Bathroom Cleaning
                </h2>
                <ul className="text-sm list-disc text-gray-500 dark:text-gray-400 ml-4">
                  <li className="">
                    Complete cleaning of toilet pot, exhaust, walls, tiles etc
                  </li>
                  <li className="">
                    Complete cleaning of toilet pot, exhaust, walls, tiles etc
                  </li>
                  <li className="">
                    Complete cleaning of toilet pot, exhaust, walls, tiles etc
                  </li>
                  <li className="">
                    Complete cleaning of toilet pot, exhaust, walls, tiles etc
                  </li>
                </ul>

                <div className="flex py-4 w-full justify-between ">
                  <div className="mt-4 cursor-pointer text-primary">
                    Show more{/* */}{" "}
                    <span
                      style={{
                        borderStyle: "solid",
                        borderWidth: "0 2px 2px 0",
                        padding: 3,
                        transform: "rotate(-45deg)",
                      }}
                      className="inline-block border-primary"
                    />
                  </div>
                  <div className="group flex items-center justify-center rounded-xl  bg-orange-100 p-2 px-3 hover:bg-orange-200">
                    <Link
                      href={`/jflsjf`}
                      className="text-primary text-sm font-semibold inter "
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 mb-6 md:grid-cols-[40%,1fr] border-gray-200 rounded-md border dark:border-gray-800  gap-2">
              <div>
                <img
                  src="https://i.postimg.cc/MKrLbcmm/pexels-max-fischer-5212345.jpg"
                  alt=""
                  className="object-cover w-full rounded-md h-80 md:h-full"
                />
              </div>
              <div className="px-4 py-4 lg:px-2 ">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 ">
                  starts from <b>Rs.2222</b>
                </p>
                <div className="w-8 pb-1 mb-4 border-b border-gray-600 dark:border-gray-400" />
                <h2 className="mt-2 mb-4 text-xl font-semibold text-gray-600 dark:text-gray-300 ">
                  Sofa Cleaning
                </h2>
                <ul className="text-sm list-disc text-gray-500 dark:text-gray-400 ml-4">
                  <li className="">
                    Complete cleaning of toilet pot, exhaust, walls, tiles etc
                  </li>
                  <li className="">
                    Complete cleaning of toilet pot, exhaust, walls, tiles etc
                  </li>
                  <li className="">
                    Complete cleaning of toilet pot, exhaust, walls, tiles etc
                  </li>
                  <li className="">
                    Complete cleaning of toilet pot, exhaust, walls, tiles etc
                  </li>
                </ul>

                <div className="flex py-4 w-full justify-between ">
                  <div className="mt-4 cursor-pointer text-primary">
                    Show more{/* */}{" "}
                    <span
                      style={{
                        borderStyle: "solid",
                        borderWidth: "0 2px 2px 0",
                        padding: 3,
                        transform: "rotate(-45deg)",
                      }}
                      className="inline-block border-primary"
                    />
                  </div>
                  <div className="group flex items-center justify-center rounded-xl  bg-orange-100 p-2 px-3 hover:bg-orange-200">
                    <Link
                      href={`/jflsjf`}
                      className="text-primary text-sm font-semibold inter "
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 mb-6 md:grid-cols-[40%,1fr] border-gray-200 rounded-md border dark:border-gray-800  gap-2">
              <div>
                <img
                  src="https://i.postimg.cc/MKrLbcmm/pexels-max-fischer-5212345.jpg"
                  alt=""
                  className="object-cover w-full rounded-md h-80 md:h-full"
                />
              </div>
              <div className="px-4 py-4 lg:px-2 ">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 ">
                  starts from <b>Rs.2222</b>
                </p>
                <div className="w-8 pb-1 mb-4 border-b border-gray-600 dark:border-gray-400" />
                <h2 className="mt-2 mb-4 text-xl font-semibold text-gray-600 dark:text-gray-300 ">
                  Carpet Cleaning
                </h2>
                <ul className="text-sm list-disc text-gray-500 dark:text-gray-400 ml-4">
                  <li className="">
                    Complete cleaning of toilet pot, exhaust, walls, tiles etc
                  </li>
                  <li className="">
                    Complete cleaning of toilet pot, exhaust, walls, tiles etc
                  </li>
                  <li className="">
                    Complete cleaning of toilet pot, exhaust, walls, tiles etc
                  </li>
                  <li className="">
                    Complete cleaning of toilet pot, exhaust, walls, tiles etc
                  </li>
                </ul>

                <div className="flex py-4 w-full justify-between ">
                  <div className="mt-4 cursor-pointer text-primary">
                    Show more{/* */}{" "}
                    <span
                      style={{
                        borderStyle: "solid",
                        borderWidth: "0 2px 2px 0",
                        padding: 3,
                        transform: "rotate(-45deg)",
                      }}
                      className="inline-block border-primary"
                    />
                  </div>
                  <div className="group flex items-center justify-center rounded-xl  bg-orange-100 p-2 px-3 hover:bg-orange-200">
                    <Link
                      href={`/jflsjf`}
                      className="text-primary text-sm font-semibold inter "
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Choose />
        <div className="w-full px-4 sm:px-12 md:px-20 lg:px-32 py-8 flex flex-col gap-4 ">
          <h6 className="inter text-2xl text-primary font-semibold">
            Description
          </h6>
          <div
            className="p-6 flex flex-col gap-2 list-disc mb-2 bg-white text-sm inter"
           
          >
            {parse(category?.description)}
          </div>
        </div>
      </div>
    </>
  );
}
