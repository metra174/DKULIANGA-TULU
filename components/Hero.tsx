import React from 'react';
import { ArrowRight, Gift } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-transparent">
      
      {/* Background Elements - Festive Lights */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Christmas Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-brand-gold/30 rounded-full bg-brand-gold/10 backdrop-blur-sm animate-fade-in-up">
          <Gift size={16} className="text-brand-gold" />
          <span className="text-brand-gold text-sm font-bold tracking-wide uppercase">Ofertas Especiais de Natal</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Faça Seu Negócio <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-red via-red-500 to-brand-gold">Brilhar Neste Natal</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Comece 2024 com o pé direito. A TULU Digital cria páginas profissionais, lojas online e estratégias digitais para aproveitar as vendas de fim de ano.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <button 
            onClick={onOpenContact}
            className="flex items-center justify-center gap-2 bg-brand-green hover:bg-green-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-green-900/40 w-full md:w-auto border border-green-500/30"
          >
            <Gift size={20} />
            Quero Minha Oferta
          </button>
          
          <a 
            href="#pacotes" 
            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-brand-gold/30 backdrop-blur-sm text-brand-gold px-8 py-4 rounded-full font-bold text-lg transition-all w-full md:w-auto"
          >
            Ver Pacotes de Natal
            <ArrowRight size={20} />
          </a>
        </div>

        {/* Decorative Festive Elements */}
        <div className="mt-16 md:mt-24 flex justify-center opacity-60">
           <div className="flex gap-3">
             <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></div>
             <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse delay-75"></div>
             <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse delay-150"></div>
             <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse delay-75"></div>
             <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;