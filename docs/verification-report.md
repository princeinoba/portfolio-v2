# Verification report

## User story

A recruiter, client, or collaborator can open a crawlable portfolio route, understand Prince Inoba's professional focus, discover relevant projects, inspect a case study, and contact him through a resilient static Vercel deployment.

## Local quality gates - July 25, 2026

Environment: Node.js v24.18.0 and npm 10.2.4.

- `npm ci --ignore-scripts`: passed; 1 package audited, 0 vulnerabilities.
- `npm audit`: passed; 0 vulnerabilities.
- `npm test`: passed; 9/9 tests.
- `npm run build`: passed; 13 canonical public routes generated.
- `node scripts/verify-build.mjs`: passed; 22 HTML files and 52 total files verified.
- `npm run verify`: passed.
- `git diff --check`: passed.

Final generated output is 1,217,579 bytes (1.16 MiB). Client JavaScript is 9,469 bytes and CSS is 37,353 bytes, both uncompressed.

## Clean-room verification

The intended source handoff was copied to a new temporary directory without `.git`, `.vercel`, `node_modules`, `dist`, the legacy `build`, or uploaded archives.

- `npm ci --ignore-scripts`: passed; 0 vulnerabilities.
- `npm run verify`: passed on the final post-fix source; 9/9 tests, 13 canonical routes, 22 HTML files, 52 total files, and 1.16 MiB.

## Browser and accessibility verification

The production build was tested in Chrome through agent-browser 0.33.0 at 390 x 844, 768 x 1024, and 1440 x 900.

Verified routes and resources:

- Home, Portfolio, About, Contact, Teoyube, BitGora, an additional project path, and an unknown-route 404.
- Legacy `/portfolio/bitgora` redirects to `/projects/teoyube/`.
- Legacy `#/portfolio` migrates to `/portfolio/`.
- `robots.txt`, `site.webmanifest`, and `.well-known/security.txt` render correctly. A sitemap is intentionally omitted locally without a production URL.

Verified interactions:

- Desktop and mobile navigation, active route state, skip link, theme switching, persisted preference, system-theme fallback, and reduced-motion behavior.
- Quick navigation opens, searches projects, closes with Escape, and returns focus to its trigger.
- Portfolio search finds BitGora, a zero-result search exposes the empty state, reset restores all nine projects, and the API filter returns four projects.
- Contact native validation is present. Success and failure states were verified with in-page fetch stubs; no external message was sent.
- The visible phone number matches `tel:+16472296001` and the email matches `mailto:royceinoba@gmail.com`.
- No horizontal overflow, missing image alt text, empty link, console error, page error, or failed same-origin request was observed in the tested routes.

Automated axe-core 4.12.1 audits on Home, Portfolio, and Contact report zero WCAG A/AA violations. Axe marked color contrast as incomplete because it could not determine backgrounds that use CSS gradients; Lighthouse independently scored Accessibility at 100.

## Lighthouse

Lighthouse generated a valid local production report:

- Performance: 99
- Accessibility: 100
- Best Practices: 100
- SEO: 100

The CLI emitted a Windows EPERM warning only while deleting its temporary Chrome profile after the report had been written; the report itself parsed successfully and contains the scores above.

## Browser-driven corrections

Testing found and corrected two issues that were not safe to infer from static review alone:

1. On Windows, generating a separate legacy `/Contact/` document overwrote canonical `/contact/` on the case-insensitive filesystem. The duplicate document was removed; Vercel's redirect handles the legacy case, and the build verifier now rejects redirect content at canonical paths.
2. The command palette now handles the dialog cancel event and explicitly returns focus to the opener. Mobile-accessible names were added to the quick-navigation button and footer home link.

Raw browser results are stored in `docs/verification-screenshots/browser-report.json`, with current desktop and mobile captures in the same directory.
