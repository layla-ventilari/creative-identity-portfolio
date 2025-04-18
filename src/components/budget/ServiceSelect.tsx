
import { SERVICES } from "@/constants/budgetServices";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "@/types/budget";

type ServiceSelectProps = {
  form: UseFormReturn<FormValues>;
  onServiceChange: (value: string) => void;
}

export const ServiceSelect = ({ form, onServiceChange }: ServiceSelectProps) => {
  return (
    <FormField
      control={form.control}
      name="service"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Tipo de Serviço</FormLabel>
          <Select onValueChange={onServiceChange} defaultValue={field.value}>
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
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
