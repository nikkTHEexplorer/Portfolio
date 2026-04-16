export default function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-6 relative z-50">
      <div className="mx-auto flex w-fit max-w-full items-center justify-center gap-10 rounded-[2rem] border border-white/70 bg-white/72 px-7 py-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl md:px-9">
        <div className="flex items-center justify-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-full border-2 border-slate-900 flex items-center justify-center font-bold text-base bg-white/85">
            NS
          </div>
          <span className="font-semibold text-2xl tracking-tight text-center">Nikhil Sharma</span>
        </div>

        <div className="hidden md:flex items-center justify-center gap-8 text-base font-medium text-slate-600">
          <a href="#capabilities" className="text-slate-900 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Capabilities
          </a>
          <a href="#work" className="hover:text-slate-900 transition-colors">Work</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}
