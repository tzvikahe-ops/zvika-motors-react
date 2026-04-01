const BANNER_END = new Date("2026-04-10T00:00:00+03:00");

export const PASSOVER_BANNER_VISIBLE = new Date() < BANNER_END;

/** Height in pixels — must match the rendered height for spacer/offset calculations */
export const BANNER_HEIGHT_MOBILE = 32;
export const BANNER_HEIGHT_DESKTOP = 30;

export default function PassoverBanner() {
  if (!PASSOVER_BANNER_VISIBLE) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-[60] bg-[hsl(43,60%,85%)] text-[hsl(30,30%,18%)] text-center py-[5px] px-3 text-[11px] md:text-[12px] font-bold leading-tight"
        dir="rtl"
      >
        🍷 חג פסח כשר ושמח! המוסך סגור לחופשת חג עד ה-9.4 🍷
      </div>
      {/* Spacer matching banner height */}
      <div className="h-[32px] md:h-[30px]" />
    </>
  );
}
