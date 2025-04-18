
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from "@/components/ui/use-toast";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato o mais breve possível.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Seu Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent1 focus:border-transparent transition-all duration-200"
            placeholder="João Silva"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Seu Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent1 focus:border-transparent transition-all duration-200"
            placeholder="joao@exemplo.com"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Assunto
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent1 focus:border-transparent transition-all duration-200"
          placeholder="Consulta de Projeto"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent1 focus:border-transparent transition-all duration-200"
          placeholder="Conte-nos sobre seu projeto..."
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "btn btn-primary w-full py-3 flex items-center justify-center",
          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
        )}
      >
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        <Send size={16} className="ml-2" />
      </button>
    </form>
  );
};

export default ContactForm;
