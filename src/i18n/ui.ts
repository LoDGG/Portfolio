import type { Locale } from '../config/site';

export const languages: Record<Locale, string> = {
	en: 'English',
	fr: 'Francais',
};

export const defaultLocale: Locale = 'en';

export const ui = {
	en: {
		home: 'Home',
		projects: 'Projects',
		selectedWork: 'Selected work',
		viewProject: 'View project',
		language: 'Language',
		privacyNotice: 'This portfolio is configured for low discoverability while content is being prepared.',
		projectOverview: 'Project overview',
		role: 'Role',
		year: 'Year',
		stack: 'Stack',
		confidentiality: 'Confidentiality',
		backToProjects: 'Back to projects',
	},
	fr: {
		home: 'Accueil',
		projects: 'Projets',
		selectedWork: 'Selection de projets',
		viewProject: 'Voir le projet',
		language: 'Langue',
		privacyNotice: 'Ce portfolio est configure pour une faible visibilite pendant la preparation du contenu.',
		projectOverview: 'Apercu du projet',
		role: 'Role',
		year: 'Annee',
		stack: 'Technologies',
		confidentiality: 'Confidentialite',
		backToProjects: 'Retour aux projets',
	},
} as const;

export function useTranslations(locale: Locale) {
	return ui[locale];
}
