import React from 'react';

const AutomacaoResidencialForm = () => {
  return (
    <>
      <div className="mb-6">
        <label htmlFor="automacaoTipo" className="block text-lg font-medium mb-2">O que deseja automatizar?</label>
        <select id="automacaoTipo" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="" disabled>Selecione o que deseja automatizar</option>
          <option value="comodo">Cômodo</option>
          <option value="casa">Casa</option>
          <option value="seguranca">Segurança</option>
          <option value="iluminacao">Iluminação</option>
          <option value="sons">Sons</option>
          <option value="entradaSaida">Entrada/Saída</option>
          <option value="apoioIdosos">Apoio a Idosos</option>
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor="cidadeBairro" className="block text-lg font-medium mb-2">Cidade e bairro onde mora</label>
        <input type="text" id="cidadeBairro" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="mb-6">
        <label htmlFor="objetivoPrincipal" className="block text-lg font-medium mb-2">Qual seu objetivo principal?</label>
        <select id="objetivoPrincipal" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="" disabled>Selecione seu objetivo</option>
          <option value="seguranca">Segurança</option>
          <option value="conforto">Conforto</option>
          <option value="luxo">Luxo</option>
          <option value="auxilioIdosos">Auxílio a Pessoas Idosas</option>
          <option value="reformasRetrofit">Reformas/Retrofit</option>
        </select>
      </div>
    </>
  );
};

export default AutomacaoResidencialForm;