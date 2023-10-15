
import React from "react";

const Landing = () => {
  return (
    <div className="w-full h-screen  flex items-center justify-center">
      <div className="image-wrap absolute h-screen -z-10 h-sc">
        <img src="/assets/images/bg-home.jpg" />
      </div>
      <div className="w-full flex items-center justify-center flex-col gap-8 px-36">
        <h6 className="text-secondary inter text-7xl font-bold ">
          Hire <span className="text-primary font-extrabold underline" >Experts</span> & Get Your Job Done
        </h6>
        <div className="w-full p-8 rounded-lg shadow bg-background flex gap-8 items-center ">

        </div>
      </div>
    </div>
  );
};

export default Landing;
