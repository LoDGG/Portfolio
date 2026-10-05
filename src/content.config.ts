import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const optionalUrl = z.url().optional();
const storySummaryBase = z.object({ challenge: z.string(), solution: z.string() });

const projectSchema = z.object({
	title: z.string(),
	slug: z.string(),
	translationKey: z.string(),
	locale: z.enum(['en', 'fr']),
	summary: z.string(),
	date: z.coerce.date().optional(),
	featured: z.boolean().default(false),
	spotlight: z.boolean().default(false),
	storySummary: z.union([
		storySummaryBase.extend({ impact: z.string() }).strict(),
		storySummaryBase.extend({ outcome: z.string() }).strict(),
	]).optional(),
	evidenceSummary: z.string().optional(),
	architectureFlow: z.array(z.string()).optional(),
	order: z.number().int().positive(),
	status: z.enum(['draft', 'published']).default('draft'),
	projectType: z.array(z.string()).default([]),
	tags: z.array(z.string()).default([]),
	context: z.enum(['professional', 'personal', 'academic', 'open-source']),
	role: z.array(z.string()).default([]),
	stack: z.array(z.string()).default([]),
	metrics: z
		.array(
			z.object({
				value: z.string(),
				label: z.string(),
				note: z.string().optional(),
			}),
		)
		.default([]),
	repository: optionalUrl,
	demo: optionalUrl,
	externalLinks: z
		.array(
			z.object({
				label: z.string(),
				url: z.url(),
			}),
		)
		.default([]),
	heroImage: z.string().optional(),
	gallery: z.array(z.string()).default([]),
	architectureDiagram: z.string().optional(),
	architectureDiagramAlt: z.string().optional(),
	architectureDiagramCaption: z.string().optional(),
	confidential: z.boolean().default(false),
	anonymized: z.boolean().default(false),
	confidentialityNote: z.string().optional(),
	company: z.string().optional(),
	customer: z.string().optional(),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: projectSchema,
});

export const collections = { projects };
