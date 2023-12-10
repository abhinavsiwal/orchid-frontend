"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ImageGallery = ({ images }: any) => {
  const [swiperInstance, setSwiperInstance] = useState(null as any);

  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="w-full flex flex-col gap-6 items-center justify-center">
      <div className="w-full flex gap-4 items-center justify-between">
        <ArrowBackIcon
          className="text-primary cursor-pointer text-3xl "
          onClick={() => swiperInstance.slidePrev()}
        />
        <Image
          src={selected}
          className="w-full h-80 rounded"
          width={600}
          height={600}
          alt="image"
        />
        <ArrowForwardIcon
          className="text-primary cursor-pointer text-3xl "
          onClick={() => swiperInstance.slideNext()}
        />
      </div>
      <div className="w-full flex justify-center ">
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          className="w-full flex justify-center"
          onSwiper={(swiper: any) => setSwiperInstance(swiper)}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            240: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
        >
          {images?.map((image: any) => {
            return (
              <SwiperSlide key={image}>
                <Image
                  src={image}
                  onClick={() => setSelected(image)}
                  width={400}
                  height={400}
                  alt="Product Image"
                  className="rounded cursor-pointer w-60 h-40   "
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageGallery;
