
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BudgetForm from '@/components/BudgetForm';

const BudgetCalculator: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <BudgetForm />
      </main>
      <Footer />
    </div>
  );
};

export default BudgetCalculator;
