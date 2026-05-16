"use client";

import { m } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hidden sm:block absolute -top-24 -right-24 w-72 h-72 rounded-full bg-violet-100 opacity-50 blur-[80px]" />
        <div className="hidden sm:block absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-pink-100 opacity-50 blur-[80px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Watch How PATH AI{" "}
            <span className="text-gradient">Works</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
            3 days, 3 projects, zero coding — see exactly what your child will experience.
          </p>
        </m.div>

        {/* Video embed */}
        <m.div
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
        </m.div>

        {/* Register CTA */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-8"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfKkrfwAX7AQn2wHReINbAWndwi0hc2f5E7xArOyhnKVyTzJw/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg text-base cursor-pointer"
            style={{ boxShadow: "0 8px 28px rgba(14,165,233,0.40)" }}
          >
            Register Now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </m.div>
      </div>
    </section>
  );
}
