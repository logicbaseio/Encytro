import React from 'react';
import { Zap, ShoppingBag, Globe, Smartphone, Phone, FileText, RefreshCcw, ShieldCheck, AlertTriangle, Wifi } from 'lucide-react';
import { Reveal } from './Reveal';
import { BinaryAnimation } from './BinaryAnimation';

export const AdvantageSection = () => {
  return (
    <section id="advantage" className="py-32 bg-slate-900 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #111d1e 0%, #1b2728 100%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <BinaryAnimation opacity={0.286} />
          
          {/* Darker overlay for better readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/60 z-[5]"></div>
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-teal-900/40 via-transparent to-transparent z-10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
                <Reveal>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">
                        ENCYTRO <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-500">ADVANTAGE</span>
                    </h2>
                    <div className="text-2xl md:text-3xl font-bold text-slate-300">
                        Just Got <strong className="text-white">BIGGER.</strong>
                    </div>
                </Reveal>
            </div>

            <Reveal delay={200}>
                <div className="bg-gradient-to-r from-teal-900/50 to-slate-900 border border-cyan-500/30 rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors duration-500"></div>
                    
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-500 to-sky-600 text-white text-sm font-bold uppercase tracking-wider shadow-lg shadow-cyan-500/30 mb-6 animate-pulse">
                                <Zap className="w-4 h-4 fill-current" /> New Feature
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                                CNP (Card Not Present) <br/>
                                <span className="text-cyan-400">Is Finally Here!</span>
                            </h3>
                            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6">
                                The Advantage Program is no longer just about Swiped Transactions. 
                                Chargeback Reimbursement now extends across all the ways your customers pay—digital forms, phone, or mail.
                            </p>
                        </div>
                        
                        <div className="flex justify-center perspective-1000">
                             <style>{`
                                @keyframes float-card {
                                    0%, 100% { transform: translateY(0) rotateX(10deg) rotateY(-10deg); }
                                    50% { transform: translateY(-20px) rotateX(10deg) rotateY(-10deg); }
                                }
                                @keyframes scan-beam {
                                    0%, 100% { top: 0%; opacity: 0; }
                                    50% { top: 100%; opacity: 1; }
                                }
                             `}</style>
                             <div className="relative w-full max-w-xs sm:w-72 h-40 sm:h-48">
                                <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-pulse blur-sm"></div>
                                <div className="absolute inset-4 border border-teal-500/50 rounded-full animate-spin-slow opacity-50"></div>
                                
                                <div className="absolute inset-0 m-auto w-48 h-32 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-xl shadow-[0_0_50px_rgba(45,212,191,0.4)] border-t border-white/30 animate-[float-card_4s_ease-in-out_infinite] flex flex-col justify-between p-4 z-10 overflow-hidden">
                                    <div className="absolute left-0 w-full h-1 bg-white/50 blur-sm animate-[scan-beam_2s_linear_infinite]"></div>
                                    
                                    <div className="w-10 h-6 bg-white/20 rounded-md"></div>
                                    <div className="space-y-2">
                                        <div className="w-full h-2 bg-white/20 rounded-full"></div>
                                        <div className="w-2/3 h-2 bg-white/20 rounded-full"></div>
                                    </div>
                                    
                                    <div className="absolute -right-2 -top-2 w-10 h-10 bg-cyan-500/80 rounded-full flex items-center justify-center border-2 border-white/20">
                                        <Wifi className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
                <Reveal delay={300}>
                    <div className="h-full p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-teal-500/50 hover:bg-white/10 transition-all duration-300 group">
                        <div className="mb-6 relative w-20 h-20 mx-auto perspective-1000">
                            <div className="relative w-full h-full bg-gradient-to-br from-teal-500 to-sky-700 rounded-2xl flex items-center justify-center shadow-lg border-t border-white/30 transform rotate-6 group-hover:rotate-12 transition-transform duration-300">
                                <ShoppingBag className="w-10 h-10 text-white drop-shadow-md" />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-teal-500">
                                <Globe className="w-5 h-5 text-teal-600" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-white text-center mb-3">E-Commerce Sites</h4>
                        <p className="text-slate-400 text-center text-sm">Full coverage for online shopping carts and digital storefronts.</p>
                    </div>
                </Reveal>

                <Reveal delay={400}>
                    <div className="h-full p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-teal-500/50 hover:bg-white/10 transition-all duration-300 group">
                        <div className="mb-6 relative w-20 h-20 mx-auto perspective-1000">
                            <div className="relative w-full h-full bg-gradient-to-br from-teal-500 to-sky-700 rounded-2xl flex items-center justify-center shadow-lg border-t border-white/30 transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300">
                                <Smartphone className="w-10 h-10 text-white drop-shadow-md" />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-teal-500">
                                <Zap className="w-5 h-5 text-teal-600" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-white text-center mb-3">App Purchases</h4>
                        <p className="text-slate-400 text-center text-sm">Protection for in-app purchases, subscriptions, and mobile ecosystems.</p>
                    </div>
                </Reveal>

                <Reveal delay={500}>
                    <div className="h-full p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-teal-500/50 hover:bg-white/10 transition-all duration-300 group">
                        <div className="mb-6 relative w-20 h-20 mx-auto perspective-1000">
                            <div className="relative w-full h-full bg-gradient-to-br from-teal-500 to-sky-700 rounded-2xl flex items-center justify-center shadow-lg border-t border-white/30 transform rotate-6 group-hover:rotate-12 transition-transform duration-300">
                                <Phone className="w-10 h-10 text-white drop-shadow-md" />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-teal-500">
                                <FileText className="w-5 h-5 text-teal-600" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-white text-center mb-3">MOTO</h4>
                        <p className="text-slate-400 text-center text-sm">Mail Order / Telephone Order transactions are now fully secured.</p>
                    </div>
                </Reveal>
            </div>

            <Reveal delay={600}>
                <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-3xl p-10 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-sky-500"></div>
                    <h3 className="text-2xl font-bold text-white mb-8">Comprehensive Coverage Map</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { label: "Chargeback Fees", icon: <FileText />, color: "text-rose-400" },
                            { label: "EMV Liability Shift", icon: <RefreshCcw />, color: "text-amber-400" },
                            { label: "Fraud Protection", icon: <ShieldCheck />, color: "text-emerald-400" },
                            { label: "Fallback", icon: <AlertTriangle />, color: "text-cyan-400" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-slate-900 px-6 py-4 rounded-xl border border-slate-600 hover:border-teal-500 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/20">
                                <div className={`p-2 bg-slate-800 rounded-lg ${item.color} group-hover:scale-110 transition-transform duration-300 animate-[bounce_2s_infinite]`} style={{animationDelay: `${i*0.2}s`}}>
                                    {React.cloneElement(item.icon, { size: 24 })}
                                </div>
                                <span className="font-bold text-slate-200">{item.label}</span>
                            </div>
                        ))}
                    </div>
                    <p className="mt-8 text-cyan-400 font-mono text-sm uppercase tracking-widest">// One and ONLY in the market</p>
                </div>
            </Reveal>
        </div>
    </section>
  );
};
