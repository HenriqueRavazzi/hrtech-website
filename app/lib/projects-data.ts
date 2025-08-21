import { Layers, GitBranch, Smartphone, Lightbulb, Construction } from 'lucide-react';

// Centralizando os dados dos projetos para reutilização
export const projects = [
  {
    slug: "desenvolvimento-produto-mobile-iot",
    title: "Desenvolvimento de Produto Mobile (IoT)",
    client: "Motomco",
    category: "Desenvolvimento Mobile & IoT",
    icon: Smartphone,
    description: "Idealização e desenvolvimento de um novo produto de software, focado num aplicativo mobile para a gestão de equipamentos em campo, com integração GPS e Bluetooth.",
    role: "Atuei como desenvolvedor principal na criação do aplicativo em Flutter e da API de suporte em Node.js, participando ativamente na conceção e prototipagem de novas funcionalidades.",
    conception: "A ideia central foi criar uma ferramenta robusta e intuitiva para técnicos em campo, substituindo processos manuais por uma solução digital que permitisse a configuração de dispositivos via Bluetooth e o rastreamento em tempo real via GPS, otimizando a eficiência operacional.",
    technologies: ["Flutter", "Node.js", "AWS", "Bluetooth LE", "GPS"],
  },
  {
    slug: "lideranca-tecnica-plataforma-talentos",
    title: "Liderança Técnica - Plataforma de Talentos",
    client: "ExxonMobil",
    category: "Desenvolvimento de Software",
    icon: GitBranch,
    description: "Desenvolvimento de uma plataforma interna complexa, similar a um 'LinkedIn corporativo', para a gestão e o desenvolvimento de talentos dentro da empresa.",
    role: "Liderei a equipa de back-end, sendo responsável pela arquitetura da solução e pelo desenvolvimento dos principais serviços e APIs da plataforma, garantindo performance e segurança.",
    conception: "O projeto nasceu da necessidade de centralizar os dados de competências dos funcionários. A conceção focou-se em criar um ecossistema onde gestores e funcionários pudessem visualizar carreiras, identificar lacunas de competências e encontrar oportunidades internas de forma proativa.",
    technologies: ["C# (.NET)", "SQL Server", "Microsserviços", "React", "Angular"],
  },
  // ... (outros projetos seguem a mesma estrutura)
  {
    slug: "plataforma-leiloes-online",
    title: "Plataforma de Leilões Online",
    client: "KIS Solutions",
    category: "Desenvolvimento Full-Stack",
    icon: GitBranch,
    description: "Construção e manutenção de uma plataforma de leilões online de alta disponibilidade, com aplicações web e mobile (iOS/Android).",
    role: "Atuei como desenvolvedor full-stack, liderando iniciativas de arquitetura, desenvolvendo a API principal em Java Spring Boot e atuando no front-end com React.",
    conception: "O desafio era criar uma experiência de leilão em tempo real, segura e confiável. A ideia foi arquitetar um sistema de alta performance que pudesse lidar com picos de tráfego e garantir a integridade das licitações e transações financeiras.",
    technologies: ["Java (Spring Boot)", "React", "React Native", "SQL", "AWS"],
  },
  {
    slug: "engenharia-plataformas-devops",
    title: "Engenharia de Plataformas e DevOps",
    client: "Grupo Inlog",
    category: "DevOps & Cloud",
    icon: Layers,
    description: "Atuação focada em garantir a estabilidade, a segurança e a agilidade da infraestrutura em nuvem para as aplicações da empresa.",
    role: "Fui responsável pela criação e manutenção de pipelines de CI/CD na Azure DevOps e pela implementação de práticas de Infraestrutura como Código (IaC).",
    conception: "A conceção focou-se em automatizar todo o ciclo de vida do desenvolvimento, desde o código até à produção, para reduzir erros manuais, acelerar as entregas e permitir que as equipas de desenvolvimento se focassem em criar valor para o negócio.",
    technologies: ["Azure", "Azure DevOps", "CI/CD", "IaC", "Docker"],
  },
];
