import React from 'react';
import { CheckCircle2, Star } from 'lucide-react';

interface WhyUsProps {
  onOpenContact: () => void;
}

const advantages = [
  "Entrega rápida (garantida para o Natal)",
  "Design Premium e Exclusivo",
  "Preços promocionais de fim de ano",
  "Páginas otimizadas para vender mais",
  "Suporte técnico humanizado",
  "Tecnologia de ponta (React, Next.js)",
  "Ideal para lançar promoções agora"
];

const WhyUs: React.FC<WhyUsProps> = ({ onOpenContact }) => {
  return (
    <section className="py-24 bg-brand-dark/90 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-brand-red/10 to-brand-darker rounded-3xl p-8 md:p-16 border border-brand-red/20 relative overflow-hidden">
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <Star size={200} className="text-brand-gold" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                Por Que Escolher a <span className="text-brand-gold">TULU Digital?</span>
              </h2>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-brand-green flex-shrink-0" size={24} />
                    <span className="text-lg text-gray-300">{advantage}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <button 
                   onClick={onOpenContact}
                   className="inline-block bg-white text-brand-red font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors shadow-lg"
                >
                  Começar Agora
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-brand-red blur-[100px] opacity-20"></div>
              <img 
                src="https://i.imgur.com/NStHtjx.png" 
                alt="Equipa TULU" 
                className="relative z-10 rounded-2xl shadow-2xl border border-gray-700 w-full object-cover h-[400px] hover:scale-[1.02] transition-transform duration-500 grayscale-[0.2]"
              />
              <div className="absolute -bottom-4 -right-4 bg-brand-gold text-brand-darker font-bold px-6 py-2 rounded-lg shadow-lg rotate-3">
                Especial de Natal 🎄
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;