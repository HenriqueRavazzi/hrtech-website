import React from 'react';

interface ConsultoriaTecnologiaFormData {
  tipoConsultoria?: string;
  descricaoDuvidas?: string;
}

interface ConsultoriaTecnologiaFormProps {
  formData: ConsultoriaTecnologiaFormData;
  onFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const ConsultoriaTecnologiaForm: React.FC<ConsultoriaTecnologiaFormProps> = ({ formData, onFormChange }) => {
  return (
    <>
      <div className="mb-6">
        <label htmlFor="tipoConsultoria" className="block text-lg font-medium mb-2">Tipo de consultoria</label>
        <select id="tipoConsultoria" name="tipoConsultoria" value={formData.tipoConsultoria || ''} onChange={onFormChange} className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="" disabled>Selecione o tipo de consultoria</option>
          <option value="sitesPlataformas">Sites em Plataformas (Wix/WordPress)</option>
          <option value="ecommerces">E-commerces (Tray/Yampi/etc)</option>
          <option value="revisaoArquitetura">Revisão de Arquitetura</option>
          <option value="duvidasAutomacao">Dúvidas sobre Automação</option>
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor="descricaoDuvidas" className="block text-lg font-medium mb-2">Conte-nos sobre seu site/projeto e suas principais dúvidas</label>
        <textarea id="descricaoDuvidas" name="descricaoDuvidas" value={formData.descricaoDuvidas || ''} onChange={onFormChange} rows={4} className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      </div>
    </>
  );
};

export default ConsultoriaTecnologiaForm;