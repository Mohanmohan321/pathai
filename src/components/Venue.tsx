"use client";

import { m } from "framer-motion";
import Image from "next/image";

export default function Venue() {
  return (
    <section id="venue" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Where the{" "}
            <span className="text-gradient">Camp Happens</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            A dedicated learning space designed for collaboration, creativity, and hands-on work.
          </p>
        </m.div>

        {/* Venue Partner Card */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-3xl p-6 sm:p-8"
          style={{ boxShadow: "0 8px 40px rgba(251,191,36,0.15)" }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">

            {/* Logo */}
            <a
              href="https://euphoriaworld.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-white rounded-2xl p-4 shadow-md border border-amber-100 hover:shadow-lg transition-shadow duration-200"
            >
              <Image
                src="/venue/venue2logo.webp"
                alt="Euphoria World Cafe"
                width={120}
                height={80}
                className="object-contain"
              />
            </a>

            {/* Address + Map */}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-base font-bold text-slate-800 mb-1">Euphoria World Cafe</p>
              <div className="flex items-start gap-3 justify-center sm:justify-start mb-4">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                    30, R.V. Nagar, Thiruvalluvar Nagar,
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    VOC Nagar, Annanagar East,
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Chennai, Tamil Nadu 600102
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                <a
                  href="https://maps.app.goo.gl/iKQQBisZ3v5YPN8u7?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 text-sm shadow-md cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Get Directions
                </a>
                <a
                  href="https://euphoriaworld.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white hover:bg-amber-50 text-amber-700 border border-amber-200 font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 text-sm shadow-sm cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </m.div>

      </div>
    </section>
  );
}
