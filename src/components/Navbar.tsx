export default function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-6 flex items-center justify-between relative z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full border-2 border-slate-900 flex items-center justify-center font-bold text-sm">
          NS
        </div>
        <span className="font-semibold text-xl tracking-tight">Nikhil Sharma</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#capabilities" className="text-slate-900 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          Capabilities
        </a>
        <a href="#work" className="hover:text-slate-900 transition-colors">Work</a>
        <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
        <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
      </div>
    </nav>
  );
}
