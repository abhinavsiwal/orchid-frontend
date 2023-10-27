import React from "react";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
const Works = () => {
  return (
    <div className="w-full px-32 py-16 flex flex-col gap-20">
      {/* Heading */}
      <div className="w-full flex justify-between">
        <div className="flex flex-col gap-4">
          <h6 className="spartan text-xl text-blue uppercase tracking-widest font-medium">
            Steps
          </h6>
          <h4 className="font-bold text-4xl text-primary inter tracking-wide ">
            How it Works
          </h4>
        </div>
        <p className="text-gray-400 inter break-words text-lg font-light ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod{" "}
          <br />
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="w-full grid grid-cols-3">
        <div className="flex flex-col items-center justify-center gap-4  group">
            <div className="p-8 rounded-full bg-orange-100 group-hover:bg-primary cursor-pointer">
                <ArticleOutlinedIcon className="text-4xl text-primary group-hover:bg-orange-100 " />
            </div>
            <h6 className="text-blue inter text-xl inter cursor-pointer" >Describe Your Task</h6>
            <p className="text-gray-400 text-md inter text-center break-words w-60 cursor-pointer" >This helps us determine which Taskers are best for job.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4  group" >
            <div className="p-8 rounded-full bg-orange-100 group-hover:bg-primary  cursor-pointer">
                <PersonOutlineOutlinedIcon className="text-4xl text-primary group-hover:bg-orange-100" />
            </div>
            <h6 className="text-blue inter text-xl inter cursor-pointer" >Choose a Tasker</h6>
            <p className="text-gray-400 text-md inter text-center break-words w-60 cursor-pointer" >This helps us determine which Taskers are abest job.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4  group">
            <div className="p-8 rounded-full bg-orange-100 group-hover:bg-primary 00 cursor-pointer">
                <LightbulbOutlinedIcon className="text-4xl text-primary group-hover:bg-orange-100" />
            </div>
            <h6 className="text-blue inter text-xl inter cursor-pointer" >Live Smarter</h6>
            <p className="text-gray-400 text-md inter text-center break-words w-60 cursor-pointer" >This helps us determine which Taskers are best for job.</p>
        </div>
      </div>
    </div>
  );
};

export default Works;
