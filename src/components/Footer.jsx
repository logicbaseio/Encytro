import { FileText, Smartphone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/encytro_logo_hx260-300x101.png" 
                alt="Encytro" 
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="max-w-sm mb-8 leading-relaxed">
              The Only True Chargeback Reimbursement and Merchant Data Security Company.
              Revolutionary pricing, revolutionary protection.
            </p>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6">Product Suite</h4>
            <ul className="space-y-4">
              <li><a href="#pci" className="hover:text-sky-400 transition-colors">PCI Compliance</a></li>
              <li><a href="#deflect" className="hover:text-sky-400 transition-colors">Deflect</a></li>
              <li><a href="#reflections" className="hover:text-sky-400 transition-colors">Reflections</a></li>
              <li><a href="#advantage" className="hover:text-sky-400 transition-colors">Advantage CNP</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center">
                   <FileText className="w-4 h-4"/>
                 </div>
                 sales@encytro.com
              </li>
              <li className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center">
                   <Smartphone className="w-4 h-4"/>
                 </div>
                 866.949.9777
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Encytro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
