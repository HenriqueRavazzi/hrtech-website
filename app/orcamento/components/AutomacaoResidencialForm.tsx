import React from 'react';
import { Input } from '../../components/ui/Input';

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
      <div className="space-y-2">
        <label htmlFor="automacaoTipo" className="text-sm font-medium text-light/90">O que deseja automatizar?</label>
        <select 
          id="automacaoTipo" 
          name="automacaoTipo" 
          value={formData.automacaoTipo || ''} 
          onChange={onFormChange} 
          className="flex h-10 w-full rounded-md border border-light/20 bg-purple-900/80 px-3 py-2 text-sm text-light ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
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
      <div className="space-y-2">
        <label htmlFor="cidadeBairro" className="text-sm font-medium text-light/90">Cidade e bairro onde mora</label>
        <Input 
          type="text" 
          id="cidadeBairro" 
          name="cidadeBairro" 
          value={formData.cidadeBairro || ''} 
          onChange={onFormChange} 
          placeholder="Ex: São Paulo, Moema"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="objetivoPrincipal" className="text-sm font-medium text-light/90">Qual seu objetivo principal?</label>
        <select 
          id="objetivoPrincipal" 
          name="objetivoPrincipal" 
          value={formData.objetivoPrincipal || ''} 
          onChange={onFormChange} 
          className="flex h-10 w-full rounded-md border border-light/20 bg-purple-900/80 px-3 py-2 text-sm text-light ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
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