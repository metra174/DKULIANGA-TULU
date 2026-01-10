import React from 'react';
import { Server, Settings, Shield } from 'lucide-react';

const Maintenance: React.FC = () => {
  return (
    <section className="py-24 bg-brand-darker/90 backdrop-blur-sm border-t border-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-200">Planos de Manutenção 2026</h2>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">Mantenha sua infraestrutura digital sempre online, veloz e segura.</p>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          <div className="bg-brand-dark p-8 rounded-2xl border border-gray-800 text-center hover:border-brand-primary transition-all">
            <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-primary">
              <Settings size={28} />
            </div>
            <h3 className="font-bold text-xl mb-2 text-white">Starter</h3>
            <p className="text-gray-500 text-sm mb-6">Suporte mensal para LPs</p>
            <p className="text-3xl font-black text-white">15.000 Kz <span className="text-xs text-gray-500 block">por mês</span></p>
          </div>

          <div className="bg-brand-dark p-8 rounded-2xl border border-brand-secondary/30 text-center hover:border-brand-secondary transition-all shadow-xl shadow-brand-secondary/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-secondary text-brand-darker text-[10px] font-bold px-3 py-1 rounded-bl-xl">ESSENCIAL</div>
            <div className="w-14 h-14 bg-brand-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-secondary">
              <Server size={28} />
            </div>
            <h3 className="font-bold text-xl mb-2 text-white">Advanced</h3>
            <p className="text-gray-500 text-sm mb-6">Sites & Lojas Médias</p>
            <p className="text-3xl font-black text-white">25.000 Kz <span className="text-xs text-gray-500 block">por mês</span></p>
          </div>

          <div className="bg-brand-dark p-8 rounded-2xl border border-gray-800 text-center hover:border-brand-accent transition-all">
             <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-accent">
              <Shield size={28} />
            </div>
            <h3 className="font-bold text-xl mb-2 text-white">Elite Pro</h3>
            <p className="text-gray-500 text-sm mb-6">Infraestrutura Escalonável</p>
            <p className="text-3xl font-black text-white">50.000 Kz <span className="text-xs text-gray-500 block">por mês</span></p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Maintenance;