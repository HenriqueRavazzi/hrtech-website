import React from 'react';
import { Textarea } from '../../components/ui/Textarea';

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
      <div className="space-y-2">
        <label htmlFor="tipoConsultoria" className="text-sm font-medium text-light/90">Tipo de consultoria</label>
        <select 
          id="tipoConsultoria" 
          name="tipoConsultoria" 
          value={formData.tipoConsultoria || ''} 
          onChange={onFormChange} 
          className="flex h-10 w-full rounded-md border border-light/20 bg-purple-900/80 px-3 py-2 text-sm text-light ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="" disabled>Selecione o tipo de consultoria</option>
          <option value="sitesPlataformas">Sites em Plataformas (Wix/WordPress)</option>
          <option value="ecommerces">E-commerces (Tray/Yampi/etc)</option>
          <option value="revisaoArquitetura">Revisão de Arquitetura</option>
          <option value="duvidasAutomacao">Dúvidas sobre Automação</option>
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="descricaoDuvidas" className="text-sm font-medium text-light/90">Conte-nos sobre seu site/projeto e suas principais dúvidas</label>
        <Textarea 
          id="descricaoDuvidas" 
          name="descricaoDuvidas" 
          value={formData.descricaoDuvidas || ''} 
          onChange={onFormChange} 
          rows={4} 
          placeholder="Descreva seu site/projeto e as dúvidas que você tem"
        />
      </div>
    </>
  );
};

export default ConsultoriaTecnologiaForm;