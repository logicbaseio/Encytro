import React from 'react';
import { Ban, Network, Zap, ShieldAlert, Database, CheckCircle, ShieldCheck, Siren } from 'lucide-react';
import { Reveal } from './Reveal';
import { LoopingCounter20 } from './LoopingCounter';

export const ReflectionsSection = () => {
  return (
    <section id="reflections" className="py-32 bg-slate-50 relative overflow-hidden">
      <style>{`
        @keyframes wallet-open-hq {
          0%, 100% { transform: rotateX(0deg); }
          30%, 70% { transform: rotateX(-30deg); } 
        }
        @keyframes wallet-flap-hq {
          0%, 100% { transform: rotateX(0deg); }
          30%, 70% { transform: rotateX(160deg); } 
        }
        @keyframes card-slide-hq {
          0% { transform: translateY(20px) scale(0.9); opacity: 0; }
          35% { transform: translateY(-40px) scale(1); opacity: 1; }
          65% { transform: translateY(-40px) scale(1); opacity: 1; }
          100% { transform: translateY(20px) scale(0.9); opacity: 0; }
        }
        @keyframes shield-pop-hq {
          0%, 35% { transform: scale(0) rotate(-45deg); opacity: 0; }
          45% { transform: scale(1.2) rotate(0deg); opacity: 1; }
          55% { transform: scale(1) rotate(0deg); opacity: 1; }
          65% { transform: scale(1) rotate(0deg); opacity: 1; }
          100% { transform: scale(0) rotate(45deg); opacity: 0; }
        }
        .wallet-body { animation: wallet-open-hq 6s ease-in-out infinite; transform-origin: bottom center; }
        .wallet-flap { animation: wallet-flap-hq 6s ease-in-out infinite; transform-origin: top center; }
        .visa-card-hq { animation: card-slide-hq 6s ease-in-out infinite; }
        .pop-shield-hq { animation: shield-pop-hq 6s ease-in-out infinite; }
      `}</style>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[20%] w-[80%] h-[80%] bg-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-500/5 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        <Reveal>
          <div className="text-center mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4 flex-wrap">
               <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight break-words px-2">
                 ENCYTRO <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-sky-500 pr-1">REFLECTIONS</span>
               </h2>
               <span className="shrink-0 px-4 py-1 border border-amber-400 text-amber-500 text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_0_10px_rgba(251,191,36,0.3)] bg-white mt-2 md:mt-0">
                  New
               </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A Smarter Way to <span className="text-teal-600">Prevent Chargebacks</span> Before They Hit Your Bottom Line.
            </h3>
          </div>
        </Reveal>

        <Reveal delay={100} className="text-center mb-16">
           <div className="flex flex-col items-center">
              <div className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-500 tracking-tighter mb-2 flex items-center justify-center pr-4">
                 <LoopingCounter20 target={20} />
              </div>
              <h4 className="text-2xl font-semibold text-slate-800 uppercase tracking-wide mb-2">Reduction in Chargebacks</h4>
              <p className="text-slate-500 max-w-lg mx-auto">
                 Reflections automatically removes an additional 20% of disputes in the Alert phase before they escalate.
              </p>
           </div>
        </Reveal>

        <Reveal delay={200} className="w-full mb-0 relative z-20">
           
           <div className="absolute -bottom-8 -left-8 z-30 hidden md:block animate-[float_5s_ease-in-out_infinite]">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl shadow-[0_10px_30px_rgba(16,185,129,0.4)] flex items-center justify-center transform -rotate-12 border-4 border-white">
                 <ShieldCheck className="w-12 h-12 text-white" />
              </div>
           </div>

           <div className="w-full bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden border border-slate-700 shadow-2xl group">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.3)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
                </div>

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                   <div className="flex-1 text-left">
                      <h4 className="text-3xl font-semibold text-white mb-4 flex items-center gap-3">
                        3X Verified Purchase Logic
                      </h4>
                      <p className="text-slate-300 text-lg leading-relaxed mb-6">
                        Leveraging our proprietary alert system, we submit proof of <strong>3 prior successful transactions</strong> by the same customer within a rolling 1-year period.
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-900/50 border border-teal-500/30 rounded-lg text-teal-300 text-sm font-mono">
                         <Database className="w-4 h-4" /> Pattern Recognition: ACTIVE
                      </div>
                   </div>

                   <div className="flex-1 w-full bg-slate-800/80 p-6 rounded-2xl border border-slate-600 backdrop-blur-sm">
                      <div className="flex justify-between items-center mb-6">
                         {[1,2,3].map(n => (
                            <div key={n} className="flex flex-col items-center gap-2 group-hover:scale-110 transition-transform duration-500" style={{transitionDelay: `${n*100}ms`}}>
                               <div className="w-12 h-12 rounded-full bg-green-500/20 border-2 border-green-500 text-green-400 flex items-center justify-center font-bold shadow-lg shadow-green-500/20 animate-pulse">
                                  <CheckCircle className="w-6 h-6" />
                               </div>
                               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Txn {n}</span>
                            </div>
                         ))}
                      </div>
                      
                      <div className="h-1 w-full bg-slate-700 rounded-full mb-6 relative overflow-hidden">
                         <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-teal-400 w-full animate-[width_2s_ease-in-out_infinite] origin-left"></div>
                      </div>

                      <div className="bg-gradient-to-r from-red-900/50 to-red-800/50 border border-red-500/30 p-3 md:p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                         <div className="flex items-center gap-2 md:gap-3">
                            <Ban className="w-5 h-5 md:w-6 md:h-6 text-red-400 flex-shrink-0" />
                            <span className="text-red-200 font-bold text-sm md:text-base">Future Dispute</span>
                         </div>
                         <span className="bg-red-500 text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded shadow-lg whitespace-nowrap">AUTO-BLOCKED</span>
                      </div>
                   </div>
                </div>
           </div>
        </Reveal>

        <Reveal delay={400} className="w-full mb-20 flex flex-col items-center relative z-10">
           
           <div className="h-16 w-0.5 bg-slate-300 mb-0"></div>
           
           <div className="hidden md:grid grid-cols-4 w-full h-8 relative">
              <div className="absolute top-0 left-[12.5%] right-[12.5%] border-t-2 border-slate-300"></div>
              <div className="flex justify-center h-full"><div className="w-0.5 h-full bg-slate-300"></div></div>
              <div className="flex justify-center h-full"><div className="w-0.5 h-full bg-slate-300"></div></div>
              <div className="flex justify-center h-full"><div className="w-0.5 h-full bg-slate-300"></div></div>
              <div className="flex justify-center h-full"><div className="w-0.5 h-full bg-slate-300"></div></div>
           </div>

           <div className="grid md:grid-cols-4 gap-6 w-full relative z-10">
              {[
                { icon: <Ban />, title: "Block Repeat Disputes", desc: "Instantly stop known offenders." },
                { icon: <Network />, title: "Real-time Interception", desc: "Catch disputes before they process." },
                { icon: <Zap />, title: "Integrated with Deflect", desc: "Seamlessly works with your alerts." },
                { icon: <ShieldAlert />, title: "Reduce Friendly Fraud", desc: "Stop abuse of the system." },
              ].map((item, i) => {
                const isNotLast = i < 3;
                return (
                <div key={i} className="group relative flex flex-col items-center">
                   {/* Mobile: Top dot for first card */}
                   {i === 0 && (
                      <div className="md:hidden absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full border-2 border-slate-300 z-30"></div>
                   )}
                   
                   {/* Mobile: Vertical connection line */}
                   {isNotLast && (
                      <div className="md:hidden absolute h-16 border-l-2 border-slate-300 top-full left-1/2 -translate-x-1/2 -z-10"></div>
                   )}
                   
                   <div className="w-full p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-slate-200 hover:border-teal-300 hover:shadow-teal-100/50 hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center h-full relative z-20">
                      <div className="p-3 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl text-teal-600 border border-teal-100 mb-4 group-hover:scale-110 transition-transform">
                         {React.cloneElement(item.icon, { size: 28, strokeWidth: 1.5 })}
                      </div>
                      <h4 className="font-semibold text-lg text-slate-800 mb-2 group-hover:text-teal-700 transition-colors">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                   </div>
                   
                   {/* Mobile: Bottom dot */}
                   {isNotLast && (
                      <div className="md:hidden absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full border-2 border-slate-300 z-30"></div>
                   )}
                </div>
              )})}
           </div>
        </Reveal>

        <Reveal delay={600} className="w-full">
           <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-teal-500 to-cyan-500 z-20"></div>
              
              <div className="relative z-10 p-6 md:p-10 lg:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                 
                 <div className="flex-1 text-left w-full md:w-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-xs font-bold uppercase tracking-wider mb-4 md:mb-6">
                       <Siren className="w-3 h-3 animate-pulse" /> Compliance Alert
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-2">VAMP PROTECTION</h3>
                    
                    <p className="text-teal-300 font-bold uppercase tracking-widest text-xs md:text-sm mb-4 md:mb-6">
                       Visa Acquirer Monitoring Program
                    </p>

                    <p className="text-slate-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                       Designed to monitor acquirers who exceed acceptable dispute thresholds. 
                       <span className="text-white font-bold"> Non-compliance leads to penalties, fines, and account closure.</span>
                    </p>
                    <button className="bg-white text-slate-900 px-6 md:px-8 py-2.5 md:py-3 rounded-full font-bold hover:bg-teal-50 transition-colors shadow-lg shadow-teal-900/20 text-sm md:text-base w-full sm:w-auto">
                       Protect My Business
                    </button>
                 </div>

                 <div className="relative w-full max-w-xs md:w-64 h-64 md:h-80 flex-shrink-0 perspective-1000 flex items-center justify-center">
                    <div className="relative w-48 h-32 flex justify-center items-center translate-y-4 md:translate-y-6">
                        
                        <div className="absolute -top-12 md:-top-16 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30 shadow-lg">
                           <img src="/visa-logo.png" alt="Visa" className="h-6 w-auto object-contain" />
                        </div>

                        <div className="wallet-body absolute bottom-0 w-40 h-32 bg-slate-800 rounded-lg border border-slate-600 shadow-2xl z-10"></div>
                        
                        <div className="visa-card-hq absolute bottom-4 w-36 h-24 bg-gradient-to-r from-sky-600 via-sky-700 to-indigo-800 rounded-lg shadow-lg border-t border-white/30 z-10 flex flex-col justify-between p-3">
                            <div className="flex justify-between items-start">
                                <div className="w-8 h-5 bg-yellow-400/30 rounded"></div>
                                <div className="text-[8px] text-white/50 font-mono">VISA</div>
                            </div>
                            <div className="w-full h-2 bg-white/20 rounded"></div>
                        </div>

                        <div className="wallet-flap absolute top-0 w-40 h-20 bg-slate-700 rounded-t-lg border border-slate-600 border-b-0 z-30 shadow-inner"></div>
                        
                        <div className="pop-shield-hq absolute -top-10 left-1/2 -translate-x-1/2 z-40">
                            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.6)] border-4 border-white transform rotate-12">
                                <ShieldCheck className="w-10 h-10 text-white" strokeWidth={3} />
                            </div>
                        </div>
                    </div>
                 </div>

              </div>
           </div>
        </Reveal>

      </div>
    </section>
  );
};
