// Dados pessoais exibidos no site e no currículo (/curriculo).
// Edite este arquivo para atualizar nome, bio, links e formação.
import profilePhoto from '../assets/profile.jpg';

export const profile = {
  name: 'Luan Kairo de Souza das Neves',
  shortName: 'Luan Kairo',
  initials: 'LK',
  headline: 'Desenvolvimento de Software | Análise de Dados | Suporte Técnico',
  location: 'Serra, ES',
  email: 'luankairo07@gmail.com',
  github: 'https://github.com/luan-k10',
  linkedin: 'https://www.linkedin.com/in/luankairo/',

  // Foto: substitua src/assets/profile.jpg (quadrada). Use `photo: undefined` para mostrar as iniciais.
  photo: profilePhoto as ImageMetadata | undefined,

  summary:
    'Graduando em Engenharia da Computação pela Multivix (conclusão prevista em dez/2027). ' +
    'Experiência em suporte técnico corporativo, correção de bugs em backend e frontend e análise ' +
    'de dados de processos industriais. Atuação com Java e SQL Oracle, experiência com Databricks ' +
    'e conhecimentos em Power BI.',

  about: [
    'Sou estudante de Engenharia da Computação e atuo hoje como estagiário em sistemas de automação de Nível 2 na ArcelorMittal, investigando falhas, corrigindo bugs em Java e escrevendo consultas SQL em Oracle para relatórios e indicadores.',
    'Antes disso, trabalhei com suporte técnico a usuários corporativos e na área comercial, o que me deu uma boa base de comunicação, diagnóstico de problemas e foco no usuário.',
    'Gosto de unir desenvolvimento de software e dados para resolver problemas reais de processo.',
  ],

  education: [
    {
      title: 'Engenharia da Computação',
      institution: 'Multivix Serra',
      period: 'Em andamento · conclusão prevista em dez/2027',
    },
  ],

  languages: [{ name: 'Inglês', level: 'Intermediário' }],
};

export const site = {
  title: `${profile.shortName} · Portfólio`,
  description:
    'Portfólio de Luan Kairo: desenvolvimento de software, análise de dados e suporte técnico. Projetos, experiência e contato.',
  locale: 'pt_BR',
  ogImage: '/og-image.png',
};
