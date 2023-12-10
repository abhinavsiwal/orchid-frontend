"use client";
import React, { useState, useEffect } from "react";

const ServiceDetails = ({ service }: any) => {
  return (
    <div className="w-full">
      <div className="lg:pl-20">
        <div className="mb-6 ">
          <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
            {service?.name}
          </h2>
          <div className="flex flex-wrap items-center mb-6">
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
          <p className=" text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
            <span className="text-lg text-gray-500 font-medium" >{service?.city}</span>
            
          </p>
          <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
            <span>₹{service?.price} <span className="text-sm text-gray-400 font-medium" > /{service?.serviceType}</span></span>
            <span className="ml-3 text-lg font-normal text-gray-500 line-through dark:text-gray-400">
            ₹{service?.fixedPrice}
            </span>
          </p>
        </div>
        <div className="mb-6">
          <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
            Description :
          </h2>
          <div className="bg-gray-100 dark:bg-gray-700 rounded-xl">
            <div className="p-3 lg:p-5 ">
              <div className="p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50">
                <p className="text-base text-gray-600 dark:text-gray-400">
                  {service?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
     
        <div className="mb-6 " />
     
        <div className="flex gap-4 mb-6">
          <a
            href="#"
            className="w-full px-4 py-3 text-center text-white bg-orange-600 border border-transparent dark:border-gray-700 hover:border-orange-500 hover:text-orange-700 hover:bg-orange-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl"
          >
           Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
