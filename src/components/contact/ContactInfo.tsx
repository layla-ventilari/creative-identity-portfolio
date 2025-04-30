import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
const ContactInfo = () => {
  return <div className="glass-card p-8 h-full">
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
            <a href="tel:+551123456789" className="font-medium hover:text-accent1 transition-colors">+55 (21) 97726-6176</a>
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
    </div>;
};
export default ContactInfo;