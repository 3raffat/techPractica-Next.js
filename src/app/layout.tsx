import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow bg-gray-100">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
