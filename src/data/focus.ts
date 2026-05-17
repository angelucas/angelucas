import type { Lang } from '@/i18n/ui';

export interface FocusPillar {
  id: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
}

export const focusPillars: FocusPillar[] = [
  {
    id: 'ai-dev',
    title: {
      'pt-br': 'IA no desenvolvimento',
      en: 'AI in development',
    },
    description: {
      'pt-br':
        'LLMs e ferramentas como o Cursor no fluxo diário: codificar, revisar e aprender com mais velocidade, sem abrir mão de qualidade.',
      en:
        'LLMs and tools like Cursor in my daily workflow: coding, reviewing, and learning faster while keeping quality high.',
    },
  },
  {
    id: 'agents',
    title: {
      'pt-br': 'Automação e agentes',
      en: 'Automation and agents',
    },
    description: {
      'pt-br':
        'Fluxos com agentes e automações que cortam tarefas repetitivas e ampliam o que entrego em .NET, APIs e integrações.',
      en:
        'Agent-driven flows and automation that cut repetitive work and expand what I deliver in .NET, APIs, and integrations.',
    },
  },
  {
    id: 'growth',
    title: {
      'pt-br': 'Estudo e evolução',
      en: 'Learning and growth',
    },
    description: {
      'pt-br':
        'Estudo fundamentos de IA e orquestração de agentes para somar à base .NET e crescer como profissional mais completo.',
      en:
        'Studying AI fundamentals and agent orchestration to build on my .NET foundation and grow as a stronger engineer.',
    },
  },
];
