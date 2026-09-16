/**
 * Writes public/sitemap.xml and public/robots.txt from the route list in
 * src/data/site.js. Runs before every build, so a new route can't be forgotten
 * in one place and remembered in the other.
 */
import { writeFileSync } from "node:fs";
import { SITE_URL, ROUTES } from "../src/data/site.js";

const today = new Date().toISOString().slice(0, 10);

const urls = ROUTES.map(
  ({ path, priority, changefreq }) =>
    `  <url>\n    <loc>${SITE_URL}${path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
).join("\n");

writeFileSync(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);

writeFileSync(
  "public/robots.txt",
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
);

console.log(`sitemap: ${ROUTES.length} routes at ${SITE_URL}`);
