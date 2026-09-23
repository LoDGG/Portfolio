You are building a production-quality personal portfolio for an AI & Software Engineer.

This website is a professional technical portfolio and case-study platform.

It is NOT:
- a decorative developer portfolio,
- a personal branding / influencer website,
- an SEO acquisition website,
- a freelance-only landing page,
- a GitHub repository browser.

Its purpose is to let people who already know the engineer, receive the URL,
or encounter it through a direct professional interaction quickly understand:

- what he can build,
- what kinds of technical problems he solves,
- how he works,
- what projects he has delivered,
- what engineering depth he has.

The website must work equally well when shared with:

- a freelance prospect,
- a recruiter,
- a technical manager,
- a partner,
- a former colleague,
- someone met through professional networking.

==================================================
CORE PRINCIPLES
==================================================

1. Evidence before biography.

2. Projects must be presented as case studies:
   Problem → Role → Engineering → Outcome.

3. The portfolio must support projects with and without public code.

4. GitHub is optional supporting evidence, not the portfolio database.

5. Professional projects may be anonymized.

6. Do not expose confidential customer or employer information merely to make
   a case study look more credible.

7. The entire website must remain owned, portable and platform-independent.

8. Adding future projects must be simple and must not require modifying
   application code.

9. The site must remain technically serious but simple.

10. Development must be iterative.
    Do NOT try to implement every planned feature in a single pass.

==================================================
PROJECT MANAGEMENT / TODO POLICY
==================================================

Create and maintain a root-level file:

TODO.md

Its purpose is to prevent decisions and future improvements from being lost
between implementation iterations.

TODO.md should contain these sections:

# Current
Tasks explicitly selected for the current implementation iteration.

# Next
Validated tasks that should be implemented soon but are not part of the
current iteration.

# Later
Validated ideas that are useful but intentionally postponed.

# Open Questions
Questions that still require a decision from the user.

# Done
Important completed milestones, kept concise.

Rules:

- When the user explicitly validates a feature or architectural decision,
  update TODO.md accordingly.

- Validation does NOT mean everything must immediately be implemented.

- Never automatically implement the entire TODO backlog.

- Work in the smallest coherent batch.

- At the start of each substantial iteration:
  1. read TODO.md,
  2. identify the current batch,
  3. implement only that batch unless dependencies require otherwise.

- At the end of each iteration:
  1. update TODO.md,
  2. move completed tasks to Done,
  3. preserve postponed tasks,
  4. record newly discovered open questions,
  5. summarize what changed.

- Do not silently remove or reinterpret a previously validated requirement.

- If a new user decision supersedes an older one, update TODO.md explicitly.

Keep TODO.md useful and concise.
Do not turn it into a detailed development diary.

==================================================
VALIDATED PRODUCT DECISIONS
==================================================

The following decisions are already validated and must be reflected in TODO.md.

LANGUAGES

The website must support:

- English
- French

Internationalization should be introduced relatively early in the project,
not bolted onto a finished website.

English and French versions should share the same data/content architecture.

Do not duplicate layout code between languages.

Preferred URL structure:

/
or /en/

/fr/

Choose a clean convention and document it.

The system must make adding or updating translations straightforward.

Do not rely on automatic runtime machine translation.

Actual portfolio copy should be explicitly authored in both languages.

If a translation is unavailable during development:
- use a clear TODO,
- do not silently fabricate it.

--------------------------------------------------
PUBLIC IDENTITY / DISCOVERABILITY
--------------------------------------------------

The website is NOT currently intended for broad public discoverability.

The goal is:

"People who already know me or receive the URL should understand what I do,
rather than strangers discovering a detailed personal profile through search."

Therefore:

- do not optimize for search-engine acquisition,
- do not add SEO-growth features,
- do not publish unnecessary personal identifiers,
- do not expose unnecessary personal details.

Use a centralized configuration file for public identity information.

For example:

src/config/site.ts

It should allow configuration of:

publicName
headline
email
linkedin
github
location
resume URL
other public links

Do not hard-code personal identifiers throughout components.

Until exact public identity details are validated, use conservative
placeholders / TODOs instead of inventing information.

Do not expose:
- home address,
- private phone number,
- birth date,
- unnecessary location precision,
- private identifiers.

