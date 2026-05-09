"use client";

import { motion } from "framer-motion";

const comparisons = [
  { factor: "Duration", them: "8–16 sessions over weeks", us: "3 intensive days" },
  { factor: "Format", them: "Online & passive", us: "Offline, in-person" },
  { factor: "Focus", them: "Coding & technical AI", us: "Creative AI — no code" },
  { factor: "Output", them: "Certificate only", us: "3 real projects + portfolio" },
  { factor: "Style", them: "Lectures & demos", us: "Build-first, learn by doing" },
  { factor: "Price", them: "₹2,000–22,500", us: "₹3,999 all-inclusive" },
];

export default function WhyDifferent() {
  return (
    <section className="py-16 sm:py-24 bg-warm">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-50 border border-sky-100 px-4 py-1.5 rounded-full mb-4">
            Why PATH AI
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Not Your Average{" "}
            <span className="text-gradient">Camp</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
            Most kids&apos; AI programs are long, online, and coding-heavy. PATH AI is the opposite.
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm"
        >
          {/* Header */}
          <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200">
            <div className="p-4 sm:p-5 text-xs font-bold text-slate-400 uppercase tracking-wider">
              Factor
            </div>
            <div className="p-4 sm:p-5 text-xs font-bold text-slate-400 uppercase tracking-wider border-l border-slate-200 text-center">
              Others
            </div>
            <div className="p-4 sm:p-5 text-xs font-bold text-sky-600 uppercase tracking-wider border-l border-slate-200 text-center bg-sky-50">
              PATH AI
            </div>
          </div>

          {comparisons.map((row, i) => (
            <motion.div
              key={row.factor}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`grid grid-cols-3 border-b border-slate-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}`}
            >
              <div className="p-4 sm:p-5 text-sm font-semibold text-slate-700">{row.factor}</div>
              <div className="p-4 sm:p-5 text-sm text-slate-400 border-l border-slate-100 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                {row.them}
              </div>
              <div className="p-4 sm:p-5 text-sm font-semibold text-sky-700 border-l border-sky-100 bg-sky-50/40 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {row.us}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
