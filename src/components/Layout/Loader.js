"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const Loading = dynamic(() => import("react-fullscreen-loading"), {
  ssr: false,
});

const Loader = ({ loading }) => {
  return <Loading loading={loading} background="#fff" loaderColor="#f97215" />;
};

export default Loader;
