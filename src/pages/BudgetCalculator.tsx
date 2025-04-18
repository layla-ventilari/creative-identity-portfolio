
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BudgetForm from '@/components/BudgetForm';

const BudgetCalculator: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <section className="section bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="section-subheading">Orçamento</p>
              <h2 className="section-heading mx-auto">Calculadora de Orçamento</h2>
              <p className="text-gray-600 mt-4">
                Selecione os serviços desejados, quantidade e prazo. A nossa IA calculará um orçamento personalizado para o seu projeto.
              </p>
            </div>
            <BudgetForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BudgetCalculator;
