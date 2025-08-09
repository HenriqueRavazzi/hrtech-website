import { Card, CardContent, CardHeader } from '../ui/Card';
import { Code2, Network, Home } from 'lucide-react';
import { H2, H3, P } from '../ui/Typography';

export function ServicesSection() {
  return (
    <div className="w-full py-20 lg:py-32">
      <div className="container mx-auto max-w-5xl text-center px-4">
        <H2 className="mb-12">Soluções Pensadas para o Seu Desafio</H2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-left">
            <CardHeader>
              <Home className="h-8 w-8 text-accent mb-4" />
              <H3>Automação Residencial Inteligente</H3>
            </CardHeader>
            <CardContent>
              <P>Transformamos a sua casa num ambiente conectado, seguro e eficiente que trabalha para você.</P>
            </CardContent>
          </Card>
          <Card className="text-left">
            <CardHeader>
              <Code2 className="h-8 w-8 text-accent mb-4" />
              <H3>Desenvolvimento de Software Sob Medida</H3>
            </CardHeader>
            <CardContent>
              <P>Criamos aplicações web e mobile que se adaptam perfeitamente às necessidades do seu negócio.</P>
            </CardContent>
          </Card>
          <Card className="text-left">
            <CardHeader>
              <Network className="h-8 w-8 text-accent mb-4" />
              <H3>Consultoria de Tecnologia e Arquitetura</H3>
            </CardHeader>
            <CardContent>
              <P>Desenhamos arquiteturas de software robustas e estratégias DevOps para o futuro da sua empresa.</P>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
