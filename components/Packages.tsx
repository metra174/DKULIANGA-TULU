import React from 'react';
import { Check } from 'lucide-react';

const packages = [
  {
    name: "Pacote Start",
    price: "20.000 Kz",
    features: [
      "Landing Page simples",
      "Texto de vendas",
      "3 imagens",
      "Botão WhatsApp"
    ],
    highlight: false
  },
  {
    name: "Pacote Profissional",
    price: "45.000 Kz",
    features: [
      "Landing Page completa",
      "Galeria de fotos",
      "Copywriting (Texto persuasivo)",
      "Integração com Redes Sociais",
      "Design Premium"
    ],
    highlight: true
  },
  {
    name: "Pacote Premium",
    price: "75.000 Kz",
    features: [
      "Landing Page Profissional",
      "Setup Redes Sociais",
      "Consultoria Estratégica",
      "Setup de Tráfego Pago Incluído",
      "Suporte Prioritário"
    ],
    highlight: false
  }
];

const Packages: React.FC = () => {
  return (
    <section id="pacotes" className="py-24 bg-brand-dark/90 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Pacotes Especiais</h2>
          <p className="text-gray-400">Soluções empacotadas para o máximo de resultado com o melhor custo.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 border transition-all duration-300 relative flex flex-col h-full ${
                pkg.highlight 
                  ? 'bg-gradient-to-b from-brand-darker to-blue-900/20 border-brand-accent shadow-2xl shadow-brand-accent/10 transform md:-translate-y-4' 
                  : 'bg-brand-darker border-gray-800 hover:border-gray-600'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Mais Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
              <div className="text-4xl font-extrabold text-white mb-6">
                {pkg.price}
                <span className="text-sm font-normal text-gray-500 ml-1">/único</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <Check className="text-brand-accent mr-3 flex-shrink-0" size={20} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={`https://wa.me/244930695969?text=Olá, tenho interesse no ${pkg.name}`}
                className={`w-full py-3 rounded-lg font-bold text-center transition-colors ${
                  pkg.highlight 
                    ? 'bg-brand-accent hover:bg-blue-600 text-white' 
                    : 'bg-gray-800 hover:bg-gray-700 text-white'
                }`}
              >
                Escolher Pacote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;