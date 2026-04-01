const BANNER_END = new Date("2026-04-10T00:00:00+03:00");

export const PASSOVER_BANNER_VISIBLE = new Date() < BANNER_END;

export default function PassoverBanner() {
  if (!PASSOVER_BANNER_VISIBLE) return null;

  return (
    <div
      className="fixed bottom-24 md:bottom-6 right-5 z-50 bg-[hsl(43,60%,85%)] text-[hsl(30,30%,18%)] py-1.5 px-3 text-[11px] font-bold rounded-lg shadow-md"
      dir="rtl"
    >
      🍷 חג פסח כשר ושמח!
    </div>
  );
}
