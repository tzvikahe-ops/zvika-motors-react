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

  const textClass = isFooter
    ? "h-[37px] w-auto md:h-[50px]"
    : "h-[31px] w-auto md:h-[38px]";

  return (
    <div className="flex items-center gap-2 md:gap-3">
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
        className={`${textClass} object-contain shrink-0`}
        width={1920}
        height={395}
      />
    </div>
  );
}
