/**
 * Google Analytics 4 – Custom event tracking utility
 * GA4 measurement ID: G-FWD2H06Y7K (loaded in index.html)
 *
 * All helper functions gracefully no-op when gtag is unavailable
 * (e.g. ad-blockers, localhost without the script).
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function sendEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, { ...params, send_to: "G-FWD2H06Y7K", transport_type: "beacon" });
  }
}

/* ── WhatsApp click ─────────────────────────────────────────── */
/**
 * Track a WhatsApp button click.
 * @param buttonLocation e.g. "hero", "cta", "footer", "floating", "services"
 */
export function trackWhatsAppClick(buttonLocation: string) {
  sendEvent("whatsapp_click", {
    page_location: window.location.pathname,
    button_location: buttonLocation,
  });
}

/* ── Phone click ────────────────────────────────────────────── */
/**
 * Track a phone (tel:) link click.
 * @param buttonLocation e.g. "hero", "cta", "footer", "navbar"
 */
export function trackPhoneClick(buttonLocation: string) {
  sendEvent("phone_click", {
    page_location: window.location.pathname,
    button_location: buttonLocation,
  });
}

/* ── Form submission ────────────────────────────────────────── */
/**
 * Track a successful contact form submission.
 */
export function trackFormSubmit() {
  sendEvent("form_submit", {
    page_location: window.location.pathname,
  });
}

/* ── Scroll depth (50 % / 90 %) ─────────────────────────────── */
let scrollTracked50 = false;
let scrollTracked90 = false;

function handleScroll() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (docHeight <= 0) return;

  const pct = (scrollTop / docHeight) * 100;

  if (!scrollTracked50 && pct >= 50) {
    scrollTracked50 = true;
    sendEvent("scroll_50", { page_location: window.location.pathname });
  }
  if (!scrollTracked90 && pct >= 90) {
    scrollTracked90 = true;
    sendEvent("scroll_90", { page_location: window.location.pathname });
  }
}

/**
 * Reset scroll depth flags (call on page/route change).
 */
export function resetScrollTracking() {
  scrollTracked50 = false;
  scrollTracked90 = false;
}

/**
 * Initialise passive scroll listener. Call once on app mount.
 */
export function initScrollTracking() {
  window.addEventListener("scroll", handleScroll, { passive: true });
}
