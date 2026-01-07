import React from 'react';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-transparent">
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Launch Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-brand-primary/30 rounded-full bg-brand-primary/10 backdrop-blur-sm animate-fade-in-up">
          <Sparkles size={16} className="text-brand-secondary" />
          <span className="text-brand-secondary text-sm font-bold tracking-wide uppercase">Alta Performance 2026</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-tight mb-6 text-white animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Domine o Mercado <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">Digital este Ano</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Janeiro é o mês de acelerar. Criamos ecossistemas digitais de alta conversão para empresas que buscam liderança em 2026.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <button 
            onClick={onOpenContact}
            className="flex items-center justify-center gap-2 bg-brand-primary hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-indigo-900/40 w-full md:w-auto border border-indigo-400/30"
          >
            <TrendingUp size={20} />
            Escalar Meu Negócio
          </button>
          
          <a 
            href="#servicos" 
            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-gray-700 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg transition-all w-full md:w-auto"
          >
            Explorar Soluções
            <ArrowRight size={20} />
          </a>
        </div>

        {/* Decorative Modern Elements */}
        <div className="mt-16 md:mt-24 flex justify-center opacity-40">
           <div className="flex gap-4">
             <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse delay-75"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse delay-150"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;