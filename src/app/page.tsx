"use client";
import Landing from "@/components/Home/Landing";
import axios from "axios";

import React, { useEffect, useState } from "react";
import parseGooglePlace from "parse-google-place";
import { useAppDispatch } from "@/store/redux-hooks";
import { setLocation } from "@/store/slices/location";
import Categories from "@/components/Home/Categories";
import Works from "@/components/Home/Works";
import Stats from "@/components/Home/Stats";
import RecentBlogs from "@/components/Home/RecentBlogs";
import Choose from "@/components/Home/Choose";

export default function Home() {
  const dispatch  = useAppDispatch();
 
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);

      
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDMyIGtfzovrbF-SOO9mcV3n5Xgw9kmwvI`;
        axios.get(url).then((res) => {
          console.log(res.data.results[0]);
          
          const address:any = parseGooglePlace(res.data.results[0]);
          console.log("address", address);
          dispatch(setLocation({
            address:res.data.results[0]?.formatted_address,
            city:address.city,
            state:address.stateLong,
            country:address.countryLong,
            pinCode:address.zipCode,
            cordinates:{
              latitude:latitude,
              longitude:longitude
            }
          }))
        });
      });
    }
  }, []);

  return (
    <div className="w-full flex-flex-col gap-16 ">
      <Landing />
      <Categories />
      <Stats />
      <Works />
      <Choose />
      <RecentBlogs />
    </div>
  );
}
