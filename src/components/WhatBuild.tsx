"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";

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

export default function WhatBuild() {
  const [activeTab, setActiveTab] = useState(0);
  const active = projects[activeTab];

  return (
    <section id="curriculum" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">

        {/* Heading */}
        <m.div
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
        </m.div>

        {/* Segmented tab control — fully detached from card */}
        <div className="flex gap-1.5 p-1.5 bg-slate-100 rounded-2xl mb-4">
          {projects.map((p, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className="relative flex-1 py-2.5 sm:py-3 text-sm sm:text-base font-bold rounded-xl cursor-pointer"
              style={{ color: activeTab === i ? "#ffffff" : "#94a3b8" }}
            >
              {activeTab === i && (
                <m.div
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-xl shadow-md"
                  style={{ backgroundColor: p.color }}
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              )}
              <span className="relative z-10 transition-colors duration-150">{p.day}</span>
            </button>
          ))}
        </div>

        {/* Content card — rounded, colored, detached from tabs */}
        <m.div
          animate={{ backgroundColor: active.color }}
          transition={{ duration: 0.28 }}
          className="rounded-3xl overflow-hidden"
          style={{ backgroundColor: active.color }}
        >
          <AnimatePresence mode="wait">
            <m.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6 sm:gap-10 p-7 sm:p-10"
            >
              {/* Left: project info */}
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

              {/* Right: skills */}
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
            </m.div>
          </AnimatePresence>
        </m.div>

        {/* Portfolio note */}
        <m.div
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
        </m.div>
      </div>
    </section>
  );
}
