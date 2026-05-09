"use client";

import { motion } from "framer-motion";

const metaPills = [
  { label: "5-10 Minutes", icon: "⏱" },
  { label: "Parent Assisted", icon: "👨‍👩‍👧" },
  { label: "Beginner Friendly", icon: "🌟" },
  { label: "No Coding Needed", icon: "✅" },
];

export default function Assessment() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-blue-50 via-white to-violet-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-blue-100 shadow-xl overflow-hidden"
          style={{ boxShadow: "0 8px 60px rgba(37, 99, 235, 0.12)" }}
        >
          {/* Top accent */}
          <div className="h-1.5 bg-gradient-to-r from-blue-500 via-violet-500 to-teal-400" />

          <div className="p-7 sm:p-10">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Student Assessment
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 text-center mb-3 leading-tight">
              Start the Assessment
            </h2>
            <p className="text-slate-600 text-center mb-6 leading-relaxed">
              Help us understand your child&apos;s creativity, curiosity, and learning style -
              so we can make their experience even better.
            </p>

            {/* Meta pills */}
            <div className="flex flex-wrap gap-2 justify-center mb-7">
              {metaPills.map((pill) => (
                <span
                  key={pill.label}
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full"
                >
                  <span>{pill.icon}</span>
                  {pill.label}
                </span>
              ))}
            </div>

            {/* Parent notice */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-7">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-800 mb-0.5">For Parents</p>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    Please sit with your ward while completing the assessment.
                    This is <strong>NOT</strong> an academic exam — it helps us understand
                    your child&apos;s creativity, curiosity, and learning style.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-200 text-base shadow-lg hover:shadow-xl cursor-pointer"
              style={{ boxShadow: "0 8px 30px rgba(37, 99, 235, 0.3)" }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              Start Assessment
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>

            <p className="text-center text-xs text-slate-400 mt-3">
              Opens in a new tab · Takes 5-10 minutes · Completely free
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
