"use client";
import React, { useState, useEffect } from "react";
import { backendUrl, strapiUrl } from "@/utils/axios";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Box, Modal, Pagination } from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";
import moment from "moment";
import { set } from "react-hook-form";

const BlogsList = () => {
  const [blogs, setBlogs] = useState([] as any);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get(
        `${strapiUrl}/api/blogs?pagination[pageSize]=10&pagination[page]=${page}&populate=*`
      );
      console.log(data);
      setBlogs(data?.data);
      setTotalPages(data?.meta?.pagination?.pageCount);

    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Something went wrong.");
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, [page]);

  return (
    <section className="flex items-center py-16 bg-white lg:py-20 font-poppins dark:bg-gray-900 ">
      <div className="justify-center flex-1 max-w-7xl px-4 py-4 mx-auto text-left lg:py-10 ">
        <div className="mb-10 text-center">
          <span className="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-orange-500 uppercase dark:text-gray-400">
            Our blog
          </span>
          <h1 className="text-3xl font-bold capitalize dark:text-white">
            {" "}
            Blog List
          </h1>
        </div>
        <div className="w-full grid grid-cols-2 gap-8">
          {blogs?.map((blog: any) => {
            return (
              <Link href={`/blog/${blog?.slug}`} className="grid grid-cols-1 mb-6 md:grid-cols-[40%,1fr] border-gray-200 rounded-md border dark:border-gray-800  gap-2">
                <div>
                  <Image
                    src={`${strapiUrl}${blog?.image?.url}`}
                    alt=""
                    className="object-cover w-full rounded-md h-80 md:h-full"
                    width={600}
                    height={600}

                  />
                </div>
                <div className="px-4 py-4 lg:px-2 ">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-600 dark:text-gray-400 "
                  >
                    {moment(blog?.published_date).format("D MMMM, YYYY")}
                  </a>
                  <div className="w-8 pb-1 mb-4 border-b border-gray-600 dark:border-gray-400" />
                  <h2 className="mt-2 mb-4 text-xl font-semibold text-gray-600 dark:text-gray-300 ">
                   {blog?.title}
                  </h2>
                  <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                   {blog?.excerpt}
                  </p>
                  {/* <div className="flex items-center ">
                    <a
                      href="#"
                      className="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="w-4 h-4 mr-1 bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                      </svg>
                      8sec read
                    </a>
                    <a
                      href="#"
                      className="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="w-4 h-4 mr-1 bi bi-chat"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"></path>
                      </svg>
                      Comments
                    </a>
                    <a
                      href="#"
                      className="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="w-4 h-4 mr-1 bi bi-archive"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"></path>
                      </svg>
                      Slider
                    </a>
                  </div> */}
                </div>
              </Link>
            );
          })}
        </div>
        <div className="w-full flex justify-end">
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
      </div>
    </section>
  );
};

export default BlogsList;
