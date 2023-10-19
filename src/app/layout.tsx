import Header from "@/components/Layout/Header";
import "./globals.css";
import type { Metadata } from "next";

import ReduxProvider from "./ReduxProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

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
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
