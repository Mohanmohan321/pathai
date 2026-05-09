"use client";

import { motion } from "framer-motion";

const tools = [
  {
    name: "ChatGPT / Claude",
    role: "The AI Brain",
    days: "Days 1, 2 & 3",
    desc: "The foundation of every session. Students use it for research, writing, brainstorming, story creation, and study help. The RICE prompting framework teaches them to use it effectively.",
    skills: ["Prompting", "Research", "Writing", "Brainstorming"],
    color: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
    badgeColor: "bg-emerald-100 text-emerald-700",
    iconBg: "bg-emerald-600",
    initials: "AI",
    daysColor: "text-emerald-600",
  },
  {
    name: "Canva",
    role: "The Creative Engine",
    days: "Days 1, 2 & 3",
    desc: "Used for presentations, comic creation (templates + AI image generation), and portfolio assembly. Canva's Magic Media feature lets students generate AI images directly inside the app.",
    skills: ["Presentations", "Comic Design", "AI Images", "Portfolio"],
    color: "from-blue-50 to-sky-50",
    border: "border-blue-100",
    badgeColor: "bg-blue-100 text-blue-700",
    iconBg: "bg-blue-600",
    initials: "Ca",
    daysColor: "text-blue-600",
  },
  {
    name: "NotebookLM",
    role: "The Study Buddy",
    days: "Day 3",
    desc: "Google's AI tool turns any textbook chapter into summaries, flashcards, and even an AI-generated audio podcast. Students discover how to use AI to study smarter, not harder.",
    skills: ["Summaries", "Flashcards", "Audio Podcasts", "Study Skills"],
    color: "from-orange-50 to-amber-50",
    border: "border-orange-100",
    badgeColor: "bg-orange-100 text-orange-700",
    iconBg: "bg-orange-500",
    initials: "NL",
    daysColor: "text-orange-600",
  },
  {
    name: "Pictory AI / InVideo",
    role: "The Video Producer",
    days: "Day 3",
    desc: "Converts scripts and stories into short videos with narration, music, and visuals — minimal learning curve. Students produce a 30–60 second video from their Day 2 comic story.",
    skills: ["Video Creation", "Narration", "Music", "Visual Editing"],
    color: "from-violet-50 to-purple-50",
    border: "border-violet-100",
    badgeColor: "bg-violet-100 text-violet-700",
    iconBg: "bg-violet-600",
    initials: "VP",
    daysColor: "text-violet-600",
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
          <span className="inline-block text-xs font-semibold text-violet-600 uppercase tracking-widest bg-violet-50 px-4 py-1.5 rounded-full mb-4">
            AI Tools
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Real Tools.{" "}
            <span className="text-gradient">Real Skills.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We intentionally keep the tool count low — 4 core tools across 3 days — so
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
              {/* Icon + Name */}
              <div className="flex items-start gap-3 mb-4">
                <div className={`w-12 h-12 ${tool.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-sm">{tool.initials}</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm leading-tight">{tool.name}</h3>
                  <p className={`text-xs font-semibold ${tool.daysColor} mt-0.5`}>{tool.days}</p>
                </div>
              </div>

              {/* Role badge */}
              <span className={`self-start text-xs font-bold px-2.5 py-1 rounded-full ${tool.badgeColor} mb-3`}>
                {tool.role}
              </span>

              <p className="text-sm text-slate-700 leading-relaxed mb-4 flex-1">{tool.desc}</p>

              {/* Skills */}
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

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-slate-500 bg-white border border-slate-200 rounded-full px-5 py-2.5 inline-block shadow-sm">
            All tools are free-to-use · No downloads required on Day 1 · Age-appropriate accounts set up for under-13s
          </p>
        </motion.div>
      </div>
    </section>
  );
}
