
export const SERVICES = {
  "logotipo": {
    name: "Criação de Logotipo",
    description: "Criação de logo profissional para sua marca com até 3 revisões e arquivos em alta resolução.",
    basePrice: 450
  },
  "cartao_visita": {
    name: "Cartões de Visita",
    description: "Design de cartões de visita profissionais com layout personalizado e otimizado para impressão.",
    basePrice: 85
  },
  "flyer": {
    name: "Flyers",
    description: "Design de flyer promocional otimizado para impressão com layout atrativo e impactante.",
    basePrice: 65
  },
  "banner": {
    name: "Banners",
    description: "Design de banner para mídias sociais, sites ou impressão em alta resolução com até 2 revisões.",
    basePrice: 120
  },
  "layout_exclusivo": {
    name: "Layout Exclusivo",
    description: "Desenvolvimento de layout personalizado e exclusivo para seu projeto específico.",
    basePrice: 295
  },
  "kit_eventos": {
    name: "Kits para Eventos",
    description: "Conjunto completo de design para eventos (convites, banners, etiquetas, decoração).",
    basePrice: 380
  }
};

export const URGENCY_FACTORS = {
  "normal": { label: "Sem pressa (5-7 dias úteis)", factor: 1 },
  "standard": { label: "Padrão (3-5 dias úteis)", factor: 1.2 },
  "urgent": { label: "Urgente (1-2 dias úteis)", factor: 1.6 }
};

export const COMPLEXITY_FACTORS = {
  "simple": { label: "Simples", factor: 1 },
  "medium": { label: "Média", factor: 1.3 },
  "high": { label: "Alta", factor: 1.7 }
};
