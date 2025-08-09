import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Code2, Network, Home } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Automação Residencial Inteligente",
      description: "Transformamos a sua casa num ambiente conectado, seguro e eficiente que trabalha para você."
    },
    {
      icon: Code2,
      title: "Desenvolvimento de Software Sob Medida",
      description: "Criamos aplicações web e mobile que se adaptam perfeitamente às necessidades do seu negócio."
    },
    {
      icon: Network,
      title: "Consultoria de Tecnologia e Arquitetura",
      description: "Desenhamos arquiteturas de software robustas e estratégias DevOps para o futuro da sua empresa."
    }
  ];

  return (
    <div className="w-full py-20 lg:py-32 text-light">
      <div className="container mx-auto max-w-5xl text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Soluções Pensadas para o Seu Desafio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              // Animação de hover nos cards
              className="transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20"
            >
              <CardHeader>
                {/* Ícone com a nova cor de destaque */}
                <service.icon className="h-8 w-8 text-accent mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-light/80">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
