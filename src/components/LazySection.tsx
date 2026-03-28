import { useState, useEffect, useRef, type ReactNode } from "react";

/**
 * Defers rendering of children until the placeholder enters the viewport.
 * This breaks up long tasks by only mounting heavy components when needed.
 */
export default function LazySection({
  children,
  rootMargin = "200px",
  minHeight = "200px",
}: {
  children: ReactNode;
  rootMargin?: string;
  minHeight?: string;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Use IntersectionObserver to detect when placeholder nears viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  if (visible) return <>{children}</>;

  return <div ref={ref} style={{ minHeight }} />;
}
