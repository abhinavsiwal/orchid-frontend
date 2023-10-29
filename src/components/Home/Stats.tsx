import React from "react";

const Stats = () => {
  const formatValue = (value: Number) => value.toFixed(0);

  return (
    <div className="w-full px-8 sm:px-12 md:px-20 lg:px-32 py-16 md:py-28 flex md:flex-row flex-col items-center justify-between gap-16 bg-primary">
      <div className="flex flex-col gap-4">
        <div className="spartan text-lg md:text-xl text-blue uppercase tracking-widest font-medium">
          Statics
        </div>
        <div className="inter text-3xl md:text-5xl font-bold text-white">
          Trusted by thousands of people all over the world
        </div>
        <p className="text-white inter font-medium">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          suscipit explicabo voluptate, iusto qui officia. Provident, accusamus.
          Eos eum perspiciatis architecto. Excepturi unde aspernatur ab
          voluptatum repudiandae dolor itaque veniam!z
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 w-full ">
        <div className="flex flex-col gap-8 w-full items-start ">
          <div className="bg-white hover-effect flex flex-col gap-1 justify-center items-center cursor-pointer  w-full py-8 ">
            <p
        
              className="text-blue font-semibold text-5xl inter"
          
            >36</p>
            <p className="text-blue text-xl ">Providers</p>
          </div>
          <div className="bg-white hover-effect flex flex-col gap-1 justify-center items-center cursor-pointer  w-full py-8 ">
            <p className="text-yellow-400 font-semibold text-5xl inter">80</p>
            <p className="text-yellow-400 text-xl ">Jobs</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full justify-end   ">
          <div className="bg-white hover-effect flex flex-col gap-1 justify-center items-center cursor-pointer  w-full py-8 ">
            <p
              className="text-green-600 font-semibold text-5xl inter"
             
            >89</p>
            <p className="text-green-600 text-xl ">Customer</p>
          </div>
          <div className="bg-white hover-effect flex flex-col gap-1 justify-center items-center cursor-pointer  w-full py-8 ">
            <p
              className="text-cyan-400 font-semibold text-5xl inter"
             
            >59</p>
            <p className="text-cyan-400 text-xl ">Categories</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
