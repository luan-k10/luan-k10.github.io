// Experiência profissional (mais recente primeiro).
// Datas no formato 'AAAA-MM'. Use end: null para o emprego atual.

export interface Role {
  title: string;
  start: string;
  end: string | null;
  highlights: string[];
}

export interface Experience {
  company: string;
  note?: string;
  roles: Role[];
}

export const experience: Experience[] = [
  {
    company: 'ArcelorMittal Brasil S/A',
    roles: [
      {
        title: 'Estagiário · Sistemas de Automação Nível 2',
        start: '2026-02',
        end: null,
        highlights: [
          'Investigação de falhas e inconsistências nos sistemas N2 da aciaria em ambiente produtivo.',
          'Correção de bugs no backend e no frontend e implementação de melhorias em Java.',
          'Consultas SQL em Oracle para relatórios e indicadores.',
          'Elaboração de documentação técnica e procedimentos.',
        ],
      },
    ],
  },
  {
    company: 'Selbetti Tecnologia S.A.',
    note: 'Alocado na ArcelorMittal Tubarão',
    roles: [
      {
        title: 'Técnico Residente Júnior',
        start: '2024-08',
        end: '2025-12',
        highlights: [
          'Suporte técnico a usuários corporativos, com diagnóstico e resolução de incidentes.',
          'Instalação, configuração e manutenção de impressoras.',
        ],
      },
    ],
  },
  {
    company: 'Mileto Distribuidora de Materiais Elétricos Ltda.',
    roles: [
      {
        title: 'Auxiliar de Vendas',
        start: '2023-11',
        end: '2024-07',
        highlights: ['Cotações, visitas comerciais, negociação e fechamento de vendas.'],
      },
      {
        title: 'Auxiliar de Expedição',
        start: '2023-04',
        end: '2023-10',
        highlights: ['Controle e organização de estoque.'],
      },
    ],
  },
];

const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

export function formatMonth(value: string): string {
  const [year, month] = value.split('-').map(Number);
  return `${months[month - 1]}/${year}`;
}

export function formatPeriod(role: Role): string {
  return `${formatMonth(role.start)} – ${role.end ? formatMonth(role.end) : 'atual'}`;
}
