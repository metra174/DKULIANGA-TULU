import React, { useState } from 'react';
import { Check, X, Send, Gift } from 'lucide-react';

const packages = [
  {
    name: "Pacote Trenó (Start)",
    price: "20.000 Kz",
    features: [
      "Landing Page simples",
      "Texto de vendas",
      "3 imagens",
      "Botão WhatsApp"
    ],
    highlight: false,
    color: "border-gray-700"
  },
  {
    name: "Natal Mágico (Pro)",
    price: "45.000 Kz",
    features: [
      "Landing Page completa",
      "Galeria de fotos",
      "Copywriting Persuasivo",
      "Integração Redes Sociais",
      "Design Premium Natalino"
    ],
    highlight: true,
    color: "border-brand-gold"
  },
  {
    name: "Ano Novo (Premium)",
    price: "75.000 Kz",
    features: [
      "Landing Page Profissional",
      "Setup Redes Sociais",
      "Consultoria Estratégica",
      "Setup de Tráfego Pago",
      "Suporte Prioritário"
    ],
    highlight: false,
    color: "border-gray-700"
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
    
    // Construção da mensagem formatada
    const message = `🎄 Olá TULU! Tenho interesse na oferta de Natal: *${selectedPkg}*.\n\n` +
      `📋 *MEUS DADOS:*\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📱 *Telefone:* ${formData.phone}\n` +
      `🏢 *Empresa:* ${formData.company || 'Não informada'}\n\n` +
      `📝 *DESCRIÇÃO:* ${formData.description}\n\n` +
      `🎁 *Nota:* Vim pela Promoção de Natal.`;

    // Link para o WhatsApp
    const url = `https://wa.me/244930695969?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
    closeModal();
  };

  return (
    <section id="pacotes" className="py-24 bg-brand-dark/90 backdrop-blur-sm relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-brand-red/20 rounded-full mb-4">
             <Gift className="text-brand-red w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Presentes Para o Seu Negócio</h2>
          <p className="text-gray-400">Pacotes especiais com preços congelados para este fim de ano.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 border transition-all duration-300 relative flex flex-col h-full ${
                pkg.highlight 
                  ? 'bg-gradient-to-b from-brand-darker to-red-900/20 border-brand-gold shadow-2xl shadow-brand-red/10 transform md:-translate-y-4' 
                  : 'bg-brand-darker border-gray-800 hover:border-brand-red/50'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-brand-darker px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1">
                  <Gift size={12} /> Mais Vendido
                </div>
              )}
              
              <h3 className={`text-2xl font-bold mb-2 ${pkg.highlight ? 'text-brand-gold' : 'text-white'}`}>{pkg.name}</h3>
              <div className="text-4xl font-extrabold text-white mb-6">
                {pkg.price}
                <span className="text-sm font-normal text-gray-500 ml-1">/único</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <Check className="text-brand-green mr-3 flex-shrink-0" size={20} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => openModal(pkg.name)}
                className={`w-full py-3 rounded-lg font-bold text-center transition-colors ${
                  pkg.highlight 
                    ? 'bg-brand-red hover:bg-red-700 text-white shadow-lg shadow-red-900/40' 
                    : 'bg-gray-800 hover:bg-gray-700 text-white'
                }`}
              >
                Escolher Presente
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Formulário */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
          <div className="bg-brand-darker border border-brand-red/30 rounded-2xl w-full max-w-md relative z-10 p-6 md:p-8 animate-fade-in-up shadow-2xl">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <h3 className="text-2xl font-bold text-white mb-2">Garantir Oferta de Natal 🎅</h3>
            <p className="text-brand-gold font-medium mb-6">Interesse em: {selectedPkg}</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Nome Completo *</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-brand-dark border border-gray-700 rounded-lg p-3 text-white focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Telefone *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-brand-dark border border-gray-700 rounded-lg p-3 text-white focus:border-brand-red focus:outline-none transition-colors"
                    placeholder="9xx xxx xxx"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-brand-dark border border-gray-700 rounded-lg p-3 text-white focus:border-brand-red focus:outline-none transition-colors"
                    placeholder="email@..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Empresa</label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-brand-dark border border-gray-700 rounded-lg p-3 text-white focus:border-brand-red focus:outline-none transition-colors"
                  placeholder="Seu negócio"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Detalhes do Projeto *</label>
                <textarea 
                  name="description"
                  required
                  rows={3}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full bg-brand-dark border border-gray-700 rounded-lg p-3 text-white focus:border-brand-red focus:outline-none transition-colors resize-none"
                  placeholder="O que deseja criar ou melhorar?"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95 border border-green-500"
              >
                <Send size={18} />
                Enviar Pedido
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Packages;