import { Sparkles, Users, Search, Target, Briefcase } from 'lucide-react';

const capabilities = [
  {
    icon: Users,
    number: '01',
    title: 'Research Ops & Team Leadership',
    description: 'Scoping and structuring research programs, managing delivery teams, building AI-enabled workflows, and translating ambiguous briefs into actionable plans.',
    highlight: false,
  },
  {
    icon: Search,
    number: '02',
    title: 'Market Intelligence',
    description: 'Market sizing, opportunity assessment, and landscape analysis — structured to answer specific strategic questions, not just describe the market.',
    highlight: true,
  },
  {
    icon: Target,
    number: '03',
    title: 'Competitive Intelligence',
    description: 'Competitor profiling, product benchmarking, positioning analysis, and gap mapping — tied to decisions on product, pricing, or go-to-market.',
    highlight: false,
  },
  {
    icon: Briefcase,
    number: '04',
    title: 'GTM & Product Strategy Support',
    description: 'Target market prioritization, supply landscape mapping, and regulatory scenario analysis — grounding strategy development in market reality.',
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="capabilities" className="bg-[#0B2721] text-white py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-emerald-50/80 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            Core <span className="text-emerald-400">Capabilities</span>
          </h2>
          <p className="text-lg text-emerald-50/70">
            Strategic expertise designed to turn complex market questions into actionable decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl transition-all duration-300 bg-white text-slate-900 shadow-lg shadow-emerald-900/10 hover:shadow-xl hover:shadow-emerald-900/20 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-emerald-50 text-emerald-600">
                  <capability.icon className="w-6 h-6" />
                </div>
                <span className="text-3xl font-bold text-slate-200">
                  {capability.number}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{capability.title}</h3>
              <p className="text-base leading-relaxed text-slate-600">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
