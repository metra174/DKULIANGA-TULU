import React from 'react';
import { MessageCircle, Zap } from 'lucide-react';

interface FinalCTAProps {
  onOpenContact: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenContact }) => {
  return (
    <section id="contactos" className="py-24 bg-gradient-to-r from-brand-darker to-indigo-950 relative overflow-hidden">
      
      {/* Mesh Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:30px_30px]"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="flex justify-center mb-6">
           <Zap className="text-brand-secondary animate-bounce" size={48} />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sua transformação digital começa hoje.</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          O ano já começou. Não espere pela concorrência. Posicione o seu negócio no topo do mercado angolano com o TULU Studio.
        </p>
        
        <button 
          onClick={onOpenContact}
          className="inline-flex items-center gap-3 bg-brand-primary hover:bg-indigo-700 text-white px-10 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-xl shadow-indigo-900/40 border border-indigo-500/30"
        >
          <MessageCircle className="w-6 h-6" />
          Falar no WhatsApp
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;