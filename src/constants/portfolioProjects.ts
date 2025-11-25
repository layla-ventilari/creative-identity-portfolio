
import { CategoryTranslations, Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: 1,
    title: "Banner Institucional",
    category: "branding",
    image: "/assets/banner.jpg",
    description: "Design de banner institucional com identidade visual forte e alinhada à proposta da marca, ideal para eventos, fachadas ou materiais promocionais."
  },
  {
    id: 2,
    title: "Design para Impressão",
    category: "print",
    image: "/assets/impressao.jpg",
    description: "Projeto gráfico pensado para materiais impressos com alta qualidade. Diagramação refinada, cores equilibradas e acabamento profissional."
  },
  {
    id: 3,
    title: "Campanha Promocional",
    category: "print",
    image: "/assets/campanha.jpg",
    description: "Peças gráficas desenvolvidas para campanha publicitária de grande circulação, com foco em impacto visual e coerência com a narrativa da marca."
  },
  {
    id: 4,
    title: "Adesivos Personalizados",
    category: "packaging",
    image: "/assets/adesivos.jpg",
    description: "Criação de adesivos criativos como parte de soluções de embalagem, branding ou brindes. Funcionalidade, estética e personalidade em cada detalhe."
  },
  {
    id: 5,
    title: "Quem Não É Visto...",
    category: "digital",
    image: "/assets/quem-nao-e-visto.jpg",
    description: "Campanha digital com foco em visibilidade e posicionamento de marca nas redes. Conteúdo visual chamativo para quem quer ser lembrado."
  },
  {
    id: 6,
    title: "Seu Projeto, Seu Site",
    category: "web",
    image: "/assets/web-2.png",
    description: "Layout web responsivo criado para apresentar projetos com clareza e impacto. Design personalizado para destacar a essência de cada marca."
  },
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
