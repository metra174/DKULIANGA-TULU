import React, { useState, useEffect } from 'react';
import { Menu, X, Gift } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
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
    { name: 'A TULU', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Ofertas de Natal', href: '#pacotes' },
    { name: 'Contactos', href: '#contactos' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-darker/95 backdrop-blur-md shadow-lg py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
             <div className="absolute -top-3 -right-2 transform rotate-12">
               <Gift size={18} className="text-brand-red animate-bounce" />
             </div>
             <span className="text-2xl font-black tracking-tighter text-white">
              TULU <span className="text-brand-red">Digital</span>
             </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-brand-gold transition-colors text-sm font-medium uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onOpenContact}
            className="bg-brand-red hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-red-900/30 border border-red-500/30"
          >
            Falar Agora
          </button>
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
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark border-t border-gray-800 animate-fade-in-up shadow-2xl">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-brand-gold text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
             <button 
              onClick={() => {
                setIsMenuOpen(false);
                onOpenContact();
              }}
              className="bg-brand-red text-center text-white px-5 py-3 rounded-md font-bold mt-4 w-full"
            >
              Pedir Orçamento
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;