import React, { useState } from 'react';
import { Layout, ShoppingBag, TrendingUp, Share2, Video, Wallet, Sparkles, CreditCard, X, ChevronRight, MessageCircle } from 'lucide-react';

const services = [
  {
    id: 'landing',
    icon: <Layout className="w-8 h-8" />,
    title: "Criação de Landing Pages",
    price: "A partir de 25.000 Kz",
    details: "Layouts de alta conversão otimizados para as vendas de 2026.",
    color: "text-brand-primary",
    status: "DISPONÍVEL"
  },
  {
    id: 'ecommerce',
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "Lojas Online (E-commerce)",
    price: "2.500.000 Kz",
    details: "Plataforma de vendas robusta e completa (Apenas criação).",
    color: "text-brand-secondary",
    status: "DISPONÍVEL"
  },
  {
    id: 'visa',
    icon: <CreditCard className="w-8 h-8" />,
    title: "Cartão VISA & Carteiras",
    price: "5.000 Kz",
    details: "Ativação de cartões internacionais para pagamentos globais. Tenha seu VISA funcional hoje mesmo.",
    color: "text-rose-400",
    status: "DISPONÍVEL",
    special: true
  },
  {
    id: 'conta',
    icon: <Wallet className="w-8 h-8" />,
    title: "Conta Digital TULU",
    price: "5.000 Kz",
    details: "Abertura imediata de conta digital. Ative sua presença financeira em minutos.",
    color: "text-yellow-500",
    status: "NOVO"
  },
  {
    id: 'ads',
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Tráfego Pago (Anúncios)",
    subtitle: "Resultados Imediatos",
    price: "A partir de 25.000 Kz / mês",
    details: "Campanhas no Meta Ads e Google Ads para atrair leads qualificados.",
    color: "text-brand-accent",
    status: "FORA DE SERVIÇO"
  },
  {
    id: 'social',
    icon: <Share2 className="w-8 h-8" />,
    title: "Gestão de Redes Sociais",
    price: "A partir de 45.000 Kz / mês",
    details: "Posicionamento estratégico e design premium para o seu perfil.",
    color: "text-indigo-400",
    status: "DISPONÍVEL"
  }
];

const walletOptions = [
  { name: "Rodpay", description: "Ativação e Recargas" },
  { name: "Jeton", description: "Pagamentos Internacionais" },
  { name: "Artim", description: "Solução Financeira Tech" },
  { name: "Wise", description: "Contas em Moeda Estrangeira" }
];

