
export const SERVICES = {
  "logotipo": {
    name: "Criação de Logotipo",
    description: "Manual de marca básico + 3 propostas criativas. Entrega em 5 dias úteis com arquivos em alta resolução.",
    basePrice: 880
  },
  "cartao_visita": {
    name: "Cartões de Visita",
    description: "Papel 300g com verniz localizado. Design profissional otimizado para impressão. Entrega em 48h.",
    basePrice: 78
  },
  "flyer": {
    name: "Flyers",
    description: "Papel 150g frente e verso. Layout atrativo e impactante otimizado para impressão. Entrega expressa 24h.",
    basePrice: 45
  },
  "banner": {
    name: "Banners",
    description: "Lona reforçada com ilhós inclusos. Design para mídias sociais, sites ou impressão. Entrega 6h (urgência).",
    basePrice: 90
  },
  "layout_exclusivo": {
    name: "Layout Exclusivo",
    description: "3 revisões inclusas. Arquivos otimizados para web e impressão. Desenvolvimento personalizado e exclusivo.",
    basePrice: 295
  },
  "kit_eventos": {
    name: "Kits para Eventos",
    description: "Brindes sustentáveis + banner personalizado + convites. Solução completa para eventos com entrega expressa.",
    basePrice: 1580
  },
  "hot_stamping": {
    name: "Hot Stamping",
    description: "Acabamento premium em 1 cor. Aplicação seletiva com efeito metalizado. Desconto acima de 100 unidades.",
    basePrice: 5.5
  },
  "verniz_localizado": {
    name: "Verniz Localizado",
    description: "Efeito seletivo em áreas específicas. Acabamento premium compatível com diversos papéis.",
    basePrice: 4
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
