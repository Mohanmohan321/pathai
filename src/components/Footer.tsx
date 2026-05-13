export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900">

      {/* Main footer content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <span className="font-black text-2xl text-white">PATH</span>
              <span className="font-black text-2xl text-blue-400">AI</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-xs">
              A 3-day immersive AI camp for students in grades 5–9 (ages 10–14). No coding. Real projects. Real confidence.
            </p>
            <p className="text-xs text-slate-600">Powered by SPI Edge · Building Future-Ready Humans</p>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Navigate</h4>
            <ul className="space-y-3">
              {[
                { label: "About PATH AI", href: "#about" },
                { label: "Curriculum", href: "#curriculum" },
                { label: "Venue", href: "#venue" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Camp Details */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Camp Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-white text-sm font-semibold">May 15–17, 2026</p>
                  <p className="text-slate-500 text-xs">9:00 AM – 1:00 PM each day</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-white text-sm font-semibold">Sahanas - Art your way, Mylapore</p>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    No. 15 (Old No. 7), First Floor, Unit 2,<br />
                    D&apos;Silva Road, near HDFC Bank,<br />
                    Abiramapuram, Chennai
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            &copy; {currentYear} PATH AI · AI Summer Camp · Chennai, India
          </p>
          <p className="text-xs text-slate-700">
            Designed with care for the next generation of creators
          </p>
        </div>
      </div>
    </footer>
  );
}
