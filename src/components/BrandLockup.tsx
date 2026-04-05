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
    <div className="flex items-center gap-2 shrink-0" dir="rtl">
      {/* Car icon on the RIGHT (RTL start) */}
      <img
        src={logoCar}
        alt=""
        className="object-contain shrink-0"
        style={{ height: "65px", width: "auto", mixBlendMode: "multiply" }}
      />
      {/* Text logo on the LEFT (RTL end) */}
      <img
        src={logoText}
        alt="המוסך של צביקה - אור-צת שירותי רכב"
        className="object-contain shrink-0"
        style={{ height: "60px", width: "auto", mixBlendMode: "multiply" }}
      />
    </div>
  );
}
