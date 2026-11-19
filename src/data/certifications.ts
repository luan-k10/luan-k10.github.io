// Prêmios e certificados. Datas no formato 'AAAA-MM'.

export interface Award {
  title: string;
  issuer: string;
  date: string;
  description: string;
  /** Caminho de um PDF em public/ (opcional). */
  pdf?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  hours: string;
  url: string;
}

export const awards: Award[] = [
  {
    title: 'Menção Honrosa – IV Mostra de Práticas de Extensão Interdisciplinar',
    issuer: 'Faculdade Multivix – Serra · 2025/1',
    date: '2025-07',
    description:
      'Reconhecimento ao projeto “Aplicativo para automatizar/simplificar o preenchimento de análise de risco” pela qualidade técnica, inovação e impacto social.',
          pdf: '/certificados/mencao-honrosa-iv-mostra-pei-2025.pdf',
  },
];

export const certificates: Certificate[] = [
  {
    title: 'Programação em Microsoft C# do básico ao avançado',
    issuer: 'Udemy · Geek University',
    date: '2026-07',
    hours: '20h',
    url: 'https://ude.my/UC-8315b01f-1154-4c67-a305-4f94e823768d',
  },
  {
    title: 'Curso Completo de Banco de Dados e SQL para Iniciantes',
    issuer: 'Udemy · Diego Davila & Bruno Albuquerque Scrignoli',
    date: '2026-02',
    hours: '5h',
    url: 'https://ude.my/UC-6fefdb99-f640-4022-aac7-8bf9e1266286',
  },
  {
    title: 'Algoritmos e Lógica de Programação do básico ao avançado',
    issuer: 'Udemy · Geek University',
    date: '2020-10',
    hours: '33,5h',
    url: 'https://ude.my/UC-749dc3c9-781f-4d4c-a777-b195f740fb63',
  },
];
