import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../config/site';
import { localizedPath, projectPath } from '../i18n/routes';

export type Project = CollectionEntry<'projects'>;
export type ProjectLanguageLink = {
	href: string;
	available: boolean;
};
export type ProjectLanguageLinks = Record<Locale, ProjectLanguageLink>;

export async function getProjects(locale: Locale) {
	const projects = await getCollection('projects', ({ data }) => data.locale === locale);
	return sortProjects(projects);
}

export async function getFeaturedProjects(locale: Locale) {
	const projects = await getCollection(
		'projects',
		({ data }) => data.locale === locale && data.featured,
	);
	return sortProjects(projects);
}

export async function getProjectBySlug(locale: Locale, slug: string) {
	const projects = await getProjects(locale);
	return projects.find((project) => project.data.slug === slug);
}

export async function getProjectTranslation(project: Project, locale: Locale) {
	const projects = await getCollection(
		'projects',
		({ data }) => data.locale === locale && data.translationKey === project.data.translationKey,
	);
	return projects[0];
}

export async function getProjectLanguageLinks(project: Project): Promise<ProjectLanguageLinks> {
	const [englishProject, frenchProject] = await Promise.all([
		getProjectTranslation(project, 'en'),
		getProjectTranslation(project, 'fr'),
	]);

	return {
		en: englishProject
			? { href: projectPath('en', englishProject.data.slug), available: true }
			: { href: localizedPath('en', '/projects/'), available: false },
		fr: frenchProject
			? { href: projectPath('fr', frenchProject.data.slug), available: true }
			: { href: localizedPath('fr', '/projects/'), available: false },
	};
}

function sortProjects(projects: Project[]) {
	return [...projects].sort((a, b) => {
		const orderDifference = a.data.order - b.data.order;
		if (orderDifference !== 0) return orderDifference;

		const dateDifference = (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0);
		if (dateDifference !== 0) return dateDifference;

		return a.data.title.localeCompare(b.data.title);
	});
}
