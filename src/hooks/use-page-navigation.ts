import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useCallback } from "react";
import type { Page } from "@/types/page";

const pageToPath: Record<Page, string> = {
  home: "/",
  services: "/services",
  about: "/about",
  gallery: "/gallery",
  contact: "/contact",
  faq: "/faq",
  blog: "/blog",
  "blog-article": "/blog", // handled specially with slug
  privacy: "/privacy",
  accessibility: "/accessibility",
  "image-generator": "/image-generator",
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

  const currentPage: Page = location.pathname.startsWith("/blog/")
    ? "blog-article"
    : pathToPage[location.pathname] || "home";

  const articleSlug = params.slug || "";

  const setPage = useCallback(
    (page: Page, slug?: string) => {
      if (page === "blog-article" && slug) {
        navigate(`/blog/${slug}`);
      } else {
        const path = pageToPath[page] || "/";
        navigate(path);
      }
    },
    [navigate]
  );

  return { currentPage, articleSlug, setPage };
}
