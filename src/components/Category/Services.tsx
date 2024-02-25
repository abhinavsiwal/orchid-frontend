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
import Modal from "@mui/material/Modal";
import BookingModal from "../Common/BookingModal";

const Services = ({ id }: any) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [services, setServices] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [count, setCount] = useState(0);
  const [dataRange, setDataRange] = useState("");
  const { user } = useAppSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const getServices = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${backendUrl}/service/getServicesBySubCategory/${id}?page=${page}`
      );
      console.log(data);

      setServices(data?.services);

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
  }, [id, page]);

  return (
    <>
      {/* <Loader loading={loading} /> */}
      <section className="flex items-center py-4 bg-white font-poppins dark:bg-gray-900 ">
        <div className="justify-center flex-1 max-w-7xl px-4 py-4 mx-auto text-left lg:py-10 ">
          {services?.map((service: any) => {
            return (
              <div
                key={service?._id}
                className="grid grid-cols-1 mb-6 md:grid-cols-[40%,1fr] border-gray-200 rounded-md border dark:border-gray-800  gap-2"
              >
                <div className="w-full h-80" >
                  <Image
                    src={service?.images[0] || ""}
                    alt={service?.name}
                    height={600}
                    width={600}
                    className="object-cover w-full rounded-md h-80 md:h-full"
                  />
                </div>
                <div className="px-4 py-4 lg:px-2 ">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 ">
                    starts from <b>₹{service?.price}</b>
                  </p>
                  <div className="w-8 pb-1 mb-4 border-b border-gray-600 dark:border-gray-400" />
                  <h2 className="mt-2 mb-4 text-xl font-semibold text-gray-600 dark:text-gray-300 ">
                    {service?.name}
                  </h2>

                  <p className="text-sm list-disc w-2/3 text-gray-500 dark:text-gray-400 " dangerouslySetInnerHTML={{__html:service?.description.substring(0, 300) + "..."}} >
                    {/* {service?.description.substring(0, 300) + "..."} */}
                  </p>

                  <div className="flex py-4 w-full justify-between ">
                    <Link
                      href={`/service/${service?.slug}`}
                      className="mt-4 cursor-pointer text-primary"
                    >
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
                    </Link>
                    <div className="group flex items-center justify-center rounded-xl  bg-orange-100 p-2 px-3 hover:bg-orange-200">
                      <button
                        onClick={() => {
                          if (user) {
                            setOpen(true);
                            setSelectedService(service);
                          } else {
                            toast.error("Please Login first to Book Service");
                            router.push("/login");
                          }
                        }}
                        className="text-primary text-sm font-semibold inter "
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BookingModal service={selectedService} />
      </Modal>
    </>
  );
};

export default Services;
