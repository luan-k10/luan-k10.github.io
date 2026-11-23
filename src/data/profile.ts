// Dados pessoais exibidos no site e no currículo (/curriculo e /en/resume).
// Edite este arquivo para atualizar nome, bio, links e formação.
// Campos traduzíveis aceitam uma string única ou { pt: '...', en: '...' }.
import profilePhoto from '../assets/profile.jpg';
import { tr, type Lang, type Text } from '../i18n';

const data = {
  name: 'Luan Kairo de Souza das Neves',
  shortName: 'Luan Kairo',
  initials: 'LK',
  headline: {
    pt: 'Desenvolvimento de Software | Análise de Dados | Suporte Técnico',
    en: 'Software Development | Data Analysis | Technical Support',
  } as Text,
  location: { pt: 'Serra, ES', en: 'Serra, ES, Brazil' } as Text,
  email: 'luankairo07@gmail.com',
  github: 'https://github.com/luan-k10',
  linkedin: 'https://www.linkedin.com/in/luankairo/',

  // Foto: substitua src/assets/profile.jpg (quadrada). Use `photo: undefined` para mostrar as iniciais.
  photo: profilePhoto as ImageMetadata | undefined,

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

  about: [
    {
      pt: 'Sou estudante de Engenharia da Computação e atuo hoje como estagiário em sistemas de automação de Nível 2 na ArcelorMittal, investigando falhas, corrigindo bugs em Java e escrevendo consultas SQL em Oracle para relatórios e indicadores.',
      en: "I'm a Computer Engineering student currently working as an intern on Level 2 automation systems at ArcelorMittal, investigating failures, fixing bugs in Java and writing Oracle SQL queries for reports and KPIs.",
    },
    {
      pt: 'Antes disso, trabalhei com suporte técnico a usuários corporativos e na área comercial, o que me deu uma boa base de comunicação, diagnóstico de problemas e foco no usuário.',
      en: 'Before that, I worked in corporate user technical support and in sales, which gave me a solid foundation in communication, troubleshooting and user focus.',
    },
    {
      pt: 'Gosto de unir desenvolvimento de software e dados para resolver problemas reais de processo.',
      en: 'I enjoy combining software development and data to solve real process problems.',
    },
  ] as Text[],

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
    about: data.about.map((paragraph) => tr(paragraph, lang)),
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
