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
  "adquiriu o Pacote Start",
  "adquiriu o Pacote Profissional",
  "adquiriu o Pacote Premium",
  "contratou Gestão de Redes Sociais",
  "solicitou Consultoria Digital",
  "encomendou uma Landing Page",
  "contratou Tráfego Pago",
  "agendou uma sessão de fotos",
  "comprou um Website / Loja Online",
  "solicitou um orçamento"
];

const SocialProof: React.FC = () => {
  const [notification, setNotification] = useState<{name: string, action: string} | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const scheduleNext = () => {
        // Tempo aleatório entre 4 e 20 segundos (min_time = 4, max_time = 20)
        const minTime = 4000;
        const maxTime = 20000;
        const delay = Math.floor(Math.random() * (maxTime - minTime + 1) + minTime);

        timeoutId = setTimeout(() => {
            showNotification();
        }, delay);
    };

    const showNotification = () => {
        // Sorteio: Masculino ou Feminino (aprox 50%)
        const isMasc = Math.random() > 0.5;
        const nameList = isMasc ? namesMasc : namesFem;
        
        const randomName = nameList[Math.floor(Math.random() * nameList.length)];
        const randomAction = actions[Math.floor(Math.random() * actions.length)];

        setNotification({ name: randomName, action: randomAction });
        setIsVisible(true);

        // Ocultar após 4 segundos (tempo timeout do script)
        setTimeout(() => {
            setIsVisible(false);
            scheduleNext();
        }, 4000);
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
      <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3 max-w-sm">
        <div className="bg-green-500 rounded-full p-1 text-white shrink-0">
           <CheckCircle size={14} strokeWidth={3} />
        </div>
        <div>
           <p className="text-sm leading-tight">
             <span className="font-bold">{notification.name}</span> {notification.action}.
           </p>
           <p className="text-xs text-gray-400 mt-1">Agora mesmo</p>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;