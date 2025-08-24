import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../components/ui/Card';
import { CheckCircle2, Code2, Network, Home } from 'lucide-react';
import { Button } from '../components/ui/Button';
import Link from 'next/link';

const services = [
  {
    id: 'automacao',
    icon: Home,
    title: "Automação Residencial Inteligente",
    description: "A verdadeira automação vai além de ligar uma luz pelo telemóvel. Trata-se de criar um ecossistema inteligente que se antecipa às suas necessidades...",
    includes: [ "Projetos de Iluminação Inteligente", "Controlo de Climatização e Cortinas", "Sistemas de Segurança Integrados", "Redes Wi-Fi de Alta Performance" ],
  },
  {
    id: 'dev',
    icon: Code2,
    title: "Desenvolvimento de software sob medida",
    headline: "A sua visão é única. O seu software também deveria ser.",
    description: "No mercado atual, soluções genéricas geram resultados genéricos. Na HRTech, não construímos apenas software; criamos a ferramenta exata que o seu negócio precisa para crescer...",
    includes: [ "Aplicações Web e Mobile", "Desenvolvimento de APIs", "Integração de Sistemas", "Modernização de Legado" ],
  },
  {
    id: 'consultoria',
    icon: Network,
    title: "Consultoria de tecnologia e arquitetura",
    headline: "O seu projeto está sendo construído sobre uma fundação sólida?",
    description: "As decisões tecnológicas tomadas hoje definem o sucesso ou o fracasso de amanhã. Atuamos como o seu parceiro estratégico, um arquiteto que garante que a sua 'construção' digital seja sólida...",
    includes: [ "Desenho de Arquitetura de Nuvem (Azure/AWS)", "Estratégia DevOps e CI/CD", "Otimização de Performance e Custos (FinOps)", "Mentoria Técnica para Equipas" ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-dark">
      <Navbar />
      <main className="pt-24 pb-12">
        <section className="container mx-auto max-w-5xl px-4">
          <Card className="bg-dark/60 backdrop-blur-md border-white/10 p-8 mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Serviços</h1>
            <p className="text-lg text-light/80">Soluções de tecnologia pensadas para os seus desafios.</p>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="flex flex-col">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-light/70 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    <Link href={`/contact?service=${encodeURIComponent(service.title)}`}>
                      Quero um Orçamento
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
