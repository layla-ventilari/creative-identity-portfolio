import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { key: 'home', label: 'Início', path: '/', highlight: false },
  { key: 'about', label: 'Sobre', path: '/#about', highlight: false },
  { key: 'portfolio', label: 'Portfólio', path: '/#portfolio', highlight: false },
  { key: 'services', label: 'Serviços', path: '/#services', highlight: false },
  { key: 'blog', label: 'Blog', path: '/blog', highlight: false },
  { key: 'orcamento', label: 'Orçamento', path: '/orcamento', highlight: false },
  { key: 'contact', label: 'Contato', path: '/#contact', highlight: false },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

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

  useEffect(() => {
    if (location.pathname === '/blog' || location.pathname.startsWith('/blog/')) {
      setActiveSection('blog');
    } else if (location.pathname === '/') {
    } else {
      setActiveSection('');
    }
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string, path: string) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      if (location.pathname === '/') {
        const element = document.getElementById(sectionId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth',
          });
          setActiveSection(sectionId);
        }
      } else {
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
        <Link to="/" className="flex items-center">
          <img src="/logo-artdesign.jpg" alt="Art Design Ilha - Gráfica Rápida" className="h-12" />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.key}
              href={item.path}
              onClick={(e) => handleNavClick(e, item.key, item.path)}
              className={cn(
                "nav-link",
                activeSection === item.key ? "active" : "",
                item.highlight ? "text-magenta hover:text-ciano transition-colors duration-300" : ""
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden focus:outline-none text-accent2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Alternar menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

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
                "text-xl font-medium transition-colors duration-300",
                activeSection === item.key ? "text-accent1" : "text-accent2",
                item.highlight ? "text-magenta hover:text-ciano" : ""
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
