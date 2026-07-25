import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { projects } from "../src/content/projects.mjs";
import { site, legacyRouteMap } from "../src/content/site.mjs";
import { renderLayout } from "../src/templates/layout.mjs";
import { renderAbout, renderContact, renderHome, renderNotFound, renderPortfolio, renderProject } from "../src/templates/pages.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

function resolveSiteUrl() {
  const raw = process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL || "";
  if (!raw) return "";
  const url = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  return url.replace(/\/+$/, "");
}

const siteUrl = resolveSiteUrl();

async function writeRoute(route, html) {
  const clean = route.replace(/^\/+|\/+$/g, "");
  const directory = clean ? path.join(dist, clean) : dist;
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, "index.html"), html, "utf8");
}

function pageHtml({ title, description, route, body, pageClass = "", robots }) {
  return renderLayout({
    title,
    description,
    path: route,
    body,
    projects,
    siteUrl,
    pageClass,
    robots
  });
}

function redirectDocument(destination) {
  const safeDestination = destination.replaceAll('"', "&quot;");
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0;url=${safeDestination}"><title>Page moved | ${site.name}</title><link rel="canonical" href="${safeDestination}"></head><body><p>This page moved to <a href="${safeDestination}">${safeDestination}</a>.</p></body></html>`;
}

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(path.join(root, "src/static"), dist, { recursive: true });

await writeRoute(
  "/",
  pageHtml({
    title: "Home",
    description: site.description,
    route: "/",
    body: renderHome(projects),
    pageClass: "home-page"
  })
);
await writeRoute(
  "/portfolio/",
  pageHtml({
    title: "Portfolio",
    description: `Browse ${projects.length} web projects by ${site.name}, including full-stack, API, and front-end work.`,
    route: "/portfolio/",
    body: renderPortfolio(projects),
    pageClass: "portfolio-page"
  })
);
await writeRoute(
  "/about/",
  pageHtml({
    title: "About",
    description: `Learn about ${site.name}, an Ottawa-based software engineer and full-stack developer with a multimedia design background.`,
    route: "/about/",
    body: renderAbout(),
    pageClass: "about-page"
  })
);
await writeRoute(
  "/contact/",
  pageHtml({
    title: "Contact",
    description: `Contact ${site.name} about software engineering roles, web projects, or professional opportunities.`,
    route: "/contact/",
    body: renderContact(),
    pageClass: "contact-page"
  })
);

for (const project of projects) {
  const route = `/projects/${project.id}/`;
  await writeRoute(
    route,
    pageHtml({
      title: project.title,
      description: project.summary,
      route,
      body: renderProject(project, projects),
      pageClass: "project-page"
    })
  );
}

const notFound = pageHtml({
  title: "Page not found",
  description: "The requested portfolio page could not be found.",
  route: "/404/",
  body: renderNotFound(),
  pageClass: "not-found-page",
  robots: "noindex,follow"
});
await writeFile(path.join(dist, "404.html"), notFound, "utf8");

for (const [legacyRoute, destination] of Object.entries(legacyRouteMap)) {
  await writeRoute(legacyRoute, redirectDocument(destination));
}

const publicRoutes = [
  "/",
  "/portfolio/",
  "/about/",
  "/contact/",
  ...projects.map((project) => `/projects/${project.id}/`)
];

const manifest = {
  name: `${site.name} Portfolio`,
  short_name: site.name,
  description: site.description,
  start_url: "/",
  scope: "/",
  display: "standalone",
  background_color: "#071027",
  theme_color: "#071027",
  icons: [
    { src: "/assets/images/icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "/assets/images/icon-512.png", sizes: "512x512", type: "image/png" }
  ]
};
await writeFile(path.join(dist, "site.webmanifest"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

const robots = ["User-agent: *", "Allow: /", siteUrl ? `Sitemap: ${siteUrl}/sitemap.xml` : ""].filter(Boolean).join("\n");
await writeFile(path.join(dist, "robots.txt"), `${robots}\n`, "utf8");

if (siteUrl) {
  const urls = publicRoutes.map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`).join("\n");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  await writeFile(path.join(dist, "sitemap.xml"), sitemap, "utf8");
}

await mkdir(path.join(dist, ".well-known"), { recursive: true });
const securityCanonical = siteUrl ? `Canonical: ${siteUrl}/.well-known/security.txt\n` : "";
await writeFile(
  path.join(dist, ".well-known", "security.txt"),
  `Contact: mailto:${site.email}\nPreferred-Languages: en\n${securityCanonical}`,
  "utf8"
);

const routeManifest = {
  version: 1,
  canonicalRoutes: publicRoutes,
  legacyRedirects: legacyRouteMap,
  projects: projects.map(({ id, title, originalRoute }) => ({ id, title, originalRoute }))
};
await writeFile(path.join(dist, "route-manifest.json"), `${JSON.stringify(routeManifest, null, 2)}\n`, "utf8");

const contentFingerprint = createHash("sha256")
  .update(JSON.stringify({ site, projects, publicRoutes }))
  .digest("hex");
await writeFile(
  path.join(dist, "build-meta.json"),
  `${JSON.stringify({ version: "2.0.0", contentFingerprint, sourceArchiveSha256: "7d16e0188619ebbab2f327dae8f8ea0d37ae9595942ed22cab7ca1943a340e1b" }, null, 2)}\n`,
  "utf8"
);

console.log(`Built ${publicRoutes.length} public routes into ${path.relative(root, dist)}/`);
console.log(siteUrl ? `Canonical URL: ${siteUrl}` : "Canonical URL: omitted locally (Vercel or SITE_URL will provide it)");
