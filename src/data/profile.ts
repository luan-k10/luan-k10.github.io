// Dados pessoais exibidos no site e no currículo (/curriculo e /en/resume).
// Edite este arquivo para atualizar nome, bio, links e formação.
// Campos traduzíveis aceitam uma string única ou { pt: '...', en: '...' }.
import { tr, type Lang, type Text } from '../i18n';

const data = {
  name: 'Luan Kairo de Souza das Neves',
  shortName: 'Luan Kairo',
  headline: {
    pt: 'Desenvolvimento de Software · Análise de Dados · Suporte Técnico',
    en: 'Software Development · Data Analysis · Technical Support',
  } as Text,
  location: { pt: 'Serra, ES', en: 'Serra, ES, Brazil' } as Text,
  email: 'luankairo07@gmail.com',
  github: 'https://github.com/luan-k10',
  linkedin: 'https://www.linkedin.com/in/luankairo/',

  /** Texto de apresentação na abertura da página inicial. */
  intro: {
    pt:
      'Graduando em Engenharia da Computação, com experiência em sistemas de automação industrial Nível 2, ' +
      'correção de bugs em backend e frontend e análise de dados de processo. Atuação com Java e SQL Oracle, ' +
      'experiência com Databricks e conhecimentos em Power BI.',
    en:
      'Computer Engineering undergraduate with experience in Level 2 industrial automation systems, ' +
      'backend and frontend bug fixing and process data analysis. Works with Java and Oracle SQL, ' +
      'has experience with Databricks and knowledge of Power BI.',
  } as Text,

  /** Tecnologias em destaque no quadro de informações da página inicial. */
  mainTech: ['Java', 'SQL Oracle', 'Databricks', 'Angular'],

  summary: {
    pt:
      'Graduando em Engenharia da Computação pela Multivix (conclusão prevista em dez/2027). ' +
      'Experiência em suporte técnico corporativo, correção de bugs em backend e frontend e análise ' +
      'de dados de processos industriais. Atuação com Java e SQL Oracle, experiência com Databricks ' +
      'e conhecimentos em Power BI.',
    en:
      'Computer Engineering undergraduate at Multivix (expected graduation: Dec 2027). ' +
      'Experience in corporate technical support, backend and frontend bug fixing and industrial ' +
      'process data analysis. Works with Java and Oracle SQL, has experience with Databricks ' +
      'and knowledge of Power BI.',
  } as Text,

  education: [
    {
      title: { pt: 'Engenharia da Computação', en: 'Computer Engineering' } as Text,
      institution: 'Multivix Serra' as Text,
      period: {
        pt: 'Em andamento · conclusão prevista em dez/2027',
        en: 'In progress · expected graduation: Dec 2027',
      } as Text,
    },
  ],

  languages: [
    {
      name: { pt: 'Português', en: 'Portuguese' } as Text,
      level: { pt: 'Nativo', en: 'Native' } as Text,
    },
    {
      name: { pt: 'Inglês', en: 'English' } as Text,
      level: { pt: 'Intermediário', en: 'Intermediate' } as Text,
    },
  ],
};

export function getProfile(lang: Lang) {
  return {
    ...data,
    headline: tr(data.headline, lang),
    location: tr(data.location, lang),
    summary: tr(data.summary, lang),
    intro: tr(data.intro, lang),
    education: data.education.map((course) => ({
      title: tr(course.title, lang),
      institution: tr(course.institution, lang),
      period: tr(course.period, lang),
    })),
    languages: data.languages.map((language) => ({
      name: tr(language.name, lang),
      level: tr(language.level, lang),
    })),
  };
}

export const site = {
  ogImage: '/og-image.png',
};
