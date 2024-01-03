import React from "react";
import Image from "next/image";
import Link from "next/link";
import { backendUrl } from "@/utils/axios";

const getAllServicesByCategory = async (id: string) => {
  console.log(id);

  const res = await fetch(`${backendUrl}/service/getServicesByCategory/${id}`);

  console.log(res);
  

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  console.log(data); 
 
  console.log(typeof data.services);
  
  return data.services;
};

const MoreServices = async ({ category, id }: any) => {
  console.log(category,id);
  
  const allServices = await getAllServicesByCategory(category);
  const services = allServices.filter((service: any) => service._id !== id);

  return (
    <section className="w-full flex flex-col gap-8 rounded-xl ">
      <div className="w-full  flex md:flex-row flex-col justify-between gap-2 ">
        <div className="flex flex-col md:items-start items-center gap-4">
          <h6 className="spartan text-lg md:text-xl text-blue uppercase tracking-widest font-medium">
            Services
          </h6>
          <h4 className="font-bold text-3xl md:text-4xl text-primary md:text-start text-center inter tracking-wide ">
            Similar Sevices
          </h4>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {services?.map((service: any) => {
          return (
            <div
              className="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl"
              key={service?._id}
            >
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <Image
                  src={service?.images[0]}
                  width={400}
                  height={300}
                  alt={service?.name}
                  className="w-full h-72"
                />
                <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 text-sm text-slate-400">
                    {(Math.random() * (5 - 4) + 4).toFixed(1)}
                  </span>
                </div>
              </div>
              <div className="mt-1 p-2">
                <h2 className="text-slate-700">{service?.name}</h2>
                <p className="mt-1 text-sm text-slate-400">{service?.city}</p>
                <div className="mt-3 flex items-end justify-between">
                  <p>
                    <span className="text-lg font-bold text-orange-500">
                      {service?.price}
                    </span>
                    <span className="text-sm text-slate-400">
                      /{service?.serviceType}
                    </span>
                  </p>
                  <div className="group inline-flex rounded-xl bg-orange-100 p-2 px-3 hover:bg-orange-200">
                    <Link
                      href={`/service/${service?.slug}`}
                      className="text-primary text-sm inter "
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MoreServices;
