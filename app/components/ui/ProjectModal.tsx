"use client";

import React from 'react';
import { X } from 'lucide-react';
import { projects } from '../../lib/projects-data';
import { Card, CardHeader, CardTitle } from './Card';
import { useRouter } from 'next/navigation';

interface ProjectModalProps {
  project: typeof projects[0] | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const router = useRouter();

  if (!isOpen || !project) return null;

  const handleQuoteRequest = () => {
    const message = `Olá, tenho interesse no serviço de "${project.title}".\n\nGostaria de discutir a minha ideia/necessidade:`;
    const encodedMessage = encodeURIComponent(message);
    router.push(`/contact?message=${encodedMessage}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-start justify-center pt-20">
      <div className="relative bg-gradient-to-br from-dark/95 via-dark/98 to-dark/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-primary/20 w-[92vw] h-[calc(100vh-18rem)] max-w-6xl overflow-hidden mt-4">
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-200 z-10"
        >
          <X className="h-5 w-5 text-light" />
        </button>

        {/* Conteúdo do modal */}
        <div className="p-4 h-full flex flex-col">
          {/* Cabeçalho */}
          <div className="text-center mb-4">
            <p className="text-base text-primary/80 font-medium mb-1">{project.category}</p>
            <CardTitle className="text-3xl font-bold text-light mb-1">
              {project.title}
            </CardTitle>
            <p className="text-primary/90 font-semibold text-xl">{project.client}</p>
          </div>

          {/* Grid de duas colunas */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Coluna esquerda - Conteúdo principal */}
            <div className="lg:col-span-2 space-y-3">
              {/* Descrição do Projeto */}
              <div>
                <h3 className="text-xl font-semibold text-light mb-2">Descrição do Projeto</h3>
                <p className="text-light/80 leading-relaxed text-base">
                  {project.description}
                </p>
              </div>

              {/* Minha Atuação */}
              <div>
                <h3 className="text-xl font-semibold text-light mb-2">Minha Atuação</h3>
                <p className="text-light/80 leading-relaxed text-base">
                  {project.role}
                </p>
              </div>

              {/* Concepção e Ideia Central */}
              <div>
                <h3 className="text-xl font-semibold text-light mb-2">Concepção e Ideia Central</h3>
                <p className="text-light/80 leading-relaxed text-base">
                  {project.conception}
                </p>
              </div>
            </div>

            {/* Coluna direita - Tecnologias e CTA */}
            <div className="space-y-4">
              {/* Tecnologias Utilizadas */}
              <div>
                <h3 className="text-xl font-semibold text-light mb-3">Tecnologias Utilizadas</h3>
                <div className="grid grid-cols-2 gap-1.5">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1.5 bg-primary/10 text-primary text-base font-medium rounded-lg border border-primary/20 text-center"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/20">
                <h3 className="text-xl font-semibold text-light mb-2">Tem um projeto similar?</h3>
                <p className="text-light/70 mb-3 text-base">
                  Vamos conversar sobre como podemos aplicar estas soluções ao seu desafio.
                </p>
                <button
                  onClick={handleQuoteRequest}
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-dark font-semibold py-2.5 px-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-primary/20 text-base"
                >
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}