import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, BarChart3, Globe, Zap, MousePointer2 } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
      
      {/* Dynamic Background Effects */}
      <div className="absolute top-[10%] left-[5%] w-[40rem] h-[40rem] bg-brand-primary/20 rounded-full blur-[140px] animate-pulse-slow"></div>
      <div className="absolute bottom-[5%] right-[5%] w-[35rem] h-[35rem] bg-brand-accent/10 rounded-full blur-[140px] animate-float"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-2.5 mb-10 glass rounded-full animate-fade-in-up border border-white/10 shadow-2xl">
            <div className="flex -space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-ping"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-brand-secondary"></div>
            </div>
            <span className="text-white text-[10px] font-black tracking-[0.3em] uppercase">Estratégia Digital Fevereiro 2026</span>
            <Sparkles size={14} className="text-yellow-400" />
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] mb-10 text-white animate-fade-in-up tracking-tighter">
            ESTEJA À <br />
            <span className="text-gradient italic">FRENTE.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-16 leading-tight animate-fade-in-up font-medium tracking-tight" style={{ animationDelay: '0.2s' }}>
            Transformamos marcas comuns em líderes absolutos no mercado angolano através de engenharia digital de elite.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 animate-fade-in-up w-full max-w-3xl" style={{ animationDelay: '0.3s' }}>
            <button 
              onClick={onOpenContact}
              className="group relative overflow-hidden bg-brand-primary text-white px-12 py-6 rounded-[2rem] font-black text-xl transition-all hover:scale-110 active:scale-95 shadow-[0_20px_60px_rgba(225,29,72,0.4)] w-full md:w-auto border border-white/10"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="flex items-center justify-center gap-4 relative z-10">
                <TrendingUp size={28} />
                Quero Escalar
              </span>
            </button>
            
            <a 
              href="#pacotes" 
              className="group flex items-center justify-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-2xl text-white px-12 py-6 rounded-[2rem] font-black text-xl transition-all w-full md:w-auto hover:border-brand-primary/40"
            >
              Ver Planos 2026
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-500" />
            </a>
          </div>

          {/* Floating UI Badges - Redesigned */}
          <div className="hidden xl:block absolute top-1/3 -left-10 animate-float shadow-2xl" style={{ animationDelay: '0.5s' }}>
            <div className="glass p-6 rounded-[2.5rem] flex items-center gap-5 border-white/10 bg-black/40">
              <div className="bg-green-500/20 p-3 rounded-2xl text-green-500"><BarChart3 size={32} /></div>
              <div className="text-left">
                <div className="text-white font-black text-lg">+412% ROI</div>
                <div className="text-gray-500 text-[9px] font-black uppercase tracking-widest">Média Clientes Studio</div>
              </div>
            </div>
          </div>

          <div className="hidden xl:block absolute bottom-1/4 -right-10 animate-float shadow-2xl" style={{ animationDelay: '1.5s' }}>
            <div className="glass p-6 rounded-[2.5rem] flex items-center gap-5 border-white/10 bg-black/40">
              <div className="bg-brand-primary/20 p-3 rounded-2xl text-brand-primary"><Zap size={32} /></div>
              <div className="text-left">
                <div className="text-white font-black text-lg">99.9% Online</div>
                <div className="text-gray-500 text-[9px] font-black uppercase tracking-widest">Uptime Garantido 2026</div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-24 animate-bounce opacity-30 flex flex-col items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Scroll</span>
            <MousePointer2 size={16} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;