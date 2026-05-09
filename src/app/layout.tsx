import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PATH AI – AI Summer Camp for Young Innovators | May 15–17, 2026",
  description:
    "3-day immersive AI camp for grades 6–9. Kids build real AI projects: comics, videos & presentations. No coding needed. ₹3,999 only. Powered by SPI Edge.",
  keywords: [
    "AI camp",
    "summer camp for kids",
    "PATH AI",
    "SPI Edge",
    "AI for children",
    "grades 6-9",
    "AI literacy",
  ],
  openGraph: {
    title: "PATH AI – AI Summer Camp for Young Innovators",
    description:
      "Turn your child into an AI creator in just 3 days. Limited seats.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-white text-slate-900 antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
