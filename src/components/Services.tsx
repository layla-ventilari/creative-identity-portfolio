
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { 
  Palette, 
  Globe, 
  PenTool, 
  Package, 
  Image, 
  Type 
} from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const services: Service[] = [
    {
      icon: <Palette size={32} />,
      title: "Identidade de Marca",
      description: "Desenvolvimento abrangente de identidade de marca, incluindo design de logo, paletas de cores, tipografia e diretrizes de marca."
    },
    {
      icon: <Globe size={32} />,
      title: "Design Web",
      description: "Designs de sites bonitos e funcionais que envolvem usuários e impulsionam conversões, com foco na experiência do usuário."
    },
    {
      icon: <PenTool size={32} />,
      title: "Ilustração",
      description: "Ilustrações personalizadas e ativos visuais que realçam a personalidade da sua marca e comunicam ideias complexas."
    },
    {
      icon: <Package size={32} />,
      title: "Design de Embalagens",
      description: "Soluções inovadoras de embalagens que se destacam nas prateleiras e criam experiências memoráveis ao desembrulhar."
    },
    {
      icon: <Image size={32} />,
      title: "Design para Impressão",
      description: "Materiais impressos de alta qualidade, desde cartões de visita e brochuras até displays de grande formato e relatórios anuais."
    },
    {
      icon: <Type size={32} />,
      title: "Tipografia",
      description: "Design de tipos personalizados e soluções tipográficas que melhoram a legibilidade e o reconhecimento da marca."
    }
  ];

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
    if (servicesRef.current) observer.observe(servicesRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (servicesRef.current) observer.unobserve(servicesRef.current);
    };
  }, []);

  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto">
        <div ref={sectionRef}>
          <div className="text-center max-w-3xl mx-auto mb-16 opacity-0" ref={headingRef}>
            <p className="section-subheading">Nossa Expertise</p>
            <h2 className="section-heading mx-auto">Serviços que Oferecemos</h2>
            <p className="text-gray-600 mt-4">
              Oferecemos uma gama abrangente de serviços de design 
              para ajudar você a construir e fortalecer sua presença visual.
            </p>
          </div>
          
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0" 
            ref={servicesRef}
            style={{ animationDelay: '0.2s' }}
          >
            {services.map((service, index) => (
              <div 
                key={index} 
                className="glass-card group hover:shadow-xl transition-all duration-300 p-8 flex flex-col"
              >
                <div className="mb-6 text-accent1 bg-accent1/10 p-4 rounded-xl w-fit">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent1 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
