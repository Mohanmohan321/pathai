"use client";

import { motion } from "framer-motion";

const included = [
  "3-Day Intensive Camp (May 15–17)",
  "12 Hours of Guided Learning",
  "All AI Tool Access",
  "Daily Snacks Included",
  "Printed Materials & RICE Poster",
  "PATH AI Completion Certificate",
  "Digital Portfolio — 3 Real Projects",
  "Grand Showcase Participation",
  "Team Awards Ceremony",
  "WhatsApp Parent Group",
];

const campDetails = [
  { label: "Dates", value: "May 15–17, 2026" },
  { label: "Timing", value: "9:00 AM – 1:00 PM" },
  { label: "Grades", value: "6–9  (Ages 11–14)" },
  { label: "Batch Size", value: "25–30 students" },
  { label: "Format", value: "Offline, In-Person" },
  { label: "Venue", value: "Mylapore, Chennai" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
            Simple, All-Inclusive{" "}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto">
            One price. Everything included. No hidden charges.
          </p>
        </motion.div>

        {/* ── Row 1: Price Hero ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative rounded-3xl p-[2px] overflow-hidden mb-5"
          style={{ boxShadow: "0 0 60px rgba(14,165,233,0.25)" }}
        >
          {/* Spinning border */}
          <div
            className="stat-spin absolute w-[200%] h-[200%] pointer-events-none"
            style={{
              top: "-50%", left: "-50%",
              background: "conic-gradient(from 0deg, transparent 0% 60%, #7dd3fc 80%, white 90%, #7dd3fc 95%, transparent 100%)",
            }}
          />
          <div
            className="relative z-10 rounded-[22px] flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-8 sm:px-12 sm:py-10"
            style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}
          >
            {/* Price */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-400/30">
                  Limited Seats
                </span>
                <span className="bg-blue-400/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-400/30">
                  First Batch
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-6xl sm:text-7xl font-black text-white tracking-tight">₹3,999</span>
                <span className="text-slate-400 text-base">/ per student</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-emerald-400 font-medium">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                All-inclusive · No hidden charges · Snacks included
              </div>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0 text-center">
              <motion.a
                href="https://wa.me/919025439428?text=Hi%2C%20I%20want%20to%20register%20my%20child%20for%20PATH%20AI%20Summer%20Camp"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold py-4 px-8 rounded-2xl text-base cursor-pointer"
                style={{ boxShadow: "0 8px 28px rgba(14,165,233,0.45)" }}
              >
                Secure My Child&apos;s Seat
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
              <p className="text-xs text-slate-500 mt-2">Message us on WhatsApp · Payment confirms seat</p>
            </div>
          </div>
        </motion.div>

        {/* ── Row 2: Inclusions + Camp Details ── */}
        <div className="grid lg:grid-cols-2 gap-5">

          {/* What's Included */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col"
          >
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">
              Everything Included
            </p>
            <div className="grid sm:grid-cols-2 gap-x-6 flex-1 content-between pt-3">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-300 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Camp Details */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            {/* Details table */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex-1">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">
                Camp Details
              </p>
              <div className="space-y-0">
                {campDetails.map((d, i) => (
                  <div
                    key={d.label}
                    className={`flex justify-between items-center py-3 ${
                      i !== campDetails.length - 1 ? "border-b border-slate-800" : ""
                    }`}
                  >
                    <span className="text-sm text-slate-500">{d.label}</span>
                    <span className="text-sm font-semibold text-white">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Urgency */}
            <div className="bg-sky-950/60 border border-sky-800/50 rounded-3xl p-6 flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-sky-400 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-sky-300 text-sm font-bold mb-0.5">Only 25–30 seats per batch</p>
                <p className="text-slate-400 text-xs">First batch · Early bird advantage</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
