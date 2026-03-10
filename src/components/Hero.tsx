import { ArrowRight, Download, Linkedin } from 'lucide-react';

export default function Hero() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Nikhil_resume_base.docx';
    link.download = 'Nikhil_resume_base.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="container mx-auto px-6 pt-16 lg:pt-20 pb-24 grid lg:grid-cols-2 gap-12 items-center lg:items-start">
      <div className="space-y-8 relative z-10">
        <h1 className="font-bold leading-[1.2] tracking-tight">
          <span className="text-5xl md:text-6xl lg:text-7xl text-slate-900">8 years</span>
          <span className="text-3xl md:text-4xl lg:text-5xl text-slate-600 font-medium"> turning complex market questions into decisions — for leadership teams across </span>
          <span className="text-5xl md:text-6xl lg:text-7xl text-emerald-600">ICT, industrial, and emerging tech.</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
          Strategy Consulting, Account management, Team handling, Market Intelligence, Competitive Research
        </p>
        
        <div className="flex flex-wrap items-center gap-4">
          <button 
            onClick={handleDownload}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-medium flex items-center gap-3 transition-colors w-fit"
          >
            Download My Resume
            <span className="bg-white text-emerald-500 rounded-full p-1">
              <Download className="w-4 h-4" />
            </span>
          </button>
          
          <a 
            href="https://linkedin.com/in/nikhilsharma3"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-medium flex items-center gap-3 transition-colors w-fit"
          >
            LinkedIn Profile
            <span className="bg-slate-200 text-slate-900 rounded-full p-1">
              <Linkedin className="w-4 h-4" />
            </span>
          </a>
        </div>

        <div className="pt-12 border-t border-slate-200 mt-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">Nikhil Sharma </h2>
          <p className="text-sm font-medium text-emerald-600 max-w-md leading-relaxed">
            MBA + Computer Science engineering
          </p>
        </div>
      </div>

      <div className="relative lg:-mt-8">
        <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] flex items-end justify-center scale-110 lg:scale-[1.2] origin-bottom">
          <img 
            src="/Profile.png" 
            alt="Nikhil Sharma" 
            className="w-full h-full object-contain object-bottom drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}
