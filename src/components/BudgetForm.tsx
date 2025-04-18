
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { cn } from '@/lib/utils';
import { CalendarIcon, Info, Clock, CheckCircle2, Calculator } from 'lucide-react';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import { useToast } from '@/components/ui/use-toast';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Define services and their descriptions
const SERVICES = {
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

const URGENCY_FACTORS = {
  "normal": { label: "Sem pressa (5-7 dias úteis)", factor: 1 },
  "standard": { label: "Padrão (3-5 dias úteis)", factor: 1.2 },
  "urgent": { label: "Urgente (1-2 dias úteis)", factor: 1.6 }
};

const COMPLEXITY_FACTORS = {
  "simple": { label: "Simples", factor: 1 },
  "medium": { label: "Média", factor: 1.3 },
  "high": { label: "Alta", factor: 1.7 }
};

// Create schema using zod
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

type FormValues = z.infer<typeof formSchema>;

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

  const calculateBudget = (data: FormValues) => {
    const service = SERVICES[data.service as keyof typeof SERVICES];
    const urgencyFactor = URGENCY_FACTORS[data.urgency as keyof typeof URGENCY_FACTORS].factor;
    const complexityFactor = COMPLEXITY_FACTORS[data.complexity as keyof typeof COMPLEXITY_FACTORS].factor;
    
    // Volume discount
    let quantityFactor = 1;
    if (data.quantity >= 5) quantityFactor = 0.8;
    else if (data.quantity >= 3) quantityFactor = 0.9;
    
    const total = service.basePrice * data.quantity * urgencyFactor * complexityFactor * quantityFactor;
    return Math.round(total);
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

  const handleServiceChange = (value: string) => {
    setServiceDescription(SERVICES[value as keyof typeof SERVICES].description);
    form.setValue('service', value);
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
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Serviço</FormLabel>
                    <Select onValueChange={handleServiceChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um serviço" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.entries(SERVICES).map(([key, service]) => (
                          <SelectItem key={key} value={key}>
                            {service.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-gray-600 mt-1">{serviceDescription}</p>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantidade</FormLabel>
                    <FormControl>
                      <Input type="number" min={1} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="urgency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Urgência</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a urgência" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.entries(URGENCY_FACTORS).map(([key, { label }]) => (
                          <SelectItem key={key} value={key}>
                            {label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="complexity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Complexidade</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a complexidade" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.entries(COMPLEXITY_FACTORS).map(([key, { label }]) => (
                          <SelectItem key={key} value={key}>
                            {label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-accent1 text-accent2 hover:bg-accent1/90">
                <Calculator className="mr-2 h-4 w-4" />
                Calcular Orçamento
              </Button>
            </form>
          </Form>
        </div>

        <div className="glass-card p-6 md:w-1/2">
          <h3 className="text-xl font-semibold mb-6 text-gray-700 border-b pb-2">Informações Adicionais</h3>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="text-yellow-600 mb-2">
                <Info className="h-5 w-5" />
              </div>
              <h4 className="font-medium text-gray-800 mb-1">Sobre os Valores</h4>
              <p className="text-sm text-gray-600">Os valores apresentados são estimativas iniciais. O orçamento final pode variar conforme detalhes específicos do projeto.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-blue-600 mb-2">
                <Clock className="h-5 w-5" />
              </div>
              <h4 className="font-medium text-gray-800 mb-1">Prazos de Entrega</h4>
              <p className="text-sm text-gray-600">Os prazos são estimados e podem variar de acordo com a demanda atual e complexidade do projeto.</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-green-600 mb-2">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h4 className="font-medium text-gray-800 mb-1">Suporte Pós-Projeto</h4>
              <p className="text-sm text-gray-600">Oferecemos suporte após a entrega e garantimos até 2 revisões gratuitas para ajustes finais.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetForm;
