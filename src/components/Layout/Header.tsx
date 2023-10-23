"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@radix-ui/react-icons";
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

import { Button } from "../ui/button";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

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
      className={`w-full py-6 px-36 fixed top-0 transition-background duration-300 ease-in-out ${
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
      <div className="flex gap-6 items-center">
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
    </div>
  );
};

export default Header;
