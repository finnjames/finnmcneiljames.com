import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// every markdown file in src/content/posts is a post; its file name is its URL
const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // the one-line description shown in the posts list
    snippet: z.string(),
  }),
});

export const collections = { posts };
