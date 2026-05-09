"use client";

import { motion } from "framer-motion";

const cards = [
  {
    icon: (
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.818a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.845-.143z" clipRule="evenodd" />
      </svg>
    ),
    iconBg: "bg-gradient-to-br from-sky-400 to-blue-600",
    topBar: "from-sky-400 to-blue-600",
    title: "AI is the Skill of This Decade",
    body: "Like typing before it - AI is now the must-have skill. Kids who create with AI today will lead tomorrow.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
        <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
      </svg>
    ),
    iconBg: "bg-gradient-to-br from-orange-400 to-red-500",
    topBar: "from-orange-400 to-red-500",
    title: "Every Future Job Will Need It",
    body: "85% of 2030 jobs don't exist yet - but they'll all work alongside AI. Give your child that edge right now.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5z" clipRule="evenodd" />
      </svg>
    ),
    iconBg: "bg-gradient-to-br from-emerald-400 to-green-600",
    topBar: "from-emerald-400 to-green-600",
    title: "Creators Beat Consumers",
    body: "Most kids scroll through AI content all day. PATH AI flips the switch - turning them into builders with real AI tools.",
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
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 group"
            >
              <div className={`h-1.5 bg-gradient-to-r ${card.topBar}`} />
              <div className="p-6 sm:p-7">
                <div className={`w-14 h-14 ${card.iconBg} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">{card.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{card.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
