"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tools = [
  {
    name: "ChatGPT / Claude",
    role: "The AI Brain",
    days: "Days 1, 2 & 3",
    desc: "The foundation of every session. Students use it for research, writing, brainstorming, story creation, and study help. The RICE prompting framework teaches them to use it effectively.",
    skills: ["Prompting", "Research", "Writing", "Brainstorming"],
    color: "from-[#f0fdf4] to-[#dcfce7]",
    border: "border-[#bbf7d0]",
    badgeColor: "bg-[#d1fae5] text-[#065f46]",
    daysColor: "text-[#10A37F]",
    iconStyle: { background: "#10A37F" },
    logo: (
      <svg viewBox="0 0 41 41" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.650-2.980 10.079 10.079 0 0 0-9.612 6.879 9.967 9.967 0 0 0-6.664 4.834 10.08 10.08 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.650 2.980 10.079 10.079 0 0 0 9.617-6.879 9.967 9.967 0 0 0 6.663-4.834 10.079 10.079 0 0 0-1.243-11.818zm-15.217 21.362a7.48 7.48 0 0 1-4.801-1.730l.239-.136 7.971-4.604a1.298 1.298 0 0 0 .655-1.134v-11.24l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.496 7.51zm-16.130-6.892a7.471 7.471 0 0 1-.894-5.023l.240.144 7.970 4.603a1.297 1.297 0 0 0 1.308 0l9.731-5.622v3.888a.12.12 0 0 1-.048.103l-8.051 4.649a7.504 7.504 0 0 1-10.257-2.742zm-2.099-17.170a7.47 7.47 0 0 1 3.919-3.290v9.470a1.297 1.297 0 0 0 .654 1.132l9.723 5.617-3.367 1.944a.12.12 0 0 1-.114.012l-8.048-4.648a7.498 7.498 0 0 1-2.767-10.237zm27.658 6.437l-9.731-5.622 3.367-1.944a.12.12 0 0 1 .114-.012l8.048 4.648a7.498 7.498 0 0 1-1.158 13.528v-9.470a1.297 1.297 0 0 0-.640-1.128zm3.35-5.043l-.239-.144-7.970-4.603a1.297 1.297 0 0 0-1.308 0l-9.731 5.622v-3.888a.12.12 0 0 1 .048-.103l8.051-4.645a7.497 7.497 0 0 1 11.15 7.762zm-21.063 6.929l-3.367-1.944a.12.12 0 0 1-.066-.092v-9.299a7.497 7.497 0 0 1 12.293-5.756l-.239.136-7.971 4.604a1.298 1.298 0 0 0-.655 1.134zm1.829-3.943l4.33-2.501 4.332 2.500v4.999l-4.331 2.5-4.331-2.5z" fill="white" />
      </svg>
    ),
  },
  {
    name: "Canva",
    role: "The Creative Engine",
    days: "Days 1, 2 & 3",
    desc: "Used for presentations, comic creation (templates + AI image generation), and portfolio assembly. Canva's Magic Media feature lets students generate AI images directly inside the app.",
    skills: ["Presentations", "Comic Design", "AI Images", "Portfolio"],
    color: "from-[#f0fdff] to-[#faf5ff]",
    border: "border-[#c4b5fd]",
    badgeColor: "bg-[#ede9fe] text-[#5b21b6]",
    daysColor: "text-[#7D2AE8]",
    iconStyle: { background: "#ffffff", border: "1.5px solid #e2e8f0" },
    logo: <Image src="/canva.jpg" alt="Canva" width={40} height={40} className="object-contain rounded-lg" />,
  },
  {
    name: "NotebookLM",
    role: "The Study Buddy",
    days: "Day 3",
    desc: "Google's AI tool turns any textbook chapter into summaries, flashcards, and even an AI-generated audio podcast. Students discover how to use AI to study smarter, not harder.",
    skills: ["Summaries", "Flashcards", "Audio Podcasts", "Study Skills"],
    color: "from-[#eff6ff] to-[#f0f9ff]",
    border: "border-[#93c5fd]",
    badgeColor: "bg-[#dbeafe] text-[#1e40af]",
    daysColor: "text-[#4285F4]",
    iconStyle: { background: "#ffffff", border: "1.5px solid #e2e8f0" },
    logo: <Image src="/lm.png" alt="NotebookLM" width={36} height={36} className="object-contain" />,
  },
  {
    name: "Pictory AI / InVideo",
    role: "The Video Producer",
    days: "Day 3",
    desc: "Converts scripts and stories into short videos with narration, music, and visuals - minimal learning curve. Students produce a 30-60 second video from their Day 2 comic story.",
    skills: ["Video Creation", "Narration", "Music", "Visual Editing"],
    color: "from-[#faf5ff] to-[#f5f3ff]",
    border: "border-[#c4b5fd]",
    badgeColor: "bg-[#ede9fe] text-[#5b21b6]",
    daysColor: "text-[#7B2FBE]",
    iconStyle: { background: "#ffffff", border: "1.5px solid #e2e8f0" },
    logo: <Image src="/Pictory .jpg" alt="Pictory" width={36} height={36} className="object-contain rounded-lg" />,
  },
];

