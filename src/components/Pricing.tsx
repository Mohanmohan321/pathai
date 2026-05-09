"use client";

import { motion } from "framer-motion";

const included = [
  { icon: "🏕️", text: "3-Day Intensive Camp (May 15-17)" },
  { icon: "⏱️", text: "12 Hours of Guided Learning" },
  { icon: "🤖", text: "All AI Tool Access" },
  { icon: "🍎", text: "Daily Snacks Included" },
  { icon: "📄", text: "Printed Materials & RICE Poster" },
  { icon: "🎓", text: "PATH AI Completion Certificate" },
  { icon: "💼", text: "Digital Portfolio (3 Projects)" },
  { icon: "🎭", text: "Grand Showcase Participation" },
  { icon: "🏆", text: "Team Awards Ceremony" },
  { icon: "💬", text: "WhatsApp Parent Group" },
];

const campDetails = [
  { label: "Dates", value: "May 15-17, 2026" },
  { label: "Timing", value: "9:00 AM - 1:00 PM" },
  { label: "Grades", value: "6-9 (Ages 11-14)" },
  { label: "Batch Size", value: "25-30 students" },
  { label: "Format", value: "Offline, In-Person" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Simple, All-Inclusive{" "}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            One price. Everything included. No hidden charges.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-5 items-start">

          {/* Main pricing card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-3 bg-white rounded-3xl border border-slate-200 overflow-hidden"
            style={{ boxShadow: "0 8px 40px rgba(14,165,233,0.10), 0 2px 8px rgba(0,0,0,0.06)" }}
          >
            <div className="h-1.5 bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500" />
            <div className="p-7 sm:p-8">
              {/* Badges */}
              <div className="flex items-center gap-2 mb-5">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">
                  Limited Seats
                </span>
                <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                  First Batch
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-1.5">
                  <span className="text-5xl sm:text-6xl font-bold text-slate-900">₹3,999</span>
                  <span className="text-slate-400 text-base font-medium">/ per student</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-emerald-600 font-medium">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  All-inclusive · No hidden charges · Snacks included
                </div>
              </div>

              <div className="border-t border-slate-100 mb-5" />

              {/* Included items */}
              <div className="grid sm:grid-cols-2 gap-1.5 mb-7">
                {included.map((item) => (
                  <div key={item.text} className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors duration-150">
                    <span className="text-base leading-none flex-shrink-0">{item.icon}</span>
                    <span className="text-sm text-slate-700 leading-snug">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="https://wa.me/919025439428?text=Hi%2C%20I%20want%20to%20register%20my%20child%20for%20PATH%20AI%20Summer%20Camp"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-200 text-base cursor-pointer mb-3"
                style={{ boxShadow: "0 8px 28px rgba(14,165,233,0.38)" }}
              >
                Secure My Child&apos;s Seat
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
              <p className="text-center text-xs text-slate-400">
                Message us on WhatsApp · Payment confirms your seat
              </p>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Camp details card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
            >
              <div className="h-1.5 bg-gradient-to-r from-violet-400 to-sky-400" />
              <div className="p-5">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Camp Details</p>
                <div className="space-y-0">
                  {campDetails.map((detail, i) => (
                    <div
                      key={detail.label}
                      className={`flex justify-between items-center py-2.5 ${i !== campDetails.length - 1 ? "border-b border-slate-50" : ""}`}
                    >
                      <span className="text-sm text-slate-400">{detail.label}</span>
                      <span className="text-sm font-semibold text-slate-800">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Seats notice card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="bg-white rounded-3xl border border-sky-100 overflow-hidden"
              style={{ boxShadow: "0 4px 20px rgba(14,165,233,0.10)" }}
            >
              <div className="h-1.5 bg-gradient-to-r from-sky-400 to-blue-500" />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                  <p className="text-xs font-bold text-sky-700 uppercase tracking-widest">Seats Filling Fast</p>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">Only 25-30 seats per batch</p>
                <p className="text-sm text-slate-500 mb-3">First batch - early bird advantage</p>
                <div className="text-xs text-sky-600 bg-sky-50 border border-sky-100 rounded-xl px-3 py-2">
                  Payment confirms your seat instantly
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
