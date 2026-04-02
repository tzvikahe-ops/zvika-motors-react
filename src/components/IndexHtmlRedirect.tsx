import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function getCleanPath(pathname: string) {
  if (!pathname.includes("/index.html")) return null;

  const cleaned = pathname.replace(/\/index\.html\/?$/, "/") || "/";
  return cleaned === "" ? "/" : cleaned;
}

export default function IndexHtmlRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const cleanPath = getCleanPath(location.pathname);

    if (!cleanPath) return;

    navigate(
      {
        pathname: cleanPath,
        search: location.search,
        hash: location.hash,
      },
      { replace: true }
    );
  }, [location.hash, location.pathname, location.search, navigate]);

  return null;
}
