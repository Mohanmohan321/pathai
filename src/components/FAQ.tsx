"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Does my child need to know coding?",
    a: "Absolutely not. Zero coding knowledge required. PATH AI focuses on creative AI use — prompting, storytelling, design, and video production. If your child can type and is curious, they're ready.",
  },
  {
    q: "Is AI safe for children aged 11–14?",
    a: "Yes. All AI tool usage is supervised by trained facilitators. For students under 13, we use shared or teacher-managed accounts. We also teach age-appropriate AI ethics — how to use AI responsibly and the difference between learning with AI vs copying from it.",
  },
  {
    q: "What device does my child need?",
    a: "A laptop, tablet, or mobile phone works. Devices are available on request at a small additional cost for students who need them. We recommend a laptop or tablet for the best experience.",
  },
  {
    q: "Is this camp online or offline?",
    a: "Fully offline and in-person. We believe the best learning happens face-to-face, in teams, with real facilitators. The camp runs May 15–17, 2026 from 9 AM to 1 PM each day.",
  },
  {
    q: "Will parents receive their child's projects?",
    a: "Yes! All 3 projects — the AI presentation, the comic book, and the video — are shared digitally with parents at the end of Day 3. It's a real portfolio your child built themselves.",
  },
  {
    q: "My child is shy. Will they be okay?",
    a: "Absolutely. The camp is designed to be inclusive and supportive. Students work in small teams of 4–5, which naturally reduces pressure. Facilitators are trained to include every student. Many shy students end up being the most creatively expressive by Day 3.",
  },
  {
    q: "What if my child doesn't enjoy it?",
    a: "We've designed the camp to feel like play. Students choose their own themes (Space, Sports, Wildlife, etc.) and create projects about topics they love. Most students wish the camp was longer!",
  },
  {
    q: "How is PATH AI different from other coding or AI camps?",
    a: "Most camps are long (8–16 sessions), online, and coding-heavy. PATH AI is 3 days, fully offline, and focuses on creative AI use. Students walk away with a real portfolio — not just a certificate.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border border-slate-200 rounded-2xl overflow-hidden bg-white"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer hover:bg-slate-50 transition-colors duration-200"
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-800 text-sm sm:text-base leading-snug">{q}</span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-7 h-7 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 border-t border-slate-100">
              <p className="text-sm text-slate-600 leading-relaxed pt-4">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold text-slate-600 uppercase tracking-widest bg-slate-100 px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Questions?{" "}
            <span className="text-gradient">We&apos;ve Got Answers</span>
          </h2>
          <p className="text-lg text-slate-600">
            Still not sure? Here are the questions parents ask us most often.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>

        {/* CTA after FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center bg-blue-50 border border-blue-100 rounded-2xl p-6"
        >
          <p className="text-slate-700 font-semibold mb-1">Still have questions?</p>
          <p className="text-sm text-slate-500 mb-4">
            Our team is just a WhatsApp message away.
          </p>
          <a
            href="https://wa.me/919025439428"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer text-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Chat with us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
