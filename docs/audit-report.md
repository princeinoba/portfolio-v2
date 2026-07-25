# Portfolio v2 — Product, UX, Architecture, Code, and Vercel Audit

**Source archive:** `portfolio-v2(1).zip`
**Source SHA-256:** `7d16e0188619ebbab2f327dae8f8ea0d37ae9595942ed22cab7ca1943a340e1b`
**Audit role:** AI Staff Engineer, Product Architect, UX Researcher, Security/Performance Engineer, and Technical Lead
**Modernized output:** `portfolio-v2-vercel-ready`

## 1. Scope and method

This audit is based on the uploaded source, its committed production build, repository history, project data, styles, images, and rendered browser output. Recommendations are separated from observations, and no project outcome, user metric, employment claim, or feature was invented.

A fresh install of the legacy dependency graph could not be completed in the audit runtime because the package registry returned an infrastructure error. That limitation applies to reinstalling the old Create React App stack, not to the source inspection. The committed `build/` directory provided production-output evidence. The replacement has no external runtime or build dependencies and was built and tested successfully without registry access.

### Evidence inventory

| Area | Evidence from uploaded archive |
|---|---:|
| ZIP entries | 5,209 |
| Uncompressed archive size | 61,230,640 bytes |
| Files in extracted project | 5,135 |
| Files under `src/` | 5,042 files / 29,771,110 bytes |
| Vendored package files under `src/script/` | 4,969 files / 18,234,856 bytes |
| Project files under `src/projects/` | 39 files / 7,177,942 bytes |
| Committed production build | 54 files / 10,103,377 bytes |
| Embedded `.git` data | 28 files / 20,083,697 bytes |
| Declared dependencies | 15 production + 3 development |
| Resume PDFs in one page folder | 4 |

The largest avoidable source artifact is `src/img/save.PNG` at 3,155,357 bytes, and it is not imported by the application. `src/script/` contains a copied package tree rather than application source. The archive also contains committed generated output and Git object data.

## 2. Executive assessment

The original project works as a bootcamp-era portfolio, but the product story and technical architecture no longer support a modern professional portfolio effectively.

The strongest product asset is the project catalogue: the code contains nine distinct projects, detailed descriptions, technologies, repositories, and screenshots. The interface does not fully expose that value. One project is hidden by an export collision, one project uses another project's route, featured work depends on JavaScript object export order, and case studies communicate features but not clear contribution, constraints, decisions, or outcomes.

The strongest technical opportunity is simplification. This is predominantly static content. It does not need a client-side application framework, global state layer, backend server, database, or serverless functions to render its core experience. The safest evolution is a statically generated, progressively enhanced portfolio with real routes, structured content, responsive assets, deterministic tests, and explicit Vercel configuration.

### Heuristic baseline scorecard

These scores are directional review scores, not Lighthouse measurements.

| Dimension | Baseline | Main reason |
|---|---:|---|
| Product architecture | 44/100 | Project content exists but is inconsistently mapped and weakly connected into a professional journey. |
| Code health | 31/100 | Obsolete stack, copied dependency source, duplicate modules/assets, implicit ordering, and generated files in source control. |
| UX clarity | 49/100 | Simple navigation, but weak hierarchy, no active state, long card flow, limited project discovery, and stale profile content. |
| Accessibility | 58/100 | Some semantic elements and alt text exist, but link labels, empty links, focus/navigation behavior, form feedback, and structural issues remain. |
| Performance | 46/100 | Large source/build footprint, unoptimized images, and global Bootstrap/Font Awesome delivery for a small interface. |
| SEO and deployment | 34/100 | Hash routes and client-only metadata reduce crawlability; the static HTML title is `React App`; Vercel configuration is absent. |
| Developer productivity | 29/100 | No project-content validation, no deterministic quality gate, duplicate records, and a difficult-to-reinstall legacy toolchain. |

## 3. Product architecture audit

### Observations

#### 3.1 The project catalogue is fragmented by export mechanics

`src/pages/Home/index.js` selects featured work with `Object.values(projects).slice(0, 3)`. Featured status therefore depends on export order rather than product intent. A later export reorder silently changes the homepage.

