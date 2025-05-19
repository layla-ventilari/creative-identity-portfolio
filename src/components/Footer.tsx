
import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-accent2 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold font-display inline-block mb-4">
              ArtDesignIlha<span className="text-accent1">.</span>
            </a>
            <p className="text-gray-400 max-w-md mb-6">
              Somos um estúdio de design dedicado a criar experiências visuais significativas 
              que contam sua história e conectam com seu público.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/artdesignilha" className="text-gray-400 hover:text-accent1 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent1 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent1 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { key: 'home', label: 'Início' },
                { key: 'about', label: 'Sobre' },
                { key: 'portfolio', label: 'Portfólio' },
                { key: 'services', label: 'Serviços' },
                { key: 'contact', label: 'Contato' }
              ].map((item) => (
                <a
                  key={item.key}
                  href={`#${item.key}`}
                  className="text-gray-400 hover:text-accent1 transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Entre em Contato</h4>
            <div className="space-y-4 text-gray-400">
              <p>Estr. do Rio Jequiá, 1546 - Zumbi,<br />Rio de Janeiro - RJ, 21930-007</p>
              <p>ilha.artdesign@gmail.com</p>
              <p>(21) 97726-6176</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; 2025 Lavent Studio. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-accent1 transition-colors duration-300">Política de Privacidade</a>
            <a href="#" className="hover:text-accent1 transition-colors duration-300">Termos de Serviço</a>
            <a href="#" className="hover:text-accent1 transition-colors duration-300">Mapa do Site</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
