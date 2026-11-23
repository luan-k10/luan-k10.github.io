// Idiomas do site. Português fica na raiz (/), inglês em /en/.
// Textos fixos da interface ficam em `ui`; o conteúdo pessoal fica em src/data/ e src/content/.

export const languages = { pt: 'Português', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'pt';

export const htmlLang: Record<Lang, string> = { pt: 'pt-BR', en: 'en' };
export const ogLocale: Record<Lang, string> = { pt: 'pt_BR', en: 'en_US' };

/** Texto traduzível: uma string única (igual nos dois idiomas) ou uma versão por idioma. */
export type Text = string | Record<Lang, string>;

export function tr(text: Text, lang: Lang): string {
  return typeof text === 'string' ? text : text[lang];
}

export function getLang(locale: string | undefined): Lang {
  return locale && locale in languages ? (locale as Lang) : defaultLang;
}

/** Endereço de cada página em cada idioma. */
export const routes = {
  home: { pt: '/', en: '/en/' },
  resume: { pt: '/curriculo/', en: '/en/resume/' },
} as const satisfies Record<string, Record<Lang, string>>;

/** Versões da página atual em cada idioma, ou `undefined` se ela não tiver tradução (ex.: 404). */
export function getAlternates(pathname: string): Record<Lang, string> | undefined {
  const path = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return Object.values(routes).find((route) => Object.values<string>(route).includes(path));
}

export const ui = {
  pt: {
    sections: {
      about: { id: 'sobre', label: 'Sobre' },
      projects: { id: 'projetos', label: 'Projetos' },
      career: { id: 'carreira', label: 'Carreira' },
      skills: { id: 'skills', label: 'Skills' },
      certificates: { id: 'certificados', label: 'Certificados' },
      contact: { id: 'contato', label: 'Contato' },
    },
    nav: { label: 'Principal', resume: 'Currículo' },
    switcher: { label: 'Read in English', short: 'EN' },
    theme: { label: 'Alternar modo escuro', title: 'Alternar tema' },
    site: {
      title: (name: string) => `${name} · Portfólio`,
      description:
        'Portfólio de Luan Kairo: desenvolvimento de software, análise de dados e suporte técnico. Projetos, experiência e contato.',
    },
    about: {
      greeting: 'Olá, eu sou',
      contactMe: 'Fale comigo',
      resume: 'Currículo',
      photoAlt: (name: string) => `Foto de ${name}`,
      initialsLabel: (name: string) => `Iniciais de ${name}`,
    },
    projects: {
      title: 'Projetos',
      viewCertificate: 'Ver certificado (PDF)',
      technologies: 'Tecnologias',
      demo: 'Ver online',
      code: 'Código',
    },
    career: { title: 'Carreira', education: 'Formação', languages: 'Idiomas', present: 'atual' },
    skills: { title: 'Skills' },
    certifications: {
      title: 'Prêmios e certificados',
      viewPdf: 'Ver certificado (PDF)',
      view: 'Ver certificado',
    },
    contact: {
      title: 'Contato',
      lead: 'Estou aberto a oportunidades em desenvolvimento de software e análise de dados. Vamos conversar?',
      email: 'E-mail',
      resume: 'Ver / baixar currículo',
    },
    footer: 'Feito com Astro e publicado no GitHub Pages.',
    resume: {
      title: (name: string) => `Currículo · ${name}`,
      description: (name: string, headline: string) => `Currículo de ${name}: ${headline}.`,
      hint: 'Gerado a partir dos dados do site. Use “Salvar como PDF” na janela de impressão.',
      print: 'Imprimir / Salvar PDF',
      summary: 'Resumo',
      experience: 'Experiência profissional',
      education: 'Formação',
      projects: 'Projetos',
      awards: 'Prêmios',
      certificates: 'Certificados',
      skills: 'Habilidades',
      languages: 'Idiomas',
      viewPdf: 'Ver certificado (PDF)',
    },
  },
  en: {
    sections: {
      about: { id: 'about', label: 'About' },
      projects: { id: 'projects', label: 'Projects' },
      career: { id: 'career', label: 'Career' },
      skills: { id: 'skills', label: 'Skills' },
      certificates: { id: 'certificates', label: 'Certificates' },
      contact: { id: 'contact', label: 'Contact' },
    },
    nav: { label: 'Main', resume: 'Resume' },
    switcher: { label: 'Ler em português', short: 'PT' },
    theme: { label: 'Toggle dark mode', title: 'Toggle theme' },
    site: {
      title: (name: string) => `${name} · Portfolio`,
      description:
        "Luan Kairo's portfolio: software development, data analysis and technical support. Projects, experience and contact.",
    },
    about: {
      greeting: "Hi, I'm",
      contactMe: 'Get in touch',
      resume: 'Resume',
      photoAlt: (name: string) => `Photo of ${name}`,
      initialsLabel: (name: string) => `${name}'s initials`,
    },
    projects: {
      title: 'Projects',
      viewCertificate: 'View certificate (PDF)',
      technologies: 'Technologies',
      demo: 'Live demo',
      code: 'Code',
    },
    career: { title: 'Career', education: 'Education', languages: 'Languages', present: 'present' },
    skills: { title: 'Skills' },
    certifications: {
      title: 'Awards and certificates',
      viewPdf: 'View certificate (PDF)',
      view: 'View certificate',
    },
    contact: {
      title: 'Contact',
      lead: "I'm open to opportunities in software development and data analysis. Let's talk!",
      email: 'Email',
      resume: 'View / download resume',
    },
    footer: 'Built with Astro and published on GitHub Pages.',
    resume: {
      title: (name: string) => `Resume · ${name}`,
      description: (name: string, headline: string) => `Resume of ${name}: ${headline}.`,
      hint: 'Generated from the site data. Use “Save as PDF” in the print dialog.',
      print: 'Print / Save PDF',
      summary: 'Summary',
      experience: 'Work experience',
      education: 'Education',
      projects: 'Projects',
      awards: 'Awards',
      certificates: 'Certificates',
      skills: 'Skills',
      languages: 'Languages',
      viewPdf: 'View certificate (PDF)',
    },
  },
} as const;

export function useTranslations(lang: Lang) {
  return ui[lang];
}
