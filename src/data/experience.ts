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
      'pt-br': 'Desenvolvedor Full Stack .NET',
      en: 'Full Stack .NET Developer',
    },
    company: 'Pestana Leilões',
    period: {
      'pt-br': 'Out 2024 a Presente',
      en: 'Oct 2024 to present',
    },
    highlights: {
      'pt-br': [
        'Suporte em produção e incidentes críticos; correções em Oracle via SQL e fluxos operacionais',
        'Desenvolvimento e manutenção de aplicações corporativas .NET em sistemas críticos',
        'APIs e integrações com parceiros; análise técnica, design e code review em ambiente ágil',
      ],
      en: [
        'Production support and critical incidents; Oracle fixes via SQL and operational workflows',
        'Development and maintenance of enterprise .NET applications on critical business systems',
        'APIs and partner integrations; technical analysis, solution design, and code reviews in agile teams',
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
      'pt-br': 'Jul 2024 a Out 2024',
      en: 'Jul 2024 to Oct 2024',
    },
    highlights: {
      'pt-br': [
        'Kickoff e concepção inicial de novo produto em squad recém-formada no Banrisul',
        'Brainstorming, prototipação e planejamento técnico da direção do produto',
        'Implementação em stack .NET full stack e testes unitários para qualidade de código',
      ],
      en: [
        'Kickoff and early-stage conception of a new product in a newly formed Banrisul squad',
        'Brainstorming, prototyping, and technical planning for product direction',
        'Full stack .NET implementation and unit tests to improve code quality',
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
      'pt-br': 'Nov 2021 a Dez 2023',
      en: 'Nov 2021 to Dec 2023',
    },
    highlights: {
      'pt-br': [
        'Evolução e estabilidade das APIs Cart, Shipping e Cortex e sistemas de comércio',
        'Testes unitários e de integração; correções com impacto direto em vendas',
        'Testes de stress e entregas alinhadas ao time de Carrinho e Frete Web',
      ],
      en: [
        'Evolution and stability of Cart, Shipping, and Cortex APIs and commerce systems',
        'Unit and integration tests; bug fixes with direct impact on sales',
        'Stress testing for the Cart and Shipping Web team',
      ],
    },
  },
  {
    id: 'cwi-fullstack',
    role: {
      'pt-br': 'Desenvolvedor Full Stack .NET',
      en: 'Full Stack .NET Developer',
    },
    company: 'CWI Software',
    period: {
      'pt-br': 'Dez 2020 a Out 2021',
      en: 'Dec 2020 to Oct 2021',
    },
    highlights: {
      'pt-br': [
        'Integração entre times em suporte a aplicações corporativas',
        'Diagnóstico e correção de bugs; código limpo em back-end e front-end',
        'Contato com clientes para requisitos; documentação de tarefas e processos',
      ],
      en: [
        'Cross-team integration on enterprise application support',
        'Bug diagnosis and fixes; clean code on back-end and front-end',
        'Client-facing requirements analysis; task and process documentation',
      ],
    },
  },
  {
    id: 'crea-rs',
    role: {
      'pt-br': 'Desenvolvedor de Software (estágio)',
      en: 'Software Developer (internship)',
    },
    company: 'CREA-RS · NTEC',
    period: {
      'pt-br': 'Dez 2018 a Nov 2020',
      en: 'Dec 2018 to Nov 2020',
    },
    highlights: {
      'pt-br': [
        'Suporte a aplicações web; desenvolvimento de gráficos e páginas',
        'Apps mobile (Xamarin) para automação de relatórios fiscais da construção civil',
        'Análise de requisitos e suporte com clientes e usuários',
      ],
      en: [
        'Web application support; charts and web page development',
        'Mobile apps (Xamarin) to automate civil construction tax reports',
        'Requirements analysis and support with clients and users',
      ],
    },
  },
];
