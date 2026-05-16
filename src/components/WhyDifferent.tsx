"use client";

import { m } from "framer-motion";

const comparisons = [
  { factor: "Duration", them: "8-16 sessions over weeks", us: "3 intensive days" },
  { factor: "Format", them: "Online & passive", us: "Offline, in-person" },
  { factor: "Focus", them: "Coding & technical AI", us: "Creative AI - no code" },
  { factor: "Output", them: "Certificate only", us: "3 real projects + portfolio" },
  { factor: "Style", them: "Lectures & demos", us: "Build-first, learn by doing" },
  { factor: "Price", them: "₹2,000-22,500", us: "₹3,999 all-inclusive" },
];

export default function WhyDifferent() {
  return (
    <section className="py-16 sm:py-24 bg-warm">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Not Your Average{" "}
            <span className="text-gradient">Camp</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
            Most kids&apos; AI programs are long, online, and coding-heavy. PATH AI is the opposite.
          </p>
        </m.div>

        {/* Mac-style window */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border border-slate-200"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)" }}
        >
          {/* Title bar */}
          <div
            className="flex items-center gap-3 px-4 py-3 border-b border-slate-200"
            style={{ background: "linear-gradient(to bottom, #f5f5f5, #ebebeb)" }}
          >
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#DFA01C]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1BAD2F]" />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div
                className="bg-white border border-slate-200 rounded-md px-4 py-1.5 text-xs font-semibold text-slate-700 flex items-center gap-2"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
              >
                <svg className="w-3.5 h-3.5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                PATH AI vs. Others - Side-by-Side
              </div>
            </div>
            <div className="w-16 flex-shrink-0" />
          </div>

          {/* Table header */}
          <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200">
            <div className="p-4 sm:p-5 text-xs font-bold text-slate-400 uppercase tracking-wider">
              Factor
            </div>
            <div className="p-4 sm:p-5 text-xs font-bold text-slate-400 uppercase tracking-wider border-l border-slate-200 text-center">
              Others
            </div>
            <div className="p-4 sm:p-5 text-xs font-bold text-sky-600 uppercase tracking-wider border-l border-slate-200 text-center bg-sky-50/60">
              PATH AI
            </div>
          </div>

          {/* Rows */}
          <div className="bg-white">
            {comparisons.map((row, i) => (
              <m.div
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
              </m.div>
            ))}
          </div>

          {/* Status bar */}
          <div
            className="flex items-center justify-between px-6 py-2.5 border-t border-slate-200"
            style={{ background: "linear-gradient(to bottom, #f5f5f5, #ebebeb)" }}
          >
            <span className="text-[11px] text-slate-400">6 factors compared</span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span className="text-[11px] text-slate-500 font-semibold">PATH AI wins every category</span>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
