
import { SERVICES, URGENCY_FACTORS, COMPLEXITY_FACTORS } from "@/constants/budgetServices";
import { FormValues } from "@/types/budget";

export const calculateBudget = (data: FormValues) => {
  const service = SERVICES[data.service as keyof typeof SERVICES];
  const urgencyFactor = URGENCY_FACTORS[data.urgency as keyof typeof URGENCY_FACTORS].factor;
  const complexityFactor = COMPLEXITY_FACTORS[data.complexity as keyof typeof COMPLEXITY_FACTORS].factor;
  
  let quantityFactor = 1;
  if (data.quantity >= 5) quantityFactor = 0.8;
  else if (data.quantity >= 3) quantityFactor = 0.9;
  
  const total = service.basePrice * data.quantity * urgencyFactor * complexityFactor * quantityFactor;
  return Math.round(total);
};
