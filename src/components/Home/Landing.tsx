import React from "react";
import Image from "next/image";
const Landing = () => {
  return (
    <div className="w-full h-screen  flex items-center justify-center">
      <div className="image-wrap absolute h-screen -z-10 h-sc">
        <Image
          src="/assets/images/bg-home.jpg"
          alt="home"
          width={1200}
          height={1200}
        />
      </div>
      <div className="w-full flex items-center justify-center flex-col gap-8 px-36">
        <h6 className="text-secondary inter text-7xl font-bold ">
          Hire{" "}
          <span className="text-primary font-extrabold underline">Experts</span>{" "}
          & Get Your Job Done
        </h6>
        <div className="w-full p-8 rounded-lg shadow bg-background  gap-8 items-center grid grid-cols-3"></div>
      </div>
    </div>
  );
};

export default Landing;
