const BANNER_END = new Date("2026-04-10T00:00:00+03:00");

export const PASSOVER_BANNER_VISIBLE = new Date() < BANNER_END;

export default function PassoverBanner() {
  if (!PASSOVER_BANNER_VISIBLE) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-[60] bg-[hsl(43,60%,85%)] text-[hsl(30,30%,18%)] text-center py-2.5 md:py-2 px-4 text-[13px] md:text-sm font-bold tracking-wide shadow-sm"
        dir="rtl"
      >
        🍷 חג פסח כשר ושמח! המוסך סגור לחופשת חג עד ה-9.4 🍷
      </div>
      <div className="h-[40px] md:h-[36px]" />
    </>
  );
}
