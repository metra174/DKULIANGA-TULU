import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Pacotes', href: '#pacotes' },
    { name: 'Contactos', href: '#contactos' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-darker/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <img 
            src="https://i.imgur.com/PdPoq1H.png" 
            alt="DKulianga + TULU" 
            className="h-10 md:h-12 w-auto object-contain" 
          />
          <span className="text-white font-bold text-sm md:text-xl tracking-tight">
            Tulu Studio + DKulianga
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-brand-accent transition-colors text-sm font-medium uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/244947355724" 
            className="bg-brand-accent hover:bg-blue-600 text-white px-5 py-2 rounded-full font-medium transition-all transform hover:scale-105"
          >
            Falar Agora
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark border-t border-gray-800 animate-fade-in-up">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-white text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
             <a 
            href="https://wa.me/244947355724" 
            className="bg-brand-accent text-center text-white px-5 py-3 rounded-md font-bold mt-4"
          >
            Falar no WhatsApp
          </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;