# Repository instructions

## Architecture

This is a dependency-free ES-module static generator. `scripts/build.mjs` renders the site into ignored `dist/`; Vercel serves that directory. Do not add a client framework, server, database, authentication, CMS, analytics, or global state without direct product evidence.

## Sources of truth

- Personal and navigation content: `src/content/site.mjs`
- All nine project records: `src/content/projects.mjs`
- Page composition: `src/templates/pages.mjs`
- Shared metadata and layout: `src/templates/layout.mjs`
- Styles and progressive enhancement: `src/static/assets/site.css` and `src/static/assets/site.js`
- Deployment behavior and headers: `vercel.json`

Never invent employment, education status, users, outcomes, metrics, clients, testimonials, production status, or demo availability. Keep unsupported fields empty or use neutral source-backed wording.

## Commands and gates

Use Node.js 24.

- `npm ci --ignore-scripts`
- `npm test`
- `npm run build`
- `npm run verify`
- `npm run dev`

Before committing, require `npm run verify` and `git diff --check`. Keep client JavaScript below 20 KB, CSS below 60 KB, and generated static output below 2 MiB unless a documented asset justifies an exception.

## Content boundaries

Do not publish a resume until the owner supplies a current, privacy-reviewed PDF. Confirm time-sensitive title, education, contact, profile, and demo claims with the owner. Preserve source links when demos are unavailable.

## Files never committed

Do not commit `.vercel/`, `node_modules/`, `dist/`, `build/`, `.env` files other than `.env.example`, ZIP archives, credentials, generated logs, temporary files, or nested `.git/` data.

## Vercel

Deploy the source project with framework preset Other, build command `npm run build`, output directory `dist`, and Node.js 24.x. Reuse the existing project linked to `princeinoba/portfolio-v2`; never create a duplicate. Set `SITE_URL` only for an approved owned custom domain.
