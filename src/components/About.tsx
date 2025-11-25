
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
      title: "Criatividade com propósito",
      description: "Cada projeto é pensado estrategicamente para gerar impacto real e fortalecer sua marca."
    },
    {
      icon: <Palette size={24} />,
      title: "Acabamento impecável do início ao fim",
      description: "Qualidade premium em cada detalhe, da criação à entrega final."
    },
    {
      icon: <Users size={24} />,
      title: "Atendimento humano e colaborativo",
      description: "Trabalhamos lado a lado com você, ouvindo, construindo e evoluindo juntos."
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
              <p className="text-gray-600">
                Somos um estúdio de design e comunicação visual que une criatividade, técnica e tecnologia para dar vida a marcas e experiências. A ArtDesign Ilha vai além da impressão: construímos peças que conectam, encantam e fortalecem negócios.
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