The site may use a reduced public identity such as a first name + initial
if configured later.

DISCOVERABILITY:

For the current version, configure the site as deliberately non-indexable.

Use appropriate mechanisms such as:

<meta name="robots" content="noindex, nofollow">

and a restrictive robots.txt.

Do not add Person structured data intended to improve search visibility.

Do not add SEO-oriented structured data unless this requirement changes later.

Do not build a sitemap specifically for search acquisition.

If the framework automatically creates one, either disable it or ensure the
site remains explicitly noindex.

Document clearly:

"noindex reduces discoverability; it is not an access-control mechanism."

Never put confidential information on the site on the assumption that
noindex makes it private.

A future TODO may allow public indexing if the user explicitly validates it.

--------------------------------------------------
CONFIDENTIALITY
--------------------------------------------------

Professional case studies must support anonymization.

The portfolio may describe:

- technical problem,
- system architecture,
- engineering work,
- technologies,
- scale,
- non-sensitive metrics,
- outcomes,

without necessarily identifying:

- customer,
- employer,
- partner,
- internal project name,
- confidential infrastructure details.

The content model must support fields such as:

context: professional | personal | academic | open-source

confidential: boolean

anonymized: boolean

confidentialityNote: optional string

company: optional

customer: optional

Never require company/customer names.

When confidential or anonymized:
- do not render missing names,
- do not replace them with invented names,
- use neutral contextual wording.

Examples:

"Enterprise technical support environment"

"Private enterprise AI pilot"

"Internal infrastructure monitoring project"

instead of exposing organizations unnecessarily.

--------------------------------------------------
INITIAL SCOPE
--------------------------------------------------

Start with exactly 3 developed case studies:

1. Enterprise RAG / LLM Support Assistant

2. AI Agent & MCP Automation

3. Infrastructure Monitoring / Data Pipeline

The architecture must already support more projects,
but do not create superficial placeholder projects merely to fill the site.

A fourth or fifth project can be added later using the same content model.

==================================================
TECHNOLOGY
==================================================

Use:

- Astro, current stable version
- TypeScript with strict configuration
- Astro Content Collections
- Markdown or MDX for project case studies
- local assets
- semantic HTML
- maintainable vanilla CSS or component-scoped CSS

Do not add unless technically justified:

- React
- Vue
- database
- external CMS
- Tailwind
- Bootstrap
- jQuery
- large UI component libraries
- unnecessary client-side JavaScript

The generated website must be statically deployable.

The site must not depend on a particular hosting provider.

It should work on:

- nginx / ordinary static hosting
- GitHub Pages
- Cloudflare Pages
- Vercel
- Netlify
- another static web host

Hosting-specific functionality must not be required for the core website.

==================================================
CONTENT ARCHITECTURE
==================================================

Create a typed Astro Content Collection for projects.

Each project must exist as an independent Markdown/MDX content entry.

The project listings must be generated automatically.

Do not hard-code individual projects into homepage components.

Provide a reusable project template or documented example for creating a new
project.

Adding a future project should require approximately:

1. create/copy a project content file,
2. fill its metadata,
3. write its case-study content,
4. add optional assets,
5. commit.

No application component should need to be edited.

==================================================
PROJECT DATA MODEL
==================================================

The schema must support at least:

title
slug

summary

date
featured
order

projectType[]
tags[]

context:
- professional
- personal
- academic
- open-source

status

role[]

stack[]

metrics[]:
  value
  label
  optional note

repository:
  optional URL

demo:
  optional URL

externalLinks[]:
  optional

heroImage:
  optional

gallery[]:
  optional

architectureDiagram:
  optional

confidential:
  boolean

anonymized:
  boolean

confidentialityNote:
  optional

company:
  optional

customer:
  optional

Every non-essential field must actually be optional.

Never render an empty heading or empty section.

==================================================
BILINGUAL CONTENT MODEL
==================================================

Internationalization must be architecturally clean.

The project content system must support both English and French.

Choose one maintainable approach, for example:

Option A:
src/content/projects/en/...
src/content/projects/fr/...

or another well-supported Astro approach.

The relationship between translations must remain explicit.

A translated project should preserve the same logical identity / slug mapping.

Do not create two disconnected content systems.

