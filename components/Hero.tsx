import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-darker">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
         
         {/* Grid Pattern */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 border border-brand-accent/30 rounded-full bg-brand-accent/10 backdrop-blur-sm animate-fade-in-up">
          <span className="text-brand-accent text-sm font-semibold tracking-wide uppercase">Parceria Oficial DKulianga + TULU</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Soluções Digitais Completas<br />
          para <span className="text-brand-accent">Impulsionar</span> o Seu Negócio
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          A união da criatividade da DKulianga com a tecnologia avançada da TULU oferece páginas profissionais, 
          estratégias digitais e crescimento real para qualquer tipo de negócio.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a 
            href="https://wa.me/244947935572" 
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-green-900/20 w-full md:w-auto"
          >
            <MessageCircle size={20} />
            Falar no WhatsApp: 947 935 572
          </a>
          
          <a 
            href="#pacotes" 
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg transition-all w-full md:w-auto"
          >
            Ver Pacotes
            <ArrowRight size={20} />
          </a>
        </div>

        {/* Floating Abstract Elements */}
        <div className="mt-16 md:mt-24 grid grid-cols-3 gap-4 max-w-4xl mx-auto opacity-60">
           <div className="h-2 bg-gradient-to-r from-transparent via-brand-accent to-transparent rounded-full animate-pulse"></div>
           <div className="h-2 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full animate-pulse delay-75"></div>
           <div className="h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;