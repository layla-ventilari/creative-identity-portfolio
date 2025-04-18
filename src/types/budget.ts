
export type ServiceType = {
  name: string;
  description: string;
  basePrice: number;
};

export type UrgencyFactor = {
  label: string;
  factor: number;
};

export type ComplexityFactor = {
  label: string;
  factor: number;
};

export type FormValues = {
  service: string;
  quantity: number;
  urgency: string;
  complexity: string;
};
