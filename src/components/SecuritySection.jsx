import React from 'react';
import { Users, Skull, Server, RotateCcw, Scale, Award } from 'lucide-react';
import { Reveal } from './Reveal';
import { LoopingCounter360 } from './LoopingCounter';

export const SecuritySection = () => {
  const securityItems = [
    { 
        title: "ISO Indemnity", 
        icon: <Users />,
        desc: "Complete liability protection for Independent Sales Organizations against merchant losses."
    },
    { 
        title: "Cyber Extortion", 
        icon: <Skull />,
        desc: "Comprehensive coverage against ransomware demands and digital blackmail threats."
    },
    { 
        title: "Breach Protection", 
        icon: <Server />,
        desc: "Financial shielding for costs associated with mandatory forensic audits and fines."
    },
    { 
        title: "Data Restoration", 
        icon: <RotateCcw />,
        desc: "Full support for recovering lost or corrupted business data after a security incident."
    },
    { 
        title: "Regulatory Protection", 
        icon: <Scale />,
        desc: "Defense against fines and penalties from governmental or industry regulatory bodies."
    },
    { 
        title: "Warranty Coverage", 
        icon: <Award />,
        desc: "Guaranteed protection layers that go beyond standard insurance policies."
    },
  ];

  return (
    <section id="security" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-50"></div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex items-center justify-center">
                <div className="absolute w-[300px] h-[300px] border border-sky-100 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                <div className="absolute w-[500px] h-[500px] border border-teal-100 rounded-full animate-[ping_5s_cubic-bezier(0,0,0.2,1)_infinite] animation-delay-1000"></div>
                 <div className="absolute w-[700px] h-[700px] border border-indigo-50 rounded-full animate-[ping_6s_cubic-bezier(0,0,0.2,1)_infinite] animation-delay-2000"></div>
            </div>
        </div>
        
        <svg width="0" height="0">
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop stopColor="#2dd4bf" offset="0%" />
            <stop stopColor="#0ea5e9" offset="100%" />
          </linearGradient>
        </svg>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-24 relative">
                <Reveal>
                    <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter">
                        MERCHANT DATA <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-500">SECURITY</span>
                    </h2>
                    
                    <p className="text-2xl md:text-3xl font-medium text-slate-500 mb-4 max-w-2xl mx-auto">
                        Protect your Merchants in the gaps of all Data Breach Risks with our comprehensive security suite.
                    </p>

                    <p className="text-2xl md:text-4xl lg:text-6xl font-bold flex flex-col sm:flex-row items-center justify-center gap-2">
                         <span className="text-black">Complete</span> 
                         <span className="flex items-center gap-1">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-500">
                               <LoopingCounter360 target={360} />
                            </span>
                            <span className="text-black">Protection</span>
                         </span>
                    </p>
                </Reveal>
            </div>

            <div className="relative">
                <div className="hidden md:block absolute top-[16.66%] left-[25%] w-[50%] border-t border-dashed border-slate-300 -z-0"></div>
                <div className="hidden md:block absolute top-[50%] left-[25%] w-[50%] border-t border-dashed border-slate-300 -z-0"></div>
                <div className="hidden md:block absolute top-[83.33%] left-[25%] w-[50%] border-t border-dashed border-slate-300 -z-0"></div>
                
                <div className="hidden md:block absolute top-[16.66%] bottom-[16.66%] left-[25%] border-l border-dashed border-slate-300 -z-0"></div>
                <div className="hidden md:block absolute top-[16.66%] bottom-[16.66%] right-[25%] border-r border-dashed border-slate-300 -z-0"></div>

                <div className="grid md:grid-cols-2 gap-8 relative z-10">
                    {securityItems.map((item, idx) => {
                        const isNotLast = idx < securityItems.length - 1;
                        const isEvenIndex = idx % 2 === 0;
                        const isLastInRow = (idx + 1) % 2 === 0;
                        return (
                        <Reveal key={idx} delay={idx * 100}>
                            <div className="group relative h-full">
                                {/* Mobile: Vertical connection line between cards */}
                                {isNotLast && !isLastInRow && (
                                    <div className="md:hidden absolute h-16 border-l border-dashed border-slate-300 top-full left-1/2 -translate-x-1/2 -z-10"></div>
                                )}
                                
                                <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center relative overflow-hidden group">
                                    
                                    <div className="relative z-10 transform transition-transform duration-300 hover:scale-110 mb-6 drop-shadow-2xl">
                                        {React.cloneElement(item.icon, { 
                                            size: 64, 
                                            strokeWidth: 1.5, 
                                            style: { stroke: 'url(#icon-gradient)', filter: 'drop-shadow(0 10px 10px rgba(14, 165, 233, 0.2))' } 
                                        })}
                                    </div>

                                    <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-600 mb-3 transition-colors relative z-10">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="text-sm text-slate-500 leading-relaxed relative z-10">
                                        {item.desc}
                                    </p>
                                </div>
                                
                                {/* Mobile: Bottom dot for cards that have connection below */}
                                {isNotLast && !isLastInRow && (
                                    <div className="md:hidden absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full border border-slate-300 z-30"></div>
                                )}
                            </div>
                        </Reveal>
                    )})}
                </div>
            </div>
        </div>
    </section>
  );
};
