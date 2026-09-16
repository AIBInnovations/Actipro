import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION, SHARE_IMAGE } from "../data/site.js";

/**
 * Per-route document metadata.
 *
 * A single-page app keeps whatever `index.html` declared, so before this every
 * route served the same title and description - which is what search engines
 * index and what a pasted link previews as. This writes the head directly
 * rather than pulling in a helmet library for six tags.
 *
 * Nothing is reverted on unmount: the next route overwrites it, and a
 * half-torn-down head between routes would be worse than a stale one.
 *
 * Note this is client-side. Crawlers that execute JavaScript (Google, Bing)
 * will see it; a prerender or SSR step is what makes it visible to the ones
 * that don't. Worth doing if organic search matters.
 */

/** Creates the tag on first use, then reuses it. */
function setTag(selector, attrs) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement(attrs.rel ? "link" : "meta");
    Object.entries(attrs).forEach(([k, v]) => {
      if (k !== "content" && k !== "href") element.setAttribute(k, v);
    });
    document.head.appendChild(element);
  }

  if (attrs.content !== undefined) element.setAttribute("content", attrs.content);
  if (attrs.href !== undefined) element.setAttribute("href", attrs.href);
}

export function usePageMeta({ title, description, image } = {}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Cooking Oil, Reconsidered`;
    const desc = description || DEFAULT_DESCRIPTION;
    const url = `${SITE_URL}${pathname}`;
    const img = `${SITE_URL}${image || SHARE_IMAGE}`;

    document.title = fullTitle;

    setTag('meta[name="description"]', { name: "description", content: desc });
    setTag('link[rel="canonical"]', { rel: "canonical", href: url });

    setTag('meta[property="og:title"]', { property: "og:title", content: fullTitle });
    setTag('meta[property="og:description"]', { property: "og:description", content: desc });
    setTag('meta[property="og:url"]', { property: "og:url", content: url });
    setTag('meta[property="og:image"]', { property: "og:image", content: img });

    setTag('meta[name="twitter:title"]', { name: "twitter:title", content: fullTitle });
    setTag('meta[name="twitter:description"]', { name: "twitter:description", content: desc });
    setTag('meta[name="twitter:image"]', { name: "twitter:image", content: img });
  }, [title, description, image, pathname]);
}
