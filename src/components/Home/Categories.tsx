import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Categories = () => {
  const [swiperInstance, setSwiperInstance] = useState(null as any);

  return (
    <div className="w-full px-32 py-16 flex flex-col gap-12">
      <div className="w-full flex justify-between">
        <div className="flex flex-col gap-4">
          <h6 className="spartan text-xl text-blue uppercase tracking-widest font-medium">
            Categories
          </h6>
          <h4 className="font-bold text-4xl text-primary inter tracking-wide ">
            Popular Categories
          </h4>
        </div>
        <p className="text-gray-400 inter break-words text-lg font-light ">
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
        >
          <SwiperSlide>
            <div className="w-full flex flex-col items-center gap-2  ">
              <div className="hover-effect relative flex items-center justify-center w-full ">
                <Image
                  src="/assets/images/popular-categories/1.jpg"
                  width={600}
                  height={600}
                  alt="popular category  "
                  className="rounded-3xl cursor-pointer   "
                />
              </div>

              <p className="text-center text-blue font-semibold text-lg inter">
                Event Management
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex flex-col items-center gap-2  ">
              <div className="hover-effect relative flex items-center justify-center w-full ">
                <Image
                  src="/assets/images/popular-categories/1.jpg"
                  width={600}
                  height={600}
                  alt="popular category  "
                  className="rounded-3xl cursor-pointer   "
                />
              </div>

              <p className="text-center text-blue font-semibold text-lg inter">
                Event Management
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex flex-col items-center gap-2  ">
              <div className="hover-effect relative flex items-center justify-center w-full ">
                <Image
                  src="/assets/images/popular-categories/1.jpg"
                  width={600}
                  height={600}
                  alt="popular category  "
                  className="rounded-3xl cursor-pointer   "
                />
              </div>

              <p className="text-center text-blue font-semibold text-lg inter">
                Event Management
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex flex-col items-center gap-2  ">
              <div className="hover-effect relative flex items-center justify-center w-full ">
                <Image
                  src="/assets/images/popular-categories/1.jpg"
                  width={600}
                  height={600}
                  alt="popular category  "
                  className="rounded-3xl cursor-pointer   "
                />
              </div>

              <p className="text-center text-blue font-semibold text-lg inter">
                Event Management
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex flex-col items-center gap-2  ">
              <div className="hover-effect relative flex items-center justify-center w-full ">
                <Image
                  src="/assets/images/popular-categories/1.jpg"
                  width={600}
                  height={600}
                  alt="popular category  "
                  className="rounded-3xl cursor-pointer   "
                />
              </div>

              <p className="text-center text-blue font-semibold text-lg inter">
                Event Management
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex flex-col items-center gap-2  ">
              <div className="hover-effect relative flex items-center justify-center w-full ">
                <Image
                  src="/assets/images/popular-categories/1.jpg"
                  width={600}
                  height={600}
                  alt="popular category  "
                  className="rounded-3xl cursor-pointer   "
                />
              </div>

              <p className="text-center text-blue font-semibold text-lg inter">
                Event Management
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex flex-col items-center gap-2  ">
              <div className="hover-effect relative flex items-center justify-center w-full ">
                <Image
                  src="/assets/images/popular-categories/1.jpg"
                  width={600}
                  height={600}
                  alt="popular category  "
                  className="rounded-3xl cursor-pointer   "
                />
              </div>

              <p className="text-center text-blue font-semibold text-lg inter">
                Event Management
              </p>
            </div>
          </SwiperSlide>
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
