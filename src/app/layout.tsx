
import Header from "@/components/Layout/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "./ReduxProvider";
import Footer from "@/components/Layout/Footer";
import { Suspense } from "react";
import Loading from "./loading";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC1Cz13aBYAbBYJL0oABZ8KZnd7imiWwA4&libraries=places" async> </script>
      <body className="w-full">
        <ReduxProvider>
          <Toaster />
          <Header />
          <Suspense fallback={<Loading />} />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
