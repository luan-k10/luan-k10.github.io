// Projetos de src/content/projects/<idioma>/, ordenados pelo campo `order`.
import { getCollection } from 'astro:content';
import type { Lang } from '../i18n';

export async function getProjects(lang: Lang) {
  const projects = await getCollection('projects', ({ id }) => id.startsWith(`${lang}/`));
  return projects.sort((a, b) => a.data.order - b.data.order);
}
