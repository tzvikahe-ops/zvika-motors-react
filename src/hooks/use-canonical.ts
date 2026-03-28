import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://www.ortzat.co.il";

export function useCanonical() {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonicalUrl = pathname === "/" ? `${BASE_URL}/` : `${BASE_URL}${pathname}`;

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (link) {
      link.href = canonicalUrl;
    } else {
      link = document.createElement("link");
      link.rel = "canonical";
      link.href = canonicalUrl;
      document.head.appendChild(link);
    }
  }, [pathname]);
}
