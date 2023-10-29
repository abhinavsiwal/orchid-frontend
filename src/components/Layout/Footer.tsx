import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-orange-100 py-12 sm:py-16 px-4 md:px-32 flex flex-col gap-12  ">
      <div className="w-full gap-4 md:px-6 py-2 flex md:flex-row flex-col justify-between border border-primary rounded-xl  items-center">
        <h5 className="text-2xl font-medium inter text-primary">
          Subscribe Our Newsletter
        </h5>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Enter your email"
            className=" w-32 xs:w-60 sm:w-80 md:w-96 h-14 rounded-l-xl border border-primary outline-none px-6"
          />
          <button className="bg-primary text-white rounded-r-xl px-2 sm:px-6 py-4">
            Subscribe
          </button>
        </div>
      </div>
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-4 gap-8 ">
        <div className="w-full flex flex-col md:items-start items-center gap-4">
            <h6 className="font-semibold text-primary text-lg inter tracking-wide" >Site Links</h6>
            <div className="flex flex-col gap-2">
                <p className="text-md inter  tracking-wide cursor-pointer ">Blog</p>
                <p className="text-md inter tracking-wide cursor-pointer">Contact Us</p>
                <p className="text-md inter tracking-wide cursor-pointer">Services</p>
                <p className="text-md inter tracking-wide cursor-pointer">Categories</p>
            </div>
        </div>
        <div className="w-full flex flex-col gap-4 md:items-start items-center">
            <h6 className="font-semibold text-primary text-lg inter tracking-wide" >Popular Cities</h6>
            <div className="flex flex-col gap-2">
                <p className="text-md inter  tracking-wide cursor-pointer ">New Delhi</p>
                <p className="text-md inter tracking-wide cursor-pointer">Noida</p>
                <p className="text-md inter tracking-wide cursor-pointer">Gurgaon</p>
                <p className="text-md inter tracking-wide cursor-pointer">Ghaziabad</p>
            </div>
        </div>
        <div className="w-full flex flex-col gap-4 md:items-start items-center">
            <h6 className="font-semibold text-primary text-lg inter tracking-wide" >Services</h6>
            <div className="flex flex-col gap-2">
                <p className="text-md inter  tracking-wide cursor-pointer ">Car Service</p>
                <p className="text-md inter tracking-wide cursor-pointer">House Cleaning</p>
                <p className="text-md inter tracking-wide cursor-pointer">Painting</p>
                <p className="text-md inter tracking-wide cursor-pointer">Salon</p>
            </div>
        </div>
        <div className="w-full flex flex-col gap-4 md:items-start items-center">
            <h6 className="font-semibold text-primary text-lg inter tracking-wide" >Contact Info</h6>
            <div className="flex flex-col gap-2">
                <p className="text-md inter  tracking-wide cursor-pointer ">New Delhi, India</p>
                <p className="text-md inter tracking-wide cursor-pointer">+91 999999999</p>
                <p className="text-md inter tracking-wide cursor-pointer">+91 999999999</p>
                <p className="text-md inter tracking-wide cursor-pointer">hello@orchidcompany.com</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
