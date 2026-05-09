export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-lg text-white">PATH</span>
          <span className="font-bold text-lg text-blue-400">AI</span>
          <span className="text-slate-600 mx-2">·</span>
          <span className="text-sm text-slate-500">Powered by SPI Edge</span>
        </div>
        <p className="text-xs text-slate-600">
          &copy; {currentYear} PATH AI · AI Summer Camp · Chennai
        </p>
      </div>
    </footer>
  );
}
