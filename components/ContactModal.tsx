import React, { useState } from 'react';
import { X, Send, Phone, User, Building, Mail, MessageSquare } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    email: '',
    description: ''
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construção da mensagem formatada para o WhatsApp
    const message = `👋 Olá, gostaria de entrar em contacto.\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `🏢 *Empresa:* ${formData.company || 'Não informada'}\n` +
      `📱 *Telefone:* ${formData.phone}\n` +
      `📧 *Email:* ${formData.email || 'Não informado'}\n\n` +
      `📝 *Assunto/Projeto:* ${formData.description || 'Gostaria de saber mais sobre os serviços.'}`;

    // Número principal atualizado
    const url = `https://wa.me/244930695969?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="bg-brand-darker border border-gray-700 rounded-2xl w-full max-w-md relative z-10 p-6 md:p-8 animate-fade-in-up shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <h3 className="text-2xl font-bold text-white mb-2">Falar com a Equipa</h3>
        <p className="text-gray-400 mb-6 text-sm">
          Preencha os seus dados para iniciarmos o atendimento no WhatsApp já com o contexto do seu projeto.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Nome Completo *</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-500" size={18} />
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-brand-dark border border-gray-700 rounded-lg p-3 pl-10 text-white focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent transition-colors"
                placeholder="Seu nome"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Telefone / WhatsApp *</label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-gray-500" size={18} />
              <input 
                type="tel" 
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-brand-dark border border-gray-700 rounded-lg p-3 pl-10 text-white focus:border-brand-accent focus:outline-none transition-colors"
                placeholder="9xx xxx xxx"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Empresa (Opcional)</label>
            <div className="relative">
              <Building className="absolute left-3 top-3 text-gray-500" size={18} />
              <input 
                type="text" 
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-brand-dark border border-gray-700 rounded-lg p-3 pl-10 text-white focus:border-brand-accent focus:outline-none transition-colors"
                placeholder="Nome do seu negócio"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Email (Opcional)</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-500" size={18} />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-brand-dark border border-gray-700 rounded-lg p-3 pl-10 text-white focus:border-brand-accent focus:outline-none transition-colors"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Mensagem / Descrição</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-gray-500" size={18} />
              <textarea 
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                className="w-full bg-brand-dark border border-gray-700 rounded-lg p-3 pl-10 text-white focus:border-brand-accent focus:outline-none transition-colors resize-none"
                placeholder="Breve descrição do que precisa..."
              ></textarea>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-green-900/20"
          >
            <Send size={18} />
            Ir para WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;