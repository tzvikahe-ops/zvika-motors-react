import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    document.title = "הדף לא נמצא | המוסך של צביקה";
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.content = "הדף המבוקש לא נמצא. חזרו לדף הבית של המוסך של צביקה – מוסך מקצועי בירושלים.";
    // Prevent search engines from indexing 404 pages
    let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = "noindex, nofollow";
    return () => { if (robots) robots.content = "index, follow"; };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted" dir="rtl">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">הדף המבוקש לא נמצא</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          חזרה לדף הבית
        </a>
      </div>
    </div>
  );
};

export default NotFound;
