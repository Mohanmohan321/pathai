"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "3",
    label: "Days Camp",
    sub: "May 15-17, 2026",
    gradient: "linear-gradient(135deg, #38bdf8, #2563eb)",
    dotDelay: "0s",
  },
  {
    number: "12+",
    label: "Hours Hands-On",
    sub: "Zero passive lectures",
    gradient: "linear-gradient(135deg, #fb923c, #ef4444)",
    dotDelay: "0.8s",
  },
  {
    number: "3",
    label: "Projects Built",
    sub: "Comic · Video · Deck",
    gradient: "linear-gradient(135deg, #34d399, #059669)",
    dotDelay: "1.6s",
  },
  {
    number: "30",
    label: "Max Seats",
    sub: "Small batch only",
    gradient: "linear-gradient(135deg, #fbbf24, #f97316)",
    dotDelay: "2.4s",
  },
];

export default function StatsBar() {
  return (
    <section className="py-10 sm:py-14 bg-warm">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="stat-outer"
            >
              {/* Card — rendered first so dot appears above it */}
              <div
                className="stat-card p-6 sm:p-7 text-white text-center"
                style={{ background: stat.gradient }}
              >
                <div className="stat-ray" />
                <div className="stat-line top" />
                <div className="stat-line left" />
                <div className="stat-line bottom" />
                <div className="stat-line right" />

                <div className="relative z-10">
                  <div className="text-4xl sm:text-5xl font-black mb-1 leading-none tracking-tight">
                    {stat.number}
                  </div>
                  <div className="font-bold text-sm sm:text-base text-white/95 leading-tight">
                    {stat.label}
                  </div>
                  <div className="text-xs text-white/70 mt-1">{stat.sub}</div>
                </div>
              </div>

              {/* Moving dot — rendered after card so it paints on top */}
              <div className="stat-dot" style={{ animationDelay: stat.dotDelay }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
