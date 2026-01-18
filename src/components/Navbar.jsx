import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}
      style={scrolled ? { backgroundColor: 'rgba(15, 44, 48, 0.95)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        {/* Center: Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src="/encytro_logo_hx260-300x101.png" 
            alt="Encytro" 
            className="h-10 w-auto object-contain"
          />
        </a>
      </div>
    </nav>
  );
};
