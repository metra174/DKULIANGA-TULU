import React, { useState } from 'react';
import { Check, X, Send, Zap, Rocket, ShieldCheck } from 'lucide-react';

const packages = [
  {
    name: "Essencial (Start)",
    price: "25.000 Kz",
    features: [
      "Landing Page Profissional",
      "Copywriting para Vendas",
      "Otimização Mobile (Mobile-First)",
      "Botão WhatsApp Integrado",
      "Alojamento Incluso (1 Mês)"
    ],
    highlight: false,
    icon: <Zap className="w-6 h-6" />
  },
  {
    name: "Profissional (Growth)",
    price: "55.000 Kz",
    features: [
      "Landing Page Alta Conversão",
      "Galeria de Produtos/Serviços",
      "Integração com Redes Sociais",
      "Configuração de Pixel (Facebook)",
      "Design Moderno & Tecnológico",
      "Suporte para Campanhas"
    ],
    highlight: true,
    icon: <Rocket className="w-6 h-6" />
  },
  {
    name: "Enterprise (Scale)",
    price: "95.000 Kz",
    features: [
      "E-commerce ou Site Multi-páginas",
      "Consultoria de Tráfego Pago",
      "Relatório Mensal de Performance",
      "Treinamento de Gestão",
      "Manutenção Pro (3 meses)",
      "Suporte Prioritário 24/7"
    ],
    highlight: false,
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

const Packages: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `🚀 Olá TULU Studio! Tenho interesse no Plano 2026: *${selectedPkg}*.\n\n` +
      `📋 *DADOS DO CLIENTE:*\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `📱 *Telefone:* ${formData.phone}\n` +
      `🏢 *Negócio:* ${formData.company || 'Pessoa Física'}\n\n` +
      `📝 *OBJETIVO:* ${formData.description}`;

    const url = `https://wa.me/244930695969?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    closeModal();
  };

  return (
    <section id="pacotes" className="py-24 bg-brand-dark/95 backdrop-blur-sm relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Investimento Estratégico</h2>
          <p className="text-gray-400">Escolha o plano ideal para as suas metas de faturamento em 2026.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 border transition-all duration-300 relative flex flex-col h-full ${
                pkg.highlight 
                  ? 'bg-gradient-to-b from-brand-darker to-indigo-950/20 border-brand-primary shadow-2xl shadow-brand-primary/10 transform md:-translate-y-4' 
                  : 'bg-brand-darker border-gray-800 hover:border-brand-primary/50'
              }`}
            >
              <div className={`mb-4 ${pkg.highlight ? 'text-brand-secondary' : 'text-gray-500'}`}>
                {pkg.icon}
              </div>
              
              <h3 className={`text-2xl font-bold mb-2 ${pkg.highlight ? 'text-white' : 'text-white'}`}>{pkg.name}</h3>
              <div className="text-4xl font-extrabold text-white mb-6">
                {pkg.price}
                <span className="text-sm font-normal text-gray-500 ml-1">/único</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <Check className="text-brand-secondary mr-3 flex-shrink-0" size={20} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => openModal(pkg.name)}
                className={`w-full py-3 rounded-lg font-bold text-center transition-all ${
                  pkg.highlight 
                    ? 'bg-brand-primary hover:bg-brand-primary/80 text-white shadow-lg shadow-brand-primary/40' 
                    : 'bg-gray-800 hover:bg-gray-700 text-white'
                }`}
              >
                Selecionar Plano
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Reutilizado com Estilo Renovado */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={closeModal}></div>
          <div className="bg-brand-darker border border-brand-primary/30 rounded-2xl w-full max-w-md relative z-10 p-6 md:p-8 animate-fade-in-up">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-white"><X size={24} /></button>
            <h3 className="text-2xl font-bold text-white mb-2">Iniciar Projeto 2026</h3>
            <p className="text-brand-secondary font-medium mb-6">Plano: {selectedPkg}</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-brand-dark border border-gray-700 rounded-lg p-3 text-white focus:border-brand-primary outline-none" placeholder="Seu nome" />
              <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full bg-brand-dark border border-gray-700 rounded-lg p-3 text-white focus:border-brand-primary outline-none" placeholder="WhatsApp" />
              <textarea name="description" required rows={3} value={formData.description} onChange={handleChange} className="w-full bg-brand-dark border border-gray-700 rounded-lg p-3 text-white focus:border-brand-primary outline-none resize-none" placeholder="Conte-nos sobre o seu negócio..."></textarea>
              <button type="submit" className="w-full bg-brand-primary hover:bg-brand-primary/80 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2">
                <Send size={18} /> Confirmar & Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Packages;