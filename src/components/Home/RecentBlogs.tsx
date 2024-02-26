import Image from "next/image";
import React from "react";

const RecentBlogs = () => {
  return (
    <div className="w-full px-8 sm:px-12 md:px-20 lg:px-32 py-16 flex flex-col gap-12">
      <div className="w-full flex md:flex-row flex-col justify-between gap-2">
        <div className="flex flex-col gap-4 md:items-start items-center">
          <h6 className="spartan text-xl text-blue uppercase tracking-widest font-medium">
            Blogs
          </h6>
          <h4 className="font-bold text-4xl text-primary inter tracking-wide ">
            Recent Blogs
          </h4>
        </div>
        <p className="text-gray-400 inter break-words text-lg font-light md:text-start text-center w-2/3 ">
        Stay updated with our latest insights and stories. <br /> Our blog section brings you a fresh perspective on everyday challenges, offering tips, industry news, and in-depth articles to enrich your knowledge.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="hover-effect bg-[#f8f5ff] border border-[#dddddd]  w-full flex flex-col cursor-pointer   ">
          <Image
            src="/assets/images/blog/1.jpg"
            className="rounded-[35px]"
            alt="blog-1"
            width={600}
            height={600}
          />
          <div className="flex flex-col gap-4 w-full py-8 px-6">
            <div className="flex justify-between w-full items-center ">
              <p className="text-blue spartan text-lg">Latest</p>
              <p className="text-blue spartan text-lg">By | Admin</p>
            </div>
            <hr className="border border-[#ddd]" />
            <div className="flex flex-col gap-4">
              <h6 className="font-semibold inter text-xl text-blue ">
                Helping Companies in their Green.
              </h6>
              <p className="text-gray-400 inter text-md tracking-wide">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
                numquam qui officia labore dolorem.
              </p>
            </div>
          </div>
        </div>
        <div className="hover-effect bg-[#f8f5ff] border border-[#dddddd]  w-full flex flex-col cursor-pointer   ">
          <Image
            src="/assets/images/blog/2.jpg"
            className="rounded-[35px]"
            alt="blog-1"
            width={600}
            height={600}
          />
          <div className="flex flex-col gap-4 w-full py-8 px-6">
            <div className="flex justify-between w-full items-center ">
              <p className="text-blue spartan text-lg">Latest</p>
              <p className="text-blue spartan text-lg">By | Admin</p>
            </div>
            <hr className="border border-[#ddd]" />
            <div className="flex flex-col gap-4">
              <h6 className="font-semibold inter text-xl text-blue ">
                Helping Companies in their Green.
              </h6>
              <p className="text-gray-400 inter text-md tracking-wide">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
                numquam qui officia labore dolorem.
              </p>
            </div>
          </div>
        </div>
        <div className="hover-effect bg-[#f8f5ff] border border-[#dddddd] cursor-pointer  w-full flex flex-col   ">
          <Image
            src="/assets/images/blog/3.jpg"
            className="rounded-[35px]"
            alt="blog-1"
            width={600}
            height={600}
          />
          <div className="flex flex-col gap-4 w-full py-8 px-6">
            <div className="flex justify-between w-full items-center ">
              <p className="text-blue spartan text-lg">Latest</p>
              <p className="text-blue spartan text-lg">By | Admin</p>
            </div>
            <hr className="border border-[#ddd]" />
            <div className="flex flex-col gap-4">
              <h6 className="font-semibold inter text-xl text-blue ">
                Helping Companies in their Green.
              </h6>
              <p className="text-gray-400 inter text-md tracking-wide">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
                numquam qui officia labore dolorem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;
