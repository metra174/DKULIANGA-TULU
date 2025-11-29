import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const notifications = [
  "✔ Elizandra Fula acabou de adquirir o Pacote Profissional.",
  "✔ Cliente Maria João contratou gestão de redes sociais.",
  "✔ Carlos M. encomendou uma Landing Page.",
  "✔ Restaurante Sabor da Ilha renovou o plano mensal.",
  "✔ Boutique Zuela aumentou vendas em 40%."
];

const SocialProof: React.FC = () => {
  const [currentNotification, setCurrentNotification] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial delay
    const initialTimeout = setTimeout(() => {
        showRandomNotification();
    }, 5000);

    const interval = setInterval(() => {
      showRandomNotification();
    }, 15000 + Math.random() * 10000); // Random interval between 15-25s

    return () => {
        clearTimeout(initialTimeout);
        clearInterval(interval);
    };
  }, []);

  const showRandomNotification = () => {
    const randomIndex = Math.floor(Math.random() * notifications.length);
    setCurrentNotification(notifications[randomIndex]);
    setIsVisible(true);

    // Hide after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };

  if (!currentNotification) return null;

  return (
    <div 
      className={`fixed bottom-6 left-6 z-50 transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3 max-w-sm">
        <div className="bg-green-500 rounded-full p-1 text-white">
           <CheckCircle size={14} strokeWidth={3} />
        </div>
        <div>
           <p className="text-sm font-medium">{currentNotification.replace('✔ ', '')}</p>
           <p className="text-xs text-gray-400 mt-0.5">Agora mesmo</p>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;