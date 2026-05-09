"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "AI is the Skill of This Decade",
    body: "Like typing before it - AI is now the must-have skill. Kids who create with AI today will lead tomorrow.",
    glow: "#3b82f6",
    conic: "conic-gradient(from 0deg, transparent 0% 60%, #7dd3fc 80%, white 90%, #7dd3fc 95%, transparent 100%)",
    bg: "linear-gradient(135deg, #38bdf8 0%, #3b82f6 50%, #2563eb 100%)",
  },
  {
    title: "Every Future Job Will Need It",
    body: "85% of 2030 jobs don't exist yet - but they'll all work alongside AI. Give your child that edge right now.",
    glow: "#f97316",
    conic: "conic-gradient(from 0deg, transparent 0% 60%, #fdba74 80%, white 90%, #fdba74 95%, transparent 100%)",
    bg: "linear-gradient(135deg, #fb923c 0%, #f97316 50%, #ea580c 100%)",
  },
  {
    title: "Creators Beat Consumers",
    body: "Most kids scroll through AI content all day. PATH AI flips the switch - turning them into builders with real AI tools.",
    glow: "#10b981",
    conic: "conic-gradient(from 0deg, transparent 0% 60%, #6ee7b7 80%, white 90%, #6ee7b7 95%, transparent 100%)",
    bg: "linear-gradient(135deg, #34d399 0%, #10b981 50%, #059669 100%)",
  },
];

export default function WhyAI() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Your Child&apos;s Future is Being{" "}
            <span className="text-gradient">Written in AI</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
            The world is changing. The kids who understand AI won&apos;t just survive - they&apos;ll lead.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="relative rounded-3xl p-[2.5px] overflow-hidden cursor-default"
              style={{
                boxShadow: `0 8px 40px ${card.glow}50, 0 2px 8px rgba(0,0,0,0.1)`,
              }}
            >
              {/* Spinning conic border */}
              <div
                className="stat-spin absolute w-[200%] h-[200%] pointer-events-none"
                style={{ top: "-50%", left: "-50%", background: card.conic }}
              />

              {/* Card body */}
              <div className="relative z-10 rounded-[22px] overflow-hidden">
                {/* Gradient header with title */}
                <div
                  className="relative overflow-hidden px-6 pt-6 pb-7 sm:px-7 sm:pt-7"
                  style={{ background: card.bg }}
                >
                  {/* Inner glow */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.20) 0%, transparent 65%)",
                    }}
                  />
                  <div className="absolute top-0 left-0 right-0 h-px bg-white/40" />

                  {/* Large decorative number */}
                  <div className="absolute -right-3 -bottom-4 text-[7rem] font-black text-white/10 leading-none select-none pointer-events-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Title */}
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* White body */}
                <div className="bg-white px-6 py-5 sm:px-7 sm:py-6">
                  <p className="text-slate-500 leading-relaxed text-sm">{card.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