Navigation, metadata, labels, buttons and common UI strings must also support
FR/EN.

Provide an obvious language switch.

The language switch must preserve the equivalent page when a translation exists.

Example:

/en/projects/rag-assistant
↕
/fr/projects/rag-assistant

If the equivalent translation does not yet exist:
use a safe fallback behavior and document it.

Do not implement automatic translation.

==================================================
SUPPORTED PROJECT TYPES
==================================================

The architecture must support heterogeneous engineering work including:

- software engineering
- Python applications
- AI / ML
- LLM applications
- RAG
- AI agents
- MCP integrations
- workflow automation
- APIs and integrations
- data pipelines
- observability
- infrastructure
- deployments
- GPU / private AI
- cloud
- cybersecurity
- computer vision
- architecture
- consulting
- open-source
- academic engineering work

Never assume that every project has:

- a public repository,
- a live demo,
- business KPIs,
- screenshots,
- production deployment.

A technically strong case study must remain possible without any of these.

==================================================
GITHUB INTEGRATION
==================================================

GitHub is one possible evidence source.

It is not the source of truth for portfolio content.

When a public repository exists:

allow:

repository: "https://github.com/..."

Render a clear action such as:

"View source"

For software projects, README quality matters and may later be improved
separately.

Do NOT in V1 implement:

- live star counts,
- contribution graphs,
- commit statistics,
- dynamic language charts,
- runtime GitHub API dependencies.

The website must work perfectly when GitHub is unavailable.

The architecture may leave room for a future build-time GitHub synchronization
script.

Example future architecture:

GitHub API
   ↓
build-time script
   ↓
local cache
   ↓
Astro build

Record this as a possible Later TODO.
Do not implement it yet unless explicitly validated.

==================================================
INFORMATION ARCHITECTURE
==================================================

Homepage order:

1. Header / navigation
2. Hero
3. Selected work
4. Capabilities / problems solved
5. Short professional background
6. Technical ecosystem
7. Contact

Projects must appear before a long biography or exhaustive technology list.

The visitor should quickly understand:

Who is this?
What does he build?
What evidence exists?
What kind of project could I contact him about?

==================================================
HERO
==================================================

Use a neutral professional positioning.

Example direction:

AI & Software Engineer

"I design and build AI-enabled software, RAG systems,
AI agents and enterprise automation."

Do not make the homepage exclusively freelance-oriented.

Avoid:

- Hire me
- Book a call
- Packages
- Pricing
- Daily rate
- Freelance services

Prefer:

- View selected work
- Projects
- Resume
- Contact

The website must remain credible when linked from a job application.

==================================================
SELECTED WORK
==================================================

Homepage should initially expose the 3 case studies.

Each project card should make clear within seconds:

- project name,
- problem/outcome,
- project context/type,
- strongest useful evidence,
- 3–6 important technologies,
- link to full case study.

Do not fill cards with technology badges.

If metrics are meaningful, one or two may appear prominently.

Provide an All Projects architecture/page even if the initial dataset only
contains three projects.

Do not implement filters yet.

Record filtering/tag browsing as a Later TODO once enough projects exist.

==================================================
CASE STUDY STRUCTURE
==================================================

Create one reusable project layout.

Content should be able to express sections such as:

Overview

Challenge

Role

Solution

Architecture

Engineering / Implementation

Integration

Deployment

Testing / Validation

Security

Observability

Results / Impact

Technologies

Evidence / Links

Screenshots / Diagrams

These are capabilities, not mandatory fields.

Never render empty sections.

The editorial hierarchy should prioritize:

Problem
→ personal contribution
→ engineering decisions
→ implementation
→ outcome

Technology lists are supporting evidence, not the story.

==================================================
INITIAL THREE CASE STUDIES
==================================================

Create content structure for:

------------------------------------
1. Enterprise RAG / LLM Support Assistant
------------------------------------

Professional / anonymized case study.

Focus on:

- private enterprise AI,
- internal knowledge retrieval,
- RAG architecture,
- document ingestion,
- embeddings,
- vector retrieval,
- LLM deployment,
- testing,
- technical adoption,
- measurable pilot outcomes.

Do not identify customer/company unless later explicitly approved.

Do not invent implementation details.

Use TODO markers for missing factual details.

