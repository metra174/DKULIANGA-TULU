import React from 'react';
import { Code, Zap, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-brand-dark/95 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Sobre o <span className="text-brand-primary">TULU Studio</span></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
             Somos um studio criativo e tecnológico focado em resultados. Unimos design de vanguarda e engenharia para escalar o seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-brand-darker p-8 rounded-2xl border border-gray-800 hover:border-brand-primary/50 transition-all duration-300 group hover:-translate-y-2">
            <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform">
              <Code size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Full-Stack Dev</h3>
            <p className="text-gray-400 leading-relaxed">
              Desenvolvimento robusto com as tecnologias que as gigantes mundiais utilizam.
            </p>
          </div>

          <div className="bg-brand-darker p-8 rounded-2xl border border-gray-800 hover:border-brand-secondary/50 transition-all duration-300 group hover:-translate-y-2">
            <div className="w-14 h-14 bg-brand-secondary/10 rounded-xl flex items-center justify-center mb-6 text-brand-secondary group-hover:scale-110 transition-transform">
              <Zap size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Cloud Performance</h3>
            <p className="text-gray-400 leading-relaxed">
              Infraestrutura ágil para garantir que o seu site esteja sempre online e veloz.
            </p>
          </div>

          <div className="bg-brand-darker p-8 rounded-2xl border border-gray-800 hover:border-brand-accent/50 transition-all duration-300 group hover:-translate-y-2">
            <div className="w-14 h-14 bg-brand-accent/10 rounded-xl flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 transition-transform">
              <Rocket size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Digital Scaling</h3>
            <p className="text-gray-400 leading-relaxed">
              Estratégias de crescimento para aumentar o seu volume de vendas mês a mês.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;