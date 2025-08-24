"use client";

import React, { useRef, useState } from 'react';
import { projects } from '../../lib/projects-data';
import { Card, CardHeader, CardTitle } from '../ui/Card';
import { ProjectModal } from '../ui/ProjectModal';
import { ArrowUpRight } from 'lucide-react';

export function SideProjectsPanel() {
  const animationRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
  // Duplicamos os projetos para criar o efeito de loop infinito
  const duplicatedProjects = [...projects, ...projects, ...projects];

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };



  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-dark/80 via-dark/90 to-dark/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-primary/10">
      {/* Container da animação */}
      <div className="flex-1 relative rounded-2xl overflow-hidden">
        {/* Gradiente de máscara suave */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-dark/95 via-dark/50 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-dark/95 via-dark/50 to-transparent pointer-events-none z-10" />
        
        {/* Lista de projetos com animação */}
        <div 
           ref={animationRef}
           className="flex flex-col gap-3 p-4 absolute inset-0 animate-scroll-up-smooth"
         >
          {duplicatedProjects.map((project, index) => (
            <div
              key={`${project.slug}-${index}`}
              className="cursor-pointer group transform transition-all duration-300 hover:scale-[1.02]"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm rounded-xl border border-primary/20 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden">
                {/* Efeito de brilho sutil */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-3">
                  <div className="flex items-start gap-2.5">
                    <div className="p-1.5 rounded-lg bg-primary/20 backdrop-blur-sm">
                      <project.icon className="h-5 w-5 text-primary flex-shrink-0" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-sm font-semibold text-light leading-tight mb-1 group-hover:text-primary/90 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <p className="text-xs text-primary/70 mb-1.5 font-medium">{project.client}</p>
                      <p className="text-xs text-light/60 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="p-1 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      <ArrowUpRight className="h-3 w-3 text-primary flex-shrink-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

// Modal renderizado fora do container do painel
export function SideProjectsPanelWithModal() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <SideProjectsPanelContent onProjectClick={handleProjectClick} />
      
      {/* Modal do projeto renderizado fora do container */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
      />
    </>
  );
}

// Componente interno do painel
function SideProjectsPanelContent({ onProjectClick }: { onProjectClick: (project: typeof projects[0]) => void }) {
  const animationRef = useRef<HTMLDivElement>(null);
  
  // Duplicamos os projetos para criar o efeito de loop infinito
  const duplicatedProjects = [...projects, ...projects, ...projects];

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-dark/80 via-dark/90 to-dark/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-primary/10">
      {/* Container da animação */}
      <div className="flex-1 relative rounded-2xl overflow-hidden">
        {/* Gradiente de máscara suave */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-dark/95 via-dark/50 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-dark/95 via-dark/50 to-transparent pointer-events-none z-10" />
        
        {/* Lista de projetos com animação */}
        <div 
           ref={animationRef}
           className="flex flex-col gap-3 p-4 absolute inset-0 animate-scroll-up-smooth"
         >
          {duplicatedProjects.map((project, index) => (
            <div
              key={`${project.slug}-${index}`}
              className="cursor-pointer group transform transition-all duration-300 hover:scale-[1.02]"
              onClick={() => onProjectClick(project)}
            >
              <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm rounded-xl border border-primary/20 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden">
                {/* Efeito de brilho sutil */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-3">
                  <div className="flex items-start gap-2.5">
                    <div className="p-1.5 rounded-lg bg-primary/20 backdrop-blur-sm">
                      <project.icon className="h-5 w-5 text-primary flex-shrink-0" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-sm font-semibold text-light leading-tight mb-1 group-hover:text-primary/90 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <p className="text-xs text-primary/70 mb-1.5 font-medium">{project.client}</p>
                      <p className="text-xs text-light/60 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="p-1 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      <ArrowUpRight className="h-3 w-3 text-primary flex-shrink-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}