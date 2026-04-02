import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useCallback } from "react";
import type { Page } from "@/types/page";

function normalizePathname(pathname: string): string {
  let normalized = pathname.replace(/\/index\.html$/, "");
  if (normalized === "") normalized = "/";
  if (normalized.length > 1 && normalized.endsWith("/")) {
    normalized = normalized.slice(0, -1);
  }
  return normalized;
}

const pageToPath: Record<Page, string> = {
  home: "/",
  services: "/services/",
  about: "/about/",
  gallery: "/gallery/",
  contact: "/contact/",
  faq: "/faq/",
  blog: "/blog/",
  "blog-article": "/blog/", // handled specially with slug
  privacy: "/privacy/",
  accessibility: "/accessibility/",
  "image-generator": "/image-generator/",
};

const pathToPage: Record<string, Page> = {
  "/": "home",
  "/services": "services",
  "/about": "about",
  "/gallery": "gallery",
  "/contact": "contact",
  "/faq": "faq",
  "/blog": "blog",
  "/privacy": "privacy",
  "/accessibility": "accessibility",
  "/image-generator": "image-generator",
};

export function usePageNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams<{ slug?: string }>();
  const normalizedPath = normalizePathname(location.pathname);

  const currentPage: Page = normalizedPath.startsWith("/blog/")
    ? "blog-article"
    : pathToPage[normalizedPath] || "home";

  const articleSlug = params.slug || "";

  const setPage = useCallback(
    (page: Page, slug?: string, hash?: string) => {
      if (page === "blog-article" && slug) {
        navigate(`/blog/${slug}/`);
      } else {
        const path = pageToPath[page] || "/";
        navigate(path);
      }
      if (hash) {
        // Wait for page render, then scroll to anchor
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
      }
    },
    [navigate]
  );

  return { currentPage, articleSlug, setPage };
}
