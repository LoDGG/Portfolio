export const site = {
	name: 'Portfolio',
	title: 'Portfolio',
	description: 'Bilingual portfolio for selected software and product engineering work.',
	defaultLocale: 'en',
	locales: ['en', 'fr'],
	author: {
		displayName: 'Public display name pending',
		contactLabel: 'Contact details pending',
	},
	privacy: {
		robots: 'noindex, nofollow',
		referrer: 'no-referrer',
	},
} as const;

export type Locale = (typeof site.locales)[number];
