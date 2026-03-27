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
      {/* ── Desktop lockup ── */}
      <div className="hidden md:flex">
        <div className="flex items-center gap-3">
          <img
            src={logoMark}
            alt=""
            aria-hidden="true"
            className={`${iconClass} object-contain shrink-0`}
            width={1200}
            height={273}
          />

          <div className="flex flex-col items-start justify-center gap-1">
            <span
              className={`font-black text-brand-red shrink-0 leading-none whitespace-nowrap ${
                isFooter ? "text-[26px]" : "text-[22px]"
              }`}
            >
              המוסך של צביקה
            </span>
            <p
              className={`font-bold leading-[1.3] whitespace-nowrap m-0 ${
                isFooter
                  ? "text-[19px] text-primary-foreground"
                  : "text-[15px] text-primary-foreground/90"
              }`}
            >
              אור-צת שירותי רכב
            </p>
          </div>
        </div>
      </div>

      {/* ── Mobile: stacked lockup ── */}
      <div className="flex md:hidden items-center gap-2">
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
    </>
  );
}
