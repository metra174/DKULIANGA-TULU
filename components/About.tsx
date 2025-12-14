import React from 'react';
import { Code, Zap, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-brand-dark/90 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Quem é a <span className="text-brand-red">TULU?</span></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
             Somos a sua parceira tecnológica. Transformamos ideias em negócios digitais lucrativos com rapidez, segurança e design de alto nível.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-brand-darker p-8 rounded-2xl border border-gray-800 hover:border-brand-red/50 transition-all duration-300 group hover:-translate-y-2">
            <div className="w-14 h-14 bg-brand-red/10 rounded-xl flex items-center justify-center mb-6 text-brand-red group-hover:scale-110 transition-transform">
              <Code size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Desenvolvimento Web</h3>
            <p className="text-gray-400 leading-relaxed">
              Criamos sites e landing pages que funcionam perfeitamente em qualquer telemóvel ou computador.
            </p>
          </div>

          <div className="bg-brand-darker p-8 rounded-2xl border border-gray-800 hover:border-brand-gold/50 transition-all duration-300 group hover:-translate-y-2">
            <div className="w-14 h-14 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 transition-transform">
              <Zap size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Velocidade & Performance</h3>
            <p className="text-gray-400 leading-relaxed">
              Ninguém gosta de sites lentos. Nossos projetos são otimizados para carregar instantaneamente.
            </p>
          </div>

          <div className="bg-brand-darker p-8 rounded-2xl border border-gray-800 hover:border-brand-green/50 transition-all duration-300 group hover:-translate-y-2">
            <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6 text-brand-green group-hover:scale-110 transition-transform">
              <Rocket size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Foco em Vendas</h3>
            <p className="text-gray-400 leading-relaxed">
              Não fazemos apenas "arte". Criamos estruturas digitais pensadas para converter visitantes em clientes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;