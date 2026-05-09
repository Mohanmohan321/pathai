"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate, useAnimationFrame } from "framer-motion";
import Image from "next/image";

const GRID_SIZE = 40;

function GridPattern({ offsetX, offsetY }: { offsetX: any; offsetY: any }) {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
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
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-grid)" />
    </svg>
  );
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
    <div className="flex flex-col items-center bg-white/90 backdrop-blur-sm rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-sm border border-slate-100 min-w-[58px] sm:min-w-[68px]">
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
  const campStart = new Date("2026-05-15T09:00:00+05:30");
  const timeLeft = useCountdown(campStart);

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);
  useAnimationFrame(() => {
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
      {/* Grid Layer 1 — subtle always-visible */}
      <div className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>

      {/* Grid Layer 2 — vivid flashlight on hover */}
      <motion.div
        className="absolute inset-0 z-0 opacity-50 pointer-events-none"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>

      {/* Colour orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-sky-200 opacity-40 blur-[130px]" />
        <div className="absolute top-10 -right-32 w-[500px] h-[500px] rounded-full bg-amber-100 opacity-50 blur-[110px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[280px] h-[280px] rounded-full bg-orange-200 opacity-40 blur-[80px]" />
      </div>

      {/* Main content — z-10 keeps it above grid/orbs */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-8 sm:py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* LEFT: Text — always first on mobile */}
            <div className="text-center lg:text-left order-1">

              {/* Brand badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-50 to-amber-50 border border-sky-200 rounded-full px-4 py-1.5 mb-5"
              >
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 animate-pulse" />
                <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Limited Seats Open</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="text-xs text-slate-500">PATH AI · SPI Edge</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-4"
              >
                Turn Your Child Into an{" "}
                <span className="text-gradient">AI Creator</span>{" "}
                in Just{" "}
                <span className="relative inline-block">
                  3 Days
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full origin-left"
                  />
                </span>
              </motion.h1>

              {/* Sub-copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 leading-relaxed mb-5 max-w-lg mx-auto lg:mx-0"
              >
                Kids in grades 6–9 build comics, videos &amp; presentations with real AI tools —
                and walk away with a portfolio they&apos;re proud of.
              </motion.p>

              {/* Date + batch pill */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mb-7"
              >
                <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                May 15–17, 2026 &nbsp;·&nbsp; 9 AM – 1 PM &nbsp;·&nbsp; First Batch
              </motion.div>

              {/* Countdown */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.32 }}
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
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              >
                <motion.a
                  href="#pricing"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold px-6 py-3.5 rounded-full transition-all duration-200 shadow-lg cursor-pointer text-base"
                  style={{ boxShadow: "0 8px 28px rgba(14,165,233,0.40)" }}
                >
                  Reserve My Child&apos;s Seat
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://wa.me/919025439428"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-green-50 text-green-700 border border-green-200 font-semibold px-6 py-3.5 rounded-full transition-colors duration-200 cursor-pointer text-base shadow-sm"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp Us
                </motion.a>
              </motion.div>
            </div>

            {/* RIGHT: Hero Image — contained, no overflow into text column */}
            <div className="relative flex items-center justify-center order-2 overflow-hidden sm:overflow-visible">
              {/* Glow ring behind character */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-br from-violet-100 via-sky-50 to-pink-100 opacity-90 blur-[12px]" />
              </div>

              {/* Character */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
                className="relative z-10"
              >
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
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
                </motion.div>
              </motion.div>

              {/* Two floating badges — safely positioned within image bounds */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute z-20 top-4 left-4 sm:left-0"
              >
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
                  className="bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs px-3 py-1.5 rounded-full shadow-md whitespace-nowrap"
                >
                  No Coding!
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute z-20 bottom-8 right-4 sm:right-0"
              >
                <motion.div
                  animate={{ y: [4, -4, 4] }}
                  transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
                  className="bg-violet-50 border border-violet-200 text-violet-700 font-bold text-xs px-3 py-1.5 rounded-full shadow-md whitespace-nowrap"
                >
                  ₹3,999 Only
                </motion.div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-6">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center gap-1 text-slate-400"
        >
          <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
