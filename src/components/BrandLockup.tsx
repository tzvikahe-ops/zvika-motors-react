import logoMark from "@/assets/logo-mark-pdf.png";
import logoText from "@/assets/logo-text-clean.png";

interface BrandLockupProps {
  size?: "navbar" | "footer";
}

export default function BrandLockup({ size = "navbar" }: BrandLockupProps) {
  const isFooter = size === "footer";
  const iconClass = isFooter
    ? "w-[260px] h-[57px] md:w-[300px] md:h-[66px]"
    : "w-[200px] h-[44px] md:w-[230px] md:h-[50px]";

  const textClass = isFooter
    ? "h-[48px] md:h-[54px]"
    : "h-[36px] md:h-[40px]";

  return (
    <div className="flex items-center gap-3 md:gap-3.5">
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        className={`${iconClass} object-contain shrink-0`}
        width={1200}
        height={273}
      />
      <img
        src={logoText}
        alt="המוסך של צביקה - אור-צת שירותי רכב"
        className={`${textClass} w-auto object-contain shrink-0`}
        width={1920}
        height={395}
      />
    </div>
  );
}
