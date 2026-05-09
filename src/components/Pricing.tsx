"use client";

import { motion } from "framer-motion";

const included = [
  "3-Day Intensive Camp (May 15-17)",
  "12 Hours of Guided Learning",
  "All AI Tool Access",
  "Daily Snacks Included",
  "Printed Materials & RICE Poster",
  "PATH AI Completion Certificate",
  "Digital Portfolio (3 Projects)",
  "Grand Showcase Participation",
  "Team Awards Ceremony",
  "WhatsApp Parent Group",
];

const urgencyPoints = [
  "Only 25-30 seats per batch",
  "First batch — early bird advantage",
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

        <div className="grid lg:grid-cols-5 gap-6 items-start">
          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white rounded-3xl border border-blue-100 overflow-hidden"
            style={{ boxShadow: "0 8px 60px rgba(37, 99, 235, 0.12)" }}
          >
            {/* Top gradient */}
            <div className="h-2 bg-gradient-to-r from-sky-400 via-blue-500 to-amber-400" />

            <div className="p-7 sm:p-8">
              {/* Badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                  Limited Seats
                </span>
                <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                  First Batch
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl sm:text-6xl font-bold text-slate-900">₹3,999</span>
                  <span className="text-slate-500 text-base">per student</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  All-inclusive - No hidden charges - Snacks included
                </div>
              </div>

              {/* Included list */}
              <div className="grid sm:grid-cols-2 gap-2.5 mb-7">
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-700">{item}</span>
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
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-200 text-base shadow-lg cursor-pointer mb-3"
                style={{ boxShadow: "0 8px 30px rgba(14,165,233,0.38)" }}
              >
                Secure My Child&apos;s Seat
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>

              <p className="text-center text-xs text-slate-500">
                Message us on WhatsApp to register - Payment confirms your seat
              </p>
            </div>
          </motion.div>

          {/* Right sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Urgency card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-rose-50 border border-rose-100 rounded-2xl p-5"
            >
              <h3 className="font-bold text-rose-700 text-sm mb-3 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Why Register Now?
              </h3>
              <div className="space-y-2.5">
                {urgencyPoints.map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-1.5 flex-shrink-0" />
                    <span className="text-sm text-rose-700">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Camp details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm"
            >
              <h3 className="font-bold text-slate-800 text-sm mb-3">Camp Details</h3>
              {[
                { label: "Dates", value: "May 15-17, 2026" },
                { label: "Timing", value: "9:00 AM - 1:00 PM" },
                { label: "Grades", value: "6-9 (Ages 11-14)" },
                { label: "Batch Size", value: "25-30 students" },
                { label: "Format", value: "Offline, In-Person" },
              ].map((detail) => (
                <div key={detail.label} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                  <span className="text-xs text-slate-500">{detail.label}</span>
                  <span className="text-xs font-semibold text-slate-800">{detail.value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
