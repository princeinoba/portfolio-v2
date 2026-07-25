import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import assert from "node:assert/strict";
import { projects } from "../src/content/projects.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

function localTarget(url) {
  const clean = url.split("#")[0].split("?")[0];
  if (!clean.startsWith("/")) return null;
  if (clean === "/") return path.join(dist, "index.html");
  const relative = clean.replace(/^\/+/, "");
  if (path.extname(relative)) return path.join(dist, relative);
  return path.join(dist, relative, "index.html");
}

const required = [
  "index.html",
  "portfolio/index.html",
  "about/index.html",
  "contact/index.html",
  "404.html",
  "site.webmanifest",
  "robots.txt",
  "assets/site.css",
  "assets/site.js",
  "route-manifest.json",
  "build-meta.json",
  ".well-known/security.txt",
  ...projects.map((project) => `projects/${project.id}/index.html`)
];
for (const relative of required) {
  await stat(path.join(dist, relative));
}

const files = await walk(dist);
const htmlFiles = files.filter((file) => file.endsWith(".html"));
const missingTargets = [];
const pageTitles = new Map();
const canonicalHtmlFiles = new Set([
  "index.html",
  "portfolio/index.html",
  "about/index.html",
  "contact/index.html",
  ...projects.map((project) => `projects/${project.id}/index.html`)
]);
for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const relative = path.relative(dist, file);
  assert.match(html, /<!doctype html>/i, `${relative} must be HTML5`);
  assert.doesNotMatch(html, /href="\s*"/, `${relative} contains an empty link`);
  assert.doesNotMatch(html, /React App|Angelica Mapeso|647-455-5788/, `${relative} contains stale identity or contact data`);
  const isRedirect = html.includes('<meta http-equiv="refresh"');
  if (canonicalHtmlFiles.has(relative)) {
    assert.equal(isRedirect, false, `${relative} must be canonical content, not a redirect`);
  }
  assert.match(html, /<title>[^<]+<\/title>/, `${relative} needs a title`);
  if (!isRedirect) {
    assert.match(html, /<meta name="description" content="[^"]+">/, `${relative} needs a meta description`);
  }
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  if (title && !title.startsWith("Page moved")) {
    assert.ok(!pageTitles.has(title), `duplicate page title: ${title}`);
    pageTitles.set(title, relative);
  }

  const localUrls = [
    ...html.matchAll(/(?:href|src)="(\/[^"]+)"/g),
    ...html.matchAll(/srcset="([^"]+)"/g)
  ].flatMap((match) => {
    if (match[0].startsWith("srcset")) {
      return match[1].split(",").map((part) => [null, part.trim().split(/\s+/)[0]]);
    }
    return [match];
  });

  for (const match of localUrls) {
    const url = match[1];
    if (!url || url.startsWith("//")) continue;
    const target = localTarget(url);
    if (!target) continue;
    try {
      await stat(target);
    } catch {
      missingTargets.push(`${relative}: ${url}`);
    }
  }

  for (const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    assert.doesNotThrow(() => JSON.parse(block[1]), `${relative} contains invalid structured data`);
  }

  for (const image of html.matchAll(/<img\b[^>]*>/g)) {
    assert.match(image[0], /alt="[^"]*"/, `${relative} image missing alt`);
    assert.match(image[0], /width="\d+"/, `${relative} image missing width`);
    assert.match(image[0], /height="\d+"/, `${relative} image missing height`);
  }
}
assert.deepEqual(missingTargets, [], `broken local references:\n${missingTargets.join("\n")}`);

const sourceJs = await readFile(path.join(dist, "assets/site.js"), "utf8");
assert.ok(Buffer.byteLength(sourceJs) < 20_000, "client JavaScript budget exceeded 20 KB uncompressed");
const sourceCss = await readFile(path.join(dist, "assets/site.css"), "utf8");
assert.ok(Buffer.byteLength(sourceCss) < 60_000, "CSS budget exceeded 60 KB uncompressed");

const totalBytes = (await Promise.all(files.map(async (file) => (await stat(file)).size))).reduce((sum, size) => sum + size, 0);
assert.ok(totalBytes < 2 * 1024 * 1024, `dist exceeds the 2 MiB budget: ${totalBytes} bytes`);

console.log(`Verified ${htmlFiles.length} HTML files and ${files.length} total build files.`);
console.log(`Static output size: ${(totalBytes / 1024 / 1024).toFixed(2)} MiB.`);
