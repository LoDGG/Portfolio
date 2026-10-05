import type { Locale } from '../config/site';
import { defaultLocale } from './ui';

export function isLocale(value: string | undefined): value is Locale {
	return value === 'en' || value === 'fr';
}

export function getLocaleFromPath(pathname: string): Locale {
	const [, maybeLocale] = pathname.split('/');
	return isLocale(maybeLocale) ? maybeLocale : defaultLocale;
}

export function localizedPath(locale: Locale, path = '') {
	const normalizedPath = path.startsWith('/') ? path : `/${path}`;
	return `/${locale}${normalizedPath === '/' ? '' : normalizedPath}`;
}

export function projectPath(locale: Locale, slug: string) {
	return localizedPath(locale, `/projects/${slug}/`);
}
