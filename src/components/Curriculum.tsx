"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const days = [
  {
    day: "Day 1",
    theme: "AI is Your New Superpower",
    goal: "Students discover what AI can do, learn to talk to it effectively, and create their first AI-powered school presentation.",
    tool: "ChatGPT / Claude",
    output: "AI-Powered School Presentation",
    color: "bg-emerald-600",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-200",
    badgeColor: "bg-emerald-100 text-emerald-700",
    sessions: [
      {
        time: "9:00 – 9:30",
        title: "Welcome & Icebreaker",
        desc: "Team formation (5–6 teams of 4–5). Each team picks a passion theme — Space, Wildlife, Sports, Future Cities, Ocean Life, Superheroes. This theme runs through all 3 days.",
        type: "activity",
      },
      {
        time: "9:30 – 10:15",
        title: "What is AI, Really?",
        desc: "Live demo: students see AI write a story, generate an image, answer a tricky question. Interactive AI vs Human quiz game. Discussion: Where AI is already in their lives.",
        type: "learning",
      },
      {
        time: "10:15 – 11:00",
        title: "Talking to AI: The Art of Prompting",
        desc: "The 'magic words' lesson. The RICE method — Role, Instruction, Context, Example. Students see the dramatic difference between bad and good prompts.",
        type: "learning",
      },
      {
        time: "11:00 – 11:20",
        title: "Snack Break",
        desc: "Refreshments + informal chat about what surprised them so far.",
        type: "break",
      },
      {
        time: "11:20 – 12:15",
        title: "Hands-On: AI for School",
        desc: "Students use ChatGPT/Claude to research their team topic, create a structured outline, generate quiz questions, and draft presentation talking points.",
        type: "build",
      },
      {
        time: "12:15 – 12:50",
        title: "Build: My First AI Presentation",
        desc: "Using Canva or Google Slides, students create a 5–7 slide presentation with AI-generated content, structure, and ideas. Each student creates their own version.",
        type: "build",
      },
      {
        time: "12:50 – 1:00",
        title: "Day 1 Wrap-Up",
        desc: '"Today\'s Superpower Unlocked!" 2–3 volunteers show their presentations. Preview of Day 2: "Tomorrow, you become comic book creators."',
        type: "activity",
      },
    ],
    takeaway: "\"I learned how to use AI to research any topic, organize my thoughts, and build a full presentation — all in under an hour.\"",
  },
  {
    day: "Day 2",
    theme: "AI is Your Creative Studio",
    goal: "Students create an original AI-generated comic book using their team theme, learning visual AI tools and storytelling.",
    tool: "Canva + AI Image Tools",
    output: "AI Comic Book (4–6 pages)",
    color: "bg-fuchsia-500",
    lightColor: "bg-fuchsia-50",
    textColor: "text-fuchsia-700",
    borderColor: "border-fuchsia-200",
    badgeColor: "bg-fuchsia-100 text-fuchsia-700",
    sessions: [
      {
        time: "9:00 – 9:15",
        title: "Day 1 Recap + Energy Starter",
        desc: "Quick recap of Day 1. Fun warm-up: show AI-generated images and ask students to guess the prompts that created them.",
        type: "activity",
      },
      {
        time: "9:15 – 9:45",
        title: "AI Art & Images: How It Works",
        desc: "Demo: Generating images with Canva's AI image generator (Magic Media). Students experiment with their first image prompts based on their team theme.",
        type: "learning",
      },
      {
        time: "9:45 – 10:15",
        title: "Storytelling 101: Idea to Comic Script",
        desc: "Character + Problem + Journey + Resolution. Each student uses ChatGPT/Claude to develop a short comic story (4–6 panels) with AI-assisted dialogue and plot twists.",
        type: "learning",
      },
      {
        time: "10:15 – 10:35",
        title: "Snack Break",
        desc: "Refreshments. Students share their story ideas with each other informally.",
        type: "break",
      },
      {
        time: "10:35 – 12:00",
        title: "Build: My AI Comic Book",
        desc: "The main creative block. Students use Canva to: choose a comic template, generate character images using AI, add speech bubbles and dialogue, design a cover page.",
        type: "build",
      },
      {
        time: "12:00 – 12:40",
        title: "Polish & Print-Ready",
        desc: "Students refine their comics: fix text, improve images, add title and credits page.",
        type: "build",
      },
      {
        time: "12:40 – 1:00",
        title: "Day 2 Showcase",
        desc: 'Comic gallery: Each student shows their favorite panel. Vote for "Best Panel," "Funniest Story," "Most Creative Art." Preview of Day 3: "Tomorrow, your comics come alive as videos."',
        type: "activity",
      },
    ],
    takeaway: "\"I wrote and illustrated my own comic book using AI today! I created the characters, the story, and the artwork.\"",
  },
  {
    day: "Day 3",
    theme: "AI is Your Production House",
    goal: "Students create an AI video, learn AI study tools, assemble their portfolio, and deliver team presentations.",
    tool: "Pictory AI / InVideo + NotebookLM",
    output: "AI Video + Team Showcase",
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
    badgeColor: "bg-blue-100 text-blue-700",
    sessions: [
      {
        time: "9:00 – 9:15",
        title: "Day 2 Recap + Final Day Energy",
        desc: 'Recap Day 2. Set the stage: "Today, you become video producers AND you present your work to everyone."',
        type: "activity",
      },
      {
        time: "9:15 – 10:00",
        title: "AI Video Creation",
        desc: "Demo: Pictory AI converts a script/story into a short video with narration, music, and visuals. Each student takes their Day 2 comic story and turns it into a 30–60 second video.",
        type: "build",
      },
      {
        time: "10:00 – 10:30",
        title: "AI for Studying Smarter",
        desc: "NotebookLM: upload any textbook chapter, and AI creates summaries, flashcards, and even an AI podcast. Discussion: Learning WITH AI vs. copying from AI.",
        type: "learning",
      },
      {
        time: "10:30 – 10:50",
        title: "Snack Break",
        desc: "Last break. Teams huddle to plan their presentations.",
        type: "break",
      },
      {
        time: "10:50 – 11:30",
        title: "Portfolio Assembly + Team Prep",
        desc: "Students compile their personal AI portfolio: presentation from Day 1, comic from Day 2, video from Day 3. Teams prepare a 5-minute group presentation.",
        type: "build",
      },
      {
        time: "11:30 – 12:30",
        title: "The Grand Showcase",
        desc: "Each team presents (5 min + 2 min Q&A). Show 1–2 best comics, play 1 video, share one 'wow moment.' Audience votes for awards: Best Story, Most Creative, Best Presentation, People's Choice.",
        type: "activity",
      },
      {
        time: "12:30 – 1:00",
        title: "Awards & Graduation",
        desc: "Award announcements. Every student receives a PATH AI completion certificate. Group photo. Closing message: \"You are now AI-powered. Go build amazing things.\"",
        type: "activity",
      },
    ],
    takeaway: "\"I made a video using AI, learned how to study smarter, and presented our team project to everyone. Look at everything I created in just 3 days!\"",
  },
];