------------------------------------
2. AI Agent & MCP Automation
------------------------------------

Focus on:

- Python agent architecture,
- explicit bounded agent loop,
- MCP,
- tool usage,
- provider abstraction,
- schema validation,
- tests,
- safe/controlled execution,
- automation use case.

Public GitHub repository support should be available if/when a repository is
approved for publication.

Do not assume it is public yet.

------------------------------------
3. Infrastructure Monitoring / Data Pipeline
------------------------------------

Focus on:

- infrastructure data collection,
- APIs,
- automation,
- data processing,
- PostgreSQL,
- Grafana / Prometheus,
- monitoring,
- operational visibility.

Professional context may be anonymized.

==================================================
DESIGN DIRECTION
==================================================

The visual direction is:

serious engineering portfolio
+
high-quality technical documentation
+
modern product case studies.

Prioritize:

- readability
- whitespace
- strong typography
- information hierarchy
- technical diagrams
- project evidence
- restrained visual design

Avoid stereotypical developer-portfolio aesthetics.

Do NOT use:

- neon gradients everywhere
- matrix backgrounds
- AI brains
- floating particles
- excessive glassmorphism
- typing animations
- fake terminals
- percentage skill bars
- huge technology clouds
- decorative 3D
- excessive scroll animations

Animations must be optional, subtle and non-essential.

Use a coherent CSS design system with custom properties for:

- spacing
- typography
- content widths
- surfaces
- text hierarchy
- borders
- radius
- responsive breakpoints

Light mode should be the default.

Dark mode is optional and should be placed in TODO Later unless explicitly
requested.

==================================================
DIAGRAMS / TECHNICAL VISUALS
==================================================

Project pages must support architecture diagrams.

Prefer portable formats:

- SVG
- local image files
- Mermaid only if the chosen implementation remains lightweight and readable

Do not make diagrams dependent on proprietary tools.

A diagram source should ideally be version-controlled when practical.

Images and diagrams must remain readable on mobile.

==================================================
RESPONSIVE DESIGN
==================================================

The site must work well on:

- mobile,
- tablet,
- laptop,
- wide desktop.

Do not simply shrink desktop cards.

Long technical content should use a readable text width.

Architecture diagrams must have a deliberate small-screen strategy.

==================================================
ACCESSIBILITY
==================================================

Use semantic HTML.

Implement:

- correct heading hierarchy,
- keyboard navigation,
- visible focus states,
- meaningful alt text,
- sufficient contrast,
- reduced-motion support,
- accessible navigation,
- accessible language switch,
- correct html lang attributes.

Do not treat accessibility as optional visual polish.

==================================================
PERFORMANCE
==================================================

Static rendering by default.

Minimize client-side JavaScript.

Optimize images.

Prevent layout shifts.

Lazy-load media when appropriate.

Avoid unnecessary third-party resources.

Do not include analytics in V1.

Do not include advertising or external tracking.

==================================================
METADATA / PRIVACY
==================================================

Even though broad SEO is disabled, pages still require technically correct
metadata for:

- browser titles,
- descriptions,
- link previews when directly shared.

Provide:

- title
- description
- OpenGraph title
- OpenGraph description
- optional OpenGraph image
- favicon

But explicitly configure:

robots = noindex, nofollow

Do not add discoverability-oriented Person structured data.

Social-sharing metadata must not expose personal information beyond what is
already visibly published on the page.

==================================================
ENGINEERING QUALITY
==================================================

The repository itself should demonstrate good engineering practices.

Requirements:

- clean structure,
- reusable components,
- strict TypeScript,
- typed content schema,
- no duplicated project layouts,
- no hard-coded project entries,
- minimal dependencies,
- consistent naming,
- no dead code,
- concise comments,
- readable CSS architecture.

Provide scripts for at least:

dev
build
check

==================================================
CONTINUOUS INTEGRATION
==================================================

Add a simple GitHub Actions workflow.

On relevant pushes / pull requests:

1. install dependencies,
2. run Astro / TypeScript checks,
3. build the production site.

Do not configure automatic production deployment until a hosting destination
has been explicitly selected.

Record hosting/deployment choice in TODO Open Questions or Next.

==================================================
DOCUMENTATION
==================================================

README.md must explain:

