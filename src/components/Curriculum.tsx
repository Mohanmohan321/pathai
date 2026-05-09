"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const days = [
  {
    day: "Day 1",
    num: "01",
    theme: "AI is Your New Superpower",
    tool: "ChatGPT / Claude",
    output: "AI School Presentation",
    gradient: "from-emerald-500 to-teal-600",
    lightBg: "bg-emerald-50",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-200",
    sessions: [
      { time: "9:00 - 9:30", title: "Welcome & Team Formation" },
      { time: "9:30 - 10:15", title: "What is AI, Really?" },
      { time: "10:15 - 11:00", title: "The Art of Prompting (RICE Method)" },
      { time: "11:20 - 12:15", title: "Hands-On: AI for School" },
      { time: "12:15 - 12:50", title: "Build: AI Presentation" },
    ],
    takeaway: "I learned to research any topic and build a full presentation using AI in under an hour.",
  },
  {
    day: "Day 2",
    num: "02",
    theme: "AI is Your Creative Studio",
    tool: "Canva + AI Image Tools",
    output: "AI Comic Book (4-6 pages)",
    gradient: "from-fuchsia-500 to-pink-600",
    lightBg: "bg-fuchsia-50",
    textColor: "text-fuchsia-700",
    borderColor: "border-fuchsia-200",
    sessions: [
      { time: "9:00 - 9:15", title: "Day 1 Recap & Energy Starter" },
      { time: "9:15 - 9:45", title: "AI Art & Images: How It Works" },
      { time: "9:45 - 10:15", title: "Storytelling 101: Script Writing" },
      { time: "10:35 - 12:00", title: "Build: My AI Comic Book" },
      { time: "12:40 - 1:00", title: "Comic Gallery Showcase" },
    ],
    takeaway: "I wrote and illustrated my own comic book using AI - the characters, the story, and all the artwork!",
  },
  {
    day: "Day 3",
    num: "03",
    theme: "AI is Your Production House",
    tool: "Pictory AI / InVideo + NotebookLM",
    output: "AI Video + Team Showcase",
    gradient: "from-blue-500 to-indigo-600",
    lightBg: "bg-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
    sessions: [
      { time: "9:00 - 9:15", title: "Final Day Energy Starter" },
      { time: "9:15 - 10:00", title: "AI Video Creation" },
      { time: "10:00 - 10:30", title: "AI for Studying Smarter" },
      { time: "10:50 - 11:30", title: "Portfolio Assembly & Team Prep" },
      { time: "11:30 - 12:30", title: "Grand Showcase & Awards" },
    ],
    takeaway: "I made a video using AI, learned to study smarter, and presented our team project to everyone!",
  },
];

export default function Curriculum() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section id="curriculum" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold text-sky-600 uppercase tracking-widest bg-sky-50 border border-sky-100 px-4 py-1.5 rounded-full mb-4">
            3-Day Program
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Day-by-Day <span className="text-gradient">Curriculum</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Click any day card to reveal the schedule. 9 AM to 1 PM - 4 focused hours of real AI creation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {days.map((day, i) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative h-[420px]"
              style={{ perspective: "1200px" }}
            >
              <motion.div
                className="relative w-full h-full cursor-pointer"
                animate={{ rotateY: flipped === i ? 180 : 0 }}
                transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                style={{ transformStyle: "preserve-3d" }}
                onClick={() => setFlipped(flipped === i ? null : i)}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col shadow-lg"
                  style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                  <div className={`bg-gradient-to-br ${day.gradient} flex-1 p-6 flex flex-col justify-between`}>
                    <div>
                      <div className="flex items-start justify-between mb-5">
                        <span className="text-8xl font-black text-white/15 leading-none select-none">{day.num}</span>
                        <span className="text-xs font-bold text-white/90 bg-white/20 px-3 py-1.5 rounded-full">
                          {day.day}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                        {day.theme}
                      </h3>
                    </div>
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2.5">
                        <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider w-12 flex-shrink-0">Tool</span>
                        <span className="text-xs font-semibold text-white bg-white/20 px-2.5 py-1 rounded-full">{day.tool}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider w-12 flex-shrink-0">Output</span>
                        <span className="text-xs font-semibold text-white bg-white/20 px-2.5 py-1 rounded-full">{day.output}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white px-5 py-3.5 flex items-center justify-center gap-2">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4" />
                    </svg>
                    <span className="text-xs text-slate-400 font-medium">Tap to see schedule</span>
                  </div>
                </div>

                {/* Back */}
                <div
                  className={`absolute inset-0 rounded-2xl overflow-hidden flex flex-col bg-white border-2 ${day.borderColor} shadow-lg`}
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  {/* Back header */}
                  <div className={`${day.lightBg} px-5 py-4 border-b ${day.borderColor}`}>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className={`text-[10px] font-bold uppercase tracking-wider ${day.textColor} mb-0.5`}>{day.day}</p>
                        <h3 className="font-bold text-slate-900 text-sm leading-tight">{day.theme}</h3>
                      </div>
                      <span className={`text-[10px] font-semibold ${day.textColor} bg-white px-2 py-1 rounded-full border ${day.borderColor} whitespace-nowrap flex-shrink-0`}>
                        {day.output}
                      </span>
                    </div>
                  </div>

                  {/* Sessions */}
                  <div className="flex-1 px-5 py-4 space-y-3">
                    {day.sessions.map((session) => (
                      <div key={session.title} className="flex items-start gap-3">
                        <span className="text-[10px] font-mono text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded whitespace-nowrap flex-shrink-0 mt-0.5 border border-slate-100">
                          {session.time}
                        </span>
                        <span className="text-xs font-medium text-slate-700 leading-tight">{session.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* Takeaway */}
                  <div className={`px-5 py-3 ${day.lightBg} border-t ${day.borderColor}`}>
                    <p className="text-[11px] text-slate-600 italic leading-relaxed">&ldquo;{day.takeaway}&rdquo;</p>
                  </div>

                  {/* Close hint */}
                  <div className="px-5 py-3 bg-white border-t border-slate-100 flex items-center justify-center gap-2">
                    <svg className="w-3.5 h-3.5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-xs text-slate-400 font-medium">Tap to close</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
