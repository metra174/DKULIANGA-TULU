import React from 'react';
import { CheckCircle2, TrendingUp } from 'lucide-react';

interface WhyUsProps {
  onOpenContact: () => void;
}

const advantages = [
  "Entrega de alta performance",
  "Suporte técnico especializado em Angola",
  "Design ultra-moderno e focado em UX",
  "Otimização para SEO e Google",
  "Integração com ferramentas de vendas",
  "Tecnologias de ponta (React & Cloud)",
  "Consultoria estratégica incluída"
];

const WhyUs: React.FC<WhyUsProps> = ({ onOpenContact }) => {
  return (
    <section className="py-24 bg-brand-dark/95 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-indigo-900/20 to-brand-darker rounded-3xl p-8 md:p-16 border border-brand-primary/20 relative overflow-hidden">
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                Por Que o <span className="text-brand-secondary">TULU Studio</span> é o Seu Próximo Nível?
              </h2>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-brand-secondary flex-shrink-0" size={24} />
                    <span className="text-lg text-gray-300">{advantage}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <button 
                   onClick={onOpenContact}
                   className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold py-3 px-8 rounded-full hover:bg-brand-primary/80 transition-all shadow-lg shadow-indigo-900/40"
                >
                  <TrendingUp size={20} />
                  Começar Jornada 2026
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-brand-primary blur-[100px] opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
                alt="Digital Studio Work" 
                className="relative z-10 rounded-2xl shadow-2xl border border-gray-700 w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-4 -right-4 bg-brand-secondary text-brand-darker font-bold px-6 py-2 rounded-lg shadow-lg">
                🚀 Foco em 2026
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;