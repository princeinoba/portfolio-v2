import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");
const port = Number(process.env.PORT || 4173);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".pdf": "application/pdf"
};

async function resolveFile(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const safe = path.normalize(decoded).replace(/^(\.\.(\/|\\|$))+/, "");
  let candidate = path.join(root, safe);
  try {
    const info = await stat(candidate);
    if (info.isDirectory()) candidate = path.join(candidate, "index.html");
    return candidate;
  } catch {
    if (!path.extname(candidate)) {
      try {
        await stat(`${candidate}.html`);
        return `${candidate}.html`;
      } catch {
        return path.join(root, "404.html");
      }
    }
    return path.join(root, "404.html");
  }
}

const server = createServer(async (request, response) => {
  try {
    const file = await resolveFile(request.url || "/");
    const body = await readFile(file);
    const is404 = file.endsWith("404.html") && !String(request.url).includes("404.html");
    response.writeHead(is404 ? 404 : 200, {
      "Content-Type": mime[path.extname(file)] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    response.end(body);
  } catch (error) {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(`Server error: ${error.message}`);
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Portfolio preview: http://127.0.0.1:${port}`);
});