`src/projects/teoyube-app/index.js` exports a constant named `bitGora` and assigns `infoPage: "/bitgora"`. `src/projects/bitGora/index.js` also exports `bitGora`. Because the barrel file exports both modules, the Teoyube export shadows the real BitGora record in the rendered portfolio. The result is:

- Teoyube appears under `/portfolio/bitgora`.
- The real BitGora project is not reachable from the portfolio grid.
- Teoyube retains an unrelated identifier and route.
- A future maintainer cannot trust a project folder, export name, and route to describe the same entity.

`src/projects/work-day-scheduler/index.js` and `src/projects/good-games/index.js` are byte-for-byte duplicate JavaScript files. Both export `goodGames`; the active barrel imports `good-games`, while a second duplicated folder remains dead.

#### 3.2 The user journey is page-based rather than decision-based

The original journey is:

`Home → generic three-card preview → Portfolio grid → project details`
`Home → About → Contact`

There are no strong connections between a visitor's likely questions:

- What kind of engineer is Prince?
- Which work is most relevant to my role or problem?
- What did he contribute?
- Which technologies are demonstrated?
- How do I contact him efficiently?

The homepage introduces a full-stack developer and multimedia design interest, but it does not provide a concise professional proof structure. Project cards prioritize large screenshots and generic “Visit site” / “View source code” links, while project detail pages provide feature descriptions without a consistent case-study model.

#### 3.3 The content model mixes data and rendered React nodes

Each project stores `description` as JSX and `lists` as presentation-oriented records with Font Awesome class names. This makes content hard to validate, migrate, search, sort, reuse, or export. It also allowed incorrect project technology lists to survive because content has no schema or automated constraints.

#### 3.4 Several current claims and links need owner review

The About page presents “Lead Developer,” Carleton student status, Courtyard Marriott Ottawa, Heroku, Twitter, and Facebook. The uploaded code alone cannot establish which claims are current. The included resume is named `princeInoba_resume2022.pdf`, and three other resume PDFs remain in the same folder. Historical Heroku demo URLs are presented as active “Visit site” actions without a validation status.

### Recommendations

1. Replace export-order selection with explicit `featured: true` data.
2. Give every project one validated `id`, route, title, image key, source URL, demo URL, categories, and technologies list.
3. Make the core visitor journey: `Professional proposition → selected evidence → searchable project catalogue → case study → contact`.
4. Treat external demos as historical links until revalidated; source links remain valuable even when a demo is unavailable.
5. Add contribution, challenge, decision, and outcome fields only when the owner can provide evidence. Do not fabricate case-study metrics.
6. Keep the portfolio static until a real content-management or server-side use case exists.

### Implemented in the replacement

- Nine unique projects are now reachable.
- Teoyube uses `/projects/teoyube/`; BitGora uses `/projects/bitgora/`.
- The original Teoyube route redirects safely.
- Featured work is explicit and tested.
- Project data is plain structured JavaScript rather than JSX.
- Search, category filtering, a result count, reset behavior, and a designed empty state improve discovery.
- Project pages show overview, technologies, source mapping, historical demo status, and related projects.

## 4. Codebase and dependency audit

### Observations

#### 4.1 The runtime is an obsolete client-side architecture

The app uses React 17, Create React App 4, React Router 5, React Bootstrap 1, Bootstrap 4, React Helmet, and Font Awesome 5. `src/App.js` uses `HashRouter`, so public URLs are hash fragments rather than crawlable document routes. `src/components/Page/index.js` injects metadata only after JavaScript runs. The committed static template still says `React App`.

The package declares `express`, `ejs`, `got`, and `tape`, but the reviewed application runtime does not use them to render the portfolio. They increase dependency surface without corresponding product value.

#### 4.2 Dependency source is copied into application source

`src/script/` contains 4,969 files and 18.23 MB of vendored Font Awesome/react-feather package content. Application imports use the installed Font Awesome CSS package, not this copied tree. It should never be part of feature source.

#### 4.3 Generated and repository data are packaged with product source

The ZIP contains:

- `build/` with 10.10 MB of generated output.
- `.git/` with 20.08 MB of object/index data.
- Source maps and copied fonts/icons inside the committed build.

Packaging all three—source, generated output, and Git internals—makes the handoff much larger and less clear.

#### 4.4 Repeated and dead files obscure ownership

Confirmed duplicate groups include:

