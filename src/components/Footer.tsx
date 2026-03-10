export default function Footer() {
  return (
    <footer className="bg-[#0B2721] text-emerald-50/60 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center font-bold text-sm">
              NS
            </div>
            <span className="font-semibold text-xl tracking-tight">Nikhil Sharma</span>
          </div>
          
          <div className="flex items-center gap-8 text-sm">
            <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Nikhil Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
