import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PATH AI – AI Summer Camp for Young Innovators | May 18–20, 2026",
  description:
    "3-day immersive AI camp for grades 5–9. Kids build real AI projects: comics, videos & presentations. No coding needed. ₹3,999 only. Powered by SPI Edge.",
  keywords: [
    "AI camp",
    "summer camp for kids",
    "PATH AI",
    "SPI Edge",
    "AI for children",
    "grades 5-9",
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
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="bg-white text-slate-900 antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
