import React from 'react';
import { Layout, ShoppingBag, Camera, Video, Share2, TrendingUp, Users } from 'lucide-react';

const services = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Criação de Landing Pages",
    price: "15.000 Kz – 40.000 Kz",
    details: "Layout profissional de alta conversão, ideal para ofertas de Natal.",
    color: "text-brand-red"
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "Lojas Online",
    price: "65.000 Kz – 120.000 Kz",
    details: "Sua vitrine digital aberta 24h para vender produtos.",
    color: "text-brand-green"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Tráfego Pago",
    subtitle: "Venda Mais Rápido",
    price: "15.000 Kz – 45.000 Kz / mês",
    details: "Anúncios no Facebook e Instagram para trazer clientes reais.",
    color: "text-brand-gold"
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Gestão de Redes Sociais",
    price: "35.000 Kz – 80.000 Kz / mês",
    details: "Design profissional e gestão estratégica do seu perfil.",
    color: "text-blue-400"
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Edição de Reels",
    price: "10.000 Kz – 25.000 Kz",
    details: "Vídeos dinâmicos para chamar atenção nas redes.",
    color: "text-purple-400"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Consultoria Digital",
    price: "5.000 Kz – 15.000 Kz",
    details: "Análise do seu negócio para começar 2026 a crescer.",
    color: "text-indigo-400"
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-brand-darker/90 backdrop-blur-sm relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Soluções completas para digitalizar o seu negócio com qualidade e preço justo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-brand-dark p-8 rounded-2xl border border-gray-800 hover:border-brand-red/30 transition-all duration-300 group hover:-translate-y-2`}
            >
              <div className={`mb-6 ${service.color} bg-gray-900/50 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              {service.subtitle && <span className="block text-sm text-brand-gold font-semibold mb-2">{service.subtitle}</span>}
              <p className="text-2xl font-bold text-gray-200 mb-4">{service.price}</p>
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