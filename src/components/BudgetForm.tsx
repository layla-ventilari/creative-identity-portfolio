
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { cn } from '@/lib/utils';
import { CalendarIcon, Smartphone } from 'lucide-react';
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
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';

// Define services and their base prices
const SERVICES = [
  { id: 'design', name: 'Design Gráfico', basePrice: 500 },
  { id: 'web', name: 'Desenvolvimento Web', basePrice: 1000 },
  { id: 'ai', name: 'Automação com IA', basePrice: 1500 },
  { id: 'marketing', name: 'Consultoria em Marketing', basePrice: 300 },
];

// Create schema using zod
const formSchema = z.object({
  service: z.string({
    required_error: 'Por favor selecione um serviço',
  }),
  quantity: z.coerce.number({
    required_error: 'A quantidade é obrigatória',
    invalid_type_error: 'A quantidade deve ser um número',
  }).int().positive({
    message: 'A quantidade deve ser um número positivo',
  }),
  deadline: z.date({
    required_error: 'Por favor selecione uma data de entrega',
  }),
});

type FormValues = z.infer<typeof formSchema>;

const BudgetForm: React.FC = () => {
  const { toast } = useToast();
  const [budget, setBudget] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<string>('');

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: 1,
    },
  });

  const calculateBudget = (data: FormValues) => {
    const service = SERVICES.find(s => s.id === data.service);
    if (!service) return 0;
    
    // Calculate days until deadline
    const today = new Date();
    const daysUntilDeadline = Math.max(1, Math.ceil((data.deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));
    
    // Apply urgency factor: less days = higher cost
    let urgencyFactor = 1;
    if (daysUntilDeadline < 3) {
      urgencyFactor = 1.5;
    } else if (daysUntilDeadline < 7) {
      urgencyFactor = 1.2;
    }
    
    return Math.round(service.basePrice * data.quantity * urgencyFactor);
  };

  const onSubmit = (data: FormValues) => {
    const calculatedBudget = calculateBudget(data);
    setBudget(calculatedBudget);
    setSelectedService(SERVICES.find(s => s.id === data.service)?.name || '');
  };

  const sendToWhatsApp = () => {
    if (!budget || !selectedService) return;
    
    const { service, quantity, deadline } = form.getValues();
    const formattedDate = format(deadline, 'dd/MM/yyyy', { locale: pt });
    
    const message = `Olá! Gostaria de solicitar um orçamento para: ${selectedService}, Quantidade: ${quantity}, Prazo: ${formattedDate}, Valor Estimado: R$${budget.toLocaleString('pt-BR')}`;
    
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
    
    toast({
      title: "Orçamento enviado!",
      description: "Seu orçamento foi enviado para o WhatsApp. Aguarde nosso contato em breve.",
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="glass-card p-8 mb-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Serviço</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {SERVICES.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.name}
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
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantidade</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={1}
                      placeholder="Quantidade de itens ou páginas"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="deadline"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Prazo de Entrega</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "dd 'de' MMMM 'de' yyyy", { locale: pt })
                          ) : (
                            <span>Selecione uma data</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        locale={pt}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full">
              Calcular Orçamento
            </Button>
          </form>
        </Form>
      </div>
      
      {budget !== null && (
        <div className="glass-card p-8 animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-4 text-center">Orçamento Estimado</h3>
          <div className="bg-accent1/10 p-4 rounded-lg mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Serviço:</span>
              <span>{selectedService}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Quantidade:</span>
              <span>{form.getValues().quantity}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Prazo:</span>
              <span>{format(form.getValues().deadline, "dd/MM/yyyy", { locale: pt })}</span>
            </div>
            <div className="border-t border-gray-200 my-2"></div>
            <div className="flex justify-between text-lg font-bold">
              <span>Valor Total:</span>
              <span>R$ {budget.toLocaleString('pt-BR')}</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="default"
              className="flex-1 gap-2"
              onClick={sendToWhatsApp}
            >
              <Smartphone size={16} />
              Enviar por WhatsApp
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setBudget(null)}
            >
              Fechar Orçamento
            </Button>
          </div>
        </div>
      )}
      
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Como usar nossa calculadora</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-600">
          <li>Selecione o serviço que você necessita</li>
          <li>Indique a quantidade de itens (páginas, peças, etc)</li>
          <li>Defina o prazo desejado para entrega</li>
          <li>Clique em "Calcular Orçamento" para visualizar o valor estimado</li>
          <li>Envie o orçamento por WhatsApp para iniciar a conversa</li>
        </ol>
      </div>
    </div>
  );
};

export default BudgetForm;
