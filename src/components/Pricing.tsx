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

const urgencyPoints = [
  "Only 25-30 seats per batch",
  "First batch - early bird advantage",
  "Camp starts May 15, 2026",
  "Confirmed seats only via payment",
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

        {/* Mac-style window */}
        <motion.div
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
                <svg className="w-3.5 h-3.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
                PATH AI Summer Camp - Registration
              </div>
            </div>
            <div className="w-16 flex-shrink-0" />
          </div>

          {/* Window body */}
          <div className="bg-white">
            <div className="grid lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">

              {/* Left — Price + inclusions */}
              <div className="lg:col-span-3 p-7 sm:p-8">
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

                {/* Divider */}
                <div className="border-t border-slate-100 mb-5" />

                {/* Included items */}
                <div className="grid sm:grid-cols-2 gap-2">
                  {included.map((item) => (
                    <div key={item.text} className="flex items-center gap-2.5 py-1.5">
                      <span className="text-base leading-none flex-shrink-0">{item.icon}</span>
                      <span className="text-sm text-slate-700 leading-snug">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Camp details + urgency */}
              <div className="lg:col-span-2 flex flex-col divide-y divide-slate-100">

                {/* Camp details */}
                <div className="p-6">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Camp Details</p>
                  <div className="space-y-3">
                    {campDetails.map((detail) => (
                      <div key={detail.label} className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">{detail.label}</span>
                        <span className="text-sm font-semibold text-slate-800">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Urgency */}
                <div className="p-6 bg-rose-50/60 flex-1">
                  <p className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Why Register Now?
                  </p>
                  <div className="space-y-2.5">
                    {urgencyPoints.map((point) => (
                      <div key={point} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 flex-shrink-0" />
                        <span className="text-sm text-rose-700 leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* CTA bar — acts as macOS status/toolbar */}
          <div
            className="flex flex-col sm:flex-row items-center gap-3 px-6 py-4 border-t border-slate-200"
            style={{ background: "linear-gradient(to bottom, #f5f5f5, #ebebeb)" }}
          >
            <motion.a
              href="https://wa.me/919025439428?text=Hi%2C%20I%20want%20to%20register%20my%20child%20for%20PATH%20AI%20Summer%20Camp"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 text-base cursor-pointer"
              style={{ boxShadow: "0 4px 20px rgba(14,165,233,0.35)" }}
            >
              Secure My Child&apos;s Seat
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
            <p className="text-[11px] text-slate-400 sm:whitespace-nowrap">
              Message us on WhatsApp · Payment confirms your seat
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
