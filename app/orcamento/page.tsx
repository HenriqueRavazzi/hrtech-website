'use client';

import React, { useState } from 'react';
import AutomacaoResidencialForm from './components/AutomacaoResidencialForm';
import DesenvolvimentoSoftwareForm from './components/DesenvolvimentoSoftwareForm';
import ConsultoriaTecnologiaForm from './components/ConsultoriaTecnologiaForm';

const BudgetPage = () => {
  const [projectArea, setProjectArea] = useState('');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Orçamento</h1>
      <form className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <label htmlFor="projectArea" className="block text-lg font-medium mb-2">Área do Projeto</label>
          <select
            id="projectArea"
            value={projectArea}
            onChange={(e) => setProjectArea(e.target.value)}
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>Selecione uma área</option>
            <option value="automacaoResidencial">Automação Residencial</option>
            <option value="desenvolvimentoSoftware">Desenvolvimento de Software</option>
            <option value="consultoriaTecnologia">Consultoria de Tecnologia</option>
          </select>
        </div>

        {projectArea === 'automacaoResidencial' && <AutomacaoResidencialForm />}
        {projectArea === 'desenvolvimentoSoftware' && <DesenvolvimentoSoftwareForm />}
        {projectArea === 'consultoriaTecnologia' && <ConsultoriaTecnologiaForm />}

      </form>
    </div>
  );
};

export default BudgetPage;