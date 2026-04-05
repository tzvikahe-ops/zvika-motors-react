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
      <div dir="rtl">
        <div className="flex items-center gap-1.5">
          <img
            src={logoCarTransparent}
            alt=""
            className="object-contain shrink-0 h-[28px]"
            style={{ width: "auto", filter: "drop-shadow(0 0 6px hsl(2 58% 42% / 0.15))" }}
          />
          <div className="w-px h-7 bg-primary-foreground/10 mx-0.5" />
          <img
            src={logoTextTransparent}
            alt="המוסך של צביקה - אור-צת שירותי רכב"
            className="object-contain h-[48px]"
            style={{ width: "auto", filter: "drop-shadow(0 0 4px hsl(2 58% 42% / 0.1))" }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full lg:shrink-0 lg:w-auto" dir="rtl">
      <div className="flex items-center gap-0 lg:gap-2">
        <img
          src={logoCarTransparent}
          alt=""
          className="object-contain shrink-0 h-[18px] lg:h-[44px] -ml-1 lg:ml-0"
          style={{ width: "auto", filter: "drop-shadow(0 0 6px hsl(2 58% 42% / 0.15))" }}
        />
        <div className="hidden lg:block w-px h-10 bg-primary-foreground/10 mx-0.5" />
        <img
          src={logoTextTransparent}
          alt="המוסך של צביקה - אור-צת שירותי רכב"
          className="object-contain h-[46px] lg:h-[78px] -mr-1 lg:mr-0"
          style={{ width: "auto", filter: "drop-shadow(0 0 4px hsl(2 58% 42% / 0.1))" }}
        />
      </div>
    </div>
  );
}
