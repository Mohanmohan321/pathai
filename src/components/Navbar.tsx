"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      if (window.scrollY <= 80) setIsMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  function scrollTo(href: string) {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <m.div
      className="fixed z-50"
      animate={{
        top: scrolled ? 12 : 0,
        left: scrolled ? 16 : 0,
        right: scrolled ? 16 : 0,
      }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
    >
      <m.div
        animate={{
          borderRadius: scrolled ? 24 : 0,
          backgroundColor: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.97)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(99,102,241,0.12), 0 2px 8px rgba(0,0,0,0.06)"
            : "0 1px 16px rgba(0,0,0,0.07)",
        }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        style={{
          backdropFilter: "blur(20px)",
          border: scrolled ? "1px solid rgba(226,232,240,0.8)" : "1px solid rgba(226,232,240,0.5)",
        }}
      >
        {/* Nav inner */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-0.5 cursor-pointer flex-shrink-0">
            <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${scrolled ? "text-slate-900" : "text-slate-900"}`}>
              PATH{" "}
            </span>
            <span className="font-bold text-xl text-blue-600 tracking-tight">AI</span>
            <span className={`hidden sm:inline text-[11px] ml-2 font-normal border-l pl-2 transition-colors duration-300 ${scrolled ? "text-slate-400 border-slate-200" : "text-slate-500 border-slate-300"}`}>
              by SPI Edge
            </span>
          </a>

          {/* Desktop Nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 cursor-pointer font-medium px-3 py-2 rounded-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/919025439428"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-sm text-green-600 hover:text-green-700 font-medium transition-colors cursor-pointer px-3 py-2 rounded-full hover:bg-green-50"
            >
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
            <m.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfKkrfwAX7AQn2wHReINbAWndwi0hc2f5E7xArOyhnKVyTzJw/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
            >
              Register Now
            </m.a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-slate-600 cursor-pointer rounded-full hover:bg-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <m.div
                animate={isMenuOpen ? "open" : "closed"}
                className="flex flex-col gap-1 w-5"
              >
                <m.span
                  variants={{ open: { rotate: 45, y: 6 }, closed: { rotate: 0, y: 0 } }}
                  transition={{ duration: 0.2 }}
                  className="block h-0.5 bg-slate-700 rounded-full"
                />
                <m.span
                  variants={{ open: { opacity: 0, scaleX: 0 }, closed: { opacity: 1, scaleX: 1 } }}
                  transition={{ duration: 0.2 }}
                  className="block h-0.5 bg-slate-700 rounded-full"
                />
                <m.span
                  variants={{ open: { rotate: -45, y: -6 }, closed: { rotate: 0, y: 0 } }}
                  transition={{ duration: 0.2 }}
                  className="block h-0.5 bg-slate-700 rounded-full"
                />
              </m.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu — slides in under the pill */}
        <AnimatePresence>
          {isMenuOpen && (
            <m.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div
                className="border-t mx-2 mb-2"
                style={{ borderColor: "rgba(226,232,240,0.6)" }}
              >
                <nav className="px-3 py-3 flex flex-col gap-1">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-slate-700 font-medium py-2.5 px-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer text-sm"
                      onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); setTimeout(() => scrollTo(link.href), 150); }}
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="border-t border-slate-100 mt-2 pt-2 flex flex-col gap-2">
                    <a
                      href="https://wa.me/919025439428"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-600 font-medium py-2.5 px-3 rounded-xl hover:bg-green-50 transition-colors text-sm"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      WhatsApp Us
                    </a>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfKkrfwAX7AQn2wHReINbAWndwi0hc2f5E7xArOyhnKVyTzJw/viewform?usp=publish-editor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white text-center font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Register Now - ₹3,999
                    </a>
                  </div>
                </nav>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </m.div>

      {/* Curved bottom wave — only visible when NOT scrolled and at very top */}
      <AnimatePresence>
        {!scrolled && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 right-0 bottom-0 pointer-events-none overflow-hidden"
            style={{ height: 20, bottom: -20 }}
          >
            <svg
              viewBox="0 0 1440 20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M0,0 Q360,20 720,12 Q1080,4 1440,18 L1440,0 Z"
                fill="rgba(255,255,255,0)"
              />
            </svg>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
}
