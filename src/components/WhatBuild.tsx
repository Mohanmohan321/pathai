"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GooeyFilter } from "@/components/ui/gooey-filter";
import { useScreenSize } from "@/hooks/use-screen-size";

const projects = [
  {
    day: "Day 1",
    title: "AI Presentation",
    tagline: "Research → Outline → Publish",
    desc: "Kids use ChatGPT to research a topic they love, structure it with AI, and design a polished 5-7 slide deck in Canva.",
    skills: ["AI Prompting", "Research", "Canva", "Public Speaking"],
    color: "#3b82f6",
  },
  {
    day: "Day 2",
    title: "AI Comic Book",
    tagline: "Story → Illustrations → Print",
    desc: "Students write characters and plot with AI help, then generate their own illustrations using Canva Magic Media.",
    skills: ["Storytelling", "AI Art", "Design", "Canva"],
    color: "#ec4899",
  },
  {
    day: "Day 3",
    title: "AI Video",
    tagline: "Script → Visuals → Premiere",
    desc: "Using Pictory AI, students turn their Day 2 comic into a 30-60 second video with narration, music, and scenes.",
    skills: ["Video Production", "Script Writing", "AI Tools", "Presenting"],
    color: "#f97316",
  },
];

const TAB_H = 52;

function ContentPanel({ active }: { active: typeof projects[0] }) {
  return (
    <div className="h-full flex flex-col sm:flex-row gap-6 sm:gap-10 p-7 sm:p-10">
      <div className="flex-1">
        <h3 className="text-3xl sm:text-4xl font-black text-white mb-2 leading-tight">
          {active.title}
        </h3>
        <p className="text-sm sm:text-base font-semibold text-white/80 mb-4">
          {active.tagline}
        </p>
        <p className="text-sm text-white/70 leading-relaxed max-w-md">
          {active.desc}
        </p>
      </div>
      <div className="sm:w-44 flex-shrink-0">
        <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-3">
          Skills Learned
        </p>
        <div className="flex flex-wrap sm:flex-col gap-2">
          {active.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs font-semibold bg-white/20 text-white px-3 py-1.5 rounded-full border border-white/25"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WhatBuild() {
  const [activeTab, setActiveTab] = useState(0);
  const screenSize = useScreenSize();
  const active = projects[activeTab];
  const isMobile = screenSize.lessThan("md");
  const PANEL_H = screenSize.lessThan("sm") ? 340 : 280;

  return (
    <section className="py-16 sm:py-24 bg-white">
      {!isMobile && <GooeyFilter id="wb-goo" strength={10} />}

      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 leading-tight">
            3 Days.{" "}
            <span className="text-gradient">3 Real Projects.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
            No participation trophies. Every student walks away with a portfolio they built themselves.
          </p>
        </motion.div>

        {/* ── Mobile: flat tabs (no gooey, no clipping, no GPU filter) ── */}
        {isMobile && (
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.12)" }}>
            {/* Tab row */}
            <div className="flex">
              {projects.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className="flex-1 py-3.5 text-sm font-bold transition-colors duration-200"
                  style={{
                    backgroundColor: activeTab === i ? p.color : "#f8fafc",
                    color: activeTab === i ? "white" : "#94a3b8",
                  }}
                >
                  {p.day}
                </button>
              ))}
            </div>
            {/* Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                style={{ backgroundColor: active.color }}
              >
                <ContentPanel active={active} />
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* ── Desktop: gooey morphing tabs ── */}
        {!isMobile && (
          <div className="relative" style={{ height: TAB_H + PANEL_H }}>
            {/* Layer 1: Gooey shapes */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ filter: "url(#wb-goo)" }}
            >
              <div className="flex w-full" style={{ height: TAB_H }}>
                {projects.map((p, i) => (
                  <div key={i} className="relative flex-1">
                    {activeTab === i && (
                      <motion.div
                        layoutId="wb-tab-bg"
                        className="absolute inset-0"
                        style={{ backgroundColor: p.color }}
                        transition={{ type: "spring", bounce: 0, duration: 0.42 }}
                      />
                    )}
                  </div>
                ))}
              </div>
              <motion.div
                className="w-full"
                animate={{ backgroundColor: active.color }}
                transition={{ duration: 0.3 }}
                style={{ height: PANEL_H }}
              />
            </div>

            {/* Layer 2: Content (sharp, no filter) */}
            <div className="relative z-10 flex flex-col" style={{ height: TAB_H + PANEL_H }}>
              <div className="flex" style={{ height: TAB_H }}>
                {projects.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className="flex-1 flex items-center justify-center transition-colors duration-200"
                  >
                    <span
                      className={`text-sm sm:text-base font-bold transition-colors duration-200 ${
                        activeTab === i ? "text-white" : "text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      {p.day}
                    </span>
                  </button>
                ))}
              </div>
              <div className="flex-1 overflow-hidden">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="h-full"
                  >
                    <ContentPanel active={active} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}

        {/* Portfolio note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 mb-4 text-center"
        >
          <p className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            Parents receive all 3 projects digitally on Day 3
          </p>
          <p className="text-base sm:text-lg text-slate-500">
            A proud portfolio your child built from scratch — to keep, share, and show off forever.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
