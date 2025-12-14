import React from 'react';
import { MessageCircle, Star } from 'lucide-react';

interface FinalCTAProps {
  onOpenContact: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenContact }) => {
  return (
    <section id="contactos" className="py-24 bg-gradient-to-r from-brand-darker to-red-950 relative overflow-hidden">
      
      {/* Overlay Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="flex justify-center mb-6">
           <Star className="text-brand-gold animate-pulse" size={48} fill="currentColor" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pronto para transformar o seu Natal?</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Não deixe para o ano que vem. Fale agora com a equipa TULU e comece a faturar mais no digital.
        </p>
        
        <button 
          onClick={onOpenContact}
          className="inline-flex items-center gap-3 bg-brand-green hover:bg-green-700 text-white px-10 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-xl shadow-green-900/30 border border-green-500/30"
        >
          <MessageCircle className="w-6 h-6" />
          Falar no WhatsApp
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;