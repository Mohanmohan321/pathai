"use client";

import { motion } from "framer-motion";

const projects = [
  {
    day: "Day 1",
    emoji: "📊",
    title: "AI Presentation",
    tagline: "Research → Outline → Publish",
    desc: "Kids use ChatGPT to research a topic they love, structure it with AI, and design a polished 5–7 slide deck in Canva.",
    skills: ["AI Prompting", "Research", "Canva", "Public Speaking"],
    gradient: "from-sky-400 via-blue-500 to-blue-600",
    badge: "bg-white/20 text-white",
  },
  {
    day: "Day 2",
    emoji: "📚",
    title: "AI Comic Book",
    tagline: "Story → Illustrations → Print",
    desc: "Students write characters and plot with AI help, then generate their own illustrations using Canva Magic Media.",
    skills: ["Storytelling", "AI Art", "Design", "Canva"],
    gradient: "from-fuchsia-400 via-pink-500 to-rose-500",
    badge: "bg-white/20 text-white",
  },
  {
    day: "Day 3",
    emoji: "🎬",
    title: "AI Video",
    tagline: "Script → Visuals → Premiere",
    desc: "Using Pictory AI, students turn their Day 2 comic into a 30–60 second video with narration, music, and scenes.",
    skills: ["Video Production", "Script Writing", "AI Tools", "Presenting"],
    gradient: "from-amber-400 via-orange-400 to-orange-500",
    badge: "bg-white/20 text-white",
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
          <span className="inline-block text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-50 border border-sky-100 px-4 py-1.5 rounded-full mb-4">
            What They Build
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            3 Days.{" "}
            <span className="text-gradient">3 Real Projects.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
            No participation trophies. Every student walks away with a portfolio they built themselves.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.13 }}
              className="rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 group"
            >
              {/* Gradient top half */}
              <div className={`bg-gradient-to-br ${project.gradient} p-6 sm:p-7 relative overflow-hidden`}>
                {/* Decorative circle */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/10 rounded-full" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${project.badge} backdrop-blur-sm border border-white/20`}>
                      {project.day}
                    </span>
                    <span className="text-4xl drop-shadow-sm">{project.emoji}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-1">{project.title}</h3>
                  <p className="text-sm font-medium text-white/80">{project.tagline}</p>
                </div>
              </div>

              {/* White bottom half */}
              <div className="bg-white p-6 sm:p-7">
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center bg-gradient-to-r from-violet-50 to-pink-50 border border-violet-100 rounded-2xl px-6 py-5 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <svg className="w-5 h-5 text-violet-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            <span className="font-bold text-slate-800 text-sm">Parents receive all 3 projects digitally on Day 3</span>
          </div>
          <p className="text-slate-500 text-xs">
            A proud portfolio your child built from scratch — to keep, share, and show off forever.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
