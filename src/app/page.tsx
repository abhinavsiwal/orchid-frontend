// "use client";
import Landing from "@/components/Home/Landing";

import React, { useEffect, useState } from "react";

export default function Home() {
  console.log("jjere");
  
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);

        setLocation({ latitude, longitude });
      });
    }
  }, []);

  return (
    <div className="w-full flex-flex-col gap-16 ">
      <Landing />
    </div>
  );
}
