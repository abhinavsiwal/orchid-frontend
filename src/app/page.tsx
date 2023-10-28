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

export default function Home() {
  const dispatch  = useAppDispatch();
 
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);

      
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyC1Cz13aBYAbBYJL0oABZ8KZnd7imiWwA4`;
        axios.get(url).then((res) => {
          const address:any = parseGooglePlace(res.data.results[0]);
          console.log("address", address);
          dispatch(setLocation({
            address:address.address,
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
      <Works />
      <Stats />
    </div>
  );
}
