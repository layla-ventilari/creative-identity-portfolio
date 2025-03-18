
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [category, setCategory] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "Brand Identity",
      category: "branding",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      description: "Complete brand identity system for a modern tech startup, including logo design, typography, color palette, and brand guidelines."
    },
    {
      id: 2,
      title: "Website Redesign",
      category: "web",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      description: "UI/UX design for an e-commerce platform, focused on improving user experience and conversion rates through intuitive navigation and clean visual design."
    },
    {
      id: 3,
      title: "Print Campaign",
      category: "print",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      description: "Series of print materials for a seasonal marketing campaign, including posters, brochures, and direct mail pieces that drove significant customer engagement."
    },
    {
      id: 4,
      title: "Product Packaging",
      category: "packaging",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      description: "Luxury packaging design for a premium product line, with attention to sustainable materials and tactile experiences that enhance brand perception."
    },
    {
      id: 5,
      title: "Social Media Campaign",
      category: "digital",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      description: "Comprehensive social media campaign with cohesive visual language across multiple platforms, resulting in increased engagement and brand awareness."
    },
    {
      id: 6,
      title: "Annual Report",
      category: "print",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      description: "Award-winning annual report design that transformed complex financial data into an engaging visual narrative for stakeholders and investors."
    }
  ];

  const filteredProjects = category === 'all' 
    ? projects 
    : projects.filter(project => project.category === category);

  const categories = ['all', ...new Set(projects.map(project => project.category))];

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
    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (projectsRef.current) observer.unobserve(projectsRef.current);
    };
  }, []);

  return (
    <section id="portfolio" className="section bg-gray-50">
      <div className="container mx-auto">
        <div ref={sectionRef}>
          <div className="text-center max-w-3xl mx-auto mb-12 opacity-0" ref={headingRef}>
            <p className="section-subheading">Our Work</p>
            <h2 className="section-heading mx-auto">Selected Projects</h2>
            <p className="text-gray-600 mt-4">
              Explore our portfolio of work across various disciplines and industries.
              Each project represents our commitment to thoughtful design and effective visual communication.
            </p>
          </div>
          
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={cn(
                    "px-4 py-2 text-sm rounded-full transition-all duration-300",
                    category === cat 
                      ? "bg-accent1 text-accent2" 
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  )}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0" 
            ref={projectsRef}
            style={{ animationDelay: '0.2s' }}
          >
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-white/80 text-sm mt-1">{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          ></div>
          <div className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto animate-scale-in">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              <X size={24} />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-square md:aspect-auto">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                />
              </div>
              <div className="p-8">
                <p className="text-accent1 text-sm font-medium uppercase tracking-wider mb-2">
                  {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}
                </p>
                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-gray-600 mb-6">
                  {selectedProject.description}
                </p>
                <div className="border-t border-gray-200 pt-6 mt-auto">
                  <a 
                    href="#contact" 
                    className="btn btn-primary px-6 py-2"
                    onClick={() => setSelectedProject(null)}
                  >
                    Inquire About Similar Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
