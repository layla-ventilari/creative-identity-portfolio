
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const menuItems = [
    { key: 'home', label: 'Início', path: '/' },
    { key: 'about', label: 'Sobre', path: '/#about' },
    { key: 'portfolio', label: 'Portfólio', path: '/#portfolio' },
    { key: 'services', label: 'Serviços', path: '/#services' },
    { key: 'blog', label: 'Blog', path: '/blog' },
    { key: 'contact', label: 'Contato', path: '/#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      // Atualizar seção ativa com base na posição de rolagem apenas na página inicial
      if (location.pathname === '/') {
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
          const sectionTop = (section as HTMLElement).offsetTop - 100;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          const sectionId = section.getAttribute('id') || '';
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Marcar item do blog como ativo quando estiver na página do blog
  useEffect(() => {
    if (location.pathname === '/blog' || location.pathname.startsWith('/blog/')) {
      setActiveSection('blog');
    } else if (location.pathname === '/') {
      // Se estiver na home, mantenha o comportamento atual
    } else {
      // Para outras páginas, não destaque nenhum item do menu
      setActiveSection('');
    }
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string, path: string) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      if (location.pathname === '/') {
        // Se já estiver na home, role para a seção
        const element = document.getElementById(sectionId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
          setActiveSection(sectionId);
        }
      } else {
        // Se estiver em outra página, navegue para a home com o hash
        window.location.href = path;
      }
    }
    setMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold font-display text-accent2">
          studio<span className="text-accent1">.</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.key}
              href={item.path}
              onClick={(e) => handleNavClick(e, item.key, item.path)}
              className={cn(
                "nav-link",
                activeSection === item.key ? "active" : ""
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Alternar menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center space-y-8">
          {menuItems.map((item) => (
            <a
              key={item.key}
              href={item.path}
              onClick={(e) => handleNavClick(e, item.key, item.path)}
              className={cn(
                "text-xl font-medium",
                activeSection === item.key ? "text-accent1" : "text-accent2"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
