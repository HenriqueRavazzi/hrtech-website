import React from 'react';

const ConsultoriaTecnologiaForm = () => {
  return (
    <>
      <div className="mb-6">
        <label htmlFor="tipoConsultoria" className="block text-lg font-medium mb-2">Tipo de consultoria</label>
        <select id="tipoConsultoria" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="" disabled>Selecione o tipo de consultoria</option>
          <option value="sitesPlataformas">Sites em Plataformas (Wix/WordPress)</option>
          <option value="ecommerces">E-commerces (Tray/Yampi/etc)</option>
          <option value="revisaoArquitetura">Revisão de Arquitetura</option>
          <option value="duvidasAutomacao">Dúvidas sobre Automação</option>
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor="descricaoDuvidas" className="block text-lg font-medium mb-2">Conte-nos sobre seu site/projeto e suas principais dúvidas</label>
        <textarea id="descricaoDuvidas" rows={4} className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      </div>
    </>
  );
};

export default ConsultoriaTecnologiaForm;