# AI & Software Engineering Portfolio

Production-oriented bilingual portfolio built with Astro, strict TypeScript, Markdown content collections, and static output.

The site is intended for direct professional sharing, not broad search acquisition. It is configured with `noindex, nofollow` and a restrictive `robots.txt`. This reduces discoverability, but it is not access control. Do not publish confidential material here.

## Architecture

```text
src/
  components/        Reusable Astro UI components
  config/            Centralized site and public identity configuration
  content/           Typed Markdown content collections
  i18n/              Locale labels and route helpers
  layouts/           Shared page and project layouts
  lib/               Content querying helpers
  pages/             Astro routes
```

Key files:

- `src/config/site.ts` stores public identity placeholders, locale settings, and privacy defaults.
- `src/content.config.ts` defines the typed `projects` collection.
- `src/i18n/ui.ts` stores shared English and French UI strings.
- `src/i18n/routes.ts` stores localized path helpers.
- `src/layouts/ProjectLayout.astro` is the reusable foundation for case-study pages.

## Local Development

Install dependencies:

```sh
npm install
```

Start Astro in background mode:

```sh
npm run dev -- --background
```

Manage the background server with:

```sh
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

## Checks and Build

```sh
npm run check
npm run build
```

`npm run build` creates static output in `dist/`.

## Bilingual Routing

The project uses explicit locale-prefixed routes:

- `/`
- `/en/`
- `/fr/`
- `/en/projects/`
- `/fr/projects/`

The root `/` renders the English homepage and is the canonical default entry for direct sharing. `/en/` is kept as the explicit English locale route, and `/fr/` is the explicit French route. There is no client-side language detection.

UI labels live in `src/i18n/ui.ts`; authored case-study content should be written separately in English and French rather than machine-translated at runtime.

Project translations are related by `translationKey`. On project pages, the language switcher links to the equivalent project when a matching entry exists in the target language. If the translation is missing, the target language link goes to that locale's project index and is visibly marked as unavailable. The site must not silently show the wrong language as though it were a translation.

## Adding a New Project

1. Create one Markdown file under `src/content/projects/en/`.
2. Add a matching French file under `src/content/projects/fr/` when the translation is ready.
3. Use the same `translationKey` in both files so the logical project identity stays explicit.
4. Fill only factual metadata. Leave optional fields out when they do not apply.
5. Write the case-study body in Markdown.
6. Add project assets under `public/` or a future project asset directory.
7. Run `npm run check` and `npm run build`.

Minimum frontmatter shape:

```yaml
---
title: "Project title"
slug: "project-slug"
translationKey: "stable-project-id"
locale: "en"
summary: "Short factual summary."
date: 2026-01-01
featured: true
order: 1
status: "draft"
projectType:
  - "AI"
tags:
  - "RAG"
context: "professional"
role:
  - "Engineering"
stack:
  - "Astro"
confidential: true
anonymized: true
confidentialityNote: "Identifying details omitted."
---
```

Optional fields include `metrics`, `repository`, `demo`, `externalLinks`, `heroImage`, `gallery`, `architectureDiagram`, `company`, and `customer`. Set `spotlight: true` on one featured project per language for the prominent homepage card. `storySummary` accepts localized `challenge`, `solution`, and either `impact` or `outcome` text; the final heading follows that choice. `architectureFlow` accepts an ordered list of localized steps rendered as a responsive HTML flow. For a custom image, set `architectureDiagram` to a local asset path and provide `architectureDiagramAlt`; `architectureDiagramCaption` is optional. Keep a textual description of the flow in the case-study body so the architecture remains understandable without visual presentation.

Projects without measured KPIs can omit `metrics` entirely. Use an optional, localized `evidenceSummary` for a short factual differentiator on the card, such as execution bounds or test evidence. Design constraints are not impact metrics. The Agent/MCP entries demonstrate this approach; the RAG entries demonstrate measured pilot impact. Publication `status` describes the case-study content, not production readiness of the underlying project; explain that scope in the body. Omit unknown dates and unapproved repository links.

Ordering and featured behavior:

- `order` controls deterministic listing order within each locale. If two entries share the same order, newer `date` values sort first, then `title`.
- `featured: true` includes the project in homepage Selected Work for that locale.
- Project indexes render all entries for their locale.
- Components should query the collection; do not hard-code project identities in UI code.

## Translating a Case Study

Translations are independent authored Markdown files. Keep the same `translationKey`, set the correct `locale`, and use a locale-appropriate `slug`. If a translation is not ready, do not fabricate it; leave it out until it can be reviewed. Until then, the project page language switcher falls back to the target locale's project index and marks the project translation as unavailable.

## Case Study Structure

Project pages are designed for long-form technical case studies. Use only the sections that have validated content; never add empty headings. Recommended section order:

1. Overview
2. Challenge
3. Role / contribution
4. Solution
5. Architecture
6. Engineering / implementation
7. Deployment
8. Testing / validation
9. Security
10. Observability
11. Results / impact
12. Technologies
13. Evidence / links

Reusable foundations live in `src/components/CaseStudySection.astro`, `src/components/MetricList.astro`, and `src/components/EvidenceLinks.astro`. Markdown headings are also styled by `ProjectLayout.astro`, so case studies can begin as plain Markdown and move to componentized sections later if MDX is introduced.

## Project Assets

Use local assets. Keep diagrams portable and versioned where possible. Do not include screenshots or diagrams that reveal confidential customer, employer, partner, infrastructure, or personal information.

## Optional Repository Links

When a public repository is approved, add it with:

```yaml
repository: "https://github.com/example/project"
```

The portfolio content remains the source of truth. GitHub metadata is not fetched at runtime.

## Static Deployment

The site should deploy as static files to any ordinary static host, including nginx, GitHub Pages, Cloudflare Pages, Vercel, Netlify, or similar providers. No hosting provider has been selected yet.
