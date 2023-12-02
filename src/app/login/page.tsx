"use client";
import React, { useState } from "react";
import { auth } from "@/utils/firebase";
import Loader from "@/components/Layout/Loader";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";
import { backendUrl } from "@/utils/axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be atleast 6 characters long"),
});

const page = () => {
  const [loading, setLoading] = useState(false);
  // const router = useRouter();
  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      setLoading(true);
      const { data } = await axios.post(`${backendUrl}/auth/googleAuth`, {
        email: user.email,
        name: user.displayName,
        authType: "google",
      });
      console.log(data);
      setLoading(false);
      toast.success("Login Successfull");
      // router.push("/");
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      toast.error(error?.response?.data?.message || "Something went wrong.");
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const payload = { ...values };
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.backendUrl}/contact/createContact`,
        payload
      );
      console.log(data);
      toast.success("Form Submitted Successfully, Will reach you soon");
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
      <Loader loading={loading} />
      <section className="relative py-4 lg:py-11 font-poppins h-screen flex">
        <div className="max-w-6xl px-1 mx-auto lg:px-6 flex ">
          <div className="flex flex-wrap items-center ">
            <div className="w-full lg:w-2/5">
              <div className="bg-white shadow-lg dark:bg-gray-900 p-11 ">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full"
                  >
                    <div className="text-center mb-7">
                      <span className="inline-block mb-3 font-semibold text-base text-orange-500">
                        Login
                      </span>
                      <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300">
                        Join our community
                      </h2>
                    </div>
                    <div className="w-full flex flex-wrap mb-5">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email*</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter Your Email"
                                type="email"
                                className="w-full"
                                {...field}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="w-full flex flex-wrap mb-5">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password*</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter Your Password"
                                type="password"
                                className="w-full"
                                {...field}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <button
                      className="w-full px-4 py-4 mb-4 font-semibold text-base text-gray-200 bg-orange-500 rounded dark:bg-orange-500 hover:text-orange-200 "
                      type="submit"
                    >
                      LOGIN
                    </button>
                  </form>
                </Form>
                <div className="mb-4 text-center">
                  <a
                    href="#"
                    className="text-sm font-semibold text-orange-700 hover:underline dark:text-orange-300 dark:hover:text-orange-500"
                  >
                    forgot password?
                  </a>
                </div>

                <div
                  onClick={googleSignIn}
                  className="flex cursor-pointer items-center justify-center py-4 border border-orange-400 dark:border-gray-600 hover:bg-orange-200 dark:hover:bg-gray-800"
                >
                  <span className="inline-block mr-4 text-orange-800 dark:text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="bi bi-google"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                  </span>
                  <span className="text-xs font-bold text-orange-800 lg:text-sm dark:text-gray-400 ">
                    Login with Google
                  </span>
                </div>
                <p className="mt-4 text-sm text-gray-700 dark:text-gray-400">
                  {" "}
                  Need an account?{" "}
                  <a
                    href="#"
                    className="font-bold text-base text-orange-500 hover:text-orange-700 dark:text-orange-300 dark:hover:text-orange-400"
                  >
                    Create an account
                  </a>
                </p>
              </div>
            </div>
            <div className="hidden w-full px-10 mb-16 lg:w-1/2 lg:mb-0 lg:block">
              <div className="text-center">
                <span className="text-2xl font-medium text-orange-600 dark:text-orange-400">
                  Welcome
                </span>
                <h2 className="mt-3 mb-6 text-4xl font-bold text-gray-800 dark:text-gray-400">
                  Join our community with your login credentials
                </h2>
                <p className="text-lg text-gray-500 dark:text-orange-400">
                  Lorem ipsum dor amet set amirospis{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
