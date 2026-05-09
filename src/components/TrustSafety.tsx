"use client";

import { motion } from "framer-motion";

const trustPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Supervised AI Usage",
    desc: "All AI tool access is supervised by trained facilitators. Students use shared accounts appropriate for their age group. No unsupervised browsing.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Small Batch, Personal Attention",
    desc: "Maximum 25–30 students per batch. Multiple facilitators circulate to help each team. No child is left confused or behind.",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Ethical AI Teaching",
    desc: "We explicitly teach students the difference between learning WITH AI and copying FROM AI. Age-appropriate discussion on AI ethics and responsible use.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Beginner-Friendly, Zero Pressure",
    desc: "No prerequisites. No judging. If your child is shy, quiet, or not 'tech-savvy' — that's totally fine. The camp is designed to meet every child where they are.",
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Collaborative Team Environment",
    desc: "Students work in teams of 4–5 throughout all 3 days. They learn teamwork, communication, and how to support each other's creative ideas.",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Devices Available on Request",
    desc: "Students can bring laptops, tablets, or mobile phones. Spare devices are available at a small additional cost for students who need them.",
    color: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-100",
  },
];

export default function TrustSafety() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-4 py-1.5 rounded-full mb-4">
            Parent Assurance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Safe, Supervised &{" "}
            <span className="text-gradient">Parent-Approved</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We know trust is everything. Here&apos;s how PATH AI ensures your child is in
            a safe, positive, and empowering environment.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`bg-white border ${point.border} rounded-2xl p-5 sm:p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300 cursor-default`}
            >
              <div className={`w-12 h-12 ${point.bg} ${point.color} rounded-xl flex items-center justify-center mb-4`}>
                {point.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-base">{point.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* What's included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-100 rounded-2xl p-6 sm:p-8"
        >
          <h3 className="font-bold text-slate-900 text-lg mb-4 text-center">What&apos;s Included in ₹3,999</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "12 hours of facilitated learning",
              "All AI tool access during camp",
              "Daily snacks included",
              "Printed materials & RICE poster",
              "PATH AI completion certificate",
              "Digital portfolio (all 3 projects)",
              "Team showcase participation",
              "Award ceremony & prizes",
              "WhatsApp group for parents",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
