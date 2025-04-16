import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Home from "./page";
import Footer from "@/components/Footer";


const inte = Inter({
  variable: "--font-inte",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ocean.",
  description: "best modern crm dashboard for engineering teams",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inte.className} text-lg bg-slate-900 text-slate-400 min-h-screen`}>
        <Navbar />
        {children}
        <Home />
        <Footer />
      </body>
    </html>
  );
}
