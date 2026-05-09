"use client";

import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-violet-100 opacity-50 blur-[80px]" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-pink-100 opacity-50 blur-[80px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-50 border border-sky-100 px-4 py-1.5 rounded-full mb-4">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>
            See It In Action
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Watch How PATH AI{" "}
            <span className="text-gradient">Works</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
            3 days, 3 projects, zero coding — see exactly what your child will experience.
          </p>
        </motion.div>

        {/* Video embed */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.34, 1.1, 0.64, 1] }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-violet-200/60 border border-violet-100"
          style={{ aspectRatio: "16/9" }}
        >
          {/* Gradient top border accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-amber-400 z-10" />

          <iframe
            src="https://www.youtube.com/embed/_L4keoszCqM?rel=0&modestbranding=1&color=white"
            title="PATH AI Summer Camp — How It Works"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>

        {/* Bottom trust pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-3 justify-center mt-8"
        >
          {[
            { icon: "🎨", text: "100% Hands-On" },
            { icon: "🚫", text: "Zero Coding" },
            { icon: "🏆", text: "Real Projects" },
            { icon: "📅", text: "May 15–17, 2026" },
          ].map((pill) => (
            <span
              key={pill.text}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-violet-50 hover:text-violet-700 transition-colors px-4 py-2 rounded-full"
            >
              <span>{pill.icon}</span>
              {pill.text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
