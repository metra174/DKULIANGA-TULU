import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FinalCTAProps {
  onOpenContact: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenContact }) => {
  return (
    <section id="contactos" className="py-24 bg-gradient-to-r from-blue-900 to-brand-darker relative overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.imgur.com/khcsKJk.jpeg')" }}
      >
        <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-brand-darker/50"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pronto para transformar o seu negócio?</h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
          Fale agora com a nossa equipa e comece a construir a sua presença digital de forma profissional.
        </p>
        
        <button 
          onClick={onOpenContact}
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-xl shadow-green-900/30"
        >
          <MessageCircle className="w-6 h-6" />
          Falar no WhatsApp — 947 355 724
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;