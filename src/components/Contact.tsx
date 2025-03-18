
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
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

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (infoRef.current) observer.observe(infoRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
      if (infoRef.current) observer.unobserve(infoRef.current);
    };
  }, []);

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container mx-auto">
        <div ref={sectionRef}>
          <div className="text-center max-w-3xl mx-auto mb-16 opacity-0" ref={headingRef}>
            <p className="section-subheading">Entre em Contato</p>
            <h2 className="section-heading mx-auto">Vamos Criar Juntos</h2>
            <p className="text-gray-600 mt-4">
              Pronto para iniciar seu próximo projeto? Contate-nos hoje para uma consulta 
              e descubra como podemos dar vida à sua visão.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div 
              className="opacity-0" 
              ref={formRef}
              style={{ animationDelay: '0.2s' }}
            >
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
                  ></textarea>
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
            </div>
            
            <div 
              className="opacity-0" 
              ref={infoRef}
              style={{ animationDelay: '0.4s' }}
            >
              <div className="glass-card p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-accent1/10 p-3 rounded-lg text-accent1 mr-4">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <a href="mailto:ola@studio.com" className="font-medium hover:text-accent1 transition-colors">
                        ola@studio.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-accent1/10 p-3 rounded-lg text-accent1 mr-4">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Telefone</p>
                      <a href="tel:+551123456789" className="font-medium hover:text-accent1 transition-colors">
                        +55 (11) 2345-6789
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-accent1/10 p-3 rounded-lg text-accent1 mr-4">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Visite-nos</p>
                      <address className="not-italic font-medium">
                        Av. Paulista, 1234<br />
                        São Paulo, SP 01310-100
                      </address>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="text-lg font-semibold mb-4">Horário de Funcionamento</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Segunda - Sexta:</span>
                      <span>9:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sábado:</span>
                      <span>Com agendamento</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Domingo:</span>
                      <span>Fechado</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
