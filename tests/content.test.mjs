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
  assert.equal(projects.length, 17);
  assert.deepEqual(
    projects.slice(-4).map((project) => project.id),
    ["daypilot-ai", "burgerforge-ai", "codeclarity-ai", "skyplan-weather-intelligence"]
  );
  for (const retiredId of ["work-day-scheduler", "eat-da-burger", "code-quiz", "weather-dashboard"]) {
    assert.equal(projects.some((project) => project.id === retiredId), false);
  }
});

test("each project has deployable content and local responsive images", async () => {
  for (const project of projects) {
    assert.match(project.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(project.summary.length >= 60, `${project.id} needs a useful summary`);
    assert.ok(project.details.length >= 2, `${project.id} needs structured details`);
    assert.ok(project.status.length >= 8, `${project.id} needs a visible status`);
    assert.ok(project.imageAlt.length >= 20, `${project.id} needs useful screenshot alt text`);
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

test("featured projects surface current, verified releases", () => {
  assert.deepEqual(
    projects.filter((project) => project.featured).map((project) => project.id),
    ["teoyube-scripture-intelligence", "ai-car-marketplace", "real-estate-hub"]
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
  assert.equal(legacyRouteMap["/portfolio/good-games"], "/projects/daypilot-ai/");
  assert.equal(legacyRouteMap["/portfolio/eat-da-burger"], "/projects/burgerforge-ai/");
  assert.equal(legacyRouteMap["/portfolio/code-quiz"], "/projects/codeclarity-ai/");
  assert.equal(legacyRouteMap["/portfolio/weather-dashboard"], "/projects/skyplan-weather-intelligence/");
  assert.equal(legacyRouteMap["/projects/work-day-scheduler"], "/projects/daypilot-ai/");
  assert.equal(legacyRouteMap["/projects/eat-da-burger"], "/projects/burgerforge-ai/");
  assert.equal(legacyRouteMap["/projects/code-quiz"], "/projects/codeclarity-ai/");
  assert.equal(legacyRouteMap["/projects/weather-dashboard"], "/projects/skyplan-weather-intelligence/");
});

test("demo links reflect the July 30, 2026 verification", () => {
  assert.deepEqual(
    projects.filter((project) => project.demoStatus === "verified-live").map((project) => project.id),
    [
      "teoyube-scripture-intelligence", "ai-car-marketplace", "real-estate-hub", "teoyube-frontend",
      "ikea-clone-marketplace", "noel-college", "nominate-it", "bookie", "bitgora", "eat-local",
      "teoyube-cooperation", "pantrylens-ai", "daypilot-ai", "burgerforge-ai", "codeclarity-ai",
      "skyplan-weather-intelligence"
    ]
  );
  assert.equal(projects.filter((project) => project.demoStatus === "unavailable").length, 1);
});
test("the sixteen researched releases have complete evidence-based case studies", () => {
  const researched = new Set([
    "teoyube-scripture-intelligence", "real-estate-hub", "ai-car-marketplace", "teoyube-frontend",
    "ikea-clone-marketplace", "noel-college", "bookie", "eat-local", "nominate-it", "bitgora",
    "teoyube-cooperation", "pantrylens-ai", "daypilot-ai", "burgerforge-ai", "codeclarity-ai",
    "skyplan-weather-intelligence"
  ]);
  assert.equal(projects.filter((candidate) => researched.has(candidate.id)).length, 16);
  for (const project of projects.filter((candidate) => researched.has(candidate.id))) {
    assert.ok(project.caseStudy.problem.length >= 50);
    assert.ok(project.caseStudy.solution.length >= 50);
    assert.ok(project.caseStudy.features.length >= 5);
    assert.ok(project.caseStudy.implementation.length >= 3);
    assert.ok(project.caseStudy.architecture.length >= 50);
    assert.ok(project.caseStudy.boundaries.length >= 2);
  }
  assert.doesNotMatch(JSON.stringify(projects), /github\.com\/ZiyongHe\/bitGora/);
  assert.equal(projects.find((project) => project.id === "bitgora").sourceUrl, "https://github.com/princeinoba/bitGora");
});

test("LinkedIn uses the owner-approved profile URL", () => {
  assert.equal(site.linkedin, "https://www.linkedin.com/in/prince-i-803990121/");
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

test("client interaction source includes explicit Escape handling", async () => {
  const source = await readFile(path.join(root, "src/static/assets/site.js"), "utf8");
  assert.match(source, /event\.key === "Escape" && dialog\.open/);
  assert.match(source, /lastCommandOpener\?\.focus\(\)/);
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
  assert.equal(config.trailingSlash, true);
  assert.ok(
    config.redirects.every((redirect) => redirect.source.endsWith("/")),
    "redirect sources must match Vercel trailing-slash-normalized request paths"
  );
  const security = config.headers.find((entry) => entry.source === "/(.*)");
  const headerNames = new Set(security.headers.map((header) => header.key));
  assert.ok(headerNames.has("Content-Security-Policy"));
  assert.ok(headerNames.has("X-Content-Type-Options"));
  assert.ok(headerNames.has("Referrer-Policy"));
});
