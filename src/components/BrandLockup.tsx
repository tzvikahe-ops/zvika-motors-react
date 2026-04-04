import logoMark from "@/assets/logo-mark-pdf.webp";

interface BrandLockupProps {
  size?: "navbar" | "footer";
}

function LogoText({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center leading-none select-none ${className ?? ""}`} dir="rtl">
      <span className="text-brand-red font-black tracking-tight" style={{ fontSize: "1.4em" }}>
        המוסך של צביקה
      </span>
      <div className="flex items-center gap-1.5 mt-0.5 w-full">
        <span className="flex-1 h-[1.5px] bg-primary-foreground/80" />
        <span className="text-brand-red font-bold tracking-tight whitespace-nowrap" style={{ fontSize: "0.7em" }}>
          אור-צת שירותי רכב
        </span>
        <span className="flex-1 h-[1.5px] bg-primary-foreground/80" />
      </div>
    </div>
  );
}

export default function BrandLockup({ size = "navbar" }: BrandLockupProps) {
  return (
    <>
      {/* ── Desktop lockup ── */}
      <div className="hidden md:flex items-center gap-2.5">
        <LogoText className="text-[18px]" />
        <img
          src={logoMark}
          alt=""
          aria-hidden="true"
          className="h-[44px] w-auto object-contain shrink-0"
          width={1200}
          height={273}
        />
      </div>

      {/* ── Mobile: stacked lockup ── */}
      <div className="flex md:hidden items-center gap-1 overflow-hidden max-w-full">
        <LogoText className="text-[16px]" />
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
