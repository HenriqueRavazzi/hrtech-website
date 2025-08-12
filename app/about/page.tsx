import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { BrainCircuit, HeartHandshake, Shield } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';

export default function AboutPage() {
  return (
    <div className="bg-dark">
      <Navbar />
      <main className="pt-24 pb-12">
        <AnimatedSection className="w-full py-12">
          <div className="container mx-auto max-w-4xl text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Acreditamos que a melhor tecnologia é aquela que você não vê, apenas sente.
            </h1>
          </div>
        </AnimatedSection>

        <AnimatedSection className="w-full py-16">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Minha Jornada</h2>
            <div className="text-lg text-light/80 space-y-4 max-w-3xl mx-auto text-left md:text-center">
              <p>Olá, eu sou Henrique Ravazzi. Minha paixão pela tecnologia não nasceu numa tela, mas no coração da indústria. Formado em Engenharia de Controle e Automação pela PUC-PR, meu primeiro grande desafio foi no chão de fábrica da Renault, otimizando processos e entendendo como sistemas complexos interagem no mundo real.</p>
              <p>Essa base sólida me levou ao universo do software, onde atuei em DevOps no Grupo Inlog, garantindo a estabilidade de infraestruturas em nuvem, e depois como desenvolvedor e líder técnico na ExxonMobil, construindo e aprimorando aplicações .NET de grande escala.</p>
              <p>A HRTech Automation Systems nasceu da união desses dois mundos. Da percepção de que a verdadeira inovação acontece quando entendemos a fundo tanto a engenharia por trás das coisas quanto o software que as controla.</p>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="w-full py-16">
            <div className="container mx-auto max-w-4xl px-4 text-center">
                <h2 className="text-3xl font-bold text-primary mb-6">A Missão da HRTech</h2>
                <div className="text-lg text-light/80 space-y-4 max-w-3xl mx-auto">
                    <p>Inspirada no universo urbano, minimalista e consciente, a HRTech nasce com uma premissa bem definida: inovar o cotidiano através da automação.</p>
                    <p>Para nós, combinar estética, funcionalidade e eficiência é só o começo. Criamos experiências marcantes por meio de projetos personalizados que trazem a automação para além dos fios e sistemas.</p>
                </div>
            </div>
        </AnimatedSection>

        <AnimatedSection className="w-full py-16">
          <div className="container mx-auto max-w-5xl text-center px-4">
            <h2 className="text-3xl font-bold text-primary mb-12">Nossos Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <BrainCircuit className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Precisão Técnica</CardTitle>
                </CardHeader>
                <CardContent><p className="text-sm text-light/70">Somos complexos na técnica para sermos simples na entrega.</p></CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <HeartHandshake className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Parceria Humana</CardTitle>
                </CardHeader>
                <CardContent><p className="text-sm text-light/70">Ouvimos com atenção e explicamos com paciência. O seu projeto é o nosso projeto.</p></CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Inovação com Propósito</CardTitle>
                </CardHeader>
                <CardContent><p className="text-sm text-light/70">Não temos medo de enfrentar desafios complexos.</p></CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
