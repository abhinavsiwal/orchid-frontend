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

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
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
  }, []);

  return (
    <div
      className={`w-full py-3 px-4 sm:py-4 sm:px-8 md:py-6 md:px-36 fixed top-0 transition-background duration-300 ease-in-out z-[100] ${
        scrolling ? "bg-background" : "bg-transparent"
      } flex justify-between items-center `}
    >
      <Image
        src="/assets/images/logo.png"
        height={120}
        width={120}
        alt="Orchid Company Logo"
        className="w-28 h-full"
      />
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
                  <div className="flex gap-1 w-full ">
                    <div className="flex flex-col gap-1 p-2 w-full ">
                      <p className="text-foreground opacity-70 hover:opacity-100 cursor-pointer inter whitespace-nowrap ">
                        Relocation Services
                      </p>

                      <p className="text-foreground opacity-70 hover:opacity-100 cursor-pointer inter whitespace-nowrap ">
                        Interior Design
                      </p>

                      <p className="text-foreground opacity-70 hover:opacity-100 cursor-pointer inter whitespace-nowrap ">
                        Cleaning Services
                      </p>

                      <p className="text-foreground opacity-70 hover:opacity-100 cursor-pointer inter whitespace-nowrap ">
                        Plumber Services
                      </p>

                      <p className="text-foreground opacity-70 hover:opacity-100 cursor-pointer inter whitespace-nowrap">
                        Car Rental & Taxi
                      </p>

                      <p className="text-foreground opacity-70 hover:opacity-100 cursor-pointer inter whitespace-nowrap">
                        Photography
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 p-2 w-full ">
                      <p className="text-foreground opacity-70  inter whitespace-nowrap hover:opacity-100 cursor-pointer  ">
                        Painting Service
                      </p>
                      <p className="text-foreground opacity-70 inter whitespace-nowrap hover:opacity-100 cursor-pointer">
                        Sanitization Service
                      </p>
                      <p className="text-foreground opacity-70 whitespace-nowrap inter hover:opacity-100 cursor-pointer">
                        Pest Control
                      </p>
                      <p className="text-foreground opacity-70 inter whitespace-nowrap hover:opacity-100 cursor-pointer">
                        Repair & Maintenance
                      </p>
                      <p className="text-foreground opacity-70 inter whitespace-nowrap hover:opacity-100 cursor-pointer">
                        Event Management
                      </p>
                      <p className="text-foreground opacity-70 inter whitespace-nowrap hover:opacity-100 cursor-pointer">
                        Wedding Bridal Makeup
                      </p>
                    </div>
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
      </div>
      {/* Mobile Sidebar */}
      <div className="md:hidden block">
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
              <Button>Sign up</Button>
              </DropdownMenuItem>
            </DropdownMenuGroup>
         
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
