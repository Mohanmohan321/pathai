"use client";

import { m } from "framer-motion";

const painPoints = [
  {
    accent: "#f43f5e",
    glow: "#f43f5e",
    conic: "conic-gradient(from 0deg, transparent 0% 60%, #fda4af 80%, white 90%, #fda4af 95%, transparent 100%)",
    bg: "linear-gradient(135deg, #fb7185 0%, #f43f5e 50%, #e11d48 100%)",
    problem: "Screen time feels wasted",
    solution: "They'll use that same screen to BUILD — comics, videos & AI presentations they're proud to show you.",
  },
  {
    accent: "#8b5cf6",
    glow: "#8b5cf6",
    conic: "conic-gradient(from 0deg, transparent 0% 60%, #c4b5fd 80%, white 90%, #c4b5fd 95%, transparent 100%)",
    bg: "linear-gradient(135deg, #a78bfa 0%, #8b5cf6 50%, #7c3aed 100%)",
    problem: "AI feels overwhelming to navigate",
    solution: "Our curriculum is built for grades 5–9 (ages 10–14). No overwhelm — just creative exploration at their level.",
  },
  {
    accent: "#0ea5e9",
    glow: "#0ea5e9",
    conic: "conic-gradient(from 0deg, transparent 0% 60%, #7dd3fc 80%, white 90%, #7dd3fc 95%, transparent 100%)",
    bg: "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 50%, #0284c7 100%)",
    problem: "Coding camps are too technical",
    solution: "Zero coding. We teach creative AI use — prompting, storytelling, design, and video — nothing technical.",
  },
  {
    accent: "#f59e0b",
    glow: "#f59e0b",
    conic: "conic-gradient(from 0deg, transparent 0% 60%, #fde68a 80%, white 90%, #fde68a 95%, transparent 100%)",
    bg: "linear-gradient(135deg, #fcd34d 0%, #f59e0b 50%, #d97706 100%)",
    problem: "I don't want my child left behind",
    solution: "3 days is all it takes. Your child walks away with real skills, real projects, and real confidence.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-16 sm:py-24 bg-warm">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Every Parent Has These{" "}
            <span className="text-gradient-warm">Worries</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
            PATH AI was designed to solve exactly these concerns.
          </p>
        </m.div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {painPoints.map((item, i) => (
            <m.div
              key={item.problem}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-3xl overflow-hidden cursor-default"
              style={{
                border: `2px solid ${item.glow}40`,
                boxShadow: `0 8px 40px ${item.glow}40, 0 2px 8px rgba(0,0,0,0.08)`,
              }}
            >
              {/* Card */}
              <div className="relative z-10 rounded-[22px] overflow-hidden">
                {/* Gradient header — large problem quote */}
                <div
                  className="relative overflow-hidden px-6 pt-6 pb-7 sm:px-8 sm:pt-7"
                  style={{ background: item.bg }}
                >
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.18) 0%, transparent 65%)",
                    }}
                  />
                  <div className="absolute top-0 left-0 right-0 h-px bg-white/40" />

                  <div className="relative z-10">
                    <p className="text-xl sm:text-2xl font-bold text-white leading-snug">
                      &ldquo;{item.problem}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Divider arrow */}
                <div className="bg-white flex items-center gap-3 px-6 sm:px-8 py-3">
                  <div className="flex-1 h-px" style={{ background: `${item.accent}30` }} />
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.accent}15` }}
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      style={{ color: item.accent }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div className="flex-1 h-px" style={{ background: `${item.accent}30` }} />
                </div>

                {/* Solution */}
                <div className="bg-white px-6 pb-6 sm:px-8 sm:pb-7">
                  <p className="text-sm text-slate-600 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
