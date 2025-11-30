import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const advantages = [
  "Tecnologia moderna + criatividade profissional",
  "Entrega rápida",
  "Preços acessíveis",
  "Páginas que realmente vendem",
  "Estratégias orientadas a resultados",
  "Suporte direto no WhatsApp",
  "Ideal para qualquer tipo de negócio"
];

const WhyUs: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-brand-blue/10 to-purple-900/10 rounded-3xl p-8 md:p-16 border border-brand-blue/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                Por Que Escolher a <span className="text-brand-accent">Nossa Parceria?</span>
              </h2>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-brand-accent flex-shrink-0" size={24} />
                    <span className="text-lg text-gray-300">{advantage}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <a 
                   href="https://wa.me/244947355724" 
                   className="inline-block bg-white text-brand-darker font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors"
                >
                  Começar Agora
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-brand-accent blur-[100px] opacity-20"></div>
              <img 
                src="https://picsum.photos/600/600?grayscale" 
                alt="Equipa trabalhando" 
                className="relative z-10 rounded-2xl shadow-2xl border border-gray-700 w-full object-cover h-[400px] hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;