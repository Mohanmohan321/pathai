"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedTabs } from "@/components/ui/animated-tabs";

function TabContent({
  image,
  alt,
  dayLabel,
  title,
  tagline,
  desc,
  skills,
  accent,
}: {
  image: string;
  alt: string;
  dayLabel: string;
  title: string;
  tagline: string;
  desc: string;
  skills: string[];
  accent: string;
}) {
  return (
    <div className="grid sm:grid-cols-2 gap-5 sm:gap-8 items-center">
      {/* Image */}
      <div className="rounded-2xl overflow-hidden aspect-video w-full shadow-2xl">
        <Image
          src={image}
          alt={alt}
          width={600}
          height={340}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-3">
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>
          {dayLabel}
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">{title}</h3>
        <p className="text-sm font-medium text-white/50">{tagline}</p>
        <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {skills.map((s) => (
            <span
              key={s}
              className="text-xs font-medium bg-white/10 text-white/80 px-3 py-1 rounded-full border border-white/10"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const tabs = [
  {
    id: "day1",
    label: "Day 1 — Presentation",
    content: (
      <TabContent
        image="/day1.jpg"
        alt="Day 1 AI Presentation"
        dayLabel="Day 1 Project"
        title="AI Presentation"
        tagline="Research → Outline → Publish"
        desc="Kids use ChatGPT to research a topic they love, structure it with AI, and design a polished 5-7 slide deck in Canva."
        skills={["AI Prompting", "Research", "Canva", "Public Speaking"]}
        accent="#38bdf8"
      />
    ),
  },
  {
    id: "day2",
    label: "Day 2 — Comic Book",
    content: (
      <TabContent
        image="/day2.jpg"
        alt="Day 2 AI Comic Book"
        dayLabel="Day 2 Project"
        title="AI Comic Book"
        tagline="Story → Illustrations → Print"
        desc="Students write characters and plot with AI help, then generate their own illustrations using Canva Magic Media."
        skills={["Storytelling", "AI Art", "Design", "Canva"]}
        accent="#e879f9"
      />
    ),
  },
  {
    id: "day3",
    label: "Day 3 — AI Video",
    content: (
      <TabContent
        image="/day3.jpg"
        alt="Day 3 AI Video"
        dayLabel="Day 3 Project"
        title="AI Video"
        tagline="Script → Visuals → Premiere"
        desc="Using Pictory AI, students turn their Day 2 comic into a 30-60 second video with narration, music, and scenes."
        skills={["Video Production", "Script Writing", "AI Tools", "Presenting"]}
        accent="#fb923c"
      />
    ),
  },
];

export default function WhatBuild() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            3 Days.{" "}
            <span className="text-gradient">3 Real Projects.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
            No participation trophies. Every student walks away with a portfolio they built themselves.
          </p>
        </motion.div>

        {/* Dark card with animated tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.25)",
          }}
        >
          <div className="p-6 sm:p-10">
            <AnimatedTabs tabs={tabs} />
          </div>
        </motion.div>

        {/* Portfolio note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-center bg-gradient-to-r from-violet-50 to-pink-50 border border-violet-100 rounded-2xl px-6 py-5 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <svg className="w-5 h-5 text-violet-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            <span className="font-bold text-slate-800 text-sm">Parents receive all 3 projects digitally on Day 3</span>
          </div>
          <p className="text-slate-500 text-xs">
            A proud portfolio your child built from scratch - to keep, share, and show off forever.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
