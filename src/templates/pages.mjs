import { site } from "../content/site.mjs";
import { categories } from "../content/projects.mjs";
import { escapeAttribute, escapeHtml, externalLink, icon, projectPicture, tagList } from "./helpers.mjs";

function buttonLink(href, label, { secondary = false, external = false, download = false, iconName = "arrow" } = {}) {
  const attrs = [
    `class="button${secondary ? " button-secondary" : ""}"`,
    `href="${escapeAttribute(href)}"`
  ];
  if (external) attrs.push('target="_blank"', 'rel="noopener noreferrer"');
  if (download) attrs.push("download");
  return `<a ${attrs.join(" ")}>${escapeHtml(label)}${icon(iconName, "icon icon-sm")}</a>`;
}

function projectCard(project, { featured = false } = {}) {
  const search = `${project.title} ${project.tagline} ${project.summary} ${project.status} ${project.categories.join(" ")} ${project.technologies.join(" ")}`.toLowerCase();
  const categoryData = project.categories.map((category) => category.toLowerCase()).join("|");
  return `<article class="project-card${featured ? " project-card-featured" : ""}" data-project-card data-search="${escapeAttribute(search)}" data-categories="${escapeAttribute(categoryData)}" data-reveal>
    <a class="project-card-media" href="/projects/${escapeAttribute(project.id)}/" aria-label="Read the ${escapeAttribute(project.title)} case study">
      ${projectPicture(project)}
      <span class="project-card-arrow" aria-hidden="true">${icon("arrow")}</span>
    </a>
    <div class="project-card-body">
      <div class="project-card-meta"><span>${escapeHtml(project.categories[0])}</span><span>${escapeHtml(project.technologies.slice(0, 2).join(" · "))}</span></div>
      <p class="project-card-status"><span class="status-dot" aria-hidden="true"></span>${escapeHtml(project.status)}</p>
      <h3><a href="/projects/${escapeAttribute(project.id)}/">${escapeHtml(project.title)}</a></h3>
      <p>${escapeHtml(project.tagline)}</p>
      <div class="project-card-footer">
        <a class="text-link" href="/projects/${escapeAttribute(project.id)}/">View case study${icon("arrow", "icon icon-sm")}</a>
        <span class="project-card-actions">
          ${project.demoUrl ? `<a class="icon-button project-demo" href="${escapeAttribute(project.demoUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Open the verified ${escapeAttribute(project.title)} demo">${icon("external")}</a>` : ""}
          <a class="icon-button project-source" href="${escapeAttribute(project.sourceUrl)}" target="_blank" rel="noopener noreferrer" aria-label="View ${escapeAttribute(project.title)} source on GitHub">${icon("github")}</a>
        </span>
      </div>
    </div>
  </article>`;
}

function sectionHeading(eyebrow, title, description = "") {
  return `<div class="section-heading" data-reveal>
    <p class="eyebrow">${escapeHtml(eyebrow)}</p>
    <h2>${escapeHtml(title)}</h2>
    ${description ? `<p>${escapeHtml(description)}</p>` : ""}
  </div>`;
}

