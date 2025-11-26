import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { Toaster } from "react-hot-toast";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Coursify",
  description: "A course selling platform",
};

export default function RootLayout({ children }) {
  return (
      <ClerkProvider>
    <html lang="en">
      <body  cz-shortcut-listen="true"
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 `}
      >
        <Navbar/>
        <div className="min-h-[80vh] w-11/12 mx-auto">
           {children}
        </div>
        <Footer/>
      </body>
    </html>
    <Toaster/>
    </ClerkProvider>
  );
}





