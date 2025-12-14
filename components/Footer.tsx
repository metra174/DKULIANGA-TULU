import React from 'react';
import { Instagram, MapPin, Phone, Gift } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-900 relative overflow-hidden">
      {/* Decorative Red Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black text-white mb-2 flex items-center justify-center md:justify-start gap-2">
              TULU <span className="text-brand-red">Digital</span>
            </h3>
            <p className="text-gray-500 text-sm">Tecnologia que impulsiona resultados.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 text-gray-400 text-sm w-full md:w-auto items-center md:items-start">
            
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={16} className="text-brand-red shrink-0" />
              <div className="flex gap-1">
                <a href="tel:+244930695969" className="hover:text-white transition-colors">930 695 969</a>
              </div>
            </div>
            
             <div className="flex items-center justify-center md:justify-start gap-2">
              <MapPin size={16} className="text-brand-red shrink-0" />
              <span>Luanda, Angola</span>
            </div>
            
             <div className="flex items-center justify-center md:justify-start gap-2">
              <Instagram size={16} className="text-brand-red shrink-0" />
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@tuludigital</a>
            </div>
            
          </div>

        </div>
        <div className="border-t border-gray-900 mt-8 pt-8 text-center text-xs text-gray-600 flex flex-col items-center gap-2">
          <span>© {new Date().getFullYear()} TULU Digital. Todos os direitos reservados.</span>
          <span className="flex items-center gap-1 text-gray-700">
             Feito com <Gift size={10} /> para o Natal
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;