export function renderHome(projects) {
  const featured = projects.filter((project) => project.featured);
  const leadProject = featured[0];
  return `<section class="hero section-space">
    <div class="container-wide hero-grid">
      <div class="hero-copy" data-reveal>
        <p class="eyebrow">Software engineering · Ottawa</p>
        <h1>I build clear, useful <span>web experiences.</span></h1>
        <p class="hero-lead">${escapeHtml(site.intro)}</p>
        <div class="button-row">
          ${buttonLink("/portfolio/", "Explore my work")}
          ${buttonLink("/contact/", "Start a conversation", { secondary: true, iconName: "mail" })}
        </div>
        <ul class="hero-proof" aria-label="Portfolio highlights">
          <li><strong>${projects.length}</strong><span>project case studies</span></li>
          <li><strong>Full stack</strong><span>and API experience</span></li>
          <li><strong>Static first</strong><span>fast, resilient delivery</span></li>
        </ul>
      </div>
      <div class="hero-visual" data-reveal>
        <div class="hero-orbit hero-orbit-one" aria-hidden="true"></div>
        <div class="hero-orbit hero-orbit-two" aria-hidden="true"></div>
        <div class="hero-project-frame">
          <div class="browser-bar" aria-hidden="true"><span></span><span></span><span></span><small>Selected project</small></div>
          ${projectPicture(leadProject, { eager: true, className: "hero-project-image" })}
        </div>
        <a class="floating-note floating-note-top" href="/projects/${escapeAttribute(leadProject.id)}/">
          <span class="floating-icon">${icon("spark")}</span>
          <span><small>Featured work</small><strong>${escapeHtml(leadProject.title)}</strong></span>
        </a>
        <div class="floating-note floating-note-bottom">
          <span class="status-dot" aria-hidden="true"></span>
          <span><small>Build approach</small><strong>Accessible by default</strong></span>
        </div>
      </div>
    </div>
  </section>

  <section class="section-space section-muted">
    <div class="container-wide">
      ${sectionHeading("Selected work", "Projects with product intent", "Three current projects that show the product boundary, implementation choices, and working interface behind each release.")}
      <div class="project-grid featured-grid">${featured.map((project) => projectCard(project, { featured: true })).join("")}</div>
      <div class="section-action" data-reveal>${buttonLink("/portfolio/", `View all ${projects.length} projects`)}</div>
    </div>
  </section>

  <section class="section-space">
    <div class="container-wide">
      ${sectionHeading("How I work", "Design awareness backed by engineering", "The uploaded portfolio consistently combines interface work, full-stack foundations, and API-driven applications.")}
      <div class="capability-grid">
        ${site.strengths.map((strength, index) => `<article class="capability-card" data-reveal>
          <span class="capability-number">0${index + 1}</span>
          <span class="capability-icon">${icon(index === 0 ? "spark" : index === 1 ? "code" : "check")}</span>
          <h3>${escapeHtml(strength.title)}</h3>
          <p>${escapeHtml(strength.description)}</p>
        </article>`).join("")}
      </div>
    </div>
  </section>

  <section class="section-space section-cta">
    <div class="container-wide cta-panel" data-reveal>
      <div><p class="eyebrow">Have a role or project in mind?</p><h2>Let’s turn the first conversation into a clear next step.</h2></div>
      ${buttonLink("/contact/", "Contact me", { iconName: "send" })}
    </div>
  </section>`;
}

export function renderPortfolio(projects) {
  return `<section class="page-hero section-space-sm">
    <div class="container-wide page-hero-grid">
      <div data-reveal><p class="eyebrow">Portfolio</p><h1>Selected projects, organized for faster discovery.</h1></div>
      <p data-reveal>Browse ${projects.length} source-backed projects. Search by title or technology, narrow the list by project type, and open verified live releases where available.</p>
    </div>
  </section>
  <section class="section-space-sm portfolio-section">
    <div class="container-wide">
      <div class="portfolio-toolbar" data-reveal>
        <label class="search-field" for="project-search">${icon("search")}<span class="sr-only">Search projects</span><input id="project-search" type="search" placeholder="Search projects or technologies" autocomplete="off" data-project-search></label>
        <label class="filter-field" for="project-category">${icon("filter")}<span class="sr-only">Filter by category</span><select id="project-category" data-project-category>${categories.map((category) => `<option value="${escapeAttribute(category.toLowerCase())}">${escapeHtml(category)}</option>`).join("")}</select></label>
        <p class="result-count" aria-live="polite"><strong data-project-count>${projects.length}</strong> projects</p>
      </div>
      <div class="project-grid" data-project-grid>${projects.map((project) => projectCard(project)).join("")}</div>
      <div class="empty-state" data-project-empty hidden>
        <span>${icon("search")}</span><h2>No matching projects</h2><p>Try a broader search or choose “All” categories.</p><button class="button button-secondary" type="button" data-project-reset>Reset filters${icon("back", "icon icon-sm")}</button>
      </div>
      <noscript><p class="noscript-note">Project search and filtering require JavaScript; all projects remain visible without it.</p></noscript>
    </div>
  </section>`;
}

export function renderAbout() {
  return `<section class="page-hero section-space-sm">
    <div class="container-wide page-hero-grid">
      <div data-reveal><p class="eyebrow">About</p><h1>Engineering with a designer’s attention to the experience.</h1></div>
      <p data-reveal>${escapeHtml(site.about[0])}</p>
    </div>
  </section>
  <section class="section-space-sm">
    <div class="container-wide about-grid">
      <aside class="profile-card" data-reveal>
        <img src="/assets/images/prince-inoba.webp" alt="Prince Inoba" width="512" height="512" decoding="async">
        <div class="profile-card-body">
          <p class="eyebrow">Profile</p><h2>${escapeHtml(site.name)}</h2><p>${escapeHtml(site.role)}</p>
          <ul class="profile-details">
            <li>${icon("location")}<span>${escapeHtml(site.location)}</span></li>
            <li>${icon("mail")}<a href="mailto:${escapeAttribute(site.email)}">${escapeHtml(site.email)}</a></li>
          </ul>
          <div class="profile-links">
            <a class="icon-button" href="${escapeAttribute(site.github)}" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">${icon("github")}</a>
            <a class="icon-button" href="${escapeAttribute(site.linkedin)}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">${icon("linkedin")}</a>
          </div>
        </div>
      </aside>
      <div class="about-content">
        <div class="prose-large" data-reveal>${site.about.slice(1).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}</div>
        <div class="button-row" data-reveal>
          ${buttonLink("/contact/", "Get in touch", { iconName: "send" })}
        </div>
        <section class="about-section" aria-labelledby="skills-title">
          <div data-reveal><p class="eyebrow">Technical foundation</p><h2 id="skills-title">Skills represented in the uploaded portfolio</h2></div>
          ${tagList(site.skills, "skill-cloud")}
        </section>
        <section class="about-section" aria-labelledby="focus-title">
          <div data-reveal><p class="eyebrow">Portfolio focus</p><h2 id="focus-title">What the work demonstrates</h2></div>
          <div class="principle-list">${site.strengths.map((strength) => `<article data-reveal><span>${icon("check")}</span><div><h3>${escapeHtml(strength.title)}</h3><p>${escapeHtml(strength.description)}</p></div></article>`).join("")}</div>
        </section>
      </div>
    </div>
  </section>`;
}

