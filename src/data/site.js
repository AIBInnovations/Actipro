/**
 * Site-wide constants.
 *
 * !! SITE_URL is a guess and must be confirmed before launch. !!
 *
 * It is the origin used for canonical URLs, Open Graph URLs and sitemap.xml,
 * so pointing it at the wrong domain is worse than leaving it out - search
 * engines would be told the real pages live somewhere else. One constant, used
 * everywhere, so correcting it is a single edit.
 */
export const SITE_URL = "https://actipro.in";

export const SITE_NAME = "Actipro";

/** Falls back into every page that doesn't set its own. */
export const DEFAULT_DESCRIPTION =
  "Actipro is a lifestyle cooking oil from Madhuri Refiners: Refined Sunflower Oil, Corn Oil and Rice Bran Oil, each refined with its own dedicated process, every batch traceable.";

/** Shown when a page is shared. Replace with a purpose-made 1200x630 image. */
export const SHARE_IMAGE = "/assets/img/pack-range.webp";

/**
 * Every public route, for sitemap.xml.
 *
 * Kept here rather than derived from App.jsx so the generator doesn't have to
 * parse JSX. If you add a route, add it here too - `npm run build` regenerates
 * the sitemap from this list.
 */
export const ROUTES = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/products", priority: "0.9", changefreq: "monthly" },
  { path: "/products/sunflower", priority: "0.9", changefreq: "monthly" },
  { path: "/products/corn", priority: "0.9", changefreq: "monthly" },
  { path: "/products/rice-bran", priority: "0.9", changefreq: "monthly" },
  { path: "/the-process", priority: "0.8", changefreq: "yearly" },
  { path: "/find-your-oil", priority: "0.8", changefreq: "yearly" },
  { path: "/about-us", priority: "0.7", changefreq: "yearly" },
  { path: "/gifting", priority: "0.6", changefreq: "yearly" },
  { path: "/faqs", priority: "0.6", changefreq: "monthly" },
  { path: "/contact-us", priority: "0.6", changefreq: "yearly" },
  { path: "/terms", priority: "0.2", changefreq: "yearly" },
  { path: "/privacy-policy", priority: "0.2", changefreq: "yearly" },
];