- `src/projects/work-day-scheduler/index.js` and `src/projects/good-games/index.js`.
- Duplicate Work Day Scheduler icon/display files across the same folders.
- `src/projects/bitGora/bitGora_display.png` copied into the Teoyube folder.

Confirmed unused or unreachable assets include `src/img/save.PNG`, `src/img/headshot_25x.jpg`, two logo SVGs, older/foreign resume PDFs, multiple alternate icons, and the duplicate Work Day Scheduler folder.

#### 4.5 Component boundaries are inconsistent

The About page contains the page content, profile sidebar, employment/social details, skills, layout composition, and final default export in one 237-line file. It includes empty rows for spacing, nested columns, an `xd` typo instead of `xs`, unsupported button props, and three anchors with `href=""`.

Project cards and link lists use array indexes as keys. Project routes scan `Object.values(projects)` at runtime. Link semantics are sometimes inaccurate: the project detail link's accessible label says “website,” even though it opens an internal case-study route.

#### 4.6 State management is not the problem

There is no evidence that a global state library is needed. Most pages are static. The contact form's local state is conceptually appropriate, although error feedback is generic and the visible telephone number does not match its `tel:` target.

### Recommendations

- Remove the copied package tree, generated build, Git internals, duplicate folders, stale resumes, and unused images from the product source.
- Replace the framework runtime with build-time static generation for this content profile.
- Keep interactive state local: theme, command palette, project filters, mobile navigation, and contact form.
- Validate content at test time instead of trusting barrel exports and route string conventions.
- Use named content records and route generation instead of scanning module exports.
- Keep components/templates organized by responsibility, not by Bootstrap layout fragment.

### Implemented architecture

```text
portfolio-v2-vercel-ready/
├── .github/workflows/quality.yml
├── docs/
│   ├── audit-report.md
│   ├── content-review.md
│   ├── verification-report.md
│   └── verification-screenshots/
├── scripts/
│   ├── build.mjs
│   ├── dev-server.mjs
│   └── verify-build.mjs
├── src/
│   ├── content/
│   │   ├── projects.mjs
│   │   └── site.mjs
│   ├── templates/
│   │   ├── helpers.mjs
│   │   ├── layout.mjs
│   │   └── pages.mjs
│   └── static/assets/
│       ├── docs/
│       ├── images/
│       ├── site.css
│       └── site.js
├── tests/content.test.mjs
├── package.json
├── package-lock.json
└── vercel.json
```

The production build is generated into `dist/` and is ignored by Git.

## 5. UX and accessibility audit

### Observations

#### Navigation and orientation

- The original brand is only a briefcase icon, not the owner's name or role.
- The brand uses a plain `<a href="/">` while other navigation uses React Router links, causing a different navigation behavior.
- There is no active-page indicator.
- Hash URLs reduce shareability and make routes less understandable.
- The 404 page offers only a homepage return, without project recovery or search.

#### Visual hierarchy and cognitive load

The original homepage has a large introduction followed by three visually dominant project screenshots. It does not quickly communicate portfolio breadth, technology areas, or evidence categories. On mobile, full-width screenshot cards create a long scroll before a visitor sees broader context.

The About page uses a narrow profile sidebar and a large content area with duplicated skills, empty spacer rows, and stale social/employment information. The visual structure competes with the professional narrative.

#### Forms, states, and feedback

- The contact form has loading/success/error handling through Formspree, but the error message is generic and no per-field guidance or live status region is present.
- The visible telephone number `(647) 229-6001` points to `tel:647-455-5788`.
- There is no spam honeypot in the source.
- There are no meaningful loading states elsewhere because the site does not fetch page data. Adding skeletons to static pages would add complexity without user value.
- The original portfolio has no search/filter empty state because it has no discovery controls.

#### Accessibility details

Positive evidence includes page landmarks, labels on contact fields, and image alt text. Problems include three empty links in About, inaccurate link labels, no skip link, weak active navigation, missing explicit external-link treatment, and reliance on framework components without a documented keyboard/focus audit.

### Implemented improvements

