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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

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
import { useAppDispatch, useAppSelector } from "@/store/redux-hooks";
import { setCategories as setCategories1 } from "@/store/slices/categories";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { logout } from "@/store/slices/user";
import { useRouter } from "next/navigation";
import { Tooltip } from "@mui/material";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be atleast 3 characters long")
    .max(50, "Name must be less than 50 characters long"),
  phone: z.string().refine(
    (phoneNumber) => {
      const phonePattern = /^(\d{10}|\d{4}[-\s]?\d{3}[-\s]?\d{3})$/;
      return phonePattern.test(phoneNumber.toString());
    },
    {
      message: "Please enter a valid phone number",
    }
  ),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be atleast 10 characters long"),
  // city: z.string().min(3, "City must be atleast 3 characters long"),
  category: z.string().min(3, "Please select a category"),
});

const Header = () => {
  const router = useRouter();
  const [scrolling, setScrolling] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  const { address } = useAppSelector((state) => state.location);
  const [categories, setCategories] = useState([] as any);
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [userDetails, setUserDetails] = useState(null as any);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (user) {
      setUserDetails(user);
    }
  }, [user]);

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
    if (pathname === "/") {
      setScrolling(false);
    } else {
      setScrolling(true);
    }
  }, [pathname]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: undefined,
      email: "",
      message: "",
      category: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const payload = { ...values, address };
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

  const getServices = async () => {
    try {
      const { data } = await callAxios("get", "category/getAllCategories");
      console.log(data);
      setCategories(data.categories);
      dispatch(setCategories1(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  if (pathname === "/login" || pathname === "/signup") return null;

  const handleLogout = () => {
    console.log("here");
    dispatch(logout());
    setUserDetails(null);
  };

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
        <Link href="/">
          <p
            className={` ${
              scrolling ? "text-foreground opacity-60" : "text-white"
            }  spartan font-medium  text-lg cursor-pointer`}
          >
            Home
          </p>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={` ${
                  scrolling ? "text-foreground opacity-60" : "text-white"
                }  spartan font-medium  text-lg cursor-pointer bg-transparent`}
              >
                Categories
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <div className="w-full flex flex-col gap-2 p-2 ">
                    {categories?.map((category: any) => {
                      return (
                        <Link
                          href={`/category/${category?.slug}`}
                          key={category?._id}
                        >
                          <p
                            key={category?._id}
                            className=" w-full text-foreground opacity-70 hover:opacity-100 cursor-pointer inter whitespace-nowrap "
                          >
                            {category?.name}
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
        <Link href="/about-us">
          <p
            className={` ${
              scrolling ? "text-foreground opacity-60" : "text-white"
            }  spartan font-medium  text-lg cursor-pointer`}
          >
            About
          </p>
        </Link>
        <Link href="/blogs">
          <p
            className={` ${
              scrolling ? "text-foreground opacity-60" : "text-white"
            }  spartan font-medium  text-lg cursor-pointer`}
          >
            Blog
          </p>
        </Link>

        <Contact />
        {userDetails ? (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={` w-full flex flex-col gap-1 ${
                    scrolling ? "text-foreground opacity-60" : "text-white"
                  }  spartan font-medium  text-sm cursor-pointer bg-transparent`}
                >
                  <p className="">Hi,{userDetails?.name}</p>
                  <p className="">{userDetails?.email}</p>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>
                    <div className="w-full flex flex-col py-2 px-3 gap-3 items-center justify-center ">
                      <div className="w-full flex gap-4 items-center cursor-pointer ">
                        <Settings fontSize="small" />
                        <p className="text-base inter ">Settings</p>
                      </div>

                      <div
                        className="w-full flex gap-4 items-center cursor-pointer "
                        onClick={handleLogout}
                      >
                        <Logout fontSize="small" />
                        <p className="text-base inter ">Logout</p>
                      </div>
                    </div>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ) : (
          <Button>
            <Link href="/login">Login</Link>
          </Button>
        )}
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
                <Link href="/">
                  <DropdownMenuItem>Home</DropdownMenuItem>
                </Link>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Categories</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="w-48">
                      {categories?.map((category: any) => {
                        return (
                          <Link
                            href={`/category/${category?.slug}`}
                            key={category?._id}
                          >
                            <DropdownMenuItem>
                              {category?.name}
                            </DropdownMenuItem>
                          </Link>
                        );
                      })}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <Link href="/about-us">
                  <DropdownMenuItem>About</DropdownMenuItem>
                </Link>
                <Link href="/blogs">
                  <DropdownMenuItem>Blog</DropdownMenuItem>
                </Link>

                <DropdownMenuItem>
                  <Button className="w-full">
                    <Link href="/login">Login</Link>
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem></DropdownMenuItem>
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
                        <Input
                          placeholder="Enter Your Phone"
                          type="number"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category*</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          {...field}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories?.map((category: any) => {
                              return (
                                <SelectItem
                                  value={category?._id}
                                  key={category?._id}
                                >
                                  {category?.name}
                                </SelectItem>
                              );
                            })}
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