const sessionTypeStyle: Record<string, string> = {
  learning: "bg-blue-100 text-blue-700",
  build: "bg-emerald-100 text-emerald-700",
  break: "bg-amber-100 text-amber-700",
  activity: "bg-sky-100 text-sky-700",
};

const sessionTypeLabel: Record<string, string> = {
  learning: "Learning",
  build: "Build",
  break: "Break",
  activity: "Activity",
};

export default function Curriculum() {
  const [activeDay, setActiveDay] = useState(0);
  const day = days[activeDay];

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
            Every minute of every day is planned to maximize creativity, learning, and fun.
            9 AM to 1 PM — 4 focused hours of real AI creation.
          </p>
        </motion.div>

        {/* Day tabs */}
        <div className="flex gap-3 mb-8 justify-center flex-wrap">
          {days.map((d, i) => (
            <button
              key={d.day}
              onClick={() => setActiveDay(i)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeDay === i
                  ? `${d.color} text-white shadow-md`
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {d.day}
              <span className="hidden sm:inline ml-2 font-normal opacity-80">· {d.theme}</span>
            </button>
          ))}
        </div>

        {/* Day Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            {/* Day header */}
            <div className={`${day.lightColor} border ${day.borderColor} rounded-2xl p-5 sm:p-7 mb-6`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className={`text-xs font-bold uppercase tracking-widest ${day.textColor} mb-1`}>{day.day}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{day.theme}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-xl">{day.goal}</p>
                </div>
                <div className="flex flex-col gap-2 flex-shrink-0">
                  <div className="bg-white/80 rounded-xl px-4 py-2.5 text-center border border-white">
                    <div className="text-xs text-slate-500 mb-0.5">Core Tool</div>
                    <div className="text-sm font-semibold text-slate-800">{day.tool}</div>
                  </div>
                  <div className="bg-white/80 rounded-xl px-4 py-2.5 text-center border border-white">
                    <div className="text-xs text-slate-500 mb-0.5">Output</div>
                    <div className="text-sm font-semibold text-slate-800">{day.output}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sessions */}
            <div className="space-y-3">
              {day.sessions.map((session, i) => (
                <motion.div
                  key={session.title}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className={`bg-white border border-slate-100 rounded-xl p-4 sm:p-5 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow duration-200 ${
                    session.type === "break" ? "opacity-70" : ""
                  }`}
                >
                  {/* Time */}
                  <div className="flex-shrink-0 text-center min-w-[80px] sm:min-w-[90px]">
                    <span className="text-xs font-mono text-slate-500 bg-slate-50 px-2 py-1 rounded-lg block">
                      {session.time}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h4 className="font-semibold text-slate-800 text-sm sm:text-base">{session.title}</h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${sessionTypeStyle[session.type]}`}>
                        {sessionTypeLabel[session.type]}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{session.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Student takeaway */}
            <div className={`mt-6 ${day.lightColor} border ${day.borderColor} rounded-2xl p-5 flex gap-3 items-start`}>
              <div className={`w-8 h-8 ${day.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <div className={`text-xs font-bold uppercase tracking-wider ${day.textColor} mb-1`}>
                  What students tell their parents
                </div>
                <p className="text-sm text-slate-700 font-medium italic">{day.takeaway}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
