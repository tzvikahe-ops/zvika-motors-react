import logoMark from "@/assets/logo-mark-pdf.png";
import logoText from "@/assets/logo-text-clean.png";

interface BrandLockupProps {
  size?: "navbar" | "footer";
}

export default function BrandLockup({ size = "navbar" }: BrandLockupProps) {
  const isFooter = size === "footer";

  /* ── responsive sizes ─────────────────────────────────
   *  Mobile-first → md: breakpoint for desktop.
   *  Icon (car mark) is ~110-120 % the visual height of the text lockup.
   *  Gap is tighter on mobile to keep the pair compact.            */
  const iconClass = isFooter
    ? "h-[38px] w-auto md:h-[62px]"
    : "h-[30px] w-auto md:h-[48px]";

  const textClass = isFooter
    ? "h-[32px] w-auto md:h-[50px]"
    : "h-[24px] w-auto md:h-[38px]";

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        className={`${iconClass} object-contain shrink-0`}
        width={1200}
        height={273}
      />
      <img
        src={logoText}
        alt="המוסך של צביקה - אור-צת שירותי רכב"
        className={`${textClass} object-contain shrink-0`}
        width={1920}
        height={395}
      />
    </div>
  );
}
