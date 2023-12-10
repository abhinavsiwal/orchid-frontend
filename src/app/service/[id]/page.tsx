import ImageGallery from "@/components/Service/ImageGallery";
import ServiceDetails from "@/components/Service/ServiceDetails";
import Image from "next/image";

export async function generateStaticParams() {
  const data = await fetch(
    `${process.env.backendUrl}/service/getAllServicesId`
  ).then((res) => res.json());

  return data?.services?.map((service: any) => ({
    id: service._id,
  }));
}

async function getSingleService(id: string) {
  const res = await fetch(
    `${process.env.backendUrl}/service/getServiceById/${id}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return data.service;
}

export default async function Page({ params }: { params: { id: string } }) {
  const service = await getSingleService(params.id);

  return (
    <div className="w-full flex flex-col gap-16 md:py-8 ">
      <div className="w-full px-8 mt-20 sm:px-12 md:px-20 lg:px-32 py-16 flex flex-col gap-12 md:gap-20">
        <div className="w-full grid-cols-1  grid sm:grid-cols-2 gap-12 items-start">
          <ImageGallery images={service?.images} />
          <ServiceDetails service={service} />
        </div>
      </div>
    </div>
  );
}
