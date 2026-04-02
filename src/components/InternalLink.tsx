import { useNavigate } from "react-router-dom";
import type { Page } from "@/types/page";
import type { MouseEvent, ReactNode } from "react";

/** Maps a Page (and optional slug/hash) to a crawlable href */
export function pageToHref(page: Page, slug?: string, hash?: string): string {
  if (page === "blog-article" && slug) {
    return `/blog/${slug}/${hash ? `#${hash}` : ""}`;
  }
  const paths: Record<Page, string> = {
    home: "/",
    services: "/services/",
    about: "/about/",
    gallery: "/gallery/",
    contact: "/contact/",
    faq: "/faq/",
    blog: "/blog/",
    "blog-article": "/blog/",
    privacy: "/privacy/",
    accessibility: "/accessibility/",
    "image-generator": "/image-generator/",
  };
  return `${paths[page] || "/"}${hash ? `#${hash}` : ""}`;
}

interface InternalLinkProps {
  page: Page;
  slug?: string;
  hash?: string;
  className?: string;
  children: ReactNode;
}

/**
 * SEO-friendly internal link:
 * - Renders a real <a href="..."> for crawlers
 * - Uses client-side navigation on click (SPA)
 * - Supports hash scrolling
 */
export default function InternalLink({ page, slug, hash, className, children }: InternalLinkProps) {
  const navigate = useNavigate();

  const href = pageToHref(page, slug, hash);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Allow ctrl/cmd+click to open in new tab
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    navigate(href.replace(/#.*$/, "")); // navigate without hash
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
