/**
 * Load third-party scripts after the page becomes interactive.
 * This prevents render-blocking and improves LCP / TBT.
 */

function loadScript(src: string, attrs?: Record<string, string>): void {
  const s = document.createElement("script");
  s.src = src;
  s.async = true;
  if (attrs) {
    for (const [k, v] of Object.entries(attrs)) s.setAttribute(k, v);
  }
  document.head.appendChild(s);
}

let loaded = false;

export function loadDeferredScripts(): void {
  if (loaded) return;
  loaded = true;

  // Google Analytics (gtag.js) — deferred to avoid render-blocking
  loadScript(
    "https://www.googletagmanager.com/gtag/js?id=G-FWD2H06Y7K"
  );

  // Accessibility widget (enable.co.il)
  loadScript(
    "https://cdn.enable.co.il/licenses/enable-L54645vosqvgvfir-0326-81012/init.js"
  );

  // reCAPTCHA v3 — only needed when the contact form is used
  loadScript(
    "https://www.google.com/recaptcha/api.js?render=6LddXZosAAAAAMqBHbxXsPEvVgcCZPiL9y5E2LZw"
  );
}

/**
 * Schedule deferred script loading:
 * - On first user interaction (scroll / click / touch), OR
 * - After 3.5 seconds (whichever comes first).
 */
export function scheduleDeferredScripts(): void {
  if (typeof window === "undefined") return;

  const events = ["scroll", "click", "touchstart", "keydown"] as const;
  let timer: ReturnType<typeof setTimeout>;

  const trigger = () => {
    clearTimeout(timer);
    events.forEach((e) => window.removeEventListener(e, trigger));
    loadDeferredScripts();
  };

  events.forEach((e) => window.addEventListener(e, trigger, { once: true, passive: true }));
  timer = setTimeout(trigger, 3500);
}
