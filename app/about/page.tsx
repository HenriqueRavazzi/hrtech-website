import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { BrainCircuit, HeartHandshake, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-dark text-light">
      <Navbar />
      <main className="pt-16"> {/* Padding top para compensar a Navbar fixa */}
        
        {/* Seção Principal */}
        <section className="w-full py-20 lg:py-32">
          <div className="container mx-auto max-w-4xl text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Acreditamos que a melhor tecnologia é aquela que você não vê, apenas sente.
            </h1>
          </div>
        </section>

        {/* Seção Minha Jornada */}
        <section className="w-full py-20 lg:py-24 bg-dark/95">
          <div className="container mx-auto max-w-4xl px-4 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-primary">Minha Jornada</h2>
            </div>
            <div className="md:col-span-2 text-light/80 space-y-4 text-lg">
              <p>Olá, eu sou Henrique Ravazzi. Minha paixão pela tecnologia não nasceu numa tela, mas no coração da indústria. Formado em Engenharia de Controle e Automação pela PUC-PR, meu primeiro grande desafio foi no chão de fábrica da Renault, otimizando processos e entendendo como sistemas complexos interagem no mundo real.</p>
              <p>Essa base sólida me levou ao universo do software, onde atuei em DevOps no Grupo Inlog, garantindo a estabilidade de infraestruturas em nuvem, e depois como desenvolvedor e líder técnico na ExxonMobil, construindo e aprimorando aplicações .NET de grande escala.</p>
              <p>A HRTech Automation Systems nasceu da união desses dois mundos. Da percepção de que a verdadeira inovação acontece quando entendemos a fundo tanto a engenharia por trás das coisas quanto o software que as controla. É essa visão que me permite hoje não apenas escrever código, mas arquitetar soluções completas que resolvem problemas reais.</p>
            </div>
          </div>
        </section>

        {/* Seção Missão */}
        <section className="w-full py-20 lg:py-24">
            <div className="container mx-auto max-w-4xl px-4 text-center">
                <h2 className="text-3xl font-bold text-primary mb-6">A Missão da HRTech</h2>
                <div className="text-light/80 space-y-4 text-lg">
                    <p>Inspirada no universo urbano, minimalista e consciente, a HRTech nasce com uma premissa bem definida: inovar o cotidiano através da automação.</p>
                    <p>Para nós, combinar estética, funcionalidade e eficiência é só o começo. Entregamos a estrutura completa — humana, física e tecnológica — para garantir máxima potência às casas e empresas do amanhã. Criamos experiências marcantes por meio de projetos personalizados que trazem a automação para além dos fios e sistemas. Porque, para nós, uma casa ou um negócio mais inteligente é sinônimo de uma vida mais simples e produtiva.</p>
                </div>
            </div>
        </section>

        {/* Seção Nossos Valores */}
        <section className="w-full py-20 lg:py-24 bg-dark/95">
          <div className="container mx-auto max-w-5xl text-center px-4">
            <h2 className="text-3xl font-bold text-primary mb-12">Nossos Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-left">
                <CardHeader>
                  <BrainCircuit className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Precisão Técnica (O Sábio)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-light/80">Somos complexos na técnica para sermos simples na entrega. Entendemos a fundo cada detalhe para que você não precise se preocupar com eles.</p>
                </CardContent>
              </Card>
              <Card className="text-left">
                <CardHeader>
                  <HeartHandshake className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Parceria Humana (O Prestativo)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-light/80">Ouvimos com atenção e explicamos com paciência. O seu projeto é o nosso projeto. Estamos aqui para guiar, apoiar e construir juntos.</p>
                </CardContent>
              </Card>
              <Card className="text-left">
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Inovação com Propósito (O Herói)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-light/80">Não temos medo de enfrentar desafios complexos. Acreditamos que a tecnologia é a ferramenta para construir um futuro mais eficiente e impactar o mundo de forma positiva.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
