// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Site publicado na raiz: https://luan-k10.github.io (repositório "luan-k10.github.io").
// Se publicar em um repositório com outro nome (ex.: "portfolio"), adicione:
//   base: '/portfolio',
export default defineConfig({
  site: 'https://luan-k10.github.io',
  // Português na raiz (/), inglês em /en/. Rotas e textos ficam em src/i18n/index.ts.
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap()],
});