const Services: React.FC = () => {
  const [isVisaModalOpen, setIsVisaModalOpen] = useState(false);

  const handleVisaClick = () => {
    setIsVisaModalOpen(true);
  };

  const handleWalletSelect = (wallet: string) => {
    const message = `🚀 Olá TULU Studio! Tenho interesse na ativação/cartão da *${wallet}*.\n\nGostaria de saber como proceder.`;
    window.open(`https://wa.me/244930695969?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="servicos" className="py-24 bg-brand-darker/90 backdrop-blur-sm relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-brand-primary/10 rounded-full text-brand-secondary text-[10px] font-black uppercase tracking-[0.2em]">
            <Sparkles size={12} /> Ecossistema Financeiro & Digital 2026
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter italic text-white">
            NOSSOS <span className="text-gradient">SERVIÇOS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto italic font-medium">
            Tecnologia de ponta para quem não aceita resultados comuns este mês.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isOut = service.status === "FORA DE SERVIÇO";
            const isVisa = service.id === 'visa';
            const showBadge = service.status === "NOVO" || service.status === "BREVEMENTE" || (isVisa && service.status === "DISPONÍVEL");
            
            return (
              <div 
                key={index} 
                onClick={isVisa ? handleVisaClick : undefined}
                className={`group bg-brand-dark p-10 rounded-[2.5rem] border transition-all duration-500 relative overflow-hidden flex flex-col h-full ${
                  isOut 
                  ? 'border-gray-800 grayscale opacity-40 cursor-not-allowed' 
                  : isVisa 
                    ? 'border-rose-500/30 hover:border-rose-500/60 cursor-pointer hover:-translate-y-3 bg-gradient-to-br from-rose-950/20 to-brand-dark shadow-[0_20px_60px_rgba(225,29,72,0.1)]'
                    : 'border-white/5 hover:border-brand-primary/40 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(225,29,72,0.15)]'
                }`}
              >
                {isOut && (
                  <div className="absolute top-6 right-[-45px] rotate-45 bg-gray-600 text-white text-[9px] font-black py-1.5 px-12 shadow-lg z-20 flex flex-col items-center">
                    <span>FORA DE SERVIÇO</span>
                    <span className="text-[7px] opacity-80 uppercase tracking-tighter">Fevereiro Offline</span>
                  </div>
                )}
                
                {showBadge && (
                  <div className={`absolute top-6 right-[-35px] rotate-45 text-brand-darker text-[9px] font-black py-1.5 px-12 shadow-lg z-20 animate-pulse ${isVisa ? 'bg-rose-500' : 'bg-yellow-500'}`}>
                    {service.status}
                  </div>
                )}
                
                <div className={`mb-8 ${isOut ? 'text-gray-500' : service.color} bg-white/5 w-20 h-20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/5 shadow-inner`}>
                  {service.icon}
                </div>
                
                <h3 className={`text-2xl font-black mb-3 ${isOut ? 'text-gray-500' : 'text-white'} uppercase tracking-tight`}>{service.title}</h3>
                
                {service.subtitle && <span className={`block text-[10px] font-black uppercase tracking-[0.2em] mb-3 ${isOut ? 'text-gray-600' : 'text-brand-secondary'}`}>{service.subtitle}</span>}
                
                <div className="flex items-baseline gap-2 mb-6">
                   <p className={`text-3xl font-black ${isOut ? 'text-gray-600' : 'text-white'}`}>{service.price}</p>
                   {(isVisa || service.id === 'conta') && <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Taxa de Abertura</span>}
                </div>

                <p className={`text-sm leading-relaxed border-t border-white/5 pt-6 font-medium italic mb-6 flex-grow ${isOut ? 'text-gray-600' : 'text-gray-400'}`}>
                  {service.details}
                </p>

                {!isOut && (
                  <div className="mt-auto flex justify-end">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-125 ${isVisa ? 'bg-rose-500 shadow-rose-500/30' : 'bg-brand-primary shadow-brand-primary/30'}`}>
                       {isVisa ? <ChevronRight size={24} /> : <TrendingUp size={20} />}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Visa Selection Modal */}
      {isVisaModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-brand-darker/95 backdrop-blur-3xl" onClick={() => setIsVisaModalOpen(false)}></div>
          <div className="bg-brand-dark border border-white/10 rounded-[3rem] w-full max-w-lg relative z-10 p-12 shadow-[0_0_100px_rgba(225,29,72,0.2)] animate-fade-in-up">
            <button onClick={() => setIsVisaModalOpen(false)} className="absolute top-10 right-10 text-gray-500 hover:text-white transition-colors">
              <X size={32} strokeWidth={3} />
            </button>
            
            <div className="mb-12">
              <div className="w-16 h-16 bg-rose-500/10 rounded-2xl flex items-center justify-center text-rose-500 mb-6 border border-rose-500/20">
                <CreditCard size={32} />
              </div>
              <h3 className="text-4xl font-black text-white mb-2 uppercase italic leading-none">Cartão <span className="text-rose-500 not-italic">VISA</span></h3>
              <p className="text-gray-400 font-bold">O seu cartão VISA está disponível hoje através de nossos parceiros de elite. Escolha uma opção para ativação imediata:</p>
            </div>

            <div className="space-y-4">
              {walletOptions.map((wallet) => (
                <button 
                  key={wallet.name}
                  onClick={() => handleWalletSelect(wallet.name)}
                  className="w-full group flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-rose-500/50 transition-all text-left"
                >
                  <div>
                    <h4 className="text-xl font-black text-white uppercase tracking-tight">{wallet.name}</h4>
                    <p className="text-gray-500 text-xs font-bold">{wallet.description}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-rose-500/20 text-rose-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight size={20} />
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 text-center">
               <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-4">Outras contas e Cartões?</p>
               <button 
                onClick={() => handleWalletSelect('Administração (Consultoria Financeira)')}
                className="inline-flex items-center gap-3 text-white bg-gray-900 px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-primary transition-colors border border-white/5"
               >
                 <MessageCircle size={16} /> Consultar Administração
               </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;