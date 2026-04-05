import logoCar from "@/assets/logo-car-transparent.png";
import logoText from "@/assets/logo-text-transparent.png";
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
      <img
        src={logoCar}
        alt=""
        aria-hidden="true"
        className="object-contain shrink-0"
        style={{ height: "55px", width: "auto", mixBlendMode: "multiply" }}
      />
      <img
        src={logoText}
        alt="המוסך של צביקה - אור-צת שירותי רכב"
        className="object-contain shrink-0"
        style={{ height: "55px", width: "auto", mixBlendMode: "multiply" }}
      />
    </div>
  );
}
