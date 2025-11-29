import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Depois da landing page e do tráfego pago, comecei a receber clientes todos os dias.",
    author: "Loja de Roupas",
    stars: 5
  },
  {
    text: "A página ficou profissional e meu restaurante agora aparece no Google.",
    author: "Restaurante",
    stars: 5
  },
  {
    text: "O trabalho foi rápido, organizado e aumentou minhas vendas.",
    author: "Cosméticos",
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-darker">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">O Que Dizem Nossos Clientes</h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-brand-dark p-8 rounded-2xl relative border border-gray-800">
              <Quote className="absolute top-6 right-6 text-gray-700 opacity-50" size={40} />
              <div className="flex space-x-1 mb-4 text-yellow-500">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 text-lg mb-6 italic">"{item.text}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold text-gray-300 mr-3">
                  {item.author.charAt(0)}
                </div>
                <span className="font-semibold text-white">{item.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;