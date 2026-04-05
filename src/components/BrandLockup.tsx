import logoCar from "@/assets/logo-car.jpg";
import logoText from "@/assets/logo-text.jpg";
import logoPrimary from "@/assets/logo-primary.png";

interface BrandLockupProps {
  size?: "navbar" | "footer";
}

export default function BrandLockup({ size = "navbar" }: BrandLockupProps) {
  const isFooter = size === "footer";

  if (isFooter) {
    return (
      <img
        src={logoPrimary}
        alt="המוסך של צביקה - אור-צת שירותי רכב"
        className="object-contain shrink-0"
        style={{ height: "56px", width: "auto", mixBlendMode: "multiply" }}
      />
    );
  }

  return (
    <div className="shrink-0 max-w-full" dir="rtl">
      <div className="flex items-center gap-0.5 sm:gap-1 lg:gap-2 shrink-0" style={{ height: "auto" }}>
        <img
          src={logoCar}
          alt=""
          className="object-contain shrink-0 h-[24px] sm:h-[28px] lg:h-[80px]"
          style={{ width: "auto", mixBlendMode: "screen" }}
        />
        <img
          src={logoText}
          alt="המוסך של צביקה - אור-צת שירותי רכב"
          className="object-contain shrink-0 h-[24px] sm:h-[28px] lg:h-[80px]"
          style={{ width: "auto", mixBlendMode: "screen" }}
        />
      </div>
    </div>
  );
}
