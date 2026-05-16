"use client";

import { useState, useEffect } from "react";
import { m, useMotionValue, useMotionTemplate, useAnimationFrame } from "framer-motion";
import Image from "next/image";

const GRID_SIZE = 40;

function GridPattern({ offsetX, offsetY }: { offsetX: any; offsetY: any }) {
  return (
    <svg className="w-full h-full">
      <defs>
        <m.pattern
          id="hero-grid"
          width={GRID_SIZE}
          height={GRID_SIZE}
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d={`M ${GRID_SIZE} 0 L 0 0 0 ${GRID_SIZE}`}
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="0.8"
          />
        </m.pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-grid)" />
    </svg>
  );
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);
  return isDesktop;
}

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function calculate() {
      const diff = target.getTime() - new Date().getTime();
      if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }
    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, [target]);

  return timeLeft;
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-sm border border-slate-100 min-w-[58px] sm:min-w-[68px]">
      <span className="text-2xl sm:text-3xl font-bold text-sky-500 tabular-nums leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] sm:text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const campStart = new Date("2026-05-18T09:00:00+05:30");
  const timeLeft = useCountdown(campStart);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);
  const d = isDesktop ? 1 : 0; // duration multiplier — 0 makes all animations instant on mobile

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);
  useAnimationFrame(() => {
    if (!isDesktop) return;
    gridOffsetX.set((gridOffsetX.get() + 0.3) % GRID_SIZE);
    gridOffsetY.set((gridOffsetY.get() + 0.3) % GRID_SIZE);
  });

  const mouseX = useMotionValue(-600);
  const mouseY = useMotionValue(-600);
  const maskImage = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden bg-white pt-16"
      onMouseMove={handleMouseMove}
    >
      {/* Grid Layer 1 — desktop only (animated SVG is expensive on mobile) */}
      {isDesktop && (
        <div className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none">
          <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
        </div>
      )}

      {/* Grid Layer 2 — vivid flashlight on hover, desktop only */}
      {isDesktop && (
        <m.div
          className="absolute inset-0 z-0 opacity-50 pointer-events-none"
          style={{ maskImage, WebkitMaskImage: maskImage }}
        >
          <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
        </m.div>
      )}

      {/* Colour orbs — desktop only, large blurs are expensive on mobile GPU */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="hidden sm:block absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-sky-200 opacity-40 blur-[130px]" />
        <div className="hidden sm:block absolute top-10 -right-32 w-[500px] h-[500px] rounded-full bg-amber-100 opacity-50 blur-[110px]" />
        <div className="hidden sm:block absolute bottom-1/4 right-1/4 w-[280px] h-[280px] rounded-full bg-orange-200 opacity-40 blur-[80px]" />
      </div>

      {/* Main content — z-10 keeps it above grid/orbs */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-8 sm:py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* LEFT: Text — always first on mobile */}
            <div className="text-center lg:text-left order-1">

              {/* Headline */}
              <m.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 * d, delay: 0.1 * d }}
                className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-4"
              >
                Turn Your Child Into an{" "}
                <span className="text-gradient">AI Creator</span>{" "}
                in Just{" "}
                <span className="relative inline-block">
                  3 Days
                  <m.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6 * d, delay: 0.8 * d }}
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full origin-left"
                  />
                </span>
              </m.h1>

              {/* Sub-copy */}
              <m.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 * d, delay: 0.2 * d }}
                className="text-base sm:text-lg text-slate-600 leading-relaxed mb-5 max-w-lg mx-auto lg:mx-0"
              >
                Kids in grades 5-9 (ages 10-14) build comics, videos &amp; presentations with real AI tools -
                and walk away with a portfolio they&apos;re proud of.
              </m.p>

              {/* Date + batch pill */}
              <m.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 * d, delay: 0.25 * d }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mb-7"
              >
                <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                May 18-20, 2026 &nbsp;·&nbsp; 9 AM - 1 PM &nbsp;·&nbsp; First Batch
              </m.div>

              {/* Countdown */}
              <m.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 * d, delay: 0.32 * d }}
                className="mb-8"
              >
                <p className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold mb-3 text-center lg:text-left">
                  Camp starts in
                </p>
                <div className="flex items-center gap-2 justify-center lg:justify-start flex-wrap">
                  <CountdownBox value={timeLeft.days} label="Days" />
                  <span className="text-xl font-bold text-slate-200">:</span>
                  <CountdownBox value={timeLeft.hours} label="Hours" />
                  <span className="text-xl font-bold text-slate-200">:</span>
                  <CountdownBox value={timeLeft.minutes} label="Mins" />
                  <span className="text-xl font-bold text-slate-200">:</span>
                  <CountdownBox value={timeLeft.seconds} label="Secs" />
                </div>
              </m.div>

              {/* CTA Buttons */}
              <m.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 * d, delay: 0.4 * d }}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              >
                <m.a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfKkrfwAX7AQn2wHReINbAWndwi0hc2f5E7xArOyhnKVyTzJw/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold px-6 py-3.5 rounded-full transition-all duration-200 shadow-lg cursor-pointer text-base"
                  style={{ boxShadow: "0 8px 28px rgba(14,165,233,0.40)" }}
                >
                  Reserve My Child&apos;s Seat
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </m.a>
              </m.div>
            </div>

            {/* RIGHT: Hero Image — contained, no overflow into text column */}
            <div className="relative flex items-center justify-center order-2 overflow-hidden sm:overflow-visible">
              {/* Glow ring behind character */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-br from-violet-100 via-sky-50 to-pink-100 opacity-90 blur-[12px]" />
              </div>

              {/* Character */}
              <m.div
                initial={{ opacity: 0, scale: 0.88, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.75 * d, delay: 0.25 * d, ease: [0.34, 1.56, 0.64, 1] }}
                className="relative z-10"
              >
                <m.div
                  animate={isDesktop ? { y: [-8, 8, -8] } : {}}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  <Image
                    src="/hero-kid.png"
                    alt="AI Superhero Kid with robots"
                    width={480}
                    height={480}
                    priority
                    className="w-[260px] sm:w-[340px] lg:w-[420px] xl:w-[460px] h-auto drop-shadow-2xl"
                  />
                </m.div>
              </m.div>

              {/* Two floating badges — safely positioned within image bounds */}
              <m.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 * d, delay: 0.6 * d, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute z-20 top-4 left-4 sm:left-0"
              >
                <m.div
                  animate={isDesktop ? { y: [-4, 4, -4] } : {}}
                  transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
                  className="bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs px-3 py-1.5 rounded-full shadow-md whitespace-nowrap"
                >
                  No Coding!
                </m.div>
              </m.div>

              <m.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 * d, delay: 0.9 * d, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute z-20 bottom-8 right-4 sm:right-0"
              >
                <m.div
                  animate={isDesktop ? { y: [4, -4, 4] } : {}}
                  transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
                  className="bg-violet-50 border border-violet-200 text-violet-700 font-bold text-xs px-3 py-1.5 rounded-full shadow-md whitespace-nowrap"
                >
                  AI Superstar!
                </m.div>
              </m.div>

              <m.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 * d, delay: 1.1 * d, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute z-20 top-1/2 right-2 sm:right-[-10px]"
              >
                <m.div
                  animate={isDesktop ? { y: [-5, 5, -5] } : {}}
                  transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
                  className="bg-sky-50 border border-sky-200 text-sky-700 font-bold text-xs px-3 py-1.5 rounded-full shadow-md whitespace-nowrap"
                >
                  Future Ready!
                </m.div>
              </m.div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-6">
        <m.div
          animate={isDesktop ? { y: [0, 8, 0] } : {}}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center gap-1 text-slate-400"
        >
          <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </m.div>
      </div>
    </section>
  );
}
