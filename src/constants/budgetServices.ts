
export const SERVICES = {
  "logotipo": {
    name: "Logotipo",
    description: "Criação de logo profissional para sua marca com até 3 revisões.",
    basePrice: 150
  },
  "panfleto": {
    name: "Panfleto",
    description: "Design de panfleto promocional otimizado para impressão com layout atrativo.",
    basePrice: 90
  },
  "kit_festa_junina": {
    name: "Kit Festa Junina",
    description: "Conjunto completo de design para festa junina (convites, banners, etiquetas).",
    basePrice: 120
  },
  "cartao_digital": {
    name: "Cartão Digital",
    description: "Cartão de visita digital interativo para compartilhamento em redes sociais.",
    basePrice: 70
  },
  "banner": {
    name: "Banner",
    description: "Design de banner para mídias sociais, sites ou impressão em alta resolução.",
    basePrice: 110
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