- Named brand with role and home link.
- Sticky responsive navigation with active-page state.
- Skip link and consistent focus-visible treatment.
- Semantic multi-page documents with one main landmark and one primary heading.
- Accessible command palette using `Ctrl/Cmd + K`.
- Theme control with persisted preference and system-theme support.
- Search/filter controls with result count, reset, and empty state.
- Responsive images with complete screenshots preserved inside a consistent aspect ratio.
- Native labels, autocomplete, validation constraints, honeypot, disabled submitting state, and `aria-live` feedback on contact.
- Correct phone target.
- Reduced-motion support and progressive enhancement: content remains usable without JavaScript.
- A recovery-focused 404 page with Home and Portfolio actions.

## 6. Performance audit

### Baseline evidence

The committed production bundles include:

| Bundle | Raw | Gzip |
|---|---:|---:|
| Vendor JavaScript | 229,234 B | 72,062 B |
| Vendor CSS | 203,823 B | 35,740 B |
| Main JavaScript | 33,481 B | 8,470 B |
| Runtime JavaScript | 1,597 B | 792 B |
| Main CSS | 1,864 B | 761 B |

Those bundle numbers are not extreme by themselves, but they are disproportionate for a static portfolio and exclude image cost. The source project images total several megabytes, the Teoyube screenshot alone is 958,555 bytes, and images are rendered without `srcset`, explicit dimensions, or consistent lazy loading.

The entire Font Awesome CSS and font set is loaded globally to render a small number of icons. Bootstrap and React Bootstrap are also used primarily for layout primitives that modern CSS can provide directly.

### Implemented performance changes

- Zero framework runtime and zero third-party client packages.
- Client JavaScript remains below the enforced 20 KB uncompressed budget.
- CSS remains below the enforced 60 KB uncompressed budget.
- Project screenshots are converted to WebP in 640 px and 1200 px variants.
- Images include `srcset`, sizes, width, height, decoding, and appropriate loading priority.
- Inline SVG icons replace the global icon font package.
- The final verified static output is 1.36 MiB, compared with 10.10 MB for the legacy committed build: about **85.8% smaller**, or roughly **7.1× smaller**.
- Cache and security headers are defined in `vercel.json`.

No Lighthouse score is claimed because this audit did not run against a public Vercel deployment with production network conditions.

## 7. SEO, security, and Vercel deployment audit

### Baseline observations

- HashRouter makes page states fragment URLs rather than independent documents.
- `public/index.html` uses the title `React App`.
- `public/manifest.json` names the app “Angelica Mapeso's Portfolio,” which is a stale identity defect.
- Metadata depends on client-side Helmet execution.
- There is no sitemap, canonical URL strategy, Open Graph image, security policy, or Vercel project configuration.
- Historical external demos are not marked as historical or unverified.

### Implemented controls

- Real static routes for Home, Portfolio, About, Contact, nine projects, and 404.
- Unique server-rendered title and description in every canonical HTML document.
- Open Graph/Twitter metadata and a local social image.
- Web app manifest with correct identity.
- `robots.txt`, optional sitemap generation, and `.well-known/security.txt`.
- Canonical URLs use `SITE_URL`, `VERCEL_PROJECT_PRODUCTION_URL`, or `VERCEL_URL`; they are intentionally omitted during an unconfigured local build rather than emitting a false domain.
- Permanent Vercel redirects for old direct routes and client migration for legacy hash routes.
- Content Security Policy, HSTS, frame denial, MIME sniffing prevention, referrer policy, permissions policy, and cross-origin opener policy.
- Contact submission is restricted to the existing Formspree endpoint in both form action and CSP.

## 8. Developer productivity audit

### Baseline friction

- Content correctness depends on export names and manual route strings.
- There is no dedicated build verification command.
- No test validates unique projects, required images, internal links, metadata, stale identity strings, or bundle/output budgets.
- The old lockfile is large and the dependency stack is difficult to reinstall.
- Updating a project requires editing JSX, imports, assets, route conventions, and possibly export order.

### Implemented workflow

- `src/content/projects.mjs` is the single source of truth for projects.
- `npm test` validates content and configuration.
- `npm run build` deterministically generates the static site.
- `npm run verify` runs tests, build, link/asset validation, metadata checks, stale-string checks, and size budgets.
- `npm run dev` builds and starts a dependency-free local preview server.
- GitHub Actions runs the same verification on pushes and pull requests.
- There are no secrets in the repository and no required environment variable for a standard Vercel URL.

