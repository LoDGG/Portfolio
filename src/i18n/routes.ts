import type { Locale } from '../config/site';
import { defaultLocale } from './ui';

const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

// Paths passed here are site-relative; Astro supplies the deployment prefix.
export function withBase(path = '/') {
	const sitePath = path.startsWith('/') ? path : `/${path}`;
	return `${base}${sitePath}`;
}

export function isLocale(value: string | undefined): value is Locale {
	return value === 'en' || value === 'fr';
}

export function getLocaleFromPath(pathname: string): Locale {
	const sitePath = base && pathname.startsWith(`${base}/`) ? pathname.slice(base.length) : pathname;
	const [, maybeLocale] = sitePath.split('/');
	return isLocale(maybeLocale) ? maybeLocale : defaultLocale;
}

export function localizedPath(locale: Locale, path = '') {
	const normalizedPath = path.startsWith('/') ? path : `/${path}`;
	return withBase(`/${locale}${normalizedPath === '/' ? '/' : normalizedPath}`);
}

export function projectPath(locale: Locale, slug: string) {
	return localizedPath(locale, `/projects/${slug}/`);
}
