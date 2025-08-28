import React, { Suspense } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ContactForm } from '../components/sections/ContactForm';
import { Mail } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Card } from '../components/ui/Card';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Entre em Contato | HRTech Automation Systems",
  description: "Entre em contato com a HRTech Automation Systems para discutir seu projeto, solicitar um orçamento ou tirar dúvidas sobre nossos serviços de automação e desenvolvimento.",
  keywords: ["contato", "orçamento", "projeto", "automação", "desenvolvimento de software", "consultoria tecnológica", "atendimento"],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Entre em Contato | HRTech Automation Systems",
    description: "Entre em contato com a HRTech Automation Systems para discutir seu projeto, solicitar um orçamento ou tirar dúvidas sobre nossos serviços.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div>
      <Script
        id="schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contato | HRTech Automation Systems",
            "description": "Entre em contato com a HRTech Automation Systems para discutir seu projeto ou tirar dúvidas sobre nossos serviços.",
            "url": "https://hrtechnologies.com.br/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "HRTech Automation Systems",
              "telephone": "+5511999999999",
              "email": "contato@hrtechnologies.com.br",
              "url": "https://hrtechnologies.com.br",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+5511999999999",
                "contactType": "customer service",
                "availableLanguage": ["Portuguese", "English"],
                "contactOption": "TollFree"
              }
            }
          })
        }}
      />
      <Navbar />
      <main className="pt-16">
        <Suspense fallback={<div>Carregando...</div>}>
          <AnimatedSection className="w-full min-h-[calc(100vh-128px)] flex items-center justify-center py-20">
            <div className="container mx-auto max-w-2xl text-center px-4">
              <Card className="bg-dark/60 backdrop-blur-md border-white/10 p-8 lg:p-12">
                <Mail className="h-16 w-16 text-accent mx-auto mb-6" />
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  Vamos Construir Algo Incrível Juntos
                </h1>
                <p className="text-lg md:text-xl text-light/80 mb-12">
                  Tem uma ideia, um desafio ou um projeto em mente? Preencha o formulário abaixo e vamos conversar.
                </p>
                <div className="text-left">
                  <ContactForm />
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
