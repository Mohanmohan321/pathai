import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import VideoSection from "@/components/VideoSection";
import WhyAI from "@/components/WhyAI";
import PainPoints from "@/components/PainPoints";
import WhyDifferent from "@/components/WhyDifferent";
import WhatBuild from "@/components/WhatBuild";
import Curriculum from "@/components/Curriculum";
import Tools from "@/components/Tools";
import TrustSafety from "@/components/TrustSafety";
import Assessment from "@/components/Assessment";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

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
        <Curriculum />
        <Tools />
        <TrustSafety />
        <Assessment />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
