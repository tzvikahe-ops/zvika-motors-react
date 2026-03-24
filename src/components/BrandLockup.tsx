import logoMark from "@/assets/logo-mark-pdf.png";

interface BrandLockupProps {
  size?: "navbar" | "footer";
}

export default function BrandLockup({ size = "navbar" }: BrandLockupProps) {
  const isFooter = size === "footer";
  const iconClass = isFooter
    ? "w-[260px] h-[57px] md:w-[300px] md:h-[66px]"
    : "w-[200px] h-[44px] md:w-[230px] md:h-[50px]";

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
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`text-primary-foreground font-black tracking-[-0.01em] ${
            isFooter ? "text-[20px] md:text-[24px]" : "text-[16px] md:text-[18px]"
          }`}
        >
          המוסך של צביקה
        </span>
        <span
          className={`font-semibold mt-1 leading-tight ${
            isFooter
              ? "text-primary-foreground/85 text-[13px] md:text-[14px]"
              : "text-primary-foreground/80 text-[13px] md:text-[14px]"
          }`}
        >
          אור-צת שירותי רכב
        </span>
      </div>
    </div>
  );
}
