import React, { useState } from 'react';
import { Check, X, Send, Zap, Rocket, Tag, PhoneCall, Star, ShoppingCart, ShieldCheck, Trophy, Sparkles } from 'lucide-react';

const packages = [
  {
    id: 'start',
    name: "Essencial (Start)",
    oldPrice: "65.000 Kz",
    price: "25.000 Kz",
    description: "Para quem precisa de presença digital rápida e profissional.",
    features: [
      "Landing Page Ultra-Veloz",
      "Copywriting de Vendas",
      "Otimização Mobile Gold",
      "Botão WhatsApp Flutuante",
      "Hospedagem (Oferta 1º Mês)"
    ],
    color: "from-blue-500/20",
    border: "border-blue-500/30",
    text: "text-blue-400",
    icon: <Zap className="w-8 h-8" />,
    badge: "ENTRADA",
    cta: "Começar Agora"
  },
  {
    id: 'growth',
    name: "Profissional (Growth)",
    oldPrice: "125.000 Kz",
    price: "55.000 Kz",
    description: "A máquina de vendas para negócios que buscam escala real.",
    features: [
      "Landing Page Alta Conversão",
      "Seção Portfólio/Catálogo",
      "Configuração Pixel/Analytics",
      "Design Futurista 2026",
      "SEO Estratégico Incluso",
      "Entrega Turbo (48 Horas)"
    ],
    highlight: true,
    color: "from-brand-primary/30",
    border: "border-brand-primary",
    text: "text-brand-secondary",
    icon: <Rocket className="w-10 h-10" />,
    badge: "MAIS VENDIDO",
    cta: "Dominar Mercado"
  },
  {
    id: 'design',
    name: "Exclusive (Design)",
    oldPrice: "210.000 Kz",
    price: "95.000 Kz",
    description: "Para marcas que exigem prestígio e estética internacional.",
    features: [
      "Design de Marca Exclusivo",
      "Animações High-End Cinema",
      "Experiência de Luxo (UX)",
      "Otimização de Imagens 4K",
      "Suporte VIP Prioritário",
      "Revisões Ilimitadas"
    ],
    color: "from-purple-500/20",
    border: "border-purple-500/30",
    text: "text-purple-400",
    icon: <Trophy className="w-8 h-8" />,
    badge: "PRESTÍGIO",
    cta: "Quero Exclusividade"
  },
  {
    id: 'ecommerce',
    name: "E-commerce (Scale)",
    oldPrice: "4.500.000 Kz",
    price: "2.500.000 Kz",
    description: "Seu ecossistema de vendas robusto pronto para faturar milhões.",
    features: [
      "Loja Online Inteligente",
      "Checkout Ultra-Seguro",
      "Gestão de Estoque Tech",
      "Painel Adm Simplificado",
      "Integração Multi-Pagamentos",
      "Infraestrutura de Elite"
    ],
    color: "from-amber-500/20",
    border: "border-amber-500/30",
    text: "text-amber-400",
    icon: <ShoppingCart className="w-8 h-8" />,
    badge: "CORPORATIVO",
    cta: "Faturar Milhões"
  }
];

