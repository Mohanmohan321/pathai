"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "3",
    label: "Days Camp",
    sub: "May 15–17, 2026",
    from: "from-sky-400",
    to: "to-blue-600",
    shadow: "shadow-sky-200",
  },
  {
    number: "12+",
    label: "Hours Hands-On",
    sub: "Zero passive lectures",
    from: "from-orange-400",
    to: "to-red-500",
    shadow: "shadow-orange-200",
  },
  {
    number: "3",
    label: "Projects Built",
    sub: "Comic · Video · Deck",
    from: "from-emerald-400",
    to: "to-green-600",
    shadow: "shadow-emerald-200",
  },
  {
    number: "30",
    label: "Max Seats",
    sub: "Small batch only",
    from: "from-amber-400",
    to: "to-orange-500",
    shadow: "shadow-amber-200",
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
              className={`bg-gradient-to-br ${stat.from} ${stat.to} rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-white text-center shadow-xl ${stat.shadow}`}
            >
              <div className="text-4xl sm:text-5xl font-black mb-1 leading-none tracking-tight">
                {stat.number}
              </div>
              <div className="font-bold text-sm sm:text-base text-white/95 leading-tight">
                {stat.label}
              </div>
              <div className="text-xs text-white/75 mt-1">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
