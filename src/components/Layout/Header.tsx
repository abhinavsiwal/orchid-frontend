"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";
import Contact from "../Common/Contact";

// import { cities } from "@/utils/cities";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import axios from "axios";
import { callAxios } from "@/utils/axios";
import { useAppDispatch } from "@/store/redux-hooks";
import { setServices as setServices1 } from "@/store/slices/services";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const formSchema: any = z.object({
  name: z
    .string()
    .min(3, "Name must be atleast 3 characters long")
    .max(50, "Name must be less than 50 characters long"),
  phone: z.number().refine(
    (phoneNumber) => {
      const phonePattern = /^(\d{10}|\d{4}[-\s]?\d{3}[-\s]?\d{3})$/;
      return phonePattern.test(phoneNumber.toString());
    },
    {
      message:
        "Invalid phone number format. Use (123) 456-7890, 123-456-7890, or 123.456.7890",
    }
  ),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be atleast 10 characters long"),
  city: z.string().min(3, "City must be atleast 3 characters long"),
  service: z.string(),
});

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [services, setServices] = useState([] as any);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  console.log(pathname);
  const handleScroll = () => {

    if (pathname !== "/") {
      setScrolling(true);
      return;
    } 

    if (window.scrollY > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }

   
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    
    if(pathname === "/") {
      setScrolling(false)
    } else {
      setScrolling(true)
    }

  }, [pathname]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: undefined,
      email: "",
      city: "",
      message: "",
      service: "",
    },
  });

  const getServices = async () => {
    try {
      const { data } = await callAxios("get", "services/getAllServices");
      console.log(data);
      setServices(data.services);
      dispatch(setServices1(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
 
    console.log(values);
  }

  return (
    <div
      className={`w-full py-3 px-4 sm:py-4 sm:px-8 md:py-6 md:px-36 fixed top-0 transition-background duration-300 ease-in-out z-[100] ${
        scrolling ? "bg-background" : "bg-transparent"
      } flex justify-between items-center `}
    >
      <Link href="/">
        <Image
          src="/assets/images/logo.png"
          height={120}
          width={120}
          alt="Orchid Company Logo"
          className="w-28 h-full"
        />
      </Link>
      <div className="gap-6 items-center hidden md:flex">
        <p
          className={` ${
            scrolling ? "text-foreground opacity-60" : "text-white"
          }  spartan font-medium  text-lg cursor-pointer`}
        >
          Home
        </p>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={` ${
                  scrolling ? "text-foreground opacity-60" : "text-white"
                }  spartan font-medium  text-lg cursor-pointer bg-transparent`}
              >
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <div className="w-full flex flex-col gap-2 p-2 ">
                    {services?.map((service: any) => {
                      return (
                        <Link
                          href={`/service/${service?._id}`}
                          key={service?._id}
                        >
                          <p
                            key={service?._id}
                            className=" w-full text-foreground opacity-70 hover:opacity-100 cursor-pointer inter whitespace-nowrap "
                          >
                            {service?.name}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <p
          className={` ${
            scrolling ? "text-foreground opacity-60" : "text-white"
          }  spartan font-medium  text-lg cursor-pointer`}
        >
          About
        </p>
        <p
          className={` ${
            scrolling ? "text-foreground opacity-60" : "text-white"
          }  spartan font-medium  text-lg cursor-pointer`}
        >
          Blog
        </p>
        <p
          className={` ${
            scrolling ? "text-foreground opacity-60" : "text-white"
          }  spartan font-medium  text-lg cursor-pointer`}
        >
          Contact
        </p>
        <Button>Sign up</Button>
        <Contact />
      </div>
      {/* Mobile Sidebar */}
      <div className="md:hidden block">
        <Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <MenuIcon
                className={` ${
                  scrolling ? "text-foreground opacity-60" : "text-white"
                }  text-3xl cursor-pointer`}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
              <DropdownMenuGroup>
                <DropdownMenuItem>Home</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Services</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Relocation Services</DropdownMenuItem>
                      <DropdownMenuItem>Painting Service</DropdownMenuItem>
                      <DropdownMenuItem>Interior Design</DropdownMenuItem>
                      <DropdownMenuItem>Sanitization Service</DropdownMenuItem>
                      <DropdownMenuItem>Cleaning Services</DropdownMenuItem>
                      <DropdownMenuItem>Pest Control</DropdownMenuItem>
                      <DropdownMenuItem>Plumber Services</DropdownMenuItem>
                      <DropdownMenuItem>Repair & Maintenance</DropdownMenuItem>
                      <DropdownMenuItem>Car Rental & Taxi</DropdownMenuItem>
                      <DropdownMenuItem>Event Management</DropdownMenuItem>
                      <DropdownMenuItem>Photography</DropdownMenuItem>
                      <DropdownMenuItem>Wedding Bridal Makeup</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>About</DropdownMenuItem>
                <DropdownMenuItem>Blog</DropdownMenuItem>
                <DropdownMenuItem>Contact</DropdownMenuItem>
                <DropdownMenuItem>
                  <Button className="w-full">Sign up</Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <DialogTrigger asChild>
                    <Button variant="secondary" className="md:w-fit w-full">
                      Contact Us
                    </Button>
                  </DialogTrigger>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle className="text-primary text-2xl inter font-semibold ">
                Contact Us
              </DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2 .flex w-full flex-col"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name*</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Your Name" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email*</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Your Email" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone*</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Your Phone" type="number" {...field} />
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
                      <FormLabel>City*</FormLabel>
                      <FormControl>
                        <Select {...field}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select your City" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Delhi">Delhi</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service*</FormLabel>
                      <FormControl>
                        <Select {...field}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Painting">Painting</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message*</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter Your Message" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Header;
