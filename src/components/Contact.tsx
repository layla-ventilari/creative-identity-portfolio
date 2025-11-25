
import React, { useEffect, useRef } from 'react';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

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
            <h2 className="section-heading mx-auto">Vamos construir algo incrível?</h2>
            <p className="text-gray-600 mt-4">
              Envie sua ideia ou peça um orçamento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div 
              className="opacity-0" 
              ref={formRef}
              style={{ animationDelay: '0.2s' }}
            >
              <ContactForm />
            </div>
            
            <div 
              className="opacity-0" 
              ref={infoRef}
              style={{ animationDelay: '0.4s' }}
            >
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
