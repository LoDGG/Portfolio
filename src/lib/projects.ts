import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../config/site';

export type Project = CollectionEntry<'projects'>;

export async function getProjects(locale: Locale) {
	const projects = await getCollection('projects', ({ data }) => data.locale === locale);
	return projects.sort((a, b) => a.data.order - b.data.order);
}

export async function getProjectBySlug(locale: Locale, slug: string) {
	const projects = await getProjects(locale);
	return projects.find((project) => project.data.slug === slug);
}
