import Image from "next/image";

export async function generateStaticParams() {
  const data = await fetch(
    `${process.env.backendUrl}/services/getAllServices`
  ).then((res) => res.json());

  return data?.services?.map((service: any) => ({
    id: service._id,
  }));
}

async function getSingleServie(id: string) {
  const res = await fetch(
    `${process.env.backendUrl}/services/getSingleService/${id}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  console.log(data);

  return data;
}

export default async function Page({ params }: { params: { id: string } }) {
  console.log(params.id);

  const service = await getSingleServie(params.id);
  // console.log(service);

  return (
    <div className="w-full px-8 mt-20 sm:px-12 md:px-20 lg:px-32 py-16 flex flex-col gap-12 md:gap-20">
      <div className="w-full grid grid-cols-2 gap-12 items-center">
        <Image
          src={service?.service?.image}
          width={600}
          height={600}
          alt={service?.service?.name}
          className="rounded-3xl cursor-pointer  "
        />
        <div className="w-full flex flex-col gap-8">
          <h1 className="inter text-3xl text-primary font-semibold">
            {service?.service?.name}
          </h1>
          <div
            className="w-full text-gray-600 inter text-base "
            dangerouslySetInnerHTML={{ __html: service?.service?.description }}
          ></div>
        </div>
      </div>
    </div>
  );
}
