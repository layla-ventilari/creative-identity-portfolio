
import { Info, Clock, CheckCircle2 } from "lucide-react";

export const BudgetSummary = () => {
  return (
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
  );
};
