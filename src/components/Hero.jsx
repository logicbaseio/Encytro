import { ChevronRight, MousePointer2 } from 'lucide-react';
import { Reveal } from './Reveal';
import { BinaryAnimation } from './BinaryAnimation';
import { TypewriterText } from './TypewriterText';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <BinaryAnimation opacity={0.882} />

        <div className="absolute inset-0 bg-gradient-to-br from-[#080b0b]/70 to-[#1b2728]/70 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#080b0b]/30 via-transparent to-[#080b0b]/70 z-10"></div>
        
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay z-10"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <Reveal delay={100}>
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-slate-800/80 backdrop-blur-md border border-slate-700 text-teal-400 font-mono text-sm shadow-lg">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            SYSTEM SECURE // READY
          </div>
        </Reveal>
        
        <Reveal delay={200}>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9] drop-shadow-2xl">
            YOUR FUTURE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-400">
              DEMANDS <span className="md:hidden"><br /></span><TypewriterText text="INSIGHT!" speed={150} delay={2000} />
            </span>
          </h1>
        </Reveal>

        <Reveal delay={400}>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-12 font-light leading-relaxed drop-shadow-md">
            The only true Chargeback Reimbursement and Merchant Data Security Company. 
            Protecting your business from Regulatory issues, Cyber Extortion, Ransomware, and PCI Breaches.
          </p>
        </Reveal>

        <Reveal delay={600}>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="#pci" className="group relative px-8 py-4 bg-teal-600 text-white rounded-full font-bold overflow-hidden shadow-[0_0_20px_rgba(20,184,166,0.5)] hover:shadow-[0_0_30px_rgba(20,184,166,0.7)] transition-all">
              <span className="relative z-10 flex items-center justify-center gap-2">Explore Ecosystem <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/></span>
              <div className="absolute inset-0 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            <a href="#contact" className="px-8 py-4 border border-slate-600 bg-slate-900/50 backdrop-blur-sm text-slate-300 hover:text-white hover:border-white rounded-full font-bold transition-all hover:bg-slate-800/80">
              Contact Sales
            </a>
          </div>
        </Reveal>
        
        <div className="absolute bottom-10 left-0 w-full flex justify-center animate-bounce text-white">
          <MousePointer2 className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};
