
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal-text');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, []);

  const handleScrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center min-h-screen pt-20 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-white/90"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <p ref={subtitleRef} className="section-subheading opacity-0" style={{ animationDelay: '0.2s' }}>
              Graphic Design Agency
            </p>
          </div>
          
          <div className="overflow-hidden mb-6">
            <h1 
              ref={titleRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-accent2 opacity-0"
            >
              Crafting Your<br />Visual Story
            </h1>
          </div>
          
          <div className="overflow-hidden mb-10">
            <p 
              ref={subtitleRef}
              className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto opacity-0"
              style={{ animationDelay: '0.4s' }}
            >
              We transform ideas into compelling visual narratives 
              that captivate and resonate with your audience.
            </p>
          </div>
          
          <div 
            ref={ctaRef} 
            className="opacity-0"
            style={{ animationDelay: '0.6s' }}
          >
            <a 
              href="#contact"
              className="btn btn-primary px-8 py-3 text-base sm:text-lg"
            >
              Let's Create Together
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        onClick={handleScrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center text-accent2 hover:text-accent1 transition-colors duration-300"
        aria-label="Scroll to About section"
      >
        <span className="text-sm mb-2">Scroll</span>
        <ChevronDown className="animate-float" size={24} />
      </a>
    </section>
  );
};

export default Hero;
