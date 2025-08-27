import React from 'react';
import { Textarea } from '../../components/ui/Textarea';

interface DesenvolvimentoSoftwareFormData {
  tipoProjeto?: string;
  duracaoEstimada?: string;
  estagioAtual?: string;
  descricaoProjeto?: string;
}

interface DesenvolvimentoSoftwareFormProps {
  formData: DesenvolvimentoSoftwareFormData;
  onFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const DesenvolvimentoSoftwareForm: React.FC<DesenvolvimentoSoftwareFormProps> = ({ formData, onFormChange }) => {
  return (
    <>
      <div className="space-y-2">
        <label htmlFor="tipoProjeto" className="text-sm font-medium text-light/90">Tipo de projeto</label>
        <select 
          id="tipoProjeto" 
          name="tipoProjeto" 
          value={formData.tipoProjeto || ''} 
          onChange={onFormChange} 
          className="flex h-10 w-full rounded-md border border-light/20 bg-purple-900/80 px-3 py-2 text-sm text-light ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="" disabled>Selecione o tipo de projeto</option>
          <option value="freelanceRapido">Freelance Rápido</option>
          <option value="freelanceMedia">Freelance de Média Duração</option>
          <option value="contratoPJ">Contrato PJ</option>
          <option value="desenvolvimentoPlataformas">Desenvolvimento de Plataformas</option>
          <option value="auxilioForcaTrabalho">Auxílio à Força de Trabalho</option>
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="duracaoEstimada" className="text-sm font-medium text-light/90">Duração estimada</label>
        <select 
          id="duracaoEstimada" 
          name="duracaoEstimada" 
          value={formData.duracaoEstimada || ''} 
          onChange={onFormChange} 
          className="flex h-10 w-full rounded-md border border-light/20 bg-purple-900/80 px-3 py-2 text-sm text-light ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="" disabled>Selecione a duração estimada</option>
          <option value="rapido">Rápido (1-2 meses)</option>
          <option value="curto">Curto (3-6 meses)</option>
          <option value="medio">Médio (6-12 meses)</option>
          <option value="longo">Longo (+12 meses)</option>
          <option value="semDuracao">Sem Duração Definida (baseado em entregas)</option>
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="estagioAtual" className="text-sm font-medium text-light/90">Estágio atual</label>
        <select 
          id="estagioAtual" 
          name="estagioAtual" 
          value={formData.estagioAtual || ''} 
          onChange={onFormChange} 
          className="flex h-10 w-full rounded-md border border-light/20 bg-purple-900/80 px-3 py-2 text-sm text-light ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="" disabled>Selecione o estágio atual</option>
          <option value="ideia">Ideia</option>
          <option value="noPapel">No Papel</option>
          <option value="inicioDesenvolvimento">Início de Desenvolvimento</option>
          <option value="emDesenvolvimento">Em Desenvolvimento</option>
          <option value="emSuporte">Em Suporte</option>
          <option value="finalizado">Finalizado (precisa de refatoração)</option>
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="descricaoProjeto" className="text-sm font-medium text-light/90">Descreva o projeto e seus desafios atuais</label>
        <Textarea 
          id="descricaoProjeto" 
          name="descricaoProjeto" 
          value={formData.descricaoProjeto || ''} 
          onChange={onFormChange} 
          rows={4} 
          placeholder="Conte-nos sobre seu projeto e os desafios que está enfrentando"
        />
      </div>
    </>
  );
};

export default DesenvolvimentoSoftwareForm;