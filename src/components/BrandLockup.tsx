import logoMark from "@/assets/logo-mark-pdf.webp";

interface BrandLockupProps {
  size?: "navbar" | "footer";
}

function LogoText({ size }: { size: "navbar" | "footer" }) {
  const isFooter = size === "footer";
  return (
    <div className="flex flex-col leading-none select-none" dir="rtl">
      <span
        className="text-brand-red font-black tracking-tight whitespace-nowrap"
        style={{ fontSize: isFooter ? "22px" : "19px" }}
      >
        המוסך של צביקה
      </span>
      <div
        className="bg-white mt-[3px] px-2 py-[2px] text-center self-stretch"
        style={{ borderRadius: "2px" }}
      >
        <span
          className="text-brand-red font-bold whitespace-nowrap tracking-tight"
          style={{ fontSize: isFooter ? "10px" : "9px" }}
        >
          אור-צת שירותי רכב
        </span>
      </div>
    </div>
  );
}

export default function BrandLockup({ size = "navbar" }: BrandLockupProps) {
  const isFooter = size === "footer";

  return (
    <>
      {/* ── Desktop lockup ── */}
      <div className="hidden md:flex items-center gap-2.5">
        <LogoText size={size} />
        <img
          src={logoMark}
          alt=""
          aria-hidden="true"
          className={isFooter ? "h-[52px] w-auto object-contain shrink-0" : "h-[44px] w-auto object-contain shrink-0"}
          width={1200}
          height={273}
        />
      </div>

      {/* ── Mobile: stacked lockup ── */}
      <div className="flex md:hidden items-center gap-1.5 overflow-hidden max-w-full">
        <LogoText size={size} />
        <img
          src={logoMark}
          alt=""
          aria-hidden="true"
          className={isFooter ? "h-[44px] w-auto max-w-[90px] object-contain shrink-0" : "h-[40px] w-auto max-w-[80px] object-contain shrink-0"}
          width={1200}
          height={273}
        />
      </div>
    </>
  );
}
