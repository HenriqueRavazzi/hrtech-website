'use client';

import React, { useState } from 'react';
import AutomacaoResidencialForm from './components/AutomacaoResidencialForm';
import DesenvolvimentoSoftwareForm from './components/DesenvolvimentoSoftwareForm';
import ConsultoriaTecnologiaForm from './components/ConsultoriaTecnologiaForm';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

const BudgetPage = () => {
  const [projectArea, setProjectArea] = useState('');
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProjectArea(e.target.value);
    setFormData({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ projectArea, ...formData }),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setProjectArea('');
        setFormData({});
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Orçamento</h1>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label htmlFor="projectArea" className="block text-lg font-medium mb-2">Área do Projeto</label>
              <select
                id="projectArea"
                value={projectArea}
                onChange={handleAreaChange}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>Selecione uma área</option>
                <option value="automacaoResidencial">Automação Residencial</option>
                <option value="desenvolvimentoSoftware">Desenvolvimento de Software</option>
                <option value="consultoriaTecnologia">Consultoria de Tecnologia</option>
              </select>
            </div>

            {projectArea === 'automacaoResidencial' && <AutomacaoResidencialForm formData={formData} onFormChange={handleFormChange} />}
            {projectArea === 'desenvolvimentoSoftware' && <DesenvolvimentoSoftwareForm formData={formData} onFormChange={handleFormChange} />}
            {projectArea === 'consultoriaTecnologia' && <ConsultoriaTecnologiaForm formData={formData} onFormChange={handleFormChange} />}

            <button type="submit" disabled={isSubmitting} className="w-full p-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-500">
              {isSubmitting ? 'Enviando...' : 'Enviar Orçamento'}
            </button>

            {submissionStatus === 'success' && (
              <p className="text-green-500 mt-4 text-center">Orçamento enviado com sucesso!</p>
            )}
            {submissionStatus === 'error' && (
              <p className="text-red-500 mt-4 text-center">Ocorreu um erro ao enviar o orçamento. Tente novamente.</p>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BudgetPage;
