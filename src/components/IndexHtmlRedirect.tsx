import { Navigate, useLocation } from "react-router-dom";

/**
 * Synchronously redirects:
 * 1. Any /…/index.html or /…/index.html/ → clean trailing-slash URL
 * 2. Any /blog/<slug> (no trailing slash) → /blog/<slug>/
 */
export default function IndexHtmlRedirect() {
  const location = useLocation();
  const { pathname } = location;

  // 1. Strip index.html (with optional trailing slash)
  if (pathname.includes("index.html")) {
    const cleaned = pathname.replace(/\/index\.html\/?$/, "/") || "/";
    if (cleaned !== pathname) {
      return (
        <Navigate
          to={{ pathname: cleaned, search: location.search, hash: location.hash }}
          replace
        />
      );
    }
  }

  // 2. Blog slug without trailing slash → add it
  if (/^\/blog\/[^/]+$/.test(pathname)) {
    return (
      <Navigate
        to={{ pathname: pathname + "/", search: location.search, hash: location.hash }}
        replace
      />
    );
  }

  return null;
}
