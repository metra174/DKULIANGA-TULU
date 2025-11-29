import React from 'react';
import { Instagram, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">TULU & DKulianga</h3>
            <p className="text-gray-500 text-sm">Soluções Digitais e Criativas</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 text-gray-400 text-sm">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={16} />
              <span>947 935 572</span>
            </div>
             <div className="flex items-center justify-center md:justify-start gap-2">
              <MapPin size={16} />
              <span>Luanda, Angola</span>
            </div>
             <div className="flex items-center justify-center md:justify-start gap-2">
              <Instagram size={16} />
              <a href="#" className="hover:text-brand-accent transition-colors">@dkulianga_tulu</a>
            </div>
          </div>

        </div>
        <div className="border-t border-gray-900 mt-8 pt-8 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} TULU Digital & DKulianga Studio. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;