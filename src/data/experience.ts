// Experiência profissional (mais recente primeiro).
// Datas no formato 'AAAA-MM'. Use end: null para o emprego atual.
// Campos traduzíveis aceitam uma string única ou { pt: '...', en: '...' }.
import { tr, ui, type Lang, type Text } from '../i18n';

interface Role {
  title: Text;
  start: string;
  end: string | null;
  highlights: Text[];
}

interface Experience {
  company: string;
  note?: Text;
  roles: Role[];
}

const experience: Experience[] = [
  {
    company: 'ArcelorMittal Brasil S/A',
    roles: [
      {
        title: {
          pt: 'Estagiário · Sistemas de Automação Nível 2',
          en: 'Intern · Level 2 Automation Systems',
        },
        start: '2026-02',
        end: null,
        highlights: [
          {
            pt: 'Investigação de falhas e inconsistências nos sistemas N2 da aciaria em ambiente produtivo.',
            en: 'Investigation of failures and inconsistencies in the steel shop L2 systems in production.',
          },
          {
            pt: 'Correção de bugs no backend e no frontend e implementação de melhorias em Java.',
            en: 'Backend and frontend bug fixing and implementation of improvements in Java.',
          },
          {
            pt: 'Consultas SQL em Oracle para relatórios e indicadores.',
            en: 'Oracle SQL queries for reports and KPIs.',
          },
          {
            pt: 'Elaboração de documentação técnica e procedimentos.',
            en: 'Writing technical documentation and procedures.',
          },
        ],
      },
    ],
  },
  {
    company: 'Selbetti Tecnologia S.A.',
    note: { pt: 'Alocado na ArcelorMittal Tubarão', en: 'On-site at ArcelorMittal Tubarão' },
    roles: [
      {
        title: { pt: 'Técnico Residente Júnior', en: 'Junior On-site Technician' },
        start: '2024-08',
        end: '2025-12',
        highlights: [
          {
            pt: 'Suporte técnico a usuários corporativos, com diagnóstico e resolução de incidentes.',
            en: 'Technical support for corporate users, diagnosing and resolving incidents.',
          },
          {
            pt: 'Instalação, configuração e manutenção de impressoras.',
            en: 'Printer installation, configuration and maintenance.',
          },
        ],
      },
    ],
  },
  {
    company: 'Mileto Distribuidora de Materiais Elétricos Ltda.',
    roles: [
      {
        title: { pt: 'Auxiliar de Vendas', en: 'Sales Assistant' },
        start: '2023-11',
        end: '2024-07',
        highlights: [
          {
            pt: 'Cotações, visitas comerciais, negociação e fechamento de vendas.',
            en: 'Quotes, sales visits, negotiation and closing deals.',
          },
        ],
      },
      {
        title: { pt: 'Auxiliar de Expedição', en: 'Shipping Assistant' },
        start: '2023-04',
        end: '2023-10',
        highlights: [{ pt: 'Controle e organização de estoque.', en: 'Inventory control and organization.' }],
      },
    ],
  },
];

const months: Record<Lang, string[]> = {
  pt: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

export function formatMonth(value: string, lang: Lang): string {
  const [year, month] = value.split('-').map(Number);
  const name = months[lang][month - 1];
  return lang === 'pt' ? `${name}/${year}` : `${name} ${year}`;
}

export function getExperience(lang: Lang) {
  return experience.map((job) => ({
    company: job.company,
    note: job.note && tr(job.note, lang),
    roles: job.roles.map((role) => ({
      title: tr(role.title, lang),
      period: `${formatMonth(role.start, lang)} – ${role.end ? formatMonth(role.end, lang) : ui[lang].career.present}`,
      highlights: role.highlights.map((item) => tr(item, lang)),
    })),
  }));
}
