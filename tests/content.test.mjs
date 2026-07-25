import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { projects } from "../src/content/projects.mjs";
import { legacyRouteMap, site } from "../src/content/site.mjs";
import { renderLayout } from "../src/templates/layout.mjs";
import { renderHome, renderPortfolio } from "../src/templates/pages.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("project identifiers, titles, and routes are unique", () => {
  const ids = projects.map((project) => project.id);
  const titles = projects.map((project) => project.title);
  const legacyRoutes = projects.map((project) => project.originalRoute).filter(Boolean);
  assert.equal(new Set(ids).size, ids.length);
  assert.equal(new Set(titles).size, titles.length);
  assert.equal(new Set(legacyRoutes).size, legacyRoutes.length);
  assert.equal(projects.length, 9);
});

test("each project has deployable content and local responsive images", async () => {
  for (const project of projects) {
    assert.match(project.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(project.summary.length >= 60, `${project.id} needs a useful summary`);
    assert.ok(project.details.length >= 2, `${project.id} needs structured details`);
    assert.ok(project.technologies.length >= 3, `${project.id} needs technology evidence`);
    assert.doesNotThrow(() => new URL(project.sourceUrl));
    assert.ok(["verified-live", "unavailable"].includes(project.demoStatus));
    if (project.demoStatus === "verified-live") {
      assert.doesNotThrow(() => new URL(project.demoUrl));
    } else {
      assert.equal(project.demoUrl, null);
    }
    await access(path.join(root, "src/static/assets/images", `${project.image}-640.webp`));
    await access(path.join(root, "src/static/assets/images", `${project.image}-1200.webp`));
  }
});

test("featured projects preserve the original first-three selection intent", () => {
  assert.deepEqual(
    projects.filter((project) => project.featured).map((project) => project.id),
    ["teoyube", "nominate-it", "bookie"]
  );
});

test("Teoyube and BitGora no longer collide", () => {
  const teoyube = projects.find((project) => project.id === "teoyube");
  const bitgora = projects.find((project) => project.id === "bitgora");
  assert.ok(teoyube);
  assert.ok(bitgora);
  assert.notEqual(teoyube.id, bitgora.id);
  assert.equal(teoyube.originalRoute, "/portfolio/bitgora");
  assert.equal(bitgora.originalRoute, null);
  assert.equal(legacyRouteMap["/portfolio/bitgora"], "/projects/teoyube/");
});

test("demo links reflect the July 25, 2026 availability check", () => {
  assert.deepEqual(
    projects.filter((project) => project.demoStatus === "verified-live").map((project) => project.id),
    ["work-day-scheduler", "eat-local", "code-quiz", "weather-dashboard"]
  );
  assert.equal(projects.filter((project) => project.demoStatus === "unavailable").length, 5);
});

test("visible telephone number and telephone link represent the same number", () => {
  const visibleDigits = site.phoneDisplay.replace(/\D/g, "");
  const hrefDigits = site.phoneHref.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");
  assert.equal(visibleDigits, hrefDigits);
});

test("generated templates have semantic landmarks and no empty links", () => {
  const html = renderLayout({
    title: "Home",
    description: site.description,
    path: "/",
    body: renderHome(projects),
    projects,
    siteUrl: "https://example.com"
  });
  assert.match(html, /<header class="site-header"/);
  assert.match(html, /<main id="main-content">/);
  assert.match(html, /<footer class="site-footer">/);
  assert.match(html, /<link rel="canonical" href="https:\/\/example\.com\/">/);
  assert.doesNotMatch(html, /href="\s*"/);
  assert.doesNotMatch(html, /React App|Angelica Mapeso|647-455-5788/);
  assert.match(html, /data-command-open aria-label="Open quick navigation"/);
  assert.match(html, /footer-brand[^>]+aria-label="Prince Inoba home"/);
  const structuredData = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
  assert.equal(structuredData.length, 3);
  assert.deepEqual(structuredData.map((entry) => entry["@type"]), ["Person", "WebSite", "ItemList"]);
});

test("portfolio includes usable search and an explicit empty state", () => {
  const html = renderPortfolio(projects);
  assert.match(html, /data-project-search/);
  assert.match(html, /data-project-category/);
  assert.match(html, /data-project-empty/);
  assert.match(html, /No matching projects/);
});

test("Vercel configuration is strict static output", async () => {
  const config = JSON.parse(await readFile(path.join(root, "vercel.json"), "utf8"));
  assert.equal(config.outputDirectory, "dist");
  assert.equal(config.buildCommand, "npm run build");
  assert.equal(config.framework, null);
  const security = config.headers.find((entry) => entry.source === "/(.*)");
  const headerNames = new Set(security.headers.map((header) => header.key));
  assert.ok(headerNames.has("Content-Security-Policy"));
  assert.ok(headerNames.has("X-Content-Type-Options"));
  assert.ok(headerNames.has("Referrer-Policy"));
});
