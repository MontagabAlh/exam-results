import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from 'next/script';
const cairoFont = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: " النتائج الإمتحانية - جامعة حمص",
  description: "النتائج الإمتحانية لمختلف كليات جامعة حمص",
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
        <Script id="custom-stack-analytix" strategy="afterInteractive">
           {
             `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5362007,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
           `}
            </Script>
      </body>
    </html>
  );
}
