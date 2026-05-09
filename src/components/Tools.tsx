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
    <section id="tools" className="py-20 sm:py-28 bg-slate-50">
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
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl px-6 py-5"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-bold text-white/50 uppercase tracking-widest mb-0.5">Knowledge Partner</p>
              <p className="text-base font-bold text-white">The Bot Company</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <span className="text-sm font-medium text-white/70">thebotcompany.in</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-5 text-center"
        >
          <p className="text-sm text-slate-500 bg-white border border-slate-200 rounded-full px-5 py-2.5 inline-block shadow-sm">
            All tools are free-to-use - No downloads required on Day 1 - Age-appropriate accounts set up for under-13s
          </p>
        </motion.div>
      </div>
    </section>
  );
}
