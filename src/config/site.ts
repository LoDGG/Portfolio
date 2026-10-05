export const site = {
	title: 'AI & Software Engineering Portfolio',
	description: 'Selected software, AI, automation, and infrastructure engineering work.',
	defaultLocale: 'en',
	locales: ['en', 'fr'],
	identity: {
		publicName: 'Name pending',
		headline: 'AI & Software Engineer',
		email: undefined,
		linkedin: undefined,
		github: undefined,
		location: undefined,
		resumeUrl: undefined,
		links: [],
	},
	privacy: {
		robots: 'noindex, nofollow',
		referrer: 'no-referrer',
	},
} as const;

export type Locale = (typeof site.locales)[number];
