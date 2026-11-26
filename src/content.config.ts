import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      stack: z.array(z.string()),
      repo: z.url().optional(),
      demo: z.url().optional(),
      context: z.string().optional(),
      status: z.string().optional(),
      award: z.string().optional(),
      awardUrl: z.string().optional(),
      /** Imagens do card: 1 (logo ou captura de tela) ou até 3 (galeria). */
      images: z.array(image()).max(3).optional(),
      /** `contain` centraliza a imagem inteira (logos); `cover` preenche o espaço (capturas de tela). */
      imageFit: z.enum(['contain', 'cover']).default('cover'),
      featured: z.boolean().default(false),
      order: z.number().default(100),
    }),
});

export const collections = { projects };
