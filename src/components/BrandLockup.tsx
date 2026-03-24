import logoMark from "@/assets/logo-mark-pdf.png";
import logoText from "@/assets/logo-text-clean.png";

interface BrandLockupProps {
  size?: "navbar" | "footer";
}

export default function BrandLockup({ size = "navbar" }: BrandLockupProps) {
  const isFooter = size === "footer";

  const iconClass = isFooter
    ? "h-[42px] w-auto md:h-[62px]"
    : "h-[35px] w-auto md:h-[48px]";

  return (
    <>
      {/* ── Desktop: horizontal lockup ── */}
      <div className="hidden md:flex items-center gap-3">
        <img
          src={logoMark}
          alt=""
          aria-hidden="true"
          className={`${iconClass} object-contain shrink-0`}
          width={1200}
          height={273}
        />
        <span
          className={`font-black text-brand-red shrink-0 leading-none whitespace-nowrap ${
            isFooter ? "text-[26px]" : "text-[22px]"
          }`}
        >
          המוסך של צביקה
        </span>
        <span
          className={`shrink-0 leading-none whitespace-nowrap rounded-sm font-bold text-surface-darker ${
            isFooter
              ? "bg-white/95 px-2.5 py-1.5 text-[15px]"
              : "bg-white/90 px-2 py-1 text-[13px]"
          }`}
        >
          אור-צת שירותי רכב
        </span>
      </div>

      {/* ── Mobile: stacked lockup ── */}
      <div className="flex md:hidden flex-col items-center gap-1.5">
        <div className="flex items-center gap-2">
          <img
            src={logoMark}
            alt=""
            aria-hidden="true"
            className="h-[32px] w-auto object-contain shrink-0"
            width={1200}
            height={273}
          />
          <img
            src={logoText}
            alt="המוסך של צביקה"
            className="h-[28px] w-auto object-contain shrink-0"
            width={1920}
            height={395}
          />
        </div>
        <span
          className={`text-center font-bold text-primary-foreground/70 leading-none whitespace-nowrap ${
            isFooter ? "text-[14px]" : "text-[12px]"
          }`}
        >
          אור-צת שירותי רכב
        </span>
      </div>
    </>
  );
}
