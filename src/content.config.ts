import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts — markdown files at content/blog/*.md, edited via Scribe's
// admin ("posts" collection in .scribe.yml).
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

// Service packages — markdown files at content/packages/*.md.
const packages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/packages' }),
  schema: z.object({
    title: z.string(),
    monthlyPrice: z.number(),
    isActive: z.boolean().optional().default(true),
    displayOrder: z.number().optional().default(0),
  }),
});

// Inquiries — YAML files at content/inquiries/*.yml, written by Scribe's
// public submissions endpoint.
const inquiries = defineCollection({
  loader: glob({ pattern: '**/*.{yml,yaml}', base: './content/inquiries' }),
  schema: z.object({
    name: z.string(),
    email: z.string(),
    phone: z.string().optional(),
    serviceAddress: z.string().optional(),
    packageInterest: z.string().optional(),
    message: z.string().optional(),
    status: z.enum(['new', 'contacted', 'closed']).optional(),
    createdAt: z.string().optional(),
  }),
});

export const collections = { posts, packages, inquiries };
