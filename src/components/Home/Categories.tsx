

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useAppSelector } from "@/store/redux-hooks";

const Categories = () => {
  const [swiperInstance, setSwiperInstance] = useState(null as any);
  const { services } = useAppSelector((state) => state.services);
  console.log(services);

  return (
    <div className="w-full px-8 sm:px-12 md:px-20 lg:px-32 py-16 flex flex-col gap-12">
      <div className="w-full  flex md:flex-row flex-col justify-between gap-2 ">
        <div className="flex flex-col md:items-start items-center gap-4">
          <h6 className="spartan text-lg md:text-xl text-blue uppercase tracking-widest font-medium">
            Services
          </h6>
          <h4 className="font-bold text-3xl md:text-4xl text-primary md:text-start text-center inter tracking-wide ">
            Popular Categories
          </h4>
        </div>
        <p className="text-gray-400 inter break-words md:text-start text-center  text-md md:text-lg font-light ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod{" "}
          <br />
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="w-full">
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          onSwiper={(swiper: any) => setSwiperInstance(swiper)}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
            240: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
        >
          {services?.map((service) => {
            return (
              <SwiperSlide key={service?._id} >
              <div className="w-full flex flex-col items-center gap-2  ">
                <div className="hover-effect relative flex items-center justify-center w-full ">
                  <Image
                    src={service?.image}
                    width={600}
                    height={600}
                    alt={service?.name}
                    className="rounded-3xl cursor-pointer   "
                  />
                </div>
  
                <p className="text-center text-blue font-semibold text-lg inter">
                {service?.name}
                </p>
              </div>
            </SwiperSlide>
           
            )
          })}
        
        </Swiper>
      </div>
      <div className="w-full flex justify-center gap-4">
        <ArrowBackIcon
          className="text-primary cursor-pointer text-3xl "
          onClick={() => swiperInstance.slidePrev()}
        />
        <ArrowForwardIcon
          className="text-primary cursor-pointer text-3xl "
          onClick={() => swiperInstance.slideNext()}
        />
      </div>
    </div>
  );
};

export default Categories;
