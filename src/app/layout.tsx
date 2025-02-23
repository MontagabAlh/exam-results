import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const cairoFont = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "النتائج الإمتحانية ",
  description: "النتائج الإمتحانية لكلية الطب البشري",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cairoFont.variable} antialiased font-cairo min-h-screen flex flex-col justify-between items-center bg-gray-900`}
      >
        <div className="w-full min-h-[70vh] md:min-h-[86.5vh]">
          <Header />
          <Analytics />
          {children}
        </div>
        <div className="w-full">
        <Footer />
        </div>
      </body>
    </html>
  );
}
