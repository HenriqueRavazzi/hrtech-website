"use client";

import React from 'react';
import Link from 'next/link';
import { projects } from '../../lib/projects-data';
import { Card, CardHeader, CardTitle } from '../ui/Card';
import { ArrowUpRight } from 'lucide-react';

// Componente para a animação de scroll contínuo
export function ScrollingPortfolio() {
  // Duplicamos os projetos para criar o efeito de loop infinito
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="w-full py-20 lg:py-24">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos em Destaque</h2>
        <p className="text-lg text-light/80 mb-12">Explore alguns dos desafios que já transformei em soluções.</p>
      </div>

      <div className="relative h-[600px] w-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
        <div className="animate-scroll-up absolute left-0 top-0 flex w-full flex-col gap-4">
          {duplicatedProjects.map((project, index) => (
            <Link href={`/portfolio/${project.slug}`} key={index} className="block w-full">
              <Card className="group flex cursor-pointer items-center justify-between p-4 transition-all duration-300 ease-in-out hover:bg-primary/10 hover:border-primary">
                <div className="flex items-center gap-4">
                  <project.icon className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <p className="text-sm text-light/70">{project.client}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-6 w-6 text-light/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
