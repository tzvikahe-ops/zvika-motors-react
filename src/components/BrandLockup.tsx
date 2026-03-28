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
      <div className="hidden md:flex items-center gap-3">
        <img
          src={logoText}
          alt="המוסך של צביקה - אור-צת שירותי רכב"
          className="h-[60px] w-auto max-w-[260px] object-contain object-right shrink"
          width={920}
          height={95}
        />
        <img
          src={logoMark}
          alt=""
          aria-hidden="true"
          className="h-[56px] w-auto object-contain shrink-0"
          width={1200}
          height={273}
        />
      </div>

      {/* ── Mobile: stacked lockup ── */}
      <div className="flex md:hidden items-center gap-1 overflow-hidden max-w-full">
        <img
          src={logoText}
          alt="המוסך של צביקה - אור-צת שירותי רכב"
          className="h-[52px] w-auto max-w-[200px] object-contain object-right shrink"
          width={920}
          height={95}
        />
        <img
          src={logoMark}
          alt=""
          aria-hidden="true"
          className="h-[44px] w-auto max-w-[80px] object-contain shrink-0"
          width={1200}
          height={273}
        />
      </div>
    </>
  );
}
