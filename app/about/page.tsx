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
        <AnimatedSection>
          <div className="container mx-auto max-w-4xl text-center px-4 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Sobre a HRTech
            </h1>
            <Card className="bg-dark/60 backdrop-blur-md">
              <CardContent className="p-8">
                <p className="text-lg text-light/80">
                  Acreditamos que a melhor tecnologia é aquela que você não vê, apenas sente.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary">Nossa História</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg text-light/80">
                    A HRTech Automation Systems nasceu da união entre engenharia industrial e desenvolvimento de software, 
                    combinando experiência prática em automação com expertise em tecnologias modernas.
                  </p>
                  <p className="text-lg text-light/80">
                    Nossa trajetória inclui projetos em grandes corporações como ExxonMobil, Renault e Grupo Inlog, 
                    onde desenvolvemos soluções robustas para desafios complexos de automação e software.
                  </p>
                  <p className="text-lg text-light/80">
                    Hoje, aplicamos essa experiência para criar soluções inovadoras que transformam a forma como 
                    empresas e residências interagem com a tecnologia.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary">Nossa Missão</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg text-light/80">
                    Inspirada no universo urbano, minimalista e consciente, a HRTech nasce com uma premissa bem definida: 
                    inovar o cotidiano através da automação inteligente.
                  </p>
                  <p className="text-lg text-light/80">
                    Para nós, combinar estética, funcionalidade e eficiência é só o começo. Criamos experiências 
                    marcantes por meio de projetos personalizados que trazem a automação para além dos fios e sistemas.
                  </p>
                  <p className="text-lg text-light/80">
                    Acreditamos que a tecnologia deve servir como uma ponte para uma vida com mais propósito, 
                    desenhando sistemas que se adaptam ao seu ritmo e libertam seu tempo para o que realmente importa.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="container mx-auto max-w-5xl text-center px-4 mt-24">
            <Card className="bg-dark/60 backdrop-blur-md mb-12">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">Nossos Valores</CardTitle>
              </CardHeader>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <BrainCircuit className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Precisão Técnica</CardTitle>
                </CardHeader>
                <CardContent><p className="text-sm text-light/70">Somos complexos na técnica para sermos simples na entrega.</p></CardContent>
              </Card>
              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <HeartHandshake className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Parceria Humana</CardTitle>
                </CardHeader>
                <CardContent><p className="text-sm text-light/70">Ouvimos com atenção e explicamos com paciência. O seu projeto é o nosso projeto.</p></CardContent>
              </Card>
              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Inovação com Propósito</CardTitle>
                </CardHeader>
                <CardContent><p className="text-sm text-light/70">Não temos medo de enfrentar desafios complexos.</p></CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="container mx-auto max-w-6xl px-4 mt-24">
            <Card className="bg-dark/60 backdrop-blur-md mb-12">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary text-center">Nossos Clientes</CardTitle>
              </CardHeader>
            </Card>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-light">Clientes Corporativos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-4 bg-dark/40 rounded-lg">
                      <h4 className="font-semibold text-light">ExxonMobil</h4>
                      <p className="text-sm text-light/70">Desenvolvimento e liderança técnica em aplicações .NET de grande escala.</p>
                    </div>
                    <div className="p-4 bg-dark/40 rounded-lg">
                      <h4 className="font-semibold text-light">LOC Solutions</h4>
                      <p className="text-sm text-light/70">Desenvolvimento de soluções mobile e web corporativas.</p>
                    </div>
                    <div className="p-4 bg-dark/40 rounded-lg">
                      <h4 className="font-semibold text-light">Renault</h4>
                      <p className="text-sm text-light/70">Automação industrial para facilitar trabalho dos operadores de linha.</p>
                    </div>
                    <div className="p-4 bg-dark/40 rounded-lg">
                      <h4 className="font-semibold text-light">Grupo Inlog</h4>
                      <p className="text-sm text-light/70">Desenvolvimento DevOps e manutenção de sistemas.</p>
                    </div>
                    <div className="p-4 bg-dark/40 rounded-lg">
                      <h4 className="font-semibold text-light">KIS Solutions</h4>
                      <p className="text-sm text-light/70">Soluções personalizadas de software e automação para sistema de Leilões online.</p>
                    </div>
                    <div className="p-4 bg-dark/40 rounded-lg">
                      <h4 className="font-semibold text-light">Neuvye</h4>
                      <p className="text-sm text-light/70">Consultoria em tecnologias e arquiteturas de sistemas.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-dark/60 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-light">Clientes Individuais</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-dark/40 rounded-lg">
                    <h4 className="font-semibold text-light">Região de Curitiba-PR</h4>
                    <p className="text-light/70 mb-4">
                      Atendemos clientes particulares na região metropolitana de Curitiba com soluções de:
                    </p>
                    <ul className="space-y-2 text-sm text-light/70">
                      <li>• Automação residencial completa</li>
                      <li>• Sistemas de segurança inteligente</li>
                      <li>• Iluminação e climatização automatizada</li>
                      <li>• Integração de dispositivos IoT</li>
                      <li>• Consultoria em tecnologia doméstica</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm text-light/80 text-center">
                      <strong>Atendimento personalizado</strong><br/>
                      Cada projeto residencial é único e desenvolvido especificamente 
                      para as necessidades e estilo de vida de cada família.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
