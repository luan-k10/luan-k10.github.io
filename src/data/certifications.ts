// Prêmios e certificados. Datas no formato 'AAAA-MM'.
// Campos traduzíveis aceitam uma string única ou { pt: '...', en: '...' }.
import { tr, type Lang, type Text } from '../i18n';
import { formatMonth } from './experience';

interface Award {
  title: Text;
  issuer: Text;
  date: string;
  description: Text;
  /** Caminho de um PDF em public/ (opcional). */
  pdf?: string;
}

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  /** Carga horária. */
  hours: number;
  url: string;
}

const awards: Award[] = [
  {
    title: {
      pt: 'Menção Honrosa – IV Mostra de Práticas de Extensão Interdisciplinar',
      en: 'Honorable Mention – 4th Interdisciplinary Extension Practices Showcase',
    },
    issuer: { pt: 'Faculdade Multivix – Serra · 2025/1', en: 'Multivix College – Serra · 2025/1' },
    date: '2025-07',
    description: {
      pt: 'Reconhecimento ao projeto “Aplicativo para automatizar/simplificar o preenchimento de análise de risco” pela qualidade técnica, inovação e impacto social.',
      en: 'Recognition of the project “App to automate/simplify filling out risk assessments” for its technical quality, innovation and social impact.',
    },
    pdf: '/certificados/mencao-honrosa-iv-mostra-pei-2025.pdf',
  },
];

const certificates: Certificate[] = [
  {
    title: 'Programação em Microsoft C# do básico ao avançado',
    issuer: 'Udemy · Geek University',
    date: '2026-07',
    hours: 20,
    url: 'https://ude.my/UC-8315b01f-1154-4c67-a305-4f94e823768d',
  },
  {
    title: 'Curso Completo de Banco de Dados e SQL para Iniciantes',
    issuer: 'Udemy · Diego Davila & Bruno Albuquerque Scrignoli',
    date: '2026-02',
    hours: 5,
    url: 'https://ude.my/UC-6fefdb99-f640-4022-aac7-8bf9e1266286',
  },
  {
    title: 'Algoritmos e Lógica de Programação do básico ao avançado',
    issuer: 'Udemy · Geek University',
    date: '2020-10',
    hours: 33.5,
    url: 'https://ude.my/UC-749dc3c9-781f-4d4c-a777-b195f740fb63',
  },
];

export function getAwards(lang: Lang) {
  return awards.map((award) => ({
    title: tr(award.title, lang),
    issuer: tr(award.issuer, lang),
    date: formatMonth(award.date, lang),
    description: tr(award.description, lang),
    pdf: award.pdf,
  }));
}

export function getCertificates(lang: Lang) {
  return certificates.map((cert) => ({
    ...cert,
    date: formatMonth(cert.date, lang),
    hours: `${cert.hours.toLocaleString(lang)}h`,
  }));
}