const Packages: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', description: '' });

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
    const message = `🚀 Olá TULU Studio! Vi a oferta de Fevereiro e escolhi o Plano: *${selectedPkg}*.\n\n👤 *Nome:* ${formData.name}\n📱 *Telefone:* ${formData.phone}\n📝 *Info:* ${formData.description}`;
    window.open(`https://wa.me/244930695969?text=${encodeURIComponent(message)}`, '_blank');
    closeModal();
  };

  return (
    <section id="pacotes" className="py-32 relative overflow-hidden bg-brand-darker">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-brand-primary blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-600 blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 glass text-brand-secondary rounded-full text-sm font-black mb-8 border border-brand-primary/30 tracking-[0.2em] shadow-lg animate-bounce">
            <Sparkles size={16} />
            ÚLTIMAS VAGAS DE FEVEREIRO
          </div>
          <h2 className="text-5xl md:text-8xl font-black mb-6 text-white uppercase italic tracking-tighter leading-none">
            ESCOLHA SEU <br /> <span className="text-gradient">DESTINO 2026</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Seja um iniciante estratégico ou uma potência empresarial, temos o motor digital certo para sua escalada.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`group relative rounded-[3rem] p-8 border-2 transition-all duration-700 flex flex-col bg-brand-dark/40 backdrop-blur-xl hover:-translate-y-4 ${
                pkg.highlight 
                  ? `${pkg.border} shadow-[0_0_80px_rgba(225,29,72,0.3)] z-20 scale-110` 
                  : `border-white/5 hover:${pkg.border} hover:shadow-[0_0_50px_rgba(255,255,255,0.05)]`
              }`}
            >
              {/* Internal Gradient Glow */}
              <div className={`absolute inset-0 rounded-[3rem] bg-gradient-to-b ${pkg.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              {/* Badge */}
              <div className={`absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-[10px] font-black tracking-widest shadow-2xl transition-all ${
                pkg.highlight ? 'bg-brand-primary text-white scale-110' : 'bg-gray-800 text-gray-400'
              }`}>
                {pkg.badge}
              </div>

              {/* Icon Area */}
              <div className={`relative mb-8 flex justify-center ${pkg.highlight ? 'text-brand-secondary animate-float' : pkg.text}`}>
                <div className="p-4 rounded-3xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  {pkg.icon}
                </div>
              </div>
              
              <div className="relative text-center mb-8">
                <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-tight">{pkg.name}</h3>
                <p className="text-gray-500 text-xs font-bold leading-relaxed px-4 min-h-[40px] italic">
                  "{pkg.description}"
                </p>
              </div>

              <div className="relative text-center mb-10 bg-white/5 py-6 rounded-[2rem] border border-white/5">
                <span className="text-gray-600 line-through text-sm font-black block mb-1">
                  {pkg.oldPrice}
                </span>
                <div className="text-3xl font-black text-white flex items-center justify-center gap-1">
                  {pkg.price}
                </div>
                <div className={`text-[9px] font-black mt-2 tracking-widest uppercase ${pkg.text}`}>Pagamento Único</div>
              </div>
              
              <ul className="relative space-y-5 mb-12 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300 group/item transition-colors">
                    <div className={`mr-3 shrink-0 p-1 rounded-full bg-white/5 ${pkg.highlight ? 'text-brand-secondary' : 'text-gray-600'}`}>
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="text-[11px] font-bold tracking-tight group-hover/item:text-white transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => openModal(pkg.name)}
                className={`relative w-full py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all overflow-hidden group/btn ${
                  pkg.highlight 
                    ? 'bg-brand-primary text-white shadow-2xl hover:scale-105 active:scale-95' 
                    : 'bg-white/5 text-white border border-white/10 hover:bg-brand-primary hover:border-transparent shadow-xl'
                }`}
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {pkg.cta}
                  <Rocket size={16} />
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Support Call-to-Action */}
        <div className="mt-20 text-center animate-fade-in-up">
           <p className="text-gray-500 font-bold text-sm flex items-center justify-center gap-3">
             <ShieldCheck className="text-green-500" size={18} />
             Garantia Studio TULU: Suporte técnico angolano de verdade em 2026.
           </p>
        </div>
      </div>

      {/* Checkout Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-brand-darker/98 backdrop-blur-3xl" onClick={closeModal}></div>
          <div className="bg-brand-dark border border-white/10 rounded-[3rem] w-full max-w-lg relative z-10 p-12 shadow-[0_0_100px_rgba(225,29,72,0.2)] animate-fade-in-up">
            <button onClick={closeModal} className="absolute top-10 right-10 text-gray-500 hover:text-white transition-colors">
              <X size={32} strokeWidth={3} />
            </button>
            
            <div className="mb-10">
              <h3 className="text-4xl font-black text-white mb-2 uppercase italic leading-none">Checkout <span className="text-brand-primary not-italic">Premium</span></h3>
              <p className="text-gray-400 font-bold">Iniciando protocolo de ativação para o <span className="text-white bg-brand-primary/20 px-2 py-1 rounded-lg border border-brand-primary/30">{selectedPkg}</span></p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4">Quem está investindo?</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-brand-darker border border-white/10 rounded-2xl p-5 text-white focus:border-brand-primary outline-none transition-all font-bold placeholder:text-gray-800" placeholder="Nome Completo ou Empresa" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4">Seu canal de guerra (WhatsApp)</label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full bg-brand-darker border border-white/10 rounded-2xl p-5 text-white focus:border-brand-primary outline-none transition-all font-bold placeholder:text-gray-800" placeholder="Ex: 9xx xxx xxx" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4">Qual seu objetivo este mês?</label>
                <textarea name="description" rows={3} value={formData.description} onChange={handleChange} className="w-full bg-brand-darker border border-white/10 rounded-2xl p-5 text-white focus:border-brand-primary outline-none resize-none transition-all font-bold placeholder:text-gray-800" placeholder="Venda de produtos, serviços, autoridade..."></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-primary hover:bg-brand-primary/80 text-white font-black py-6 rounded-2xl flex items-center justify-center gap-4 shadow-[0_20px_40px_rgba(225,29,72,0.4)] transition-all active:scale-95 group/submit">
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                CONFIRMAR E SOLICITAR VAGA
              </button>
              
              <div className="flex items-center justify-center gap-2 text-[10px] font-black text-gray-600 uppercase tracking-tighter">
                <ShieldCheck size={12} /> Dados encriptados & Atendimento Prioritário
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Packages;