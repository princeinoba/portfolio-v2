import { site } from "../content/site.mjs";
import { absoluteUrl, escapeAttribute, escapeHtml, icon } from "./helpers.mjs";

function isCurrent(path, href) {
  if (href === "/") return path === "/";
  return path.startsWith(href);
}

function navMarkup(path) {
  return site.navigation
    .map((item) => {
      const current = isCurrent(path, item.href);
      return `<a class="nav-link${current ? " is-current" : ""}" href="${item.href}"${current ? ' aria-current="page"' : ""}>${escapeHtml(item.label)}</a>`;
    })
    .join("");
}

function commandPalette(projects) {
  const pageItems = site.navigation
    .map(
      (item) => `<a class="command-item" href="${item.href}" data-command-item data-command-search="${escapeAttribute(item.label)} page">
        <span class="command-icon">${icon("arrow")}</span>
        <span><strong>${escapeHtml(item.label)}</strong><small>Page</small></span>
        <kbd>↵</kbd>
      </a>`
    )
    .join("");
  const projectItems = projects
    .map(
      (project) => `<a class="command-item" href="/projects/${escapeAttribute(project.id)}/" data-command-item data-command-search="${escapeAttribute(`${project.title} ${project.tagline} ${project.technologies.join(" ")}`)}">
        <span class="command-icon">${icon("code")}</span>
        <span><strong>${escapeHtml(project.title)}</strong><small>Project</small></span>
        <kbd>↵</kbd>
      </a>`
    )
    .join("");

  return `<dialog class="command-dialog" id="command-palette" aria-labelledby="command-title">
    <div class="command-shell">
      <div class="command-header">
        <div class="command-search-wrap">
          ${icon("search")}
          <label class="sr-only" for="command-search">Search pages and projects</label>
          <input id="command-search" type="search" placeholder="Search pages and projects…" autocomplete="off" data-command-search-input>
        </div>
        <button class="icon-button" type="button" data-command-close aria-label="Close quick navigation">${icon("close")}</button>
      </div>
      <div class="command-body">
        <p class="eyebrow" id="command-title">Quick navigation</p>
        <div class="command-list" data-command-list>
          ${pageItems}
          ${projectItems}
        </div>
        <p class="empty-message" data-command-empty hidden>No matching page or project.</p>
      </div>
      <div class="command-footer"><span><kbd>↑</kbd><kbd>↓</kbd> move</span><span><kbd>Esc</kbd> close</span></div>
    </div>
  </dialog>`;
}

