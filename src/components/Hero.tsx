import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { Button } from '@/components/ui/button';

const heroSlides = [
  {
    id: 1,
    image: '/assets/hero-banner.jpg',
    title: 'Sua Ideia no Mundo Real',
    subtitle: 'FRETE GRÁTIS NA ILHA DO GOVERNADOR',
    features: ['Banners', 'Panfletos', 'Cartões de Visitas', 'Imãs', 'Adesivos', 'Personalizados'],
    cta: 'Solicitar Orçamento',
    ctaLink: '#contact'
  },
  {
    id: 2,
    image: '/assets/banner.jpg',
    title: 'Quem Não é Visto, Não é Lembrado',
    subtitle: 'Destaque sua marca com design profissional',
    features: ['Design Gráfico', 'Identidade Visual', 'Material Impresso', 'Campanhas Digitais'],
    cta: 'Vamos Criar Juntos',
    ctaLink: '#contact'
  },
  {
    id: 3,
    image: '/assets/campanha.jpg',
    title: 'Campanhas que Convertem',
    subtitle: 'Estratégias visuais para alavancar seu negócio',
    features: ['Design Estratégico', 'Comunicação Visual', 'Materiais Promocionais'],
    cta: 'Fale Conosco',
    ctaLink: '#contact'
  }
];

const Hero: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const handleCTAClick = (link: string) => {
    const element = document.querySelector(link);
    if (element) {
      window.scrollTo({
        top: (element as HTMLElement).offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-background via-background/95 to-background">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.play()}
        >
          <CarouselContent>
            {heroSlides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[600px]">
                  {/* Content Side */}
                  <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
                    <div className="inline-block">
                      <span className="px-4 py-2 bg-accent1/20 text-accent1 rounded-full text-sm font-semibold uppercase tracking-wider animate-fade-in">
                        {slide.subtitle}
                      </span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                      {slide.title}
                    </h1>

                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                      {slide.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1.5 bg-accent2/10 text-accent2 rounded-lg text-sm font-medium border border-accent2/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                      <Button 
                        size="lg"
                        className="bg-accent1 hover:bg-accent1/90 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        onClick={() => handleCTAClick(slide.ctaLink)}
                      >
                        {slide.cta}
                      </Button>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="order-1 lg:order-2 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="hidden lg:block">
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </div>
        </Carousel>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent1/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent2/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
