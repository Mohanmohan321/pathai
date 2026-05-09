"use client";

import { motion } from "framer-motion";

const painPoints = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
        <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
      </svg>
    ),
    iconColor: "text-rose-600",
    iconBg: "bg-rose-100",
    problem: "Screen time feels wasted",
    solution: "They'll use that same screen to BUILD — comics, videos & AI presentations they're proud to show you.",
    solutionColor: "text-emerald-700",
    solutionBg: "bg-emerald-50",
    checkColor: "bg-emerald-500",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
    ),
    iconColor: "text-pink-600",
    iconBg: "bg-pink-100",
    problem: "AI feels overwhelming to navigate",
    solution: "Our curriculum is built for grades 6–9. No overwhelm — just creative exploration at their level.",
    solutionColor: "text-emerald-700",
    solutionBg: "bg-emerald-50",
    checkColor: "bg-emerald-500",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 01.527.921l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.527zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
      </svg>
    ),
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-100",
    problem: "Coding camps are too technical",
    solution: "Zero coding. We teach creative AI use — prompting, storytelling, design, and video — nothing technical.",
    solutionColor: "text-emerald-700",
    solutionBg: "bg-emerald-50",
    checkColor: "bg-emerald-500",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
      </svg>
    ),
    iconColor: "text-amber-600",
    iconBg: "bg-amber-100",
    problem: "I don't want my child left behind",
    solution: "3 days is all it takes. Your child walks away with real skills, real projects, and real confidence.",
    solutionColor: "text-emerald-700",
    solutionBg: "bg-emerald-50",
    checkColor: "bg-emerald-500",
  },
];

export default function PainPoints() {
  return (
    <section className="py-16 sm:py-24 bg-warm">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold text-rose-600 uppercase tracking-widest bg-rose-50 border border-rose-100 px-4 py-1.5 rounded-full mb-4">
            We Hear You
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Every Parent Has These{" "}
            <span className="text-gradient-warm">Worries</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
            PATH AI was designed to solve exactly these concerns.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {painPoints.map((item, i) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              {/* Problem */}
              <div className="px-5 py-4 flex items-center gap-3.5 border-b border-slate-100">
                <div className={`w-11 h-11 ${item.iconBg} ${item.iconColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  {item.icon}
                </div>
                <p className="text-sm font-semibold text-slate-800 leading-snug">
                  &ldquo;{item.problem}&rdquo;
                </p>
              </div>
              {/* Solution */}
              <div className={`px-5 py-4 ${item.solutionBg} flex items-start gap-3`}>
                <div className={`w-5 h-5 ${item.checkColor} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{item.solution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
