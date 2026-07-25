# Vercel production deployment checklist

## Before connecting the repository

- [ ] Add a current, privacy-reviewed resume only when the owner supplies one.
- [ ] Confirm public email, telephone number, GitHub, and LinkedIn.
- [x] Demo links checked July 25, 2026; four live GitHub Pages demos remain and five HTTP 404 Heroku links are not published.
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

No database or secret environment variable is required.

### Optional environment variable

Set `SITE_URL` only for an approved custom production domain:

```text
SITE_URL=https://portfolio.example.com
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
- [ ] Unknown route returns the designed 404.
- [ ] Old `/portfolio/bitgora` redirects to `/projects/teoyube/`.
- [ ] An old `#/portfolio` URL migrates to `/portfolio/`.
- [ ] Portfolio search and filters work.
- [ ] `Ctrl/Cmd + K` opens quick navigation.
- [ ] Theme preference persists.
- [ ] Contact submission succeeds in production.
- [ ] Telephone, email, GitHub, LinkedIn, and project links are correct.
- [ ] Social preview image appears when the production URL is shared.
- [ ] `robots.txt`, `site.webmanifest`, and `sitemap.xml` are available. The sitemap is generated when a production URL is present.

## Rollback

Use Vercel's deployment history to promote the last approved preview or roll back the production alias. Do not patch generated `dist/` files directly; correct source/content and rebuild.
