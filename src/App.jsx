import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PCISection } from './components/PCISection';
import { DeflectSection } from './components/DeflectSection';
import { ReflectionsSection } from './components/ReflectionsSection';
import { AdvantageSection } from './components/AdvantageSection';
import { SecuritySection } from './components/SecuritySection';
import { ContactFormSection } from './components/ContactFormSection';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-sky-200 selection:text-sky-900">
        <style>{`
          html { scroll-behavior: smooth; }
          
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          @keyframes width {
            0% { width: 0%; left: 0; }
            50% { width: 100%; left: 0; }
            100% { width: 0%; left: 100%; }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animate-spin-slow {
            animation: spin 3s linear infinite;
          }
        `}</style>
        
        <Navbar />
        <Hero />
        <PCISection />
        <DeflectSection />
        <ReflectionsSection />
        <AdvantageSection />
        <SecuritySection />
        <ContactFormSection />
        <Footer />
    </div>
  );
};

export default App;
