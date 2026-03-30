import { useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

const leadershipWorks = [
  {
    id: 'lead-0',
    number: '01',
    category: 'RESEARCH LEADERSHIP · NETSCRIBES',
    title: 'Team Building & Client Growth',
    description: 'A growing client account needed a research team that could operate with consistency, handle ambiguous briefs independently, and sustain direct client relationships.',
    whatWasDone: 'Mentored and expanded a team of industry analysts — setting research standards, reviewing outputs, running quality checks, and coaching analysts on structuring problem statements and communicating with senior stakeholders.',
    output: 'Increased direct client engagement by 50% over two years, with analysts progressively handling client-facing responsibilities independently.'
  },
  {
    id: 'lead-1',
    number: '02',
    category: 'RESEARCH OPS · NETSCRIBES & GLOBALDATA',
    title: 'AI-Enabled Research Workflows',
    description: 'High-volume research delivery was bottlenecked by repetitive, low-complexity tasks that consumed analyst bandwidth disproportionately.',
    whatWasDone: 'Identified workflow segments suitable for AI augmentation, introduced structured prompting frameworks for profiling and news monitoring tasks, and trained team members on integrating these into standard delivery processes.',
    output: 'Improved turnaround time on repetitive profiling tasks at Netscribes; reduced delivery schedule by 20%+ at GlobalData by automating low-priority write-ups.'
  }
];

const icWorks = [
  {
    id: 'ic-0',
    number: '01',
    category: 'EMERGING TECH INTELLIGENCE · GLOBALDATA',
    title: 'Mapping the Generative AI Startup Landscape',
    description: 'Produce a structured insight report on the GenAI and Synthetic Data startup ecosystem for a global analyst audience.',
    whatWasDone: 'Scoped technology trends, mapped and distilled startup products across the value chain, and coordinated across internal data teams to build a coherent narrative from fragmented signals.',
    output: 'Published Startup Series reports used by enterprise clients for technology benchmarking and investment tracking.'
  },
  {
    id: 'ic-1',
    number: '02',
    category: 'GTM STRATEGY SUPPORT · ATLAS COPCO GROUP',
    title: 'Market Entry Intelligence for Data Center Tightening Solutions',
    description: 'Identify where and how to expand the client base for a specialist industrial product entering the data center market.',
    whatWasDone: 'Mapped key ecosystem players where the product fit, built a geo-based visualization for sales teams showing player locations and key account intel, and scoped macro industry movements — capacity build-out, investment flows, key developers, and lead time dynamics.',
    output: 'A sales-ready intelligence layer that gave the commercial team a clear picture of where to go and who to target first.'
  },
  {
    id: 'ic-2',
    number: '03',
    category: 'TELECOM RESEARCH · OMDIA VIA SG ANALYTICS',
    title: '5G & Digital Transformation Forecasts for APAC Operators',
    description: 'Track and forecast how APAC telecom operators were positioning across 5G, cloud, and digital services — and translate that into actionable client intelligence.',
    whatWasDone: 'Produced operator-level KPI forecasts, authored insight reports and opinion pieces, and managed quarterly business reviews with direct client interaction.',
    output: 'Sustained intelligence used by operator clients and industry stakeholders to benchmark competitive positioning and inform roadmap decisions.'
  },
  {
    id: 'ic-3',
    number: '04',
    category: 'PRODUCT STRATEGY SUPPORT · ATLAS COPCO GROUP',
    title: 'Competitive Gap Analysis for Medical Filtration Products',
    description: 'Understand how competitor products are positioned and where the client\'s product line has gaps.',
    whatWasDone: 'Assessed competitor products and their selling criteria, ran a structured gap analysis against the client\'s portfolio, and coordinated with the patent team to surface future product development gaps.',
    output: 'Directly shaped product strategy for key product lines under a medical filtration sub-brand — influencing what gets built, improved, or deprioritized.'
  }
];

export default function SelectedWork() {
  const [expandedId, setExpandedId] = useState<string | null>('ic-0');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const renderWorkCard = (work: any) => {
    const isExpanded = expandedId === work.id;
    return (
      <div 
        key={work.id} 
        className={`rounded-3xl transition-all duration-500 border flex flex-col overflow-hidden ${
          isExpanded 
            ? 'bg-[#0B2721] border-[#0B2721] text-white shadow-xl shadow-emerald-900/20' 
            : 'bg-[#e8f3f1] border-slate-100 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-slate-200/50'
        }`}
      >
        <button 
          onClick={() => toggleExpand(work.id)}
          className="w-full text-left p-8 flex flex-col h-full"
        >
          <div className="flex justify-between items-start w-full mb-8">
            <span className={`text-4xl font-bold text-[#00bc7d]`}>
              {work.number}
            </span>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              isExpanded ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white text-slate-400 shadow-sm'
            }`}>
              {isExpanded ? <ArrowUp className="w-5 h-5" /> : <ArrowDown className="w-5 h-5" />}
            </div>
          </div>
          
          <div className={`text-[10px] font-bold tracking-widest uppercase mb-4 ${
            isExpanded ? 'text-emerald-400' : 'text-emerald-600'
          }`}>
            {work.category}
          </div>
          
          <h3 className={`text-xl font-bold mb-4 leading-snug ${isExpanded ? 'text-white' : 'text-slate-900'}`}>
            {work.title}
          </h3>
          
          <p className={`text-sm leading-relaxed mb-2 ${
            isExpanded ? 'text-emerald-50/80' : 'text-slate-600'
          }`}>
            {work.description}
          </p>

          {/* Expanded Content */}
          <div 
            className={`grid transition-all duration-500 ease-in-out w-full text-left ${
              isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'
            }`}
          >
            <div className="overflow-hidden">
              <div className="space-y-6 pt-6 border-t border-white/10">
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-emerald-400/60 mb-2">
                    WHAT WAS DONE
                  </div>
                  <p className="text-emerald-50/90 text-sm leading-relaxed">
                    {work.whatWasDone}
                  </p>
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-emerald-400/60 mb-2">
                    IMPACT / OUTPUT
                  </div>
                  <p className="text-emerald-50/90 text-sm leading-relaxed">
                    {work.output}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    );
  };

  return (
    <section id="work" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            SELECTED WORK
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 max-w-2xl leading-tight">
            Problems solved, <span className="text-emerald-500">decisions influenced</span>
          </h2>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
            Mentoring & Leadership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {leadershipWorks.map(renderWorkCard)}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
            Individual Contributor
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start mb-12">
            {icWorks.map(renderWorkCard)}
          </div>
          
          <div className="pt-8 border-t border-slate-100">
            <h4 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-6">
              Industries Served
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                'ICT',
                'Telecom',
                'Heavy Industrial equipment',
                'Emerging Tech scoping',
                'Generative AI',
                'Data Centers',
                'Medical Devices'
              ].map((industry, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-sm font-medium hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-colors"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
