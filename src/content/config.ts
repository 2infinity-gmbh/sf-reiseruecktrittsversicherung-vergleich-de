import { defineCollection, z } from 'astro:content';

const artikelCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().default('Redaktion'),
    category: z.string().default('Ratgeber'),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
  }),
});

export const collections = {
  'artikel': artikelCollection,
};