export function renderContact() {
  return `<section class="page-hero section-space-sm">
    <div class="container-wide page-hero-grid">
      <div data-reveal><p class="eyebrow">Contact</p><h1>Start with the problem, the role, or the idea.</h1></div>
      <p data-reveal>Share enough context for a useful first response. You can also reach me directly by email or phone.</p>
    </div>
  </section>
  <section class="section-space-sm">
    <div class="container-wide contact-grid">
      <form class="contact-form" action="${escapeAttribute(site.formEndpoint)}" method="post" data-contact-form data-reveal>
        <div class="form-heading"><p class="eyebrow">Send a message</p><h2>What would you like to discuss?</h2></div>
        <div class="field-grid">
          <label><span>Name</span><input name="name" type="text" autocomplete="name" required minlength="2" maxlength="100" placeholder="Your name"></label>
          <label><span>Email address</span><input name="email" type="email" autocomplete="email" required maxlength="160" placeholder="you@example.com"></label>
        </div>
        <label><span>Subject <small>(optional)</small></span><input name="subject" type="text" maxlength="160" placeholder="Role, project, or question"></label>
        <label><span>Message</span><textarea name="message" rows="7" required minlength="20" maxlength="5000" placeholder="Tell me what you are working on and what a useful outcome looks like."></textarea></label>
        <label class="honeypot" aria-hidden="true">Leave this field empty<input name="_gotcha" type="text" tabindex="-1" autocomplete="off"></label>
        <input type="hidden" name="_subject" value="Portfolio contact message">
        <div class="form-footer"><button class="button" type="submit" data-contact-submit>Send message${icon("send", "icon icon-sm")}</button><p class="form-status" role="status" aria-live="polite" data-contact-status></p></div>
      </form>
      <aside class="contact-aside" data-reveal>
        <p class="eyebrow">Direct contact</p><h2>Prefer another route?</h2><p>Use the channel that is easiest for you. The visible phone number and its link now match.</p>
        <div class="contact-methods">
          <a href="mailto:${escapeAttribute(site.email)}"><span>${icon("mail")}</span><div><small>Email</small><strong>${escapeHtml(site.email)}</strong></div>${icon("arrow")}</a>
          <a href="tel:${escapeAttribute(site.phoneHref)}"><span>${icon("phone")}</span><div><small>Phone</small><strong>${escapeHtml(site.phoneDisplay)}</strong></div>${icon("arrow")}</a>
          <a href="${escapeAttribute(site.linkedin)}" target="_blank" rel="noopener noreferrer"><span>${icon("linkedin")}</span><div><small>Professional profile</small><strong>LinkedIn</strong></div>${icon("external")}</a>
        </div>
        <div class="response-note"><span class="status-dot" aria-hidden="true"></span><p><strong>Useful first message</strong><br>Include the goal, expected timeline, and the best way to reach you.</p></div>
      </aside>
    </div>
  </section>`;
}

