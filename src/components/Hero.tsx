import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
const heroSlides = [{
  id: 1,
  image: '/assets/hero-banner.jpg',
  alt: 'Art Design - Banner Principal'
}, {
  id: 2,
  image: '/assets/banner.jpg',
  alt: 'Art Design - Banner Secundário'
}, {
  id: 3,
  image: '/assets/campanha.jpg',
  alt: 'Art Design - Campanhas'
}];
const Hero: React.FC = () => {
  const plugin = React.useRef(Autoplay({
    delay: 5000,
    stopOnInteraction: true
  }));
  return <section id="home" className="relative w-full pt-16 overflow-hidden">
      <div className="w-full">
        <Carousel opts={{
        align: "center",
        loop: true
      }} plugins={[plugin.current]} className="w-full" onMouseEnter={() => plugin.current.stop()} onMouseLeave={() => plugin.current.play()}>
          <CarouselContent className="ml-0">
            {heroSlides.map(slide => <CarouselItem key={slide.id} className="pl-0">
                <div className="relative w-full min-h-[60vh] md:min-h-[80vh]">
                  <img src={slide.image} alt={slide.alt} className="w-full h-full min-h-[60vh] md:min-h-[80vh] object-cover " />
                </div>
              </CarouselItem>)}
          </CarouselContent>
          
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>;
};
export default Hero;