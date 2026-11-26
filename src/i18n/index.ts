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
      career: { id: 'carreira', label: 'Experiência' },
      projects: { id: 'projetos', label: 'Projetos' },
      skills: { id: 'skills', label: 'Competências' },
      certificates: { id: 'certificados', label: 'Certificações' },
      contact: { id: 'contato', label: 'Contato' },
    },
    nav: { label: 'Principal', resume: 'Currículo', home: 'Início' },
    switcher: { label: 'Read in English', short: 'EN' },
    theme: { label: 'Alternar modo escuro', title: 'Alternar tema' },
    site: {
      title: (name: string) => `${name} · Portfólio`,
      description:
        'Portfólio de Luan Kairo: desenvolvimento de software, análise de dados e suporte técnico. Projetos, experiência e contato.',
    },
    about: {
      eyebrow: 'Portfólio profissional',
      viewExperience: 'Ver experiência',
      resume: 'Baixar currículo (PDF)',
      profileLabel: 'Resumo do perfil',
      current: 'Atualmente',
      education: 'Formação',
      mainTech: 'Principais tecnologias',
      location: 'Localização',
      languages: 'Idiomas',
    },
    career: {
      eyebrow: 'Experiência',
      title: 'Trajetória profissional',
      lead: 'Da área comercial ao suporte corporativo e ao desenvolvimento de sistemas industriais.',
      present: 'atual',
    },
    projects: {
      eyebrow: 'Projetos',
      title: 'Projetos em destaque',
      lead: 'Projetos acadêmicos e pessoais, do levantamento do problema à publicação.',
      viewCertificate: 'Ver certificado (PDF)',
      technologies: 'Tecnologias',
      demo: 'Site publicado',
      code: 'Repositório',
    },
    skills: { eyebrow: 'Competências', title: 'Tecnologias e conhecimentos' },
    certifications: {
      eyebrow: 'Certificações',
      title: 'Prêmios e cursos',
      award: 'Prêmio',
      viewPdf: 'Ver certificado (PDF)',
      view: 'Ver certificado',
    },
    contact: {
      eyebrow: 'Fale comigo',
      title: 'Contato',
      lead: 'Estou aberto a oportunidades em desenvolvimento de software e análise de dados. Vamos conversar?',
      email: 'E-mail',
      location: 'Localização',
    },
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
      career: { id: 'career', label: 'Experience' },
      projects: { id: 'projects', label: 'Projects' },
      skills: { id: 'skills', label: 'Skills' },
      certificates: { id: 'certificates', label: 'Certifications' },
      contact: { id: 'contact', label: 'Contact' },
    },
    nav: { label: 'Main', resume: 'Resume', home: 'Home' },
    switcher: { label: 'Ler em português', short: 'PT' },
    theme: { label: 'Toggle dark mode', title: 'Toggle theme' },
    site: {
      title: (name: string) => `${name} · Portfolio`,
      description:
        "Luan Kairo's portfolio: software development, data analysis and technical support. Projects, experience and contact.",
    },
    about: {
      eyebrow: 'Professional portfolio',
      viewExperience: 'View experience',
      resume: 'Download resume (PDF)',
      profileLabel: 'Profile summary',
      current: 'Currently',
      education: 'Education',
      mainTech: 'Core technologies',
      location: 'Location',
      languages: 'Languages',
    },
    career: {
      eyebrow: 'Experience',
      title: 'Career path',
      lead: 'From sales to corporate support and industrial systems development.',
      present: 'present',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Featured projects',
      lead: 'Academic and personal projects, from scoping the problem to shipping.',
      viewCertificate: 'View certificate (PDF)',
      technologies: 'Technologies',
      demo: 'Live site',
      code: 'Repository',
    },
    skills: { eyebrow: 'Skills', title: 'Technologies and knowledge' },
    certifications: {
      eyebrow: 'Certifications',
      title: 'Awards and courses',
      award: 'Award',
      viewPdf: 'View certificate (PDF)',
      view: 'View certificate',
    },
    contact: {
      eyebrow: 'Get in touch',
      title: 'Contact',
      lead: "I'm open to opportunities in software development and data analysis. Let's talk!",
      email: 'Email',
      location: 'Location',
    },
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
