# Prince Inoba — Vercel-ready portfolio

A modernized, statically generated portfolio rebuilt from the uploaded `portfolio-v2` archive. The project keeps the source-backed Portfolio, About, and Contact content while correcting data collisions, improving the professional journey, reducing the delivery footprint, and adding deterministic Vercel deployment controls.

![Modernized portfolio homepage](docs/verification-screenshots/home-desktop.png)

## What changed

- Real document routes instead of hash routing.
- Seventeen reachable project pages, including sixteen repository-verified current releases and a separate evidence-bounded Teoyube concept route.
- Explicit featured projects rather than export-order selection.
- Responsive WebP screenshots captured from verified live interfaces, with `srcset`, dimensions, useful alternative text, and lazy loading.
- Search, category filters, result count, reset, and empty state.
- Responsive active navigation, light/dark theme, and `Ctrl/Cmd + K` quick navigation.
- Corrected phone link and progressively enhanced Formspree contact form.
- Unique page metadata, social preview, manifest, robots, optional sitemap, and security policy.
- Vercel redirects for historical routes and migration support for old `#/...` links.
- No client framework, runtime server, database, or external package dependency.
- Automated content, route, asset, metadata, security, and output-budget verification.

## Local commands

The project requires Node.js 24 for production parity. It also builds in the audit runtime under Node.js 22.

```bash
npm ci --ignore-scripts
npm run verify
npm run dev
```

The preview server starts at `http://127.0.0.1:4173` unless `PORT` is set.

### Scripts

| Command | Purpose |
|---|---|
| `npm test` | Validate content identity, unique routes, images, contact data, templates, and Vercel configuration. |
| `npm run build` | Generate the complete static site in `dist/`. |
| `npm run verify` | Run tests, build, and production-output verification. |
| `npm run dev` | Build and start the dependency-free preview server. |

## Deploy to Vercel

`vercel.json` already defines the build command, output directory, redirects, cache policy, and security headers.

### Recommended: Git integration

1. Put the contents of this folder at the root of a GitHub repository.
2. Import that repository into Vercel.
3. Keep the settings from `vercel.json`:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Framework preset: Other / no framework
4. Deploy. No secret or database is required.
5. Optionally add `SITE_URL=https://your-domain.example` for a custom canonical domain. When Vercel system variables are available, the build can use the production deployment URL automatically.

### CLI

From this project root, after authenticating the Vercel CLI:

```bash
npm run verify
vercel
vercel --prod
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for the production checklist.

## Update portfolio content

- Personal information and navigation: `src/content/site.mjs`
- Project records: `src/content/projects.mjs`
- Page composition: `src/templates/pages.mjs`
- Shared layout and metadata: `src/templates/layout.mjs`
- Design system: `src/static/assets/site.css`
- Progressive enhancement: `src/static/assets/site.js`
- Project images: `src/static/assets/images/`
- Resume: intentionally not published until a current, privacy-reviewed PDF is supplied.

Run `npm run verify` after every content or route change.

## Important owner review

The uploaded 2022 resume is intentionally not published. Sixteen project demos were verified live on July 30, 2026; the unavailable Teoyube concept demo remains unlinked. Review [docs/content-review.md](docs/content-review.md) before future content updates.

## Audit and evidence

- [Complete product and code audit](docs/audit-report.md)
- [Owner content review](docs/content-review.md)
- [Verification report](docs/verification-report.md)
- [Rendered verification captures](docs/verification-screenshots/)

## Source integrity

Uploaded archive SHA-256:

```text
7d16e0188619ebbab2f327dae8f8ea0d37ae9595942ed22cab7ca1943a340e1b
```
