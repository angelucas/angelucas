import type { Lang } from '@/i18n/ui';

export interface ExperienceItem {
  id: string;
  role: Record<Lang, string>;
  company: string;
  period: Record<Lang, string>;
  highlights: Record<Lang, string[]>;
}

export const experience: ExperienceItem[] = [
  {
    id: 'pestana',
    role: {
      'pt-br': 'Desenvolvedor Full Stack',
      en: 'Full Stack Developer',
    },
    company: 'Pestana Leilões',
    period: {
      'pt-br': 'Out 2024 — Presente',
      en: 'Oct 2024 — Present',
    },
    highlights: {
      'pt-br': [
        'Desenvolvimento full stack com .NET, React e Vue',
        'Integração com Oracle, Docker e pipelines CI/CD no Azure DevOps',
        'Trabalho ágil em equipe com foco em qualidade e entrega contínua',
      ],
      en: [
        'Full stack development with .NET, React, and Vue',
        'Integration with Oracle, Docker, and CI/CD pipelines on Azure DevOps',
        'Agile teamwork focused on quality and continuous delivery',
      ],
    },
  },
  {
    id: 'db-banrisul',
    role: {
      'pt-br': 'Desenvolvedor .NET',
      en: '.NET Developer',
    },
    company: 'DB · Banrisul',
    period: {
      'pt-br': 'Jul 2024 — Out 2024',
      en: 'Jul 2024 — Oct 2024',
    },
    highlights: {
      'pt-br': [
        'Atuação na Unidade de Transformação Digital do Banrisul',
        'Desenvolvimento com .NET Framework e C#',
        'Modelo híbrido em Porto Alegre',
      ],
      en: [
        'Worked at Banrisul\'s Digital Transformation Unit',
        'Development with .NET Framework and C#',
        'Hybrid work model in Porto Alegre',
      ],
    },
  },
  {
    id: 'cwi-casas-bahia',
    role: {
      'pt-br': 'Desenvolvedor .NET Back-end',
      en: '.NET Backend Developer',
    },
    company: 'CWI Software · Grupo Casas Bahia',
    period: {
      'pt-br': 'Nov 2021 — Dez 2023',
      en: 'Nov 2021 — Dec 2023',
    },
    highlights: {
      'pt-br': [
        'Manutenção e evolução de APIs essenciais (Cart, Shipping, Cortex)',
        'Correção de bugs com impacto em vendas; testes unitários e de integração',
        'Apresentação de entregas ao cliente interno e testes de stress',
      ],
      en: [
        'Maintenance and evolution of core APIs (Cart, Shipping, Cortex)',
        'Bug fixes impacting sales; unit and integration testing',
        'Sprint demos to internal stakeholders and stress testing',
      ],
    },
  },
  {
    id: 'cwi-kn',
    role: {
      'pt-br': 'Desenvolvedor .NET',
      en: '.NET Developer',
    },
    company: 'CWI Software · Kuehne+Nagel',
    period: {
      'pt-br': 'Dez 2020 — Out 2021',
      en: 'Dec 2020 — Oct 2021',
    },
    highlights: {
      'pt-br': [
        'Suporte e integração entre times de desenvolvimento',
        'Diagnóstico e correção de bugs; código limpo em back-end e front-end',
        'Contato direto com clientes para levantamento de requisitos',
      ],
      en: [
        'Support and integration across development teams',
        'Bug diagnosis and fixes; clean code on back-end and front-end',
        'Direct client contact for requirements gathering',
      ],
    },
  },
  {
    id: 'crea-rs',
    role: {
      'pt-br': 'Desenvolvedor .NET (estágio)',
      en: '.NET Developer (internship)',
    },
    company: 'CREA-RS · NTEC',
    period: {
      'pt-br': 'Dez 2018 — Nov 2020',
      en: 'Dec 2018 — Nov 2020',
    },
    highlights: {
      'pt-br': [
        'Suporte a aplicações web existentes; gráficos e páginas web',
        'Contato com clientes e usuários para análise de requisitos',
        'Apps mobile (Xamarin) para automação de relatórios fiscais da construção civil',
      ],
      en: [
        'Support for existing web applications; charts and web pages',
        'Client and user contact for requirements analysis',
        'Mobile apps (Xamarin) to automate civil construction tax reports',
      ],
    },
  },
];
