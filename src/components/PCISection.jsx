import React from 'react';
import { FileJson, Zap, Layers, Workflow, Globe, BarChart3, CheckCircle, RefreshCcw, FileText, ShieldCheck, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { LoopingCounter } from './LoopingCounter';

export const PCISection = () => {
  const features = [
    { icon: <FileJson />, title: "Auto-generate SAQ's", desc: "Create Self-Assessment Questionnaires in seconds." },
    { icon: <Zap />, title: "Seamless Boarding", desc: "Instant merchant onboarding and conversion." },
    { icon: <Layers />, title: "Multi-Level Hierarchy", desc: "Manage ISOs, agents, and merchants easily." },
    { icon: <Workflow />, title: "Complete Automation", desc: "Full API integration for hands-off management." },
    { icon: <Globe />, title: "Multi-Language", desc: "Support for global merchant bases." },
    { icon: <BarChart3 />, title: "Auto Reports", desc: "Scheduled compliance reporting delivered to you." },
  ];

  return (
    <section id="pci" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
         <div className="absolute top-40 left-10 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
         <div className="absolute top-40 right-10 w-64 h-64 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter">
            ENCYTRO <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-500">PCI</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-500 mb-8 max-w-2xl mx-auto">
             Simply Put, No Other Portal Competes.
          </h3>
          <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Payment Card Industry (PCI) standards are vital. We provide a white-labeled, fully automated solution designed to remove the headache of compliance.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mb-12 relative cursor-default">
              <div className="text-8xl md:text-9xl font-black mb-2 tracking-tighter flex items-center justify-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-500">
                 <LoopingCounter target={90} />
              </div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em]">
                Reduction in Customer Support
              </div>
          </div>
        </Reveal>

        <Reveal delay={300} className="w-full flex flex-col items-center">
          <div className="relative w-full max-w-3xl z-30">
             <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl overflow-hidden transition-all duration-500 shadow-xl">
                <div className="bg-white/40 border-b border-white/20 p-4 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                   <div className="flex items-center gap-3 md:gap-4">
                      <div className="p-2 md:p-3 bg-gradient-to-br from-teal-500 to-sky-400 rounded-xl text-white shadow-lg flex-shrink-0">
                         <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <div className="text-left">
                         <div className="font-bold text-lg md:text-2xl text-slate-900">Compliance Status</div>
                         <div className="text-xs md:text-sm text-slate-500 font-mono">ID: 8821-XCA-99</div>
                      </div>
                   </div>
                   <div className="px-3 md:px-4 py-1.5 bg-green-100 text-green-700 text-[10px] md:text-xs font-bold rounded-full border border-green-200 flex items-center gap-2 whitespace-nowrap">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="hidden sm:inline">ACTIVE MONITORING</span>
                      <span className="sm:hidden">ACTIVE</span>
                   </div>
                </div>
                
                <div className="p-4 md:p-8 grid md:grid-cols-3 gap-4 md:gap-6">
                   <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/40 border border-white/50">
                      <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-3">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div className="font-bold text-slate-900">SAQ Generated</div>
                      <div className="text-xs text-slate-500 mt-1">10:42 AM - Success</div>
                   </div>

                   <div className="flex flex-col items-center text-center p-4 rounded-xl bg-sky-50/50 border border-sky-100/50 relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 h-1 bg-sky-500 animate-[width_2s_ease-in-out_infinite]" style={{width: '0%'}}></div>
                      <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mb-3 animate-spin-slow">
                        <RefreshCcw className="w-6 h-6" />
                      </div>
                      <div className="font-bold text-sky-900">Network Scan</div>
                      <div className="text-xs text-sky-600 mt-1 font-mono">Processing...</div>
                   </div>

                   <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/40 border border-white/50 opacity-60">
                      <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mb-3">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div className="font-bold text-slate-900">Final Report</div>
                      <div className="text-xs text-slate-500 mt-1">Pending Scan</div>
                   </div>
                </div>
             </div>
             
             <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full border border-slate-300 z-40 animate-pulse"></div>
          </div>

          <div className="flex flex-col items-center w-full max-w-6xl z-10 relative">
             <div className="h-16 border-l border-slate-300 border-dashed"></div>
             
             <div className="hidden lg:grid grid-cols-3 w-full h-16 relative">
                 <div className="absolute top-0 left-[16.66%] right-[16.66%] border-t border-slate-300 border-dashed"></div>
                 
                 <div className="flex justify-center h-full"><div className="h-full border-l border-slate-300 border-dashed"></div></div>
                 <div className="flex justify-center h-full"><div className="h-full border-l border-slate-300 border-dashed"></div></div>
                 <div className="flex justify-center h-full"><div className="h-full border-l border-slate-300 border-dashed"></div></div>
             </div>
             
             <div className="lg:hidden h-8 border-l border-slate-300 border-dashed"></div>
          </div>

        </Reveal>

        <Reveal delay={400} className="w-full flex justify-center">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-6 w-full max-w-6xl text-left relative z-20">
              {features.map((feature, i) => {
                 const isTopRow = i < 3;
                 return (
                 <div key={i} className="relative group flex flex-col items-center">
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full border border-slate-300 z-30 animate-pulse"></div>
                    
                    {isTopRow && (
                       <div className="hidden lg:block absolute h-32 border-l border-slate-300 border-dashed top-full left-1/2 -translate-x-1/2 -z-10"></div>
                    )}
                    
                    <div className="w-full h-full p-6 bg-white rounded-xl shadow-sm hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-2 hover:scale-105 transition-all duration-300 border border-slate-200 group-hover:border-teal-300 flex flex-col items-center text-center relative z-20 cursor-pointer">
                       <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-sky-500 rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform duration-300">
                          {React.cloneElement(feature.icon, { size: 28, strokeWidth: 2 })}
                       </div>
                       
                       <h3 className="font-bold text-lg text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">{feature.title}</h3>
                       <p className="text-sm text-slate-500 group-hover:text-slate-600 leading-relaxed">{feature.desc}</p>
                       
                       <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <ArrowRight className="w-4 h-4 text-sky-500" />
                       </div>
                    </div>

                    {isTopRow && (
                       <div className="hidden lg:block absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full border border-slate-300 z-30 animate-pulse"></div>
                    )}
                 </div>
              )})}
           </div>
        </Reveal>

      </div>
    </section>
  );
};
