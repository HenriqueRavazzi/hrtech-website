'use client';

import React, { useState, Suspense } from 'react';
import AutomacaoResidencialForm from './components/AutomacaoResidencialForm';
import DesenvolvimentoSoftwareForm from './components/DesenvolvimentoSoftwareForm';
import ConsultoriaTecnologiaForm from './components/ConsultoriaTecnologiaForm';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Card } from '../components/ui/Card';
import { FileText } from 'lucide-react';
import { Button } from '../components/ui/Button';

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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <Suspense fallback={<div>Carregando...</div>}>
          <AnimatedSection className="w-full min-h-[calc(100vh-128px)] flex items-center justify-center py-20">
            <div className="container mx-auto max-w-2xl text-center px-4">
              <Card className="bg-dark/60 backdrop-blur-md border-white/10 p-8 lg:p-12">
                <FileText className="h-16 w-16 text-accent mx-auto mb-6" />
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  Solicite um Orçamento Personalizado
                </h1>
                <p className="text-lg md:text-xl text-light/80 mb-12">
                  Conte-nos sobre seu projeto e criaremos uma solução sob medida para suas necessidades.
                </p>
                <div className="text-left">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="projectArea" className="text-sm font-medium text-light/90">Área do Projeto</label>
                      <select
                        id="projectArea"
                        value={projectArea}
                        onChange={handleAreaChange}
                        className="flex h-10 w-full rounded-md border border-light/20 bg-purple-900/80 px-3 py-2 text-sm text-light ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Enviando...' : 'Enviar Orçamento'}
                    </Button>

                    {submissionStatus && (
                      <div className={`mt-4 flex items-center gap-3 rounded-md p-3 text-sm ${submissionStatus === 'error' ? 'bg-red-900/50 text-red-300' : 'bg-green-900/50 text-green-300'}`}>
                        {submissionStatus === 'error' ? (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                            <p>Ocorreu um erro ao enviar o orçamento. Tente novamente.</p>
                          </>
                        ) : (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            <p>Orçamento enviado com sucesso!</p>
                          </>
                        )}
                      </div>
                    )}
                  </form>
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default BudgetPage;
