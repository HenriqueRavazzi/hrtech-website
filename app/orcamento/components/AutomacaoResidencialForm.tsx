import React from 'react';

interface AutomacaoResidencialFormData {
  automacaoTipo?: string;
  cidadeBairro?: string;
  objetivoPrincipal?: string;
}

interface AutomacaoResidencialFormProps {
  formData: AutomacaoResidencialFormData;
  onFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const AutomacaoResidencialForm: React.FC<AutomacaoResidencialFormProps> = ({ formData, onFormChange }) => {
  return (
    <>
      <div className="mb-6">
        <label htmlFor="automacaoTipo" className="block text-lg font-medium mb-2">O que deseja automatizar?</label>
        <select id="automacaoTipo" name="automacaoTipo" value={formData.automacaoTipo || ''} onChange={onFormChange} className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
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
        <input type="text" id="cidadeBairro" name="cidadeBairro" value={formData.cidadeBairro || ''} onChange={onFormChange} className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="mb-6">
        <label htmlFor="objetivoPrincipal" className="block text-lg font-medium mb-2">Qual seu objetivo principal?</label>
        <select id="objetivoPrincipal" name="objetivoPrincipal" value={formData.objetivoPrincipal || ''} onChange={onFormChange} className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
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