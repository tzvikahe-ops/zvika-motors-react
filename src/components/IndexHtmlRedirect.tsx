import { Navigate, useLocation } from "react-router-dom";

function getCleanPath(pathname: string): string | null {
  if (!pathname.includes("index.html")) return null;
  // Strip /index.html (with optional trailing slash) → clean path with trailing slash
  const cleaned = pathname.replace(/\/index\.html\/?$/, "/") || "/";
  return cleaned === pathname ? null : cleaned;
}

/**
 * Synchronously redirects any /…/index.html or /…/index.html/ URL
 * to the clean trailing-slash version. Rendered outside <Routes>.
 */
export default function IndexHtmlRedirect() {
  const location = useLocation();
  const cleanPath = getCleanPath(location.pathname);

  if (cleanPath) {
    return (
      <Navigate
        to={{ pathname: cleanPath, search: location.search, hash: location.hash }}
        replace
      />
    );
  }

  return null;
}
