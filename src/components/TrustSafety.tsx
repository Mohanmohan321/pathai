"use client";

import { m } from "framer-motion";

const included = [
  { text: "12 hours of facilitated learning" },
  { text: "All AI tool access during camp" },
  { text: "Daily snacks included" },
  { text: "Printed materials & RICE poster" },
  { text: "PATH AI completion certificate" },
  { text: "Digital portfolio (all 3 projects)" },
  { text: "Team showcase participation" },
  { text: "Award ceremony & prizes" },
  { text: "WhatsApp parent group" },
];

export default function TrustSafety() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 leading-tight">
            What&apos;s Included in{" "}
            <span className="text-gradient">&#8377;3,999</span>
          </h2>
          <p className="text-lg text-slate-500">One price. No surprises. Everything your child needs.</p>
        </m.div>

        {/* Mac-style window */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="rounded-2xl overflow-hidden border border-slate-200"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)" }}
        >
          {/* Title bar */}
          <div
            className="flex items-center gap-3 px-4 py-3 border-b border-slate-200"
            style={{ background: "linear-gradient(to bottom, #f5f5f5, #ebebeb)" }}
          >
            {/* Traffic lights */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#DFA01C]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1BAD2F]" />
            </div>

            {/* Tab bar */}
            <div className="flex-1 flex items-center justify-center gap-1">
              <div
                className="bg-white border border-slate-200 rounded-md px-4 py-1.5 text-xs font-semibold text-slate-700 flex items-center gap-2"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
              >
                <svg className="w-3.5 h-3.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                What&apos;s Included in &#8377;3,999
              </div>
            </div>

            {/* Spacer to balance traffic lights */}
            <div className="w-16 flex-shrink-0" />
          </div>

          {/* Window body */}
          <div className="bg-white px-6 sm:px-8 pt-6 pb-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {included.map((item, i) => (
                <m.div
                  key={item.text}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors duration-200 group"
                >
                  <div className="w-9 h-9 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-100 group-hover:border-blue-100 transition-colors duration-200">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-700 font-medium leading-snug">{item.text}</span>
                </m.div>
              ))}
            </div>
          </div>

          {/* Status bar */}
          <div
            className="flex items-center justify-between px-6 py-2.5 border-t border-slate-200"
            style={{ background: "linear-gradient(to bottom, #f5f5f5, #ebebeb)" }}
          >
            <span className="text-[11px] text-slate-400">9 items included</span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[11px] text-slate-500 font-semibold">&#8377;3,999 - All-Inclusive</span>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