1. project purpose,
2. architecture,
3. local development,
4. build process,
5. bilingual architecture,
6. adding a new project,
7. adding / translating a case study,
8. adding project assets,
9. optional GitHub repository links,
10. static deployment,
11. privacy / noindex behavior.

Include a very clear section:

"Adding a new project"

It should be possible for another developer—or an AI coding agent—to follow
the documented workflow without inspecting the whole codebase.

==================================================
INITIAL TODO.md
==================================================

Create an initial TODO.md reflecting the following validated roadmap.

# Current

- Initialize Astro + strict TypeScript project.
- Establish maintainable project structure.
- Implement typed project Content Collection.
- Establish FR/EN internationalization architecture.
- Implement privacy-oriented site configuration.
- Implement noindex/nofollow behavior.
- Build base navigation and language switching.
- Build reusable project routing/layout.
- Create content structure for the initial 3 projects.
- Establish the core visual design system.
- Ensure production build/check passes.

# Next

- Write and refine full English copy for the 3 initial case studies.
- Write and refine French translations for the 3 initial case studies.
- Create architecture diagrams / visuals for the 3 projects.
- Refine homepage Selected Work.
- Add short professional background.
- Add capabilities section.
- Add downloadable resume if explicitly approved.
- Validate which public identity fields should be displayed.
- Review all professional content for anonymization/confidentiality.

# Later

- Build-time GitHub metadata synchronization if it provides real value.
- Project filters once enough projects exist.
- Dark mode if useful.
- Analytics only if explicitly requested and privacy-compatible.
- Public SEO/indexing only if the user deliberately changes strategy.
- Additional project case studies.
- Potential services/freelance-specific page if freelance activity requires it.

# Open Questions

- Exact public display name.
- Public email or contact mechanism.
- Whether LinkedIn should be exposed.
- Whether GitHub profile should be exposed globally or only on relevant projects.
- Whether a resume PDF should be publicly downloadable.
- Hosting/domain choice.
- Which project screenshots/diagrams can safely be made public.
- Exact anonymized wording for professional project context.

# Done

- Portfolio architecture direction validated.
- Astro + typed content + static-site direction validated.
- FR/EN requirement validated.
- Low-discoverability / no-SEO strategy validated.
- Professional-project anonymization strategy validated.
- Initial scope of 3 developed case studies validated.

==================================================
IMPLEMENTATION PHASES
==================================================

Do not attempt to complete the entire roadmap immediately.

Work approximately in these phases.

PHASE 1 — FOUNDATION

- Astro project
- TypeScript
- folder architecture
- Content Collection schema
- FR/EN routing architecture
- site configuration
- noindex/privacy behavior
- initial TODO.md
- README skeleton

Stop and review architecture before excessive styling.

PHASE 2 — PROJECT SYSTEM

- project listing
- project route generation
- ProjectLayout
- optional fields
- bilingual mapping
- anonymization support
- 3 initial content entries

Verify that a fourth project can be added without touching UI code.

PHASE 3 — PRESENTATION

- homepage
- selected work
- typography
- project cards
- case study design
- responsive behavior
- architecture diagram presentation

PHASE 4 — CONTENT

- accurate project copy
- FR/EN versions
- project metrics
- diagrams
- screenshots
- anonymization review

PHASE 5 — POLISH

- accessibility review
- mobile review
- metadata
- OpenGraph
- performance
- CI
- README completion
- final build/check

At every phase:
update TODO.md.

==================================================
IMPORTANT BEHAVIOR
==================================================

Never invent:

- project metrics,
- customers,
- employers,
- technologies,
- architecture details,
- user counts,
- deployment claims,
- business impact.

When information is missing:

use TODO markers.

Separate:

known factual information

from

content still requiring user validation.

Do not optimize for visual impressiveness at the cost of credibility.

The portfolio should make a technically competent visitor think:

"This person understands both implementation and real-world delivery."

==================================================
END-OF-ITERATION REPORT
==================================================

At the end of each implementation iteration, report only:

1. What was implemented.
2. Important architectural decisions made.
3. What was added/moved in TODO.md.
4. Any blocking question that actually needs user input.
5. The recommended next small implementation batch.

Do not propose rebuilding already validated architecture without a concrete
technical reason.