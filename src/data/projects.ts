import type { Lang } from '@/i18n/ui';

export interface Project {
  id: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  stack: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 'sn50',
    title: {
      'pt-br': 'SN-50 — Fantasy Console',
      en: 'SN-50 — Fantasy Console',
    },
    description: {
      'pt-br':
        'Console fantasia inspirado no SNES, escrito em Rust. Inclui emulador, assembler e ferramentas de desenvolvimento para jogos retro.',
      en:
        'Fantasy console inspired by the SNES, written in Rust. Includes emulator, assembler, and development tools for retro games.',
    },
    stack: ['Rust', 'WebAssembly', 'JavaScript'],
    github: 'https://github.com/angelucas',
  },
  {
    id: 'portfolio',
    title: {
      'pt-br': 'lucasmachado.io',
      en: 'lucasmachado.io',
    },
    description: {
      'pt-br':
        'Este portfolio — site pessoal bilíngue com Astro, design dark contemporâneo e foco em performance.',
      en:
        'This portfolio — bilingual personal site built with Astro, contemporary dark design, and performance-first approach.',
    },
    stack: ['Astro', 'TypeScript', 'CSS'],
    github: 'https://github.com/angelucas/angelucas',
  },
  {
    id: 'apis',
    title: {
      'pt-br': 'APIs REST & Microserviços',
      en: 'REST APIs & Microservices',
    },
    description: {
      'pt-br':
        'Projetos profissionais com .NET e Azure: APIs escaláveis, integração entre serviços e boas práticas de engenharia de software.',
      en:
        'Professional projects with .NET and Azure: scalable APIs, service integration, and software engineering best practices.',
    },
    stack: ['.NET', 'C#', 'Azure', 'Docker'],
  },
];
