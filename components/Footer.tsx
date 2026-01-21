import React from 'react';
import { Instagram, MapPin, Phone, Rocket, Headphones, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-darker py-12 border-t border-gray-900 relative overflow-hidden">
      {/* Modern Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black text-white mb-2 flex items-center justify-center md:justify-start gap-2">
              TULU <span className="text-brand-primary">Studio</span>
            </h3>
            <p className="text-gray-500 text-sm max-w-xs">Especialistas em ecossistemas digitais de alta performance para o mercado de Angola.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                <Phone size={14} className="text-brand-primary" />
                Vendas & RH
              </h4>
              <div className="flex flex-col gap-2">
                <a href="tel:+244930695969" className="text-gray-400 hover:text-white transition-colors text-sm">930 695 969</a>
                <p className="text-brand-secondary text-[10px] leading-tight italic">Ligar para adquirir produto com urgência.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                <Headphones size={14} className="text-brand-accent" />
                Suporte & Projetos
              </h4>
              <div className="flex flex-col gap-2">
                <a href="tel:+244955409747" className="text-gray-400 hover:text-white transition-colors text-sm">955 409 747</a>
                <p className="text-gray-600 text-[10px] leading-tight italic">Mensagem para dúvidas, ligar se for urgente.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                <MessageCircle size={14} className="text-brand-secondary" />
                Administrativo
              </h4>
              <div className="flex flex-col gap-2">
                <a href="https://wa.me/244928384383" className="text-gray-400 hover:text-white transition-colors text-sm">928 384 383</a>
                <p className="text-red-500/80 text-[10px] leading-tight font-bold uppercase">Apenas WhatsApp - Chamada não funciona.</p>
              </div>
            </div>
            
          </div>

          <div className="space-y-4 w-full md:w-auto shrink-0">
             <h4 className="text-white font-bold text-sm uppercase tracking-widest">Social</h4>
             <div className="flex items-center gap-4">
                <a href="https://instagram.com/tulustudio" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-900 rounded-lg text-gray-400 hover:text-white transition-all hover:bg-brand-primary/20">
                  <span className="sr-only">Instagram</span>
                  <Instagram size={20} />
                </a>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin size={16} className="text-brand-primary" />
                  <span>Luanda, Angola</span>
                </div>
             </div>
          </div>

        </div>
        
        <div className="border-t border-gray-900 mt-12 pt-8 text-center text-xs text-gray-600 flex flex-col items-center gap-2">
          <span>© {new Date().getFullYear()} TULU Studio. Todos os direitos reservados.</span>
          <span className="flex items-center gap-1 text-gray-700">
             Building the Future of Angola <Rocket size={10} />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;