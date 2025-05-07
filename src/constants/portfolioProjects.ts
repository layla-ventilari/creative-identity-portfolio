
import { CategoryTranslations, Project } from "@/types/portfolio";

// Portfolio project data
export const projects: Project[] = [
  {
    id: 1,
    title: "Identidade de Marca",
    category: "branding",
    image: "/assets/banner.jpg",
    description: "Sistema completo de identidade de marca para uma startup de tecnologia moderna, incluindo design de logo, tipografia, paleta de cores e diretrizes de marca."
  },
  {
    id: 2,
    title: "Redesign de Website",
    category: "web",
    image: "/assets/seuprojeto.jpg",
    description: "Design de UI/UX para uma plataforma de e-commerce, focado em melhorar a experiência do usuário e as taxas de conversão através de navegação intuitiva e design visual limpo."
  },
  {
    id: 3,
    title: "Campanha Impressa",
    category: "print",
    image: "/assets/campanha.jpg",
    description: "Série de materiais impressos para uma campanha de marketing sazonal, incluindo pôsteres, brochuras e peças de mala direta que geraram engajamento significativo com o cliente."
  },
  {
    id: 4,
    title: "Embalagem de Produto",
    category: "packaging",
    image: "/assets/adesivos.jpg",
    description: "Design de embalagem de luxo para uma linha de produtos premium, com atenção a materiais sustentáveis e experiências táteis que melhoram a percepção da marca."
  },
  {
    id: 5,
    title: "Campanha de Mídia Social",
    category: "digital",
    image: "/assets/quem-nao-e-visto.jpg",
    description: "Campanha abrangente de mídia social com linguagem visual coesa em várias plataformas, resultando em aumento de engajamento e reconhecimento da marca."
  },
  {
    id: 6,
    title: "Relatório Anual",
    category: "print",
    image: "/assets/impressao.jpg",
    description: "Design premiado de relatório anual que transformou dados financeiros complexos em uma narrativa visual envolvente para stakeholders e investidores."
  }
];

// Extract unique categories
export const getCategories = (): string[] => {
  return ['all', ...new Set(projects.map(project => project.category))];
};

// Category translations
export const categoryTranslations: CategoryTranslations = {
  'all': 'Todos',
  'branding': 'Branding',
  'web': 'Web',
  'print': 'Impressão',
  'packaging': 'Embalagem',
  'digital': 'Digital'
};
