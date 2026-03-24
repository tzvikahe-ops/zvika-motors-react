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
      <div className="hidden md:flex flex-col items-start gap-1.5">
        <div className="flex items-center gap-3">
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
        </div>
        <p
          className={`font-bold leading-[1.3] whitespace-nowrap bg-transparent border-none shadow-none p-0 m-0 rounded-none ${
            isFooter
              ? "text-[20px] text-primary-foreground mt-0"
              : "text-[15px] text-primary-foreground/90"
          }`}
        >
          אור-צת שירותי רכב
        </p>
      </div>

      {/* ── Mobile: stacked lockup ── */}
      <div className="flex md:hidden flex-col items-center gap-2">
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
          className={`text-center font-bold text-primary-foreground/80 leading-[1.3] ${
            isFooter ? "text-[18px]" : "text-[15px]"
          }`}
        >
          אור-צת שירותי רכב
        </span>
      </div>
    </>
  );
}
