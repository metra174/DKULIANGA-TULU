import React from 'react';
import { Server, Settings, Shield } from 'lucide-react';

const Maintenance: React.FC = () => {
  return (
    <section className="py-24 bg-brand-darker border-t border-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Planos de Manutenção</h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          <div className="bg-brand-dark p-6 rounded-xl border border-gray-800 text-center">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
              <Settings size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Landing Pages</h3>
            <p className="text-gray-400 text-sm mb-4">Manutenção básica e ajustes</p>
            <p className="text-2xl font-bold text-brand-accent">15.000 Kz <span className="text-sm text-gray-500">/mês</span></p>
          </div>

          <div className="bg-brand-dark p-6 rounded-xl border border-gray-800 text-center">
            <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400">
              <Server size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Plano Premium</h3>
            <p className="text-gray-400 text-sm mb-4">Sites e Lojas Online</p>
            <p className="text-2xl font-bold text-brand-accent">25.000 Kz <span className="text-sm text-gray-500">/mês</span></p>
          </div>

          <div className="bg-brand-dark p-6 rounded-xl border border-gray-800 text-center">
             <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-400">
              <Shield size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Manutenção Profissional</h3>
            <p className="text-gray-400 text-sm mb-4">Com servidor + alojamento</p>
            <p className="text-2xl font-bold text-brand-accent">50.000 Kz <span className="text-sm text-gray-500">/mês</span></p>
          </div>

        </div>
        
        <p className="text-center text-gray-500 text-sm mt-8 italic">
          > Valores podem ser reajustados conforme a complexidade.
        </p>
      </div>
    </section>
  );
};

export default Maintenance;