export function renderProject(project, projects) {
  const related = projects
    .filter((candidate) => candidate.id !== project.id && candidate.categories.some((category) => project.categories.includes(category)))
    .slice(0, 3);
  const study = project.caseStudy;
  const structuredStudy = study ? `
    <div class="case-study-pair">
      <section class="case-section" data-reveal><p class="eyebrow">Problem</p><h2>What needed to change</h2><p>${escapeHtml(study.problem)}</p></section>
      <section class="case-section" data-reveal><p class="eyebrow">Solution</p><h2>How the release responds</h2><p>${escapeHtml(study.solution)}</p></section>
    </div>
    <section class="case-section" data-reveal><p class="eyebrow">Key features</p><h2>What visitors can use</h2><ul class="case-list">${study.features.map((feature) => `<li><span>${icon("check")}</span>${escapeHtml(feature)}</li>`).join("")}</ul></section>
    <section class="case-section" data-reveal><p class="eyebrow">Implementation</p><h2>How it was built</h2><ol class="implementation-list">${study.implementation.map((item, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span><p>${escapeHtml(item)}</p></li>`).join("")}</ol></section>
    <section class="case-section" data-reveal><p class="eyebrow">Architecture</p><h2>Delivery shape</h2><p>${escapeHtml(study.architecture)}</p></section>
    <section class="case-boundary" data-reveal><p class="eyebrow">Product boundary</p><h2>What this release does not claim</h2><ul>${study.boundaries.map((boundary) => `<li>${escapeHtml(boundary)}</li>`).join("")}</ul></section>` : "";
  return `<section class="project-hero section-space-sm">
    <div class="container-wide">
      <nav class="breadcrumb" aria-label="Breadcrumb"><a href="/portfolio/">Portfolio</a>${icon("chevron")}<span aria-current="page">${escapeHtml(project.title)}</span></nav>
      <div class="project-hero-grid">
        <div class="project-hero-copy" data-reveal>
          <p class="eyebrow">${escapeHtml(project.categories.join(" · "))}</p>
          <p class="project-status"><span class="status-dot" aria-hidden="true"></span>${escapeHtml(project.status)}</p>
          <h1>${escapeHtml(project.title)}</h1>
          <p class="project-tagline">${escapeHtml(project.tagline)}</p>
          <div class="button-row">
            ${buttonLink(project.sourceUrl, "View source", { external: true, iconName: "github" })}
            ${project.demoUrl ? buttonLink(project.demoUrl, "Open live demo", { secondary: true, external: true, iconName: "external" }) : ""}
          </div>
        </div>
        <div class="project-hero-media" data-reveal>${projectPicture(project, { eager: true, className: "project-detail-image" })}</div>
      </div>
    </div>
  </section>
  <section class="section-space-sm">
    <div class="container-wide case-study-grid">
      <article class="case-study-main">
        <div data-reveal><p class="eyebrow">Overview</p><h2>What the project is designed to do</h2><p class="lead-copy">${escapeHtml(project.summary)}</p></div>
        <div class="prose" data-reveal>${project.details.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}</div>
        ${structuredStudy}
        ${project.collaborators?.length ? `<div class="case-block" data-reveal><h3>Collaborators named in the source data</h3><p>${escapeHtml(project.collaborators.join(", "))}</p></div>` : ""}
      </article>
      <aside class="case-study-aside" data-reveal>
        <div class="case-panel"><p class="eyebrow">Technology</p>${tagList(project.technologies, "tech-list")}</div>
        ${study?.integrations.length ? `<div class="case-panel"><p class="eyebrow">Integrations</p>${tagList(study.integrations, "tech-list", "Integrations")}</div>` : ""}
        <div class="case-panel"><p class="eyebrow">Project links</p><dl>
          <div><dt>Status</dt><dd>${escapeHtml(project.status)}</dd></div>
          <div><dt>Source</dt><dd>${externalLink(project.sourceUrl, "GitHub repository", { iconName: "github" })}</dd></div>
          <div><dt>Demo</dt><dd>${project.demoUrl ? externalLink(project.demoUrl, "Open live release") : "No public demo"}</dd></div>
          <div><dt>Checked</dt><dd>${escapeHtml(project.demoChecked)}</dd></div>
          ${project.originalRoute ? `<div><dt>Preserved legacy route</dt><dd><code>${escapeHtml(project.originalRoute)}</code></dd></div>` : ""}
        </dl><p class="small-note">Links and status reflect direct repository and deployment verification. Portfolio demos are labelled according to their documented product boundaries.</p></div>
      </aside>
    </div>
  </section>
  ${related.length ? `<section class="section-space section-muted"><div class="container-wide">${sectionHeading("Continue exploring", "Related projects")}<div class="project-grid related-grid">${related.map((candidate) => projectCard(candidate)).join("")}</div></div></section>` : ""}`;
}

export function renderNotFound() {
  return `<section class="not-found section-space">
    <div class="container-narrow" data-reveal>
      <span class="not-found-code">404</span><p class="eyebrow">Page not found</p><h1>This route does not lead to a portfolio page.</h1><p>The page may have moved during the modernization. Use quick navigation or return to the project index.</p>
      <div class="button-row">${buttonLink("/", "Go home", { iconName: "back" })}${buttonLink("/portfolio/", "Browse projects", { secondary: true })}</div>
    </div>
  </section>`;
}
