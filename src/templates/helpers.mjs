export function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function escapeAttribute(value = "") {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

export function icon(name, className = "icon") {
  const common = `class="${escapeAttribute(className)}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" focusable="false"`;
  const paths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    back: '<path d="M19 12H5m6 6-6-6 6-6"/>',
    external: '<path d="M15 4h5v5M10 14 20 4M20 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6"/>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.2 3 5.4 5.4 0 0 0 19 1s-1.3-.4-4 1.5a13.4 13.4 0 0 0-7 0C5.3.6 4 1 4 1a5.4 5.4 0 0 0-.2 2A5.8 5.8 0 0 0 2.2 7c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 7.6 18v4M8 19c-3 .9-3-1.5-4-2"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z"/>',
    location: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    command: '<path d="M18 9a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12Z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    download: '<path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14"/>',
    code: '<path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    chevron: '<path d="m9 18 6-6-6-6"/>',
    spark: '<path d="m12 3-1.2 3.8L7 8l3.8 1.2L12 13l1.2-3.8L17 8l-3.8-1.2L12 3ZM5 14l-.8 2.2L2 17l2.2.8L5 20l.8-2.2L8 17l-2.2-.8L5 14ZM19 13l-.7 1.8-1.8.7 1.8.7.7 1.8.7-1.8 1.8-.7-1.8-.7L19 13Z"/>',
    filter: '<path d="M4 5h16M7 12h10M10 19h4"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    document: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h8M8 9h2"/>'
  };
  return `<svg ${common}>${paths[name] ?? paths.spark}</svg>`;
}

export function externalLink(href, label, { className = "text-link", iconName = "external", ariaLabel = "" } = {}) {
  return `<a class="${escapeAttribute(className)}" href="${escapeAttribute(href)}" target="_blank" rel="noopener noreferrer"${ariaLabel ? ` aria-label="${escapeAttribute(ariaLabel)}"` : ""}>${escapeHtml(label)}${iconName ? icon(iconName, "icon icon-sm") : ""}</a>`;
}

export function projectPicture(project, { eager = false, className = "project-image" } = {}) {
  const title = escapeAttribute(project.imageAlt ?? `${project.title} interface preview`);
  return `<picture>
    <source srcset="/assets/images/${escapeAttribute(project.image)}-640.webp 640w, /assets/images/${escapeAttribute(project.image)}-1200.webp 1200w" type="image/webp" sizes="(max-width: 760px) 94vw, (max-width: 1100px) 45vw, 560px">
    <img class="${escapeAttribute(className)}" src="/assets/images/${escapeAttribute(project.image)}-1200.webp" width="1200" height="800" alt="${title}" loading="${eager ? "eager" : "lazy"}" decoding="async"${eager ? ' fetchpriority="high"' : ""}>
  </picture>`;
}

export function tagList(items, className = "tag-list", ariaLabel = "Technologies") {
  return `<ul class="${escapeAttribute(className)}" aria-label="${escapeAttribute(ariaLabel)}">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

export function absoluteUrl(siteUrl, path) {
  if (!siteUrl || !siteUrl.startsWith("http")) return "";
  return new URL(path, siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`).toString();
}
