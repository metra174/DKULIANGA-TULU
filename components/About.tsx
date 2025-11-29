import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* TULU Card */}
          <div className="bg-brand-darker p-8 rounded-2xl border border-gray-800 hover:border-brand-accent/50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-brand-blue/20 rounded-xl flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 transition-transform">
              <Code size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">TULU Digital</h3>
            <p className="text-gray-400 leading-relaxed">
              Plataforma angolana especializada em soluções tecnológicas, criação de páginas profissionais, sistemas digitais e estratégias de crescimento online. Desenvolvemos produtos digitais rápidos, seguros e orientados para resultados.
            </p>
          </div>

          {/* DKulianga Card */}
          <div className="bg-brand-darker p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-purple-900/20 rounded-xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
              <Palette size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">DKulianga Studio</h3>
            <p className="text-gray-400 leading-relaxed">
              Estúdio criativo focado em design, fotografia, vídeo, artes digitais e produção visual profissional. Criatividade de alto nível para tornar qualquer negócio mais elegante e chamativo.
            </p>
          </div>

        </div>

        {/* Union Message */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-brand-accent to-purple-600 mb-6">
            <div className="bg-brand-darker rounded-full px-6 py-2">
               <Zap size={20} className="inline mr-2 text-yellow-400" />
               <span className="font-bold text-white tracking-wide">A FORÇA DA PARCERIA</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tecnologia + Criatividade</h2>
          <p className="text-xl text-gray-300">
            Juntos, DKulianga + TULU criam uma parceria poderosa: tecnologia de ponta e criatividade visual no mesmo lugar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;