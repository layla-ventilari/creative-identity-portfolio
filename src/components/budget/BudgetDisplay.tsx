import { useState, useEffect } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';
import { SERVICES, URGENCY_FACTORS, COMPLEXITY_FACTORS } from '@/constants/budgetServices';
import { calculateBudget } from '@/utils/budgetCalculations';
import type { FormValues } from '@/types/budget';

type BudgetDisplayProps = {
  formData: Partial<FormValues>;
  isComplete: boolean;
};

export const BudgetDisplay = ({ formData, isComplete }: BudgetDisplayProps) => {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (isComplete && formData.service && formData.quantity && formData.urgency && formData.complexity) {
      const newValue = calculateBudget(formData as FormValues);
      
      if (newValue !== displayValue) {
        setAnimating(true);
        setTimeout(() => {
          setDisplayValue(newValue);
          setAnimating(false);
        }, 150);
      }
    } else {
      setDisplayValue(0);
    }
  }, [formData, isComplete]);

  const getBreakdown = () => {
    if (!isComplete || !formData.service || !formData.quantity || !formData.urgency || !formData.complexity) {
      return null;
    }

    const service = SERVICES[formData.service as keyof typeof SERVICES];
    const urgencyFactor = URGENCY_FACTORS[formData.urgency as keyof typeof URGENCY_FACTORS];
    const complexityFactor = COMPLEXITY_FACTORS[formData.complexity as keyof typeof COMPLEXITY_FACTORS];
    
    let quantityFactor = 1;
    if (formData.quantity >= 5) quantityFactor = 0.8;
    else if (formData.quantity >= 3) quantityFactor = 0.9;

    return {
      basePrice: service.basePrice,
      quantity: formData.quantity,
      urgencyLabel: urgencyFactor.label,
      urgencyFactor: urgencyFactor.factor,
      complexityLabel: complexityFactor.label,
      complexityFactor: complexityFactor.factor,
      quantityFactor,
      hasQuantityDiscount: quantityFactor < 1
    };
  };

  const breakdown = getBreakdown();

  return (
    <div className="space-y-6">
      {/* Total Display */}
      <div className="glass-card p-6 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Calculator className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Total Estimado</span>
          </div>
          
          <div className={`text-4xl font-bold text-primary transition-all duration-300 ${animating ? 'scale-110' : 'scale-100'}`}>
            {displayValue > 0 ? (
              `R$ ${displayValue.toLocaleString('pt-BR')}`
            ) : (
              <span className="text-muted-foreground">R$ 0</span>
            )}
          </div>
          
          {!isComplete && (
            <p className="text-sm text-muted-foreground mt-2">
              Preencha todos os campos para ver o orçamento
            </p>
          )}
        </div>
      </div>

      {/* Breakdown Display */}
      {breakdown && displayValue > 0 && (
        <div className="glass-card p-4 border border-secondary/20">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-foreground">Detalhamento do Cálculo</span>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Preço base:</span>
              <span className="font-medium">R$ {breakdown.basePrice.toLocaleString('pt-BR')}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-muted-foreground">Quantidade:</span>
              <span className="font-medium">{breakdown.quantity}x</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-muted-foreground">Urgência:</span>
              <span className="font-medium">{breakdown.urgencyFactor}x</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-muted-foreground">Complexidade:</span>
              <span className="font-medium">{breakdown.complexityFactor}x</span>
            </div>
            
            {breakdown.hasQuantityDiscount && (
              <div className="flex justify-between text-green-600">
                <span>Desconto por quantidade:</span>
                <span className="font-medium">{Math.round((1 - breakdown.quantityFactor) * 100)}% OFF</span>
              </div>
            )}
            
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-semibold text-primary">
                <span>Total:</span>
                <span>R$ {displayValue.toLocaleString('pt-BR')}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};