export default function Tools() {
  return (
    <section id="tools" className="pt-20 sm:pt-28 pb-10 sm:pb-12 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Real Tools.{" "}
            <span className="text-gradient">Real Skills.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We intentionally keep the tool count low - 4 core tools across 3 days - so
            students go deep rather than wide. Every tool is free and usable at home after camp.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-gradient-to-br ${tool.color} border ${tool.border} rounded-2xl p-5 sm:p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300 cursor-default flex flex-col`}
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden"
                  style={tool.iconStyle}
                >
                  {tool.logo}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm leading-tight">{tool.name}</h3>
                  <p className={`text-xs font-semibold ${tool.daysColor} mt-0.5`}>{tool.days}</p>
                </div>
              </div>

              <span className={`self-start text-xs font-bold px-2.5 py-1 rounded-full ${tool.badgeColor} mb-3`}>
                {tool.role}
              </span>

              <p className="text-sm text-slate-700 leading-relaxed mb-4 flex-1">{tool.desc}</p>

              <div className="flex flex-wrap gap-1.5">
                {tool.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-medium bg-white/80 text-slate-600 px-2 py-0.5 rounded-full border border-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Knowledge Partner */}
        <motion.a
          href="https://thebotcompany.in/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 relative overflow-hidden rounded-2xl cursor-pointer block"
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e2d4a 50%, #0f172a 100%)",
            border: "1px solid rgba(56,189,248,0.2)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          {/* Grid pattern */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize: "40px 40px" }}
          />
          {/* Blue orb left */}
          <div className="absolute left-0 top-0 bottom-0 w-64 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at left center, rgba(56,189,248,0.12) 0%, transparent 70%)" }}
          />
          {/* Purple orb right */}
          <div className="absolute right-0 top-0 bottom-0 w-64 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at right center, rgba(139,92,246,0.12) 0%, transparent 70%)" }}
          />
          {/* Top shimmer line */}
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.7) 40%, rgba(139,92,246,0.7) 60%, transparent 100%)" }}
          />
          {/* Shine sweep */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.04) 50%, transparent 80%)" }}
            animate={{ x: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", repeatDelay: 3 }}
          />

          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-14 px-8 py-8 sm:py-10">

            {/* Left: text */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:max-w-sm">
              <div className="flex items-center gap-2 mb-3">
                <motion.div
                  className="w-2 h-2 rounded-full bg-sky-400"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                />
                <span className="text-[10px] font-black text-sky-400 uppercase tracking-[0.2em]">Knowledge Partner</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-2">
                The Bot Company
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                AI education &amp; tools for the next generation
              </p>
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-slate-300"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <svg className="w-3 h-3 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                thebotcompany.in
              </span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px self-stretch"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.12), transparent)" }}
            />

            {/* Right: Logo */}
            <div className="flex items-center justify-center flex-shrink-0 py-2">
              <div className="relative">
                {/* Pulse glow rings */}
                <motion.div
                  className="absolute rounded-2xl"
                  style={{ inset: "-8px", background: "rgba(56,189,248,0.15)", filter: "blur(12px)" }}
                  animate={{ opacity: [0.6, 0.2, 0.6], scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute rounded-2xl"
                  style={{ inset: "-16px", background: "rgba(255,255,255,0.08)", filter: "blur(20px)" }}
                  animate={{ opacity: [0.4, 0.1, 0.4], scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.3 }}
                />
                {/* Logo card */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-2xl flex items-center justify-center p-3"
                  style={{ boxShadow: "0 0 30px rgba(56,189,248,0.25), 0 0 60px rgba(255,255,255,0.1), 0 8px 24px rgba(0,0,0,0.4)" }}
                >
                  <Image src="/bot studiox.png" alt="The Bot Company" width={90} height={90} className="object-contain w-full h-full" />
                </div>
              </div>
            </div>

          </div>

          {/* Bottom shimmer line */}
          <div className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.5) 40%, rgba(56,189,248,0.5) 60%, transparent 100%)" }}
          />
        </motion.a>
      </div>
    </section>
  );
}
