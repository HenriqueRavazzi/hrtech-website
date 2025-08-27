import React from 'react';

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
      <div className="mb-6">
        <label htmlFor="tipoProjeto" className="block text-lg font-medium mb-2">Tipo de projeto</label>
        <select id="tipoProjeto" name="tipoProjeto" value={formData.tipoProjeto || ''} onChange={onFormChange} className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="" disabled>Selecione o tipo de projeto</option>
          <option value="freelanceRapido">Freelance Rápido</option>
          <option value="freelanceMedia">Freelance de Média Duração</option>
          <option value="contratoPJ">Contrato PJ</option>
          <option value="desenvolvimentoPlataformas">Desenvolvimento de Plataformas</option>
          <option value="auxilioForcaTrabalho">Auxílio à Força de Trabalho</option>
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor="duracaoEstimada" className="block text-lg font-medium mb-2">Duração estimada</label>
        <select id="duracaoEstimada" name="duracaoEstimada" value={formData.duracaoEstimada || ''} onChange={onFormChange} className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="" disabled>Selecione a duração estimada</option>
          <option value="rapido">Rápido (1-2 meses)</option>
          <option value="curto">Curto (3-6 meses)</option>
          <option value="medio">Médio (6-12 meses)</option>
          <option value="longo">Longo (+12 meses)</option>
          <option value="semDuracao">Sem Duração Definida (baseado em entregas)</option>
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor="estagioAtual" className="block text-lg font-medium mb-2">Estágio atual</label>
        <select id="estagioAtual" name="estagioAtual" value={formData.estagioAtual || ''} onChange={onFormChange} className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="" disabled>Selecione o estágio atual</option>
          <option value="ideia">Ideia</option>
          <option value="noPapel">No Papel</option>
          <option value="inicioDesenvolvimento">Início de Desenvolvimento</option>
          <option value="emDesenvolvimento">Em Desenvolvimento</option>
          <option value="emSuporte">Em Suporte</option>
          <option value="finalizado">Finalizado (precisa de refatoração)</option>
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor="descricaoProjeto" className="block text-lg font-medium mb-2">Descreva o projeto e seus desafios atuais</label>
        <textarea id="descricaoProjeto" name="descricaoProjeto" value={formData.descricaoProjeto || ''} onChange={onFormChange} rows={4} className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      </div>
    </>
  );
};

export default DesenvolvimentoSoftwareForm;