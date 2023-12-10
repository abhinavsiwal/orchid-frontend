"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Loader from "@/components/Layout/Loader";
import LocationOn from "@mui/icons-material/LocationOn";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { callAxios } from "@/utils/axios";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAppSelector } from "@/store/redux-hooks";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  borderRadius: "12px",
  border: "1px solid #fff",
  p: 2,
  // boxShadow: 24,
  // p: 4,
};

const formSchema = z.object({
  address: z
    .string()
    .min(3, "Address must be atleast 3 characters long"),
  
  city: z.string().min(3, "City must be atleast 3 characters long"),
  pinCode: z.string().min(6, "Pincode must be atleast 6 characters long"),
  state: z
    .string()
    .min(3, "State must be atleast 3 characters long")
    .max(50, "State must be less than 50 characters long"),
});

const ServiceDetails = ({ service }: any) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { address, city, pinCode, state } = useAppSelector(
    (state) => state.location
  );

  const { user } = useAppSelector((state) => state.user);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
      city: "",
      pinCode: "",
      state: "",
    },
  });

  const handleDetect = () => {
    console.log(address, city, pinCode, state);

    form.setValue("address", address);
    form.setValue("city", city);
    form.setValue("pinCode", pinCode);
    form.setValue("state", state);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const payload = {
      address: `${values.address}, ${values.city}, ${values.state}, ${values.pinCode}`,
      service: service?._id,
      seller: service?.seller?._id,
      totalPrice: service?.price,
    };
    try {
      setLoading(true);
      const { data } = await callAxios("post", "order/createOrder", payload);
      console.log(data);

      toast.success(
        "Booking Created Successfully, Our Agent will contact you soon"
      );
      router.push("/");
      setLoading(false);
      form.reset();
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Something went wrong");
    }
  }

  return (
    <>
      <div className="w-full">
        <div className="lg:pl-20">
          <div className="mb-6 ">
            <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
              {service?.name}
            </h2>
            <p className=" text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
              <span className="text-lg text-gray-500 font-medium">
                {service?.city}
              </span>
            </p>
            <div className="flex flex-wrap items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 text-sm text-slate-400">
                {(Math.random() * (5 - 4) + 4).toFixed(1)}
              </span>
            </div>

            <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
              <span>
                ₹{service?.price}{" "}
                <span className="text-sm text-gray-400 font-medium">
                  {" "}
                  /{service?.serviceType}
                </span>
              </span>
              <span className="ml-3 text-lg font-normal text-gray-500 line-through dark:text-gray-400">
                ₹{service?.fixedPrice}
              </span>
            </p>
          </div>
          <div className="mb-6">
            <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
              Description :
            </h2>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl">
              <div className="p-3 lg:p-5 ">
                <div className="p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50">
                  <p className="text-base text-gray-600 dark:text-gray-400">
                    {service?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6 " />

          <div className="flex gap-4 mb-6">
            <button
              onClick={() => {
                if (user) {
                  setOpen(true);
                } else {
                  toast.error("Please Login first to Book Service");
                  router.push("/login");
                }
              }}
              className="w-full px-4 py-3 text-center text-white bg-orange-600 border border-transparent dark:border-gray-700 hover:border-orange-500 hover:text-orange-700 hover:bg-orange-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Loader loading={loading} />
          <div className="w-full bg-white flex flex-col gap-4 relative p-2 ">
            <div className="absolute rounded-full bg-[#F2F2F2] p-3 w-fit right-0 -top-2 ">
              <img
                src="/assets/icons/cross.svg"
                alt="close"
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>
            <div className="text-center">
              <span className="text-xl font-medium text-orange-600 dark:text-orange-400">
                Address Details
              </span>
            </div>
            <button
              onClick={handleDetect}
              className="w-full py-2 justify-center flex items-center gap-1 bg-orange-100 rounded-xl text-primary"
            >
              <LocationOn className="text-primary" />
              <p className="text-primary inter font-medium text-lg">
                Detect My Location
              </p>
            </button>
            <p className="text-gray-500 font-medium inter text-base text-center ">
              OR
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="w-full flex flex-col gap-3">
                  <h6 className="text-lg font-medium inter text-primary text-center">
                    Enter Manually
                  </h6>
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Street/Flat No/Locality</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Your Street/Flat No"
                            type="text"
                            className="w-full"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Your City"
                            type="text"
                            className="w-full"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Your State"
                            type="text"
                            className="w-full"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="pinCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pincode</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Your Pincode"
                            type="number"
                            className="w-full"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <button
                    className="w-full px-2 py-2 mb-4 font-semibold text-base text-white bg-orange-500 rounded dark:bg-orange-500 hover:text-orange-200 "
                    type="submit"
                  >
                    Book Service
                  </button>
                </div>
              </form>
            </Form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ServiceDetails;
