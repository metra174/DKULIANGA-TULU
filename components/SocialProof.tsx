import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

// Listas de nomes extraídas do script fornecido
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
  'Vanderlei', 'Vicente', 'Arthur', 'Milton', 'Domingos', 'Wagner', 'Sandro', 'Moises', 'Edilson', 'Ademir', 
  'Adao', 'Evandro', 'Cesar', 'Valmir', 'Murilo', 'Juliano', 'Edvaldo', 'Ailton', 'Junior', 'Breno', 
  'Nicolas', 'Ruan', 'Alberto', 'Rubens', 'Nilton', 'Augusto', 'Cleber', 'Osmar', 'Nilson', 'Hugo', 
  'Otávio', 'Vinicios', 'Italo', 'Wilian', 'Alisson', 'Aparecido'
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
  "solicitou abertura de conta VISA",
  "iniciou consultoria para Cartão VISA",
  "contratou Gestão de Redes Sociais",
  "encomendou uma Landing Page de Alta Conversão",
  "solicitou orçamento para Loja Online",
  "solicitou manutenção mensal do site",
  "acabou de ativar um novo projeto no Studio"
];

const SocialProof: React.FC = () => {
  const [notification, setNotification] = useState<{name: string, action: string} | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const scheduleNext = () => {
        // Tempo aleatório entre 6 e 25 segundos para parecer mais natural
        const minTime = 6000;
        const maxTime = 25000;
        const delay = Math.floor(Math.random() * (maxTime - minTime + 1) + minTime);

        timeoutId = setTimeout(() => {
            showNotification();
        }, delay);
    };

    const showNotification = () => {
        // Sorteio: Masculino ou Feminino
        const isMasc = Math.random() > 0.5;
        const nameList = isMasc ? namesMasc : namesFem;
        
        const randomName = nameList[Math.floor(Math.random() * nameList.length)];
        const randomAction = actions[Math.floor(Math.random() * actions.length)];

        setNotification({ name: randomName, action: randomAction });
        setIsVisible(true);

        // Ocultar após 5 segundos
        setTimeout(() => {
            setIsVisible(false);
            scheduleNext();
        }, 5000);
    };

    // Iniciar o ciclo
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
      <div className="bg-brand-darker/90 backdrop-blur-xl border border-white/10 text-white px-5 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-4 max-w-sm">
        <div className="bg-brand-primary rounded-full p-1.5 text-white shrink-0 shadow-lg shadow-brand-primary/20">
           <CheckCircle size={16} strokeWidth={3} />
        </div>
        <div>
           <p className="text-sm leading-tight text-gray-100">
             <span className="font-bold text-white">{notification.name}</span> {notification.action}.
           </p>
           <div className="flex items-center gap-2 mt-1.5">
             <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
             <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Agora mesmo</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;