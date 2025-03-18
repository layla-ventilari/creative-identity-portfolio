
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
      title: "Creative Strategy",
      description: "We combine strategic thinking with creative execution to deliver results that exceed expectations."
    },
    {
      icon: <Palette size={24} />,
      title: "Design Excellence",
      description: "Our commitment to design excellence ensures that every pixel serves a purpose in your visual story."
    },
    {
      icon: <Users size={24} />,
      title: "Client Partnership",
      description: "We believe in collaborative partnerships, working closely with you throughout the design journey."
    }
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto">
        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="opacity-0" ref={headingRef}>
              <p className="section-subheading">About Us</p>
              <h2 className="section-heading">Who We Are</h2>
            </div>
            
            <div 
              className="opacity-0 mb-10" 
              ref={contentRef}
              style={{ animationDelay: '0.2s' }}
            >
              <p className="text-gray-600 mb-6">
                We are a creative design studio dedicated to crafting meaningful visual experiences. 
                Our approach balances creative innovation with practical functionality, ensuring 
                that each design not only looks stunning but also delivers results.
              </p>
              <p className="text-gray-600">
                With years of industry experience, we understand what makes design work. 
                We pride ourselves on our ability to listen, collaborate, and transform ideas 
                into visual stories that resonate with audiences and achieve business objectives.
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
