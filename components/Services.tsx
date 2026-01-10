import React from 'react';
import { Layout, ShoppingBag, TrendingUp, Share2, Video, Users } from 'lucide-react';

const services = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Criação de Landing Pages",
    price: "A partir de 25.000 Kz",
    details: "Layouts de alta conversão otimizados para as vendas de 2026.",
    color: "text-brand-primary"
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "Lojas Online (E-commerce)",
    price: "A partir de 95.000 Kz",
    details: "Sua plataforma de vendas completa com gestão de stock.",
    color: "text-brand-secondary"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Tráfego Pago (Anúncios)",
    subtitle: "Resultados Imediatos",
    price: "A partir de 25.000 Kz / mês",
    details: "Campanhas no Meta Ads e Google Ads para atrair leads qualificados.",
    color: "text-brand-accent"
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Gestão de Redes Sociais",
    price: "A partir de 45.000 Kz / mês",
    details: "Posicionamento estratégico e design premium para o seu perfil.",
    color: "text-indigo-400"
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Produção de Conteúdo Reels",
    price: "Sob consulta",
    details: "Vídeos dinâmicos e edições virais para aumentar o seu alcance.",
    color: "text-cyan-400"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Consultoria TULU Studio",
    price: "Sessões Estratégicas",
    details: "Diagnóstico completo do seu ecossistema digital.",
    color: "text-violet-400"
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
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-brand-dark p-8 rounded-2xl border border-gray-800 hover:border-brand-primary/30 transition-all duration-300 group hover:-translate-y-2 shadow-lg hover:shadow-brand-primary/10`}
            >
              <div className={`mb-6 ${service.color} bg-gray-900/50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-gray-800 transition-colors border border-white/5`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              {service.subtitle && <span className="block text-xs text-brand-secondary font-bold uppercase tracking-widest mb-2">{service.subtitle}</span>}
              <p className="text-lg font-semibold text-gray-300 mb-4">{service.price}</p>
              <p className="text-gray-400 text-sm leading-relaxed border-t border-gray-800 pt-4">
                {service.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;