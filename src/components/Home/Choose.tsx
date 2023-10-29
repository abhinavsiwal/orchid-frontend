import React from "react";
import GroupIcon from "@mui/icons-material/Group";
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import Image from "next/image";
const Choose = () => {
  return (
    <div className="w-full px-4 sm:px-12 md:px-20 lg:px-32 py-8 ">
      <div className="bg-primary rounded-3xl p-6 sm:p-12 grid grid-cols-1 md:grid-cols-2  ">
        <div className="flex flex-col  md:items-start items-center gap-4 ">
          <h6 className="spartan text-lg md:text-xl text-blue uppercase tracking-widest font-medium">
            Blogs
          </h6>
          <h4 className="font-bold text-3xl md:text-4xl text-white inter tracking-wide ">
            Why Choose Us
          </h4>
          <p className="text-white md:text-start text-center inter break-words text-lg font-light ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            usmod <br />
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="w-full flex flex-col gap-8 pt-8">
            <div className="flex w-full gap-6 ">
              <div className="rounded-2xl bg-white p-6 h-fit ">
                <GroupIcon className="text-primary text-5xl icon-effect overflow-hidden " />
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="text-blue font-semibold text-lg inter">
                  Meet New Customers
                </h6>
                <p className="text-white inter font-medium ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex w-full gap-6 ">
              <div className="rounded-2xl bg-white p-6 h-fit ">
                <QueryStatsIcon className="text-primary text-5xl icon-effect overflow-hidden " />
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="text-blue font-semibold text-lg inter">
                  Meet New Customers
                </h6>
                <p className="text-white inter font-medium ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex w-full gap-6 ">
              <div className="rounded-2xl bg-white p-6 h-fit ">
                <SettingsAccessibilityIcon className="text-primary text-5xl icon-effect overflow-hidden " />
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="text-blue font-semibold text-lg inter">
                  Meet New Customers
                </h6>
                <p className="text-white inter font-medium ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex  items-center justify-center  ">
          <div className="aon-why-choose2-line w-full">
            <div className="aon-why-choose2-pic"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