## 9. Quick wins versus larger work

### Quick wins identified from the legacy source

1. Correct the telephone link.
2. Correct the manifest owner name and static HTML title.
3. Separate Teoyube and BitGora identifiers/routes.
4. Remove the duplicate Work Day Scheduler folder.
5. Remove `src/script/`, unused 3.15 MB `save.PNG`, unused headshot/logos, stale resumes, and committed `build/`.
6. Add active navigation, a named brand, accurate internal link labels, `rel="noopener noreferrer"`, and image dimensions/lazy loading.
7. Mark external demos as historical until verified.

All of these are addressed in the replacement architecture.

### Larger architectural work completed

1. Replace hash-routing SPA delivery with generated documents.
2. Normalize project content into a validated schema.
3. Redesign the professional journey without inventing portfolio outcomes.
4. Add responsive media processing and a small design system.
5. Add deterministic testing, build verification, security headers, redirects, and CI.

### Larger work intentionally not added

- No database or CMS: the upload provides nine static records and no editorial workflow requirement.
- No authentication: there is no private user experience.
- No AI chatbot: there is no evidence that it would answer better than clear project content, and it would introduce cost, privacy, failure states, and deployment secrets.
- No analytics by default: consent and analytics goals were not supplied.
- No animation library: CSS and minimal JavaScript provide the required interaction without bundle overhead.

## 10. Owner decisions still required before public launch

1. Replace the included 2022 resume with the current approved resume while keeping the filename `src/static/assets/docs/prince-inoba-resume.pdf`.
2. Confirm the current preferred title and Carleton status.
3. Confirm whether the public phone number and email should remain visible.
4. Open and verify every historical demo URL; remove or replace unavailable demos.
5. Add evidence-backed contribution, challenge, decisions, and outcomes to the strongest three to five projects.
6. Confirm the current GitHub and LinkedIn URLs.
7. Choose the final custom domain, then set `SITE_URL` in Vercel if desired.
8. Replace any project screenshot that no longer represents the current product.

## 11. Verification result

The rebuilt project passed:

- 8 content/configuration tests.
- Deterministic generation of 13 canonical public routes.
- Verification of 23 HTML files and 54 total build files.
- Local link and asset validation.
- Unique-title and meta-description checks.
- Image alt/width/height checks.
- Stale identity/contact string checks.
- JavaScript, CSS, and total output budgets.
- 11 rendered desktop/mobile browser captures.
- Command palette filtering and close behavior.
- Portfolio search, no-result, and reset behavior.
- Contact endpoint and telephone-link checks.
- Responsive navigation visibility.
- No horizontal overflow, console errors, failed requests, missing alt text, or empty links in the verified routes.

The production artifact is Vercel-ready. Actual public deployment is the remaining platform action; it was not performed automatically because deployment ownership, project selection, and production domain approval were not part of the uploaded source.


## 12. Repository implementation reconfirmation - July 25, 2026

The actual checkout at starting commit `31e7a670d43f2222012712a808013c67c8f57ae5` reconfirmed the legacy findings. Evidence included `src/App.js` using HashRouter, `src/pages/Home/index.js` selecting featured work by object order, colliding Teoyube and BitGora records under `src/projects/`, duplicate Work Day Scheduler content, the mismatched Contact telephone link, empty About links, four resume PDFs, 4,969 copied package files under `src/script/`, the committed `build/`, and the stale React App / Angelica Mapeso identities.

The implemented correction replaces those files at the repository root with the dependency-free static generator. Project identity and demo state now live in `src/content/projects.mjs`; owner identity and conservative education wording live in `src/content/site.mjs`; canonical documents are rendered from `src/templates/`; verification gates live in `tests/content.test.mjs` and `scripts/verify-build.mjs`; and Vercel redirects and security headers live in `vercel.json`.

The previous candidate was improved in four material ways: the known 2022 resume and download were removed; five HTTP 404 Heroku demos were removed from public links while four live GitHub Pages demos were labeled verified; Person, WebSite, and ItemList structured data was added when a real deployment URL exists; and browser testing corrected the Windows Contact-route collision plus command-palette focus behavior. These changes reduce privacy risk, prevent broken visitor actions, improve structured discoverability, and make clean builds deterministic on case-insensitive filesystems.
