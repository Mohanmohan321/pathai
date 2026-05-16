import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Footer from "@/components/Footer";

const VideoSection = dynamic(() => import("@/components/VideoSection"));
const WhyAI = dynamic(() => import("@/components/WhyAI"));
const PainPoints = dynamic(() => import("@/components/PainPoints"));
const WhyDifferent = dynamic(() => import("@/components/WhyDifferent"));
const WhatBuild = dynamic(() => import("@/components/WhatBuild"));
const Venue = dynamic(() => import("@/components/Venue"));
const TrustSafety = dynamic(() => import("@/components/TrustSafety"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const FAQ = dynamic(() => import("@/components/FAQ"));

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <VideoSection />
        <WhyAI />
        <PainPoints />
        <WhyDifferent />
        <WhatBuild />
        <Venue />
        <TrustSafety />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
