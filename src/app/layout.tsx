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
import Script from "next/script";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  ("");
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Orchid Company</title>
      </head>
      <Script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDMyIGtfzovrbF-SOO9mcV3n5Xgw9kmwvI&libraries=places"
        async={true}
        //  strategy="beforeInteractive"
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
