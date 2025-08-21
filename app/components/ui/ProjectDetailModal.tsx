"use client";

import React from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';
import Link from 'next/link';

// Definindo o tipo para um único projeto
type Project = {
    slug: string;
    title: string;
    client: string;
    category: string;
    icon: React.ElementType;
    description: string;
    role: string;
    conception: string;
    technologies: string[];
};

type Props = {
  project: Project | null;
  onClose: () => void;
};

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-primary/20 text-primary text-xs font-bold mr-2 mb-2 px-2.5 py-0.5 rounded-full">
      {children}
    </span>
  );
}

export function ProjectDetailModal({ project, onClose }: Props) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative bg-dark border border-primary/30 rounded-lg shadow-2xl shadow-primary/20 w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto p-8"
        onClick={(e) => e.stopPropagation()} // Impede que o clique dentro do modal o feche
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-light/70 hover:text-light">
          <X size={24} />
        </button>

        {/* Conteúdo do Modal */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2">{project.category}</p>
          <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
          <p className="text-lg text-light/70 mt-2">{project.client}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Descrição do Projeto</h2>
              <p className="text-light/80">{project.description}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Minha Atuação</h2>
              <p className="text-light/80">{project.role}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Concepção e Ideia Central</h2>
              <p className="text-light/80">{project.conception}</p>
            </div>
          </div>

          <aside className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Tecnologias Utilizadas</h3>
              <div className="flex flex-wrap">
                {project.technologies.map(tech => <TechBadge key={tech}>{tech}</TechBadge>)}
              </div>
            </div>
            <div className="bg-dark/50 border border-primary/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Tem um projeto similar?</h3>
              <p className="text-light/70 mb-4 text-sm">Vamos conversar sobre como podemos aplicar estas soluções ao seu desafio.</p>
              <Button asChild className="w-full" variant="outline">
                <Link href={`/contact?service=${encodeURIComponent(project.title)}`}>
                  Solicitar Orçamento
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
