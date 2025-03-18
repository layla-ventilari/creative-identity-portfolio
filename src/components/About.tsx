
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Users, Lightbulb, Palette } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

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
    if (contentRef.current) observer.observe(contentRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (featuresRef.current) observer.unobserve(featuresRef.current);
    };
  }, []);

  const features = [
    {
      icon: <Lightbulb size={24} />,
      title: "Estratégia Criativa",
      description: "Combinamos pensamento estratégico com execução criativa para entregar resultados que superam expectativas."
    },
    {
      icon: <Palette size={24} />,
      title: "Excelência em Design",
      description: "Nosso compromisso com a excelência em design garante que cada pixel tenha um propósito na sua história visual."
    },
    {
      icon: <Users size={24} />,
      title: "Parceria com Clientes",
      description: "Acreditamos em parcerias colaborativas, trabalhando próximo de você durante toda a jornada de design."
    }
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto">
        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="opacity-0" ref={headingRef}>
              <p className="section-subheading">Sobre Nós</p>
              <h2 className="section-heading">Quem Somos</h2>
            </div>
            
            <div 
              className="opacity-0 mb-10" 
              ref={contentRef}
              style={{ animationDelay: '0.2s' }}
            >
              <p className="text-gray-600 mb-6">
                Somos um estúdio de design criativo dedicado a criar experiências visuais significativas. 
                Nossa abordagem equilibra inovação criativa com funcionalidade prática, garantindo 
                que cada design não apenas pareça deslumbrante, mas também entregue resultados.
              </p>
              <p className="text-gray-600">
                Com anos de experiência no setor, entendemos o que faz o design funcionar. 
                Nos orgulhamos da nossa capacidade de ouvir, colaborar e transformar ideias 
                em histórias visuais que ressoam com o público e atingem objetivos de negócio.
              </p>
            </div>
          </div>
          
          <div 
            className="opacity-0 grid grid-cols-1 gap-8" 
            ref={featuresRef}
            style={{ animationDelay: '0.4s' }}
          >
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-6 flex">
                <div className="mr-4 bg-accent1/10 p-3 rounded-lg text-accent1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
