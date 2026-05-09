"use client";

import { motion } from "framer-motion";

const metaRows = [
  {
    label: "Duration",
    value: "5–10 Minutes",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
      </svg>
    ),
  },
  {
    label: "Who",
    value: "Parent + Child Together",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m0 0a4 4 0 118 0m-8 0A4 4 0 019 12m8 8a4 4 0 00-4-3.87" />
      </svg>
    ),
  },
  {
    label: "Level",
    value: "No Experience Needed",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    label: "Cost",
    value: "Completely Free",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Assessment() {
  return (
    <section className="py-16 sm:py-24 bg-warm">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 leading-tight">
            Start the <span className="text-gradient">Assessment</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
            Help us understand your child&apos;s creativity, curiosity, and learning style.
          </p>
        </motion.div>

        {/* macOS window */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl overflow-hidden border border-slate-200"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)" }}
        >
          {/* macOS title bar */}
          <div
            className="flex items-center gap-3 px-4 py-3 border-b border-slate-200"
            style={{ background: "linear-gradient(to bottom, #f5f5f5, #ebebeb)" }}
          >
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#DFA01C]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1DAD2B]" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white/70 border border-slate-300 rounded-md px-4 py-0.5 text-xs text-slate-500 font-medium shadow-sm">
                Student Assessment — PATH AI
              </div>
            </div>
            <div className="w-12 flex-shrink-0" />
          </div>

          {/* Window body */}
          <div className="bg-white px-7 py-7 sm:px-9 sm:py-8">

            {/* Meta rows */}
            <div className="grid grid-cols-2 gap-3 mb-7">
              {metaRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3"
                >
                  <div className="text-slate-400 flex-shrink-0">{row.icon}</div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider leading-none mb-0.5">
                      {row.label}
                    </p>
                    <p className="text-sm font-semibold text-slate-700 leading-tight">{row.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-slate-100 mb-6" />

            {/* Parent notice — macOS terminal style */}
            <div className="rounded-xl overflow-hidden border border-slate-200 mb-7">
              <div
                className="flex items-center gap-2 px-4 py-2 border-b border-slate-200"
                style={{ background: "linear-gradient(to bottom, #f5f5f5, #eeeeee)" }}
              >
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-slate-300" />
                  <div className="w-2 h-2 rounded-full bg-slate-300" />
                  <div className="w-2 h-2 rounded-full bg-slate-300" />
                </div>
                <span className="text-xs text-slate-500 font-medium ml-1">note.txt</span>
              </div>
              <div className="bg-slate-50 px-5 py-4">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                  For Parents
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Please sit with your child while completing this. This is{" "}
                  <span className="font-bold text-slate-800">NOT</span> an academic exam — it helps us
                  understand your child&apos;s creativity, curiosity, and learning style so we can
                  personalise their camp experience.
                </p>
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2.5 w-full text-white font-bold py-3.5 px-6 rounded-xl text-base cursor-pointer transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                boxShadow: "0 6px 24px rgba(37,99,235,0.35)",
              }}
            >
              <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Start Assessment
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          </div>

          {/* macOS status bar */}
          <div
            className="border-t border-slate-200 px-5 py-2 flex items-center justify-center gap-4"
            style={{ background: "linear-gradient(to bottom, #f0f0f0, #e8e8e8)" }}
          >
            <span className="text-[11px] text-slate-400">Opens in a new tab</span>
            <span className="text-slate-300">·</span>
            <span className="text-[11px] text-slate-400">Takes 5–10 minutes</span>
            <span className="text-slate-300">·</span>
            <span className="text-[11px] text-slate-400">Completely free</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
