import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Nuance For Portfolio",
  description: "Nuance for Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased bg-black text-white font-sans"
        style={{ fontFamily: "Arial, Montserrat" }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
