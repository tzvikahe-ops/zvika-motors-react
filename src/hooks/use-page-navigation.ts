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
  services: "/services/index.html",
  about: "/about/index.html",
  gallery: "/gallery/index.html",
  contact: "/contact/index.html",
  faq: "/faq/index.html",
  blog: "/blog/index.html",
  "blog-article": "/blog/index.html", // handled specially with slug
  privacy: "/privacy/index.html",
  accessibility: "/accessibility/index.html",
  "image-generator": "/image-generator/index.html",
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
    (page: Page, slug?: string) => {
      if (page === "blog-article" && slug) {
        navigate(`/blog/${slug}/index.html`);
      } else {
        const path = pageToPath[page] || "/";
        navigate(path);
      }
    },
    [navigate]
  );

  return { currentPage, articleSlug, setPage };
}
