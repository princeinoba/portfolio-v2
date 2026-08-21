# Vercel production deployment checklist

## Before releasing

- [x] Publish only the privacy-reviewed résumé derivative at `/assets/documents/prince-inoba-full-stack-software-developer-resume.pdf`; never commit the uploaded source document or unredacted export.
- [ ] Confirm public email, telephone number, GitHub, and LinkedIn.
- [x] Twenty-one demo links checked through August 21, 2026; the earlier Teoyube App concept has no verified public deployment and has no live action.
- [ ] Run `npm ci --ignore-scripts`.
- [ ] Run `npm run verify` and require a clean result.
- [ ] Confirm `dist/` is not committed; Vercel generates it.

## Vercel project settings

The repository includes `vercel.json`; no manual override should be necessary.

| Setting | Value |
|---|---|
| Framework | Other / no framework |
| Install | Standard `npm install` or `npm ci` |
| Build | `npm run build` |
| Output | `dist` |
| Node | `24.x` from `package.json` |

No database or secret environment variable is required. The canonical existing Vercel project is `portfolio-v2` (`prj_UPnrNe4Ha8QguqdUHTEsTeoR8Hdj`) in the `princeinobas-projects` account. Do not deploy this repository to `portfolio-v2-mqgk` or create another project.

### Optional environment variable

Set `SITE_URL` to the approved stable production URL when generating canonical metadata and the sitemap:

```text
SITE_URL=https://portfolio-v2-nine-sable.vercel.app
```

Do not set a preview URL as the canonical domain.

## Deploy

### Git workflow

1. Push a verified commit to a non-production branch.
2. Review the Vercel preview deployment.
3. Test the routes below.
4. Merge to `main` when approved; Vercel Git integration creates the production deployment.

### CLI workflow

```bash
npm run verify
vercel
# Review preview URL
vercel --prod
```

## Post-deployment smoke test

- [ ] `/`
- [ ] `/portfolio/`
- [ ] `/about/`
- [ ] `/contact/`
- [ ] `/projects/teoyube/`
- [ ] `/projects/bitgora/`
- [ ] `/projects/rj-rogers-digital-demo/`
- [ ] `/projects/dutchgreen-digital-demo/`
- [ ] `/projects/garderie-oasis-digital-demo/`
- [ ] `/projects/nurtureops-ai/`
- [ ] `/projects/hearthops-ai/`
- [ ] `/assets/documents/prince-inoba-full-stack-software-developer-resume.pdf`
- [ ] Unknown route returns the designed 404.
- [ ] Old `/portfolio/bitgora` redirects to `/projects/teoyube/`.
- [ ] An old `#/portfolio` URL migrates to `/portfolio/`.
- [ ] Portfolio search and filters work.
- [ ] `Ctrl/Cmd + K` opens quick navigation.
- [ ] Theme preference persists.
- [ ] Contact submission opens the configured FormSubmit handoff and the page remains usable when submission is not completed.
- [ ] Telephone, email, GitHub, LinkedIn, and project links are correct.
- [ ] Social preview image appears when the production URL is shared.
- [ ] `robots.txt`, `site.webmanifest`, and `sitemap.xml` are available. The sitemap is generated when a production URL is present.

## Rollback

Use Vercel's deployment history to promote the last approved preview or roll back the production alias. Do not patch generated `dist/` files directly; correct source/content and rebuild.
