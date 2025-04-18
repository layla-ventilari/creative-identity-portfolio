
import { Clock } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "@/types/budget";
import { URGENCY_FACTORS } from "@/constants/budgetServices";
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

type UrgencySelectProps = {
  form: UseFormReturn<FormValues>;
}

export const UrgencySelect = ({ form }: UrgencySelectProps) => {
  return (
    <FormField
      control={form.control}
      name="urgency"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Urgência</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <Clock className="mr-2 h-4 w-4" />
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
  );
};
