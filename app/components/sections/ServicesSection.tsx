import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Code2, Network, Home } from 'lucide-react';

export function ServicesSection() {
  return (
    <section className="w-full py-20 lg:py-32 text-light">
      <div className="container mx-auto max-w-5xl text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Soluções Pensadas para o Seu Desafio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Home className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Automação Residencial Inteligente</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-light/80">Transformamos a sua casa num ambiente conectado, seguro e eficiente que trabalha para você.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Code2 className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Desenvolvimento de Software Sob Medida</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-light/80">Criamos aplicações web e mobile que se adaptam perfeitamente às necessidades do seu negócio.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Network className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Consultoria de Tecnologia e Arquitetura</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-light/80">Desenhamos arquiteturas de software robustas e estratégias DevOps para o futuro da sua empresa.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
