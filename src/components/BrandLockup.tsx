import logoMark from "@/assets/logo-mark.png";

interface BrandLockupProps {
  size?: "navbar" | "footer";
}

export default function BrandLockup({ size = "navbar" }: BrandLockupProps) {
  const isFooter = size === "footer";
  const iconSize = isFooter ? "w-10 h-10 md:w-12 md:h-12" : "w-7 h-7 md:w-8 md:h-8";

  return (
    <div className="flex items-center gap-2.5 md:gap-3">
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        className={`${iconSize} object-contain flex-shrink-0`}
        width={48}
        height={48}
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
