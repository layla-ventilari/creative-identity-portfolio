
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
      title: "Brand Identity",
      description: "Comprehensive brand identity development including logo design, color palettes, typography, and brand guidelines."
    },
    {
      icon: <Globe size={32} />,
      title: "Web Design",
      description: "Beautiful, functional website designs that engage users and drive conversions, with a focus on user experience."
    },
    {
      icon: <PenTool size={32} />,
      title: "Illustration",
      description: "Custom illustrations and visual assets that enhance your brand's personality and communicate complex ideas."
    },
    {
      icon: <Package size={32} />,
      title: "Packaging Design",
      description: "Innovative packaging solutions that stand out on shelves and create memorable unboxing experiences."
    },
    {
      icon: <Image size={32} />,
      title: "Print Design",
      description: "High-quality print materials from business cards and brochures to large format displays and annual reports."
    },
    {
      icon: <Type size={32} />,
      title: "Typography",
      description: "Custom type design and typographic solutions that enhance readability and brand recognition."
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
            <p className="section-subheading">Our Expertise</p>
            <h2 className="section-heading mx-auto">Services We Offer</h2>
            <p className="text-gray-600 mt-4">
              We offer a comprehensive range of design services 
              to help you build and strengthen your visual presence.
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
