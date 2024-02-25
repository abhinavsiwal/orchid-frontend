import ImageGallery from "@/components/Service/ImageGallery";
import MoreServices from "@/components/Service/MoreServices";
import ServiceDetails from "@/components/Service/ServiceDetails";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import { backendUrl } from "@/utils/axios";
import Reviews from "@/components/Service/Reviews";
import Faqs from "@/components/Common/Faqs";

export async function generateStaticParams() {
  const data = await fetch(`${backendUrl}/service/getAllServicesId`).then(
    (res) => res.json()
  );

  return data?.services?.map((service: any) => ({
    id: service?.slug,
  }));
}

async function getSingleService(id: string) {
  const res = await fetch(`${backendUrl}/service/getServiceBySlug/${id}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return data.service;
}

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const res = await fetch(
    `${process.env.backendUrl}/service/getServiceBySlug/${id}`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const service = data.service;

  return {
    title: service?.title,
    description: service?.metaDescription,
    // metadataBase: new URL(''),
    // alternates:{
    //   canonical:"/"
    // }
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const service = await getSingleService(params.id);

  console.log(service);

  return (
    <div className="w-full flex flex-col gap-16 md:py-8 ">
      <div className="w-full px-8 mt-20 sm:px-12 md:px-20 lg:px-32 py-16 flex flex-col gap-12 md:gap-20">
        <div className="w-full grid-cols-1  grid sm:grid-cols-2 gap-12 items-start">
          <ImageGallery images={service?.images} />
          <ServiceDetails service={service} />
        </div>
        <Reviews service={service}  />
        {service?.category?.slug && (
          <MoreServices category={service?.category?.slug} id={service?._id} />
        )}
        <Faqs faqs={service?.faqs} />
      </div>
    </div>
  );
}
