import React from 'react';
import { Layout, ShoppingBag, TrendingUp, Share2, Video, CreditCard } from 'lucide-react';

const services = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Criação de Landing Pages",
    price: "A partir de 25.000 Kz",
    details: "Layouts de alta conversão otimizados para as vendas de 2026.",
    color: "text-brand-primary",
    status: "DISPONÍVEL"
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "Lojas Online (E-commerce)",
    price: "2.500.000 Kz",
    details: "Plataforma de vendas robusta e completa (Apenas criação).",
    color: "text-brand-secondary",
    status: "DISPONÍVEL"
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Abertura de Conta VISA",
    price: "Sessões Práticas",
    details: "Consultoria completa para abertura de contas internacionais e cartões VISA.",
    color: "text-yellow-500",
    status: "NOVO"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Tráfego Pago (Anúncios)",
    subtitle: "Resultados Imediatos",
    price: "A partir de 25.000 Kz / mês",
    details: "Campanhas no Meta Ads e Google Ads para atrair leads qualificados.",
    color: "text-brand-accent",
    status: "FORA DE SERVIÇO"
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Gestão de Redes Sociais",
    price: "A partir de 45.000 Kz / mês",
    details: "Posicionamento estratégico e design premium para o seu perfil.",
    color: "text-indigo-400",
    status: "DISPONÍVEL"
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Produção de Conteúdo Reels",
    price: "Sob consulta",
    details: "Vídeos dinâmicos e edições virais para aumentar o seu alcance.",
    color: "text-cyan-400",
    status: "FORA DE SERVIÇO"
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-brand-darker/90 backdrop-blur-sm relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Soluções <span className="text-brand-secondary">High-Tech</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto italic">
            Tecnologia de ponta para quem não aceita resultados comuns em 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const isOut = service.status === "FORA DE SERVIÇO";
            
            return (
              <div 
                key={index} 
                className={`bg-brand-dark p-8 rounded-2xl border transition-all duration-300 group shadow-lg relative overflow-hidden ${
                  isOut 
                  ? 'border-gray-800 grayscale opacity-40 cursor-not-allowed' 
                  : 'border-gray-800 hover:border-brand-primary/30 hover:-translate-y-2 hover:shadow-brand-primary/10'
                }`}
              >
                {isOut && (
                  <div className="absolute top-6 right-[-45px] rotate-45 bg-gray-600 text-white text-[9px] font-black py-1.5 px-12 shadow-lg z-20 flex flex-col items-center">
                    <span>FORA DE SERVIÇO</span>
                    <span className="text-[7px] opacity-80 uppercase tracking-tighter">Voltamos brevemente</span>
                  </div>
                )}
                
                {service.status === "NOVO" && (
                  <div className="absolute top-4 right-[-35px] rotate-45 bg-yellow-500 text-brand-darker text-[10px] font-black py-1 px-10 shadow-lg">
                    NOVO
                  </div>
                )}
                
                <div className={`mb-6 ${isOut ? 'text-gray-500' : service.color} bg-gray-900/50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-gray-800 transition-colors border border-white/5`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isOut ? 'text-gray-500' : 'text-white'}`}>{service.title}</h3>
                {service.subtitle && <span className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isOut ? 'text-gray-600' : 'text-brand-secondary'}`}>{service.subtitle}</span>}
                <p className={`text-lg font-semibold mb-4 ${isOut ? 'text-gray-600' : 'text-gray-300'}`}>{service.price}</p>
                <p className={`text-sm leading-relaxed border-t border-gray-800 pt-4 ${isOut ? 'text-gray-600' : 'text-gray-400'}`}>
                  {service.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;