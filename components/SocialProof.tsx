import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const namesMasc = [
  'José', 'João', 'Antonio', 'Francisco', 'Carlos', 'Paulo', 'Pedro', 'Lucas', 'Luiz', 'Marcos', 
  'Luis', 'Gabriel', 'Rafael', 'Daniel', 'Marcelo', 'Bruno', 'Eduardo', 'Felipe', 'Rodrigo', 'Manoel', 
  'Mateus', 'André', 'Fernando', 'Fábio', 'Leonardo', 'Gustavo', 'Guilherme', 'Leandro', 'Tiago', 'Anderson', 
  'Ricardo', 'Márcio', 'Jorge', 'Alexandre', 'Roberto', 'Edson', 'Diego', 'Vitor', 'Sérgio', 'Cláudio', 
  'Matheus', 'Thiago', 'Geraldo', 'Adriano', 'Luciano', 'Julio', 'Renato', 'Alex', 'Vinicius', 'Rogério', 
  'Samuel', 'Ronaldo', 'Mario', 'Flavio', 'Douglas', 'Igor', 'Davi', 'Manuel', 'Jeferson', 'Cícero', 
  'Victor', 'Miguel', 'Robson', 'Mauricio', 'Danilo', 'Henrique', 'Caio', 'Reginaldo', 'Joaquim', 'Benedito', 
  'Gilberto', 'Marco', 'Alan', 'Nelson', 'Cristiano', 'Elias', 'Wilson', 'Valdir', 'Emerson', 'Luan', 
  'David', 'Renan', 'Severino', 'Fabrício', 'Mauro', 'Jonas', 'Gilmar', 'Jean', 'Fabiano', 'Wesley', 
  'Diogo', 'Adilson', 'Jair', 'Alessandro', 'Everton', 'Osvaldo', 'Gilson', 'Willian', 'Joel', 'Silvio', 
  'Hélio', 'Maicon', 'Reinaldo', 'Pablo', 'Artur', 'Vagner', 'Valter', 'Celso', 'Ivan', 'Cleiton', 
  'Vanderlei', 'Vicente', 'Arthur', 'Milton', 'Domingos', 'Wagner', 'Sandro', 'Moises', 'Edilson', 'Ademir'
];

const namesFem = [
  'Maria', 'Ana', 'Francisca', 'Antonia', 'Adriana', 'Juliana', 'Márcia', 'Fernanda', 'Patrícia', 'Aline', 
  'Sandra', 'Camila', 'Amanda', 'Bruna', 'Jéssica', 'Leticia', 'Julia', 'Luciana', 'Vanessa', 'Mariana', 
  'Gabriela', 'Vera', 'Vitória', 'Larissa', 'Claudia', 'Beatriz', 'Rita', 'Luana', 'Sônia', 'Renata', 'Eliane'
];

const actions = [
  "adquiriu o Plano Essencial (Start)",
  "adquiriu o Plano Profissional (Growth)",
  "adquiriu o Plano Exclusive Design",
  "fechou contrato do Plano E-commerce Pro",
  "abriu sua Conta Digital TULU por 5.000 Kz",
  "solicitou abertura de conta digital este mês",
  "contratou Gestão de Redes Sociais",
  "encomendou uma Landing Page de Alta Conversão",
  "solicitou orçamento para Loja Online",
  "acabou de ativar um novo projeto no Studio"
];

const SocialProof: React.FC = () => {
  const [notification, setNotification] = useState<{name: string, action: string} | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const scheduleNext = () => {
        const minTime = 8000;
        const maxTime = 22000;
        const delay = Math.floor(Math.random() * (maxTime - minTime + 1) + minTime);

        timeoutId = setTimeout(() => {
            showNotification();
        }, delay);
    };

    const showNotification = () => {
        const isMasc = Math.random() > 0.5;
        const nameList = isMasc ? namesMasc : namesFem;
        
        const randomName = nameList[Math.floor(Math.random() * nameList.length)];
        const randomAction = actions[Math.floor(Math.random() * actions.length)];

        setNotification({ name: randomName, action: randomAction });
        setIsVisible(true);

        setTimeout(() => {
            setIsVisible(false);
            scheduleNext();
        }, 5000);
    };

    scheduleNext();
    return () => clearTimeout(timeoutId);
  }, []);

  if (!notification) return null;

  return (
    <div 
      className={`fixed bottom-6 left-6 z-50 transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="bg-brand-darker/95 backdrop-blur-2xl border border-white/10 text-white px-6 py-5 rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.6)] flex items-center gap-5 max-w-sm">
        <div className="bg-brand-primary rounded-full p-2 text-white shrink-0 shadow-lg shadow-brand-primary/40 animate-pulse">
           <CheckCircle size={20} strokeWidth={3} />
        </div>
        <div>
           <p className="text-sm leading-tight text-gray-100 font-medium">
             <span className="font-black text-white">{notification.name}</span> {notification.action}.
           </p>
           <div className="flex items-center gap-2 mt-2">
             <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
             <p className="text-[9px] text-gray-500 font-black uppercase tracking-[0.2em]">Live Tracking</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;