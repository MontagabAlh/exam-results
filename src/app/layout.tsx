import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

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
        className={`${cairoFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
