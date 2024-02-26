import React from "react";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
const Works = () => {
  return (
    <div className="w-full px-8 sm:px-12 md:px-20 lg:px-32 py-16 flex flex-col gap-12 md:gap-20">
      {/* Heading */}
      <div className="w-full  flex md:flex-row flex-col justify-between gap-2">
        <div className="flex flex-col md:items-start items-center gap-4">
          <h6 className="spartan text-xl text-blue uppercase tracking-widest font-medium">
            Steps
          </h6>
          <h4 className="font-bold text-4xl text-primary inter tracking-wide ">
            How it Works
          </h4>
        </div>
        <p className="text-gray-400 inter break-words md:text-start text-center  text-md md:text-lg font-light ">
        Getting our services is a breeze, just like counting 1, 2, 3. <br /> Simply stick to these easy-peasy steps
        </p>
      </div>
      <div className="w-full grid grid-cols-1 gap-12 md:grid-cols-3">
        <div className="flex flex-col items-center justify-center gap-4  group">
            <div className="p-8 rounded-full bg-orange-100 group-hover:bg-primary cursor-pointer">
                <ArticleOutlinedIcon className="text-4xl text-primary group-hover:bg-orange-100 " />
            </div>
            <h6 className="text-blue inter text-xl inter cursor-pointer" >Task Detailing</h6>
            <p className="text-gray-400 text-md inter text-center break-words w-60 cursor-pointer" >Share the service you're looking for, the timeframe, and the location, along with any extra specifics you've planned.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4  group" >
            <div className="p-8 rounded-full bg-orange-100 group-hover:bg-primary  cursor-pointer">
                <PersonOutlineOutlinedIcon className="text-4xl text-primary group-hover:bg-orange-100" />
            </div>
            <h6 className="text-blue inter text-xl inter cursor-pointer" >Tasker Selection</h6>
            <p className="text-gray-400 text-md inter text-center break-words w-60 cursor-pointer" >According to their reviews, ratings, availability, and cost, we'll hook you up with a tasker who meets your needs.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4  group">
            <div className="p-8 rounded-full bg-orange-100 group-hover:bg-primary 00 cursor-pointer">
                <LightbulbOutlinedIcon className="text-4xl text-primary group-hover:bg-orange-100" />
            </div>
            <h6 className="text-blue inter text-xl inter cursor-pointer" >Relax and Enjoy</h6>
            <p className="text-gray-400 text-md inter text-center break-words w-60 cursor-pointer" >Your professional tasker will get things done efficiently while you sit back. Plus, you can check your task's status online. </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
