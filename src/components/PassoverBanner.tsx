const BANNER_END = new Date("2026-04-10T00:00:00+03:00");

export const PASSOVER_BANNER_VISIBLE = new Date() < BANNER_END;

export default function PassoverBanner() {
  if (!PASSOVER_BANNER_VISIBLE) return null;

  return (
    <div
      className="w-full bg-[hsl(43,60%,85%)] text-[hsl(30,30%,18%)] text-center py-1.5 px-3 text-[12px] md:text-[13px] font-bold tracking-wide"
      dir="rtl"
    >
      🍷 חג פסח כשר ושמח! המוסך סגור לחופשת חג עד ה-9.4 🍷
    </div>
  );
}