function structuredDataMarkup({ siteUrl, path, projects }) {
  if (!siteUrl) return "";
  const ownerId = `${siteUrl}/#person`;
  const objects = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": ownerId,
      name: site.name,
      url: `${siteUrl}/`,
      jobTitle: site.role,
      address: { "@type": "PostalAddress", addressLocality: "Ottawa", addressRegion: "Ontario", addressCountry: "CA" },
      sameAs: [site.github, site.linkedin]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: `${site.name} Portfolio`,
      url: `${siteUrl}/`,
      author: { "@id": ownerId }
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `${site.name} project portfolio`,
      url: absoluteUrl(siteUrl, path),
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        url: `${siteUrl}/projects/${project.id}/`
      }))
    }
  ];
  return objects.map((entry) => `<script type="application/ld+json">${JSON.stringify(entry).replaceAll("<", "\u003c")}</script>`).join("\n  ");
}
export function renderLayout({ title, description, path, body, projects, siteUrl = "", image = "/assets/images/social-card.png", pageClass = "", robots = "index,follow,max-image-preview:large" }) {
  const isHome = path === "/";
  const documentTitle = isHome ? `${site.name} — ${site.role}` : `${title} | ${site.name}`;
  const canonical = absoluteUrl(siteUrl, path);
  const socialImage = absoluteUrl(siteUrl, image);
  const year = new Date().getUTCFullYear();

  return `<!doctype html>
<html lang="en" data-theme="system">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light dark">
  <meta name="theme-color" content="#071027">
  <title>${escapeHtml(documentTitle)}</title>
  <meta name="description" content="${escapeAttribute(description)}">
  <meta name="author" content="${escapeAttribute(site.name)}">
  <meta name="robots" content="${escapeAttribute(robots)}">
  ${canonical ? `<link rel="canonical" href="${escapeAttribute(canonical)}">` : ""}
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${escapeAttribute(site.name)}">
  <meta property="og:title" content="${escapeAttribute(documentTitle)}">
  <meta property="og:description" content="${escapeAttribute(description)}">
  ${canonical ? `<meta property="og:url" content="${escapeAttribute(canonical)}">` : ""}
  ${socialImage ? `<meta property="og:image" content="${escapeAttribute(socialImage)}">` : ""}
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeAttribute(documentTitle)}">
  <meta name="twitter:description" content="${escapeAttribute(description)}">
  ${socialImage ? `<meta name="twitter:image" content="${escapeAttribute(socialImage)}">` : ""}
  ${structuredDataMarkup({ siteUrl, path, projects })}
  <link rel="icon" href="/assets/images/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/assets/images/icon-192.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="stylesheet" href="/assets/site.css">
  <script src="/assets/site.js" defer></script>
</head>
<body class="${escapeAttribute(pageClass)}">
  <a class="skip-link" href="#main-content">Skip to content</a>
  <header class="site-header" data-site-header>
    <div class="header-inner container-wide">
      <a class="brand" href="/" aria-label="${escapeAttribute(site.name)} home">
        <span class="brand-mark" aria-hidden="true">PI</span>
        <span class="brand-copy"><strong>${escapeHtml(site.name)}</strong><small>${escapeHtml(site.shortRole)}</small></span>
      </a>
      <div class="navigation-slot">
        <nav class="desktop-navigation" aria-label="Primary navigation">${navMarkup(path)}</nav>
        <details class="site-navigation">
          <summary aria-label="Open navigation">${icon("menu")}<span>Menu</span></summary>
          <nav aria-label="Mobile navigation">${navMarkup(path)}</nav>
        </details>
      </div>
      <div class="header-actions">
        <button class="header-action command-button" type="button" data-command-open aria-label="Open quick navigation" aria-haspopup="dialog">
          ${icon("command")}<span>Quick find</span><kbd>⌘K</kbd>
        </button>
        <button class="icon-button theme-toggle" type="button" data-theme-toggle aria-label="Use dark theme">
          <span class="theme-icon theme-icon-sun">${icon("sun")}</span>
          <span class="theme-icon theme-icon-moon">${icon("moon")}</span>
        </button>
      </div>
    </div>
  </header>
  <main id="main-content">${body}</main>
  <footer class="site-footer">
    <div class="container-wide footer-grid">
      <div>
        <a class="brand footer-brand" href="/" aria-label="${escapeAttribute(site.name)} home"><span class="brand-mark" aria-hidden="true">PI</span><span class="brand-copy"><strong>${escapeHtml(site.name)}</strong><small>${escapeHtml(site.location)}</small></span></a>
        <p class="footer-note">Designed for clarity, accessibility, and fast static delivery.</p>
      </div>
      <nav class="footer-nav" aria-label="Footer navigation">${site.navigation.map((item) => `<a href="${item.href}">${escapeHtml(item.label)}</a>`).join("")}</nav>
      <div class="footer-social">
        <a class="icon-button" href="${escapeAttribute(site.github)}" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">${icon("github")}</a>
        <a class="icon-button" href="${escapeAttribute(site.linkedin)}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">${icon("linkedin")}</a>
        <a class="icon-button" href="mailto:${escapeAttribute(site.email)}" aria-label="Email ${escapeAttribute(site.name)}">${icon("mail")}</a>
      </div>
    </div>
    <div class="container-wide footer-bottom"><span>© ${year} ${escapeHtml(site.name)}</span><span>Built from the uploaded portfolio source.</span></div>
  </footer>
  ${commandPalette(projects)}
</body>
</html>`;
}
