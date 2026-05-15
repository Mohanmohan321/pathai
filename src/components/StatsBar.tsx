"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => { setIsDesktop(window.innerWidth >= 768); }, []);
  return isDesktop;
}

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const isDesktop = useIsDesktop();

  useEffect(() => {
    if (!inView) return;
    if (!isDesktop) {
      setValue(to);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    let rafId: number;
    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, to, isDesktop]);

  return <span ref={ref}>{value}{suffix}</span>;
}

const stats = [
  {
    to: 3,
    suffix: "",
    label: "Days Camp",
    sub: "May 18–20, 2026",
    bg: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)",
    glow: "#38bdf8",
    conic: "conic-gradient(from 0deg, transparent 0% 60%, #7dd3fc 80%, white 90%, #7dd3fc 95%, transparent 100%)",
  },
  {
    to: 12,
    suffix: "+",
    label: "Hours Hands-On",
    sub: "Zero passive lectures",
    bg: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
    glow: "#fb923c",
    conic: "conic-gradient(from 0deg, transparent 0% 60%, #fdba74 80%, white 90%, #fdba74 95%, transparent 100%)",
  },
  {
    to: 3,
    suffix: "",
    label: "Projects Built",
    sub: "Comic · Video · Deck",
    bg: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    glow: "#34d399",
    conic: "conic-gradient(from 0deg, transparent 0% 60%, #6ee7b7 80%, white 90%, #6ee7b7 95%, transparent 100%)",
  },
  {
    to: 30,
    suffix: "",
    label: "Max Seats",
    sub: "Small batch only",
    bg: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
    glow: "#fbbf24",
    conic: "conic-gradient(from 0deg, transparent 0% 60%, #fde68a 80%, white 90%, #fde68a 95%, transparent 100%)",
  },
];

export default function StatsBar() {
  const isDesktop = useIsDesktop();
  return (
    <section className="py-10 sm:py-14 bg-warm">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24, scale: 0.93 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: isDesktop ? 0.5 : 0, delay: isDesktop ? i * 0.1 : 0 }}
              whileHover={isDesktop ? { scale: 1.04, y: -4 } : {}}
              className="relative rounded-3xl p-[2.5px] overflow-hidden cursor-default"
              style={{
                boxShadow: `0 8px 40px ${stat.glow}55, 0 2px 8px rgba(0,0,0,0.15)`,
              }}
            >
              {/* Spinning conic gradient border */}
              <div
                className="stat-spin absolute w-[200%] h-[200%] pointer-events-none"
                style={{
                  top: "-50%",
                  left: "-50%",
                  background: stat.conic,
                }}
              />

              {/* Card body */}
              <div
                className="relative z-10 rounded-[22px] p-5 sm:p-7 text-white text-center overflow-hidden"
                style={{ background: stat.bg }}
              >
                {/* Inner glow */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.22) 0%, transparent 65%)",
                  }}
                />
                {/* Shimmer line at top */}
                <div className="absolute top-0 left-0 right-0 h-px bg-white/40" />

                <div className="relative z-10">
                  <div className="text-4xl sm:text-5xl font-black mb-1 leading-none tracking-tight drop-shadow-md">
                    <CountUp to={stat.to} suffix={stat.suffix} />
                  </div>
                  <div className="font-bold text-sm sm:text-base text-white leading-tight drop-shadow-sm">
                    {stat.label}
                  </div>
                  <div className="text-xs text-white/70 mt-1 font-medium">{stat.sub}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
