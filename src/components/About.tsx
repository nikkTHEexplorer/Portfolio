import { Sparkles, FileText, MapPin, Mail, Phone, Award, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <>
      <section id="about" className="bg-[#E8F3F1] py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-slate-900">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              About Me
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Nikhil Sharma;
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
              Strategy and market intelligence professional with 8 years across telecom, industrial technology, and emerging tech. CS and MBA background, comfortable going deep on technical products and translating that into commercial insight.
              I've worked embedded with global clients, led research teams, and occasionally taken the entrepreneurial detour which mostly taught me that execution is harder than strategy.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-4 max-w-3xl">
              <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Experience</h3>
                </div>
                <h4 className="font-semibold text-slate-900 text-2xl mb-2">8+ Years</h4>
                <p className="text-slate-600 leading-relaxed">Across telecom, industrial technology, and emerging tech sectors.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Education</h3>
                </div>
                <h4 className="font-semibold text-slate-900 text-2xl mb-2">MBA</h4>
                <p className="text-slate-600 leading-relaxed">International Business & Marketing <br/> Symbiosis</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm max-w-3xl mt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Certifications</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Lean Six Sigma Green Belt - CSSGB</h4>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">AI Fluency: Framework & Foundations</h4>
                    <p className="text-sm text-slate-500">By Anthropic</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Talk CTA Section */}
      <section id="contact" className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-sm font-bold tracking-widest uppercase text-emerald-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Let's Talk
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight max-w-3xl">
              Have a complex <br className="hidden md:block" />
              <span className="text-emerald-600">market question?</span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              I work with leadership teams on research briefs, strategy projects, and intelligence mandates. Always open to a conversation.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="mailto:nikhilsharma223656@gmail.com" 
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-full font-medium transition-colors w-fit"
              >
                <Mail className="w-4 h-4" />
                nikhilsharma223656@gmail.com
              </a>
              <a 
                href="tel:+918558985896" 
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-6 py-3 rounded-full font-medium transition-colors w-fit"
              >
                <Phone className="w-4 h-4" />
                +91-8558985896
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
