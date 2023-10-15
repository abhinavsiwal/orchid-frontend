"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
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
      <div className="flex gap-4 items-center">
        <p
          className={`text-foreground spartan font-medium opacity-60 text-lg cursor-pointer`}
        >
          Home
        </p>
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="flex gap-1 items-center">

            <p
              className={`text-foreground spartan font-medium opacity-60 text-lg cursor-pointer`}
              >
              Categories
            </p>
            <ChevronDownIcon className="w-4 h-4 text-foreground" />
                </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex flex-col space-y-2 ">
              <p
                className={`text-foreground spartan font-semibold opacity-60 text-lg cursor-pointer`}
              >
                Categories
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
        <Button>Sign up</Button>
      </div>
    </div>
  );
};

export default Header;
