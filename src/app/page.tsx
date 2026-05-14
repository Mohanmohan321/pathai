import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import VideoSection from "@/components/VideoSection";
import WhyAI from "@/components/WhyAI";
import PainPoints from "@/components/PainPoints";
import WhyDifferent from "@/components/WhyDifferent";
import WhatBuild from "@/components/WhatBuild";
import Venue from "@/components/Venue";
import TrustSafety from "@/components/TrustSafety";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
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
