import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    /** Short label shown on cards and at the top of the page. */
    status: z.string(),
    /** One sentence explaining how reliable the evidence is. */
    evidenceNote: z.string(),
    order: z.number(),
    tags: z.array(z.string()),
    /** Plain statement of what the author did and did not do. */
    contribution: z.array(
      z.object({
        label: z.string(),
        claimed: z.boolean(),
        detail: z.string(),
      }),
    ),
    published: z.boolean().default(true),
  }),
});

export const collections = { 'case-studies': caseStudies };
