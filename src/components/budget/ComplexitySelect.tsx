
import { Star } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "@/types/budget";
import { COMPLEXITY_FACTORS } from "@/constants/budgetServices";
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

type ComplexitySelectProps = {
  form: UseFormReturn<FormValues>;
}

export const ComplexitySelect = ({ form }: ComplexitySelectProps) => {
  return (
    <FormField
      control={form.control}
      name="complexity"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Complexidade</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <Star className="mr-2 h-4 w-4" />
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
  );
};
