
import React from 'react';
import { Instagram, Twitter, Dribbble, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-accent2 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold font-display inline-block mb-4">
              studio<span className="text-accent1">.</span>
            </a>
            <p className="text-gray-400 max-w-md mb-6">
              We're a design studio dedicated to creating meaningful visual experiences 
              that tell your story and connect with your audience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent1 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent1 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent1 transition-colors duration-300">
                <Dribbble size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent1 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {['home', 'about', 'portfolio', 'services', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-gray-400 hover:text-accent1 transition-colors duration-300"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-4 text-gray-400">
              <p>123 Design Avenue<br />San Francisco, CA 94103</p>
              <p>hello@studio.com</p>
              <p>+1 (123) 456-7890</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Studio Design Agency. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-accent1 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-accent1 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-accent1 transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
