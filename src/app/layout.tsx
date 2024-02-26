import Header from "@/components/Layout/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "./ReduxProvider";
import Footer from "@/components/Layout/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import NextTopLoader from "nextjs-toploader";
import Widgets from "@/components/Layout/Widgets";
import Script from 'next/script'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC1Cz13aBYAbBYJL0oABZ8KZnd7imiWwA4&libraries=places"
       async={true}
       strategy="beforeInteractive"
       
      />
      
      <body className="w-full">
        {/* <NextTopLoader 
        color="#f97215"
        showSpinner={false}
        speed={1000}
      /> */}
        <ReduxProvider>
          <Toaster />
          <Header />
          <Suspense fallback={<Loading />} />
          {children}
          <Widgets />
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
