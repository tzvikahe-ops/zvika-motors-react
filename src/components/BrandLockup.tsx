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
    <div className="min-w-0 w-full lg:shrink-0 lg:w-auto overflow-hidden" dir="rtl">
      <div className="flex items-center gap-0 lg:gap-2" style={{ height: "auto" }}>
        <img
          src={logoCar}
          alt=""
          className="object-contain shrink-0 h-[32px] lg:h-[80px]"
          style={{ width: "auto", mixBlendMode: "screen" }}
        />
        <img
          src={logoText}
          alt="המוסך של צביקה - אור-צת שירותי רכב"
          className="object-contain min-w-0 h-[32px] lg:h-[80px]"
          style={{ width: "auto", mixBlendMode: "screen" }}
        />
      </div>
    </div>
  );
}
