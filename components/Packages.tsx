import React, { useState } from 'react';
import { Check, X, Send, Zap, Rocket, ShieldCheck, Tag } from 'lucide-react';

const packages = [
  {
    name: "Essencial (Start)",
    oldPrice: "65.000 Kz",
    price: "25.000 Kz",
    features: [
      "Landing Page Profissional",
      "Copywriting Persuasivo",
      "Otimização de Velocidade",
      "Botão WhatsApp Flutuante",
      "Hospedagem (Primeiro Mês)"
    ],
    highlight: false,
    icon: <Zap className="w-6 h-6" />,
    badge: "OFERTA DE JANEIRO"
  },
  {
    name: "Profissional (Growth)",
    oldPrice: "125.000 Kz",
    price: "55.000 Kz",
    features: [
      "Landing Page Alta Conversão",
      "Seção de Portfólio/Produtos",
      "Integração de Instagram Feed",
      "Configuração Pixel/Analytics",
      "Design Futurista 2026",
      "SEO Básico Incluso"
    ],
    highlight: true,
    icon: <Rocket className="w-6 h-6" />,
    badge: "MAIS VENDIDO"
  },
  {
    name: "Enterprise (Scale)",
    oldPrice: "456.000 Kz",
    price: "95.000 Kz",
    features: [
      "E-commerce ou Site Corporativo",
      "Consultoria de Tráfego Pago",
      "Copywriting Avançado",
      "Sistemas de Automação",
      "Manutenção Pro (3 meses)",
      "Prioridade Total no Studio"
    ],
    highlight: false,
    icon: <ShieldCheck className="w-6 h-6" />,
    badge: "PROMO TULU STUDIO"
  }
];

const Packages: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: ''
  });

  const openModal = (pkgName: string) => {
    setSelectedPkg(pkgName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPkg(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `🚀 Olá TULU Studio! Vi a promoção e quero o Plano: *${selectedPkg}*.\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `📱 *Telefone:* ${formData.phone}\n` +
      `📝 *Info:* ${formData.description}`;

    const url = `https://wa.me/244930695969?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    closeModal();
  };

  return (
    <section id="pacotes" className="py-24 bg-brand-dark/95 backdrop-blur-sm relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/20 text-brand-secondary rounded-full text-xs font-bold mb-4 border border-brand-primary/30">
            <Tag size={14} />
            CONDIÇÕES ESPECIAIS ATÉ 31 DE JANEIRO
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Promoção <span className="text-brand-primary">TULU Studio</span></h2>
          <p className="text-gray-400">Gatilhos de desconto aplicados. Garanta sua vaga com preço de lançamento.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 border transition-all duration-500 relative flex flex-col ${
                pkg.highlight 
                  ? 'bg-gradient-to-b from-brand-darker to-indigo-950/40 border-brand-primary shadow-2xl shadow-brand-primary/20 transform md:-translate-y-4 z-10' 
                  : 'bg-brand-darker border-gray-800 hover:border-brand-primary/50'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                  {pkg.badge}
                </div>
              )}

              <div className={`mb-4 ${pkg.highlight ? 'text-brand-secondary' : 'text-gray-500'}`}>
                {pkg.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">{pkg.name}</h3>
              
              <div className="mb-6">
                <span className="text-gray-500 line-through text-lg block mb-1">
                  {pkg.oldPrice}
                </span>
                <div className="text-4xl font-black text-white flex items-baseline">
                  {pkg.price}
                  <span className="text-xs font-medium text-gray-500 ml-2 uppercase">Investimento</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <Check className="text-brand-secondary mr-3 flex-shrink-0" size={18} />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => openModal(pkg.name)}
                className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${
                  pkg.highlight 
                    ? 'bg-brand-primary hover:bg-brand-primary/80 text-white shadow-xl shadow-brand-primary/30' 
                    : 'bg-gray-800 hover:bg-gray-700 text-white border border-white/5'
                }`}
              >
                Ativar Promoção
              </button>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={closeModal}></div>
          <div className="bg-brand-darker border border-brand-primary/40 rounded-3xl w-full max-w-md relative z-10 p-8 animate-fade-in-up">
            <button onClick={closeModal} className="absolute top-6 right-6 text-gray-500 hover:text-white"><X size={24} /></button>
            <h3 className="text-2xl font-black text-white mb-2">Checkout <span className="text-brand-primary text-sm uppercase">Express</span></h3>
            <p className="text-gray-400 text-sm mb-6">Confirme o interesse no plano <span className="text-white font-bold">{selectedPkg}</span></p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-brand-dark border border-gray-800 rounded-xl p-4 text-white focus:border-brand-primary outline-none transition-all" placeholder="Seu Nome Completo" />
              <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full bg-brand-dark border border-gray-800 rounded-xl p-4 text-white focus:border-brand-primary outline-none transition-all" placeholder="WhatsApp (9xx...)" />
              <textarea name="description" rows={3} value={formData.description} onChange={handleChange} className="w-full bg-brand-dark border border-gray-800 rounded-xl p-4 text-white focus:border-brand-primary outline-none resize-none transition-all" placeholder="Qual o seu ramo de atividade?"></textarea>
              <button type="submit" className="w-full bg-brand-primary hover:bg-brand-primary/80 text-white font-black py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-brand-primary/20">
                <Send size={18} /> ENVIAR PEDIDO AGORA
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Packages;