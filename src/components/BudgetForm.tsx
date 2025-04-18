
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calculator } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ServiceSelect } from './budget/ServiceSelect';
import { UrgencySelect } from './budget/UrgencySelect';
import { ComplexitySelect } from './budget/ComplexitySelect';
import { BudgetSummary } from './budget/BudgetSummary';
import { SERVICES, URGENCY_FACTORS, COMPLEXITY_FACTORS } from '@/constants/budgetServices';
import { calculateBudget } from '@/utils/budgetCalculations';
import type { FormValues } from '@/types/budget';

const formSchema = z.object({
  service: z.string({
    required_error: "Por favor selecione um serviço",
  }),
  quantity: z.coerce.number({
    required_error: "A quantidade é obrigatória",
    invalid_type_error: "A quantidade deve ser um número",
  }).int().positive({
    message: "A quantidade deve ser um número positivo",
  }),
  urgency: z.string({
    required_error: "Por favor selecione a urgência",
  }),
  complexity: z.string({
    required_error: "Por favor selecione a complexidade",
  }),
});

const BudgetForm = () => {
  const { toast } = useToast();
  const [budget, setBudget] = useState<number | null>(null);
  const [serviceDescription, setServiceDescription] = useState<string>(SERVICES.logotipo.description);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: 1,
      urgency: 'standard',
      complexity: 'medium',
      service: 'logotipo'
    },
  });

  const handleServiceChange = (value: string) => {
    setServiceDescription(SERVICES[value as keyof typeof SERVICES].description);
    form.setValue('service', value);
  };

  const onSubmit = (data: FormValues) => {
    const calculatedBudget = calculateBudget(data);
    setBudget(calculatedBudget);
    
    const message = `Olá! Gostaria de solicitar um orçamento para: ${SERVICES[data.service as keyof typeof SERVICES].name}, Quantidade: ${data.quantity}, Urgência: ${URGENCY_FACTORS[data.urgency as keyof typeof URGENCY_FACTORS].label}, Complexidade: ${COMPLEXITY_FACTORS[data.complexity as keyof typeof COMPLEXITY_FACTORS].label}, Valor Estimado: R$${calculatedBudget.toLocaleString('pt-BR')}`;
    
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
    
    toast({
      title: "Orçamento calculado!",
      description: "Os detalhes foram copiados para o WhatsApp.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Calculadora de Orçamento Inteligente</h2>
        <p className="text-gray-600 mt-2">Obtenha um orçamento personalizado em segundos com nossa calculadora interativa</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="glass-card p-6 md:w-1/2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <ServiceSelect form={form} onServiceChange={handleServiceChange} />
              <p className="text-sm text-gray-600 mt-1">{serviceDescription}</p>

              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantidade</FormLabel>
                    <Input type="number" min={1} {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <UrgencySelect form={form} />
              <ComplexitySelect form={form} />

              <Button type="submit" className="w-full bg-accent1 text-accent2 hover:bg-accent1/90">
                <Calculator className="mr-2 h-4 w-4" />
                Calcular Orçamento
              </Button>
            </form>
          </Form>
        </div>

        <div className="glass-card p-6 md:w-1/2">
          <h3 className="text-xl font-semibold mb-6 text-gray-700 border-b pb-2">Informações Adicionais</h3>
          <BudgetSummary />
        </div>
      </div>
    </div>
  );
};

export default BudgetForm;
