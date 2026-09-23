import { defineCollection, z } from 'astro:content';

const projectSchema = z.object({
	title: z.string(),
	summary: z.string(),
	locale: z.enum(['en', 'fr']),
	slug: z.string(),
	order: z.number().int().positive(),
	status: z.enum(['draft', 'published']).default('draft'),
	featured: z.boolean().default(false),
	year: z.string(),
	role: z.string(),
	stack: z.array(z.string()).default([]),
	confidentiality: z.string(),
});

const projects = defineCollection({
	type: 'content',
	schema: projectSchema,
});

export const collections = { projects };
