import logoCarTransparent from "@/assets/logo-car-transparent.png";
import logoTextTransparent from "@/assets/logo-text-transparent.png";
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
      <div className="flex items-center gap-1 lg:gap-2">
        <img
          src={logoCarTransparent}
          alt=""
          className="object-contain shrink-0 h-[32px] lg:h-[72px]"
          style={{ width: "auto", filter: "drop-shadow(0 0 6px hsl(2 58% 42% / 0.15))" }}
        />
        <div className="hidden lg:block w-px h-9 bg-primary-foreground/10 mx-0.5" />
        <img
          src={logoTextTransparent}
          alt="המוסך של צביקה - אור-צת שירותי רכב"
          className="object-contain min-w-0 h-[32px] lg:h-[64px]"
          style={{ width: "auto", filter: "drop-shadow(0 0 4px hsl(2 58% 42% / 0.1))" }}
        />
      </div>
    </div>
  );
}