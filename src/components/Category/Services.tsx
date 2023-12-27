"use client";

import React, { useState, useEffect } from "react";
import Loader from "@/components/Layout/Loader";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { backendUrl } from "@/utils/axios";
import Pagination from "@mui/material/Pagination";
import Image from "next/image";
import { useAppSelector } from "@/store/redux-hooks";
import Link from "next/link";

const Services = ({ id }: any) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [services, setServices] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [count, setCount] = useState(0);
  const [dataRange, setDataRange] = useState("");
  const { user } = useAppSelector((state) => state.user);

  const getServices = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${backendUrl}/service/getServicesByCategory/${id}?page=${page}`
      );
      console.log(data);

      setServices(data?.services);
      setTotalPages(data?.totalPages);
      setDataRange(
        "Showing" +
          (data?.currentPage * 10 - 9) +
          "-" +
          data?.currentPage * 10 +
          " of " +
          data?.totalCount
      );
      setPage(data?.currentPage);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      toast.error(error?.response?.data?.message || "Something went wrong.");
    }
  };

  useEffect(() => {
    if (id) {
      getServices();
    }
  }, [id]);

  return (
    <>
      {/* <Loader loading={loading} /> */}
      <section className="w-full flex flex-col gap-8 px-8 sm:px-12 md:px-20">
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
        {services?.length > 0 && (
          <div className="w-full flex justify-between items-center">
            <p className="inter font-medium text-primary text-lg">
              {dataRange}
            </p>
            <Pagination
              count={totalPages}
              variant="outlined"
              shape="rounded"
              color="primary"
              sx={{
                "& .MuiPaginationItem-root": { color: "#f97215" },
                "& .Mui-selected": {
                  backgroundColor: "#f97215",
                  color: "#fff",
                },
                "& .MuiPaginationItem-root:hover": {
                  backgroundColor: "#f97215",
                  color: "#fff",
                  border: "none",
                },
              }}
              onChange={(e, value) => setPage(value)}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default Services;
