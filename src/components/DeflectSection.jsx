import React, { useState } from 'react';
import { MessageSquare, Zap, Receipt, Settings, Bot, RefreshCcw, CreditCard, Activity, CreditCard as CardIcon, Lock, ShieldCheck, TrendingDown } from 'lucide-react';
import { Reveal } from './Reveal';
import { BinaryAnimation } from './BinaryAnimation';

export const DeflectSection = () => {
  const [chargebacks, setChargebacks] = useState(100);
  const saved = Math.floor(chargebacks * 0.85);

  const deflectFeatures = [
    { icon: <MessageSquare />, title: "Reduce Support by 90%", desc: "Drastically cut time spent on disputes." },
    { icon: <Zap />, title: "Real-time Notification", desc: "Instant alerts for card holder inquiries." },
    { icon: <Receipt />, title: "Digital Receipts", desc: "Real-time digital receipt presentment." },
    { icon: <Settings />, title: "Merchant Customization", desc: "Tailored billing and reporting settings." },
    { icon: <Bot />, title: "Automated & Simplified", desc: "Fully integrated protection workflow." },
    { icon: <RefreshCcw />, title: "Real-time Auto Refund", desc: "Resolve disputes instantly automatically." },
    { icon: <CardIcon />, title: "All Card Brands", desc: "One single tool for every major card." }
  ];

  return (
    <section id="deflect" className="py-32 text-white overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #111d1e 0%, #1b2728 100%)' }}>
      <style>{`
        .lock-container { perspective: 1000px; }
        .lock-3d { transform-style: preserve-3d; animation: float-rotate 6s ease-in-out infinite; }
        .card-3d-float { animation: float-slow 4s ease-in-out infinite; }
        @keyframes float-rotate {
          0% { transform: translateY(0px) rotateY(0deg) rotateX(10deg); }
          50% { transform: translateY(-20px) rotateY(180deg) rotateX(-10deg); }
          100% { transform: translateY(0px) rotateY(360deg) rotateX(10deg); }
        }
        @keyframes float-slow {
          0% { transform: translateY(0px) rotate(6deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
          100% { transform: translateY(0px) rotate(6deg); }
        }
        .defense-grid-item:hover .scan-line { top: 100%; }
      `}</style>

      <div className="absolute inset-0 overflow-hidden">
        <BinaryAnimation opacity={0.286} />
        
        {/* Darker overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/60 z-[5]"></div>
        
        <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none z-10">
           <div className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
           <div className="absolute inset-0 bg-radial-gradient(circle_at_center,transparent_0%,#111d1e_100%)"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-600/10 rounded-full blur-[100px] z-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20 relative">
          <div className="absolute top-0 right-0 md:-right-20 -z-10 opacity-20 pointer-events-none lock-container hidden md:block">
             <div className="lock-3d w-40 h-40 bg-gradient-to-br from-teal-500 to-sky-400 rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(45,212,191,0.5)] border-4 border-white/20">
                <Lock className="w-20 h-20 text-white" strokeWidth={1.5} />
             </div>
          </div>

          <Reveal>
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
              ENCYTRO <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-400">DEFLECT</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-teal-400 mb-6">
               Get Rid of <span className="text-white">85%</span> of All Chargebacks.
            </h3>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Real-time notifications and auto-refunds allow you to resolve disputes before they become chargebacks. Chargeback Reimbursement is finally here.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-24 relative">
          <div className="absolute bottom-[-40px] left-[-40px] z-30 hidden md:block card-3d-float">
             <div className="relative">
                <div className="w-32 h-20 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-xl shadow-2xl border-t border-white/30 transform rotate-6 flex flex-col justify-end p-3">
                   <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-white/30"></div>
                      <div className="h-2 w-16 bg-white/20 rounded-full"></div>
                   </div>
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                   <ShieldCheck className="w-6 h-6 text-white" />
                </div>
             </div>
          </div>

          <Reveal direction="left">
            <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl h-full flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-teal-500/5 group-hover:bg-teal-500/10 transition-colors duration-500"></div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
                <Activity className="text-teal-500" /> The Workflow
              </h3>
              <div className="space-y-8 relative z-10">
                <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-700"></div>
                {[
                  { title: "Inquiry", desc: "Card Holder initiates inquiry", icon: <CreditCard className="w-4 h-4"/> },
                  { title: "Notification", desc: "Real-time alert sent to merchant", icon: <Zap className="w-4 h-4 text-yellow-400"/> },
                  { title: "Auto Refund", desc: "System resolves dispute instantly", icon: <RefreshCcw className="w-4 h-4 text-teal-400"/> },
                  { title: "Success", desc: "Chargeback completely avoided", icon: <ShieldCheck className="w-4 h-4 text-green-400"/> },
                ].map((step, i) => (
                  <div key={i} className="relative flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-600 flex items-center justify-center relative z-10 text-slate-300 shadow-lg shadow-black/50">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">{step.title}</h4>
                      <p className="text-slate-400 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={200}>
            <div className="bg-gradient-to-br from-teal-700 to-slate-900 rounded-3xl p-8 shadow-2xl text-white h-full relative overflow-hidden border border-white/10">
               <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">Impact Calculator</h3>
                  <p className="text-teal-100 text-sm mb-8">Visualize your protection level.</p>
                  
                  <div className="mb-10">
                    <div className="flex justify-between text-sm font-bold mb-4">
                      <span>10 Disputes</span>
                      <span>500 Disputes</span>
                    </div>
                    <input 
                      type="range" 
                      min="10" 
                      max="500" 
                      value={chargebacks}
                      onChange={(e) => setChargebacks(Number(e.target.value))}
                      className="w-full h-3 bg-slate-900/50 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                    />
                    <div className="mt-4 text-center font-mono text-teal-200">
                      Current Monthly Disputes: <span className="text-white font-bold">{chargebacks}</span>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 text-center border border-white/20 backdrop-blur-sm shadow-inner">
                    <div className="text-sm text-teal-200 uppercase tracking-widest mb-2">You Prevent</div>
                    <div className="text-7xl font-black mb-2 flex items-center justify-center gap-2 text-teal-300 drop-shadow-lg">
                       {saved}
                       <TrendingDown className="w-8 h-8 text-teal-300" />
                    </div>
                    <div className="text-lg font-medium text-white">Chargebacks / Month</div>
                  </div>
                  
                  <div className="mt-8 text-center text-xs text-teal-200 opacity-75">
                    *Calculation based on 85% average reduction rate.
                  </div>
               </div>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-teal-500/5 blur-3xl -z-10 rounded-full"></div>
          <Reveal>
             <h3 className="text-center text-2xl font-bold mb-12 flex items-center justify-center gap-3">
               <ShieldCheck className="text-green-400" /> Active Defense Modules
             </h3>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {deflectFeatures.map((feat, i) => (
                  <div key={i} className={`defense-grid-item relative bg-slate-800/40 border border-slate-700 p-4 md:p-6 rounded-xl hover:bg-slate-800 transition-all duration-300 hover:border-teal-500/50 overflow-hidden group ${i === 6 ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                     <div className="scan-line absolute top-[-100%] left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-teal-500/20 transition-all duration-700 ease-in-out pointer-events-none"></div>
                     <div className="flex items-start gap-3 md:gap-4 relative z-10">
                        <div className="p-2 md:p-3 bg-slate-900 rounded-lg text-teal-400 group-hover:text-cyan-300 group-hover:shadow-[0_0_15px_rgba(45,212,191,0.4)] transition-all flex-shrink-0">
                           {React.cloneElement(feat.icon, { size: 20 })}
                        </div>
                        <div className="min-w-0">
                           <h4 className="font-bold text-base md:text-lg mb-1 group-hover:text-cyan-300 transition-colors">{feat.title}</h4>
                           <p className="text-xs md:text-sm text-slate-400 group-hover:text-slate-300">{feat.desc}</p>
                        </div>
                     </div>
                  </div>
                ))}
             </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
