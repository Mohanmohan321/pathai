"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Does my child need to know coding?",
    a: "Absolutely not. Zero coding knowledge required. PATH AI focuses on creative AI use - prompting, storytelling, design, and video production. If your child can type and is curious, they're ready.",
  },
  {
    q: "Is AI safe for children aged 10-14?",
    a: "Yes. All AI tool usage is supervised by trained facilitators. For students under 13, we use shared or teacher-managed accounts. We also teach age-appropriate AI ethics - how to use AI responsibly and the difference between learning with AI vs copying from it.",
  },
  {
    q: "What device does my child need?",
    a: "A laptop, tablet, or mobile phone works. Devices are available on request at a small additional cost for students who need them. We recommend a laptop or tablet for the best experience.",
  },
  {
    q: "Is this camp online or offline?",
    a: "Fully offline and in-person. We believe the best learning happens face-to-face, in teams, with real facilitators. The camp runs May 18-20, 2026 from 9 AM to 1 PM each day.",
  },
  {
    q: "Will parents receive their child's projects?",
    a: "Yes! All 3 projects - the AI presentation, the comic book, and the video - are shared digitally with parents at the end of Day 3. It's a real portfolio your child built themselves.",
  },
  {
    q: "My child is shy. Will they be okay?",
    a: "Absolutely. The camp is designed to be inclusive and supportive. Students work in small teams of 4-5, which naturally reduces pressure. Facilitators are trained to include every student. Many shy students end up being the most creatively expressive by Day 3.",
  },
  {
    q: "What if my child doesn't enjoy it?",
    a: "We've designed the camp to feel like play. Students choose their own themes (Space, Sports, Wildlife, etc.) and create projects about topics they love. Most students wish the camp was longer!",
  },
  {
    q: "How is PATH AI different from other coding or AI camps?",
    a: "Most camps are long (8-16 sessions), online, and coding-heavy. PATH AI is 3 days, fully offline, and focuses on creative AI use. Students walk away with a real portfolio - not just a certificate.",
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
      className={`border-b border-slate-100 last:border-0 transition-colors duration-200 ${open ? "bg-blue-50/30" : "bg-white hover:bg-slate-50/60"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-800 text-sm sm:text-base leading-snug">{q}</span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 border border-blue-100"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
            <div className="px-6 pb-5">
              <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Questions?{" "}
            <span className="text-gradient">We&apos;ve Got Answers</span>
          </h2>
          <p className="text-lg text-slate-600">
            Still not sure? Here are the questions parents ask us most often.
          </p>
        </motion.div>

        {/* Mac-style window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="rounded-2xl overflow-hidden border border-slate-200"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)" }}
        >
          {/* Title bar */}
          <div
            className="flex items-center gap-3 px-4 py-3 border-b border-slate-200"
            style={{ background: "linear-gradient(to bottom, #f5f5f5, #ebebeb)" }}
          >
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#DFA01C]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1BAD2F]" />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div
                className="bg-white border border-slate-200 rounded-md px-4 py-1.5 text-xs font-semibold text-slate-700 flex items-center gap-2"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
              >
                <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Frequently Asked Questions
              </div>
            </div>
            <div className="w-16 flex-shrink-0" />
          </div>

          {/* Window body - accordion */}
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>

          {/* Status bar */}
          <div
            className="flex items-center justify-between px-6 py-2.5 border-t border-slate-200"
            style={{ background: "linear-gradient(to bottom, #f5f5f5, #ebebeb)" }}
          >
            <span className="text-[11px] text-slate-400">8 questions answered</span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[11px] text-slate-500 font-semibold">Still curious? Chat with us</span>
            </div>
          </div>
        </motion.div>

        {/* Register Now CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfKkrfwAX7AQn2wHReINbAWndwi0hc2f5E7xArOyhnKVyTzJw/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold px-10 py-4 rounded-full transition-all duration-200 cursor-pointer text-base shadow-lg"
            style={{ boxShadow: "0 8px 28px rgba(14,165,233,0.40)" }}
          >
            Register Now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>

        {/* CTA after FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-center bg-blue-50 border border-blue-100 rounded-2xl p-6"
        >
          <p className="text-slate-700 font-semibold mb-1">Still have questions?</p>
          <p className="text-sm text-slate-500 mb-4">
            Our team is just a WhatsApp message away.
          </p>
          <a
            href="https://wa.me/919025439428"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer text-sm"
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
