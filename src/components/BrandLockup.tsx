import logoMark from "@/assets/logo-mark.png";

interface BrandLockupProps {
  size?: "navbar" | "footer";
}

export default function BrandLockup({ size = "navbar" }: BrandLockupProps) {
  const isFooter = size === "footer";
  const iconSize = isFooter ? "w-11 h-11 md:w-14 md:h-14" : "w-9 h-9 md:w-10 md:h-10";

  return (
    <div className="flex items-center gap-3 md:gap-3.5">
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        className={`${iconSize} object-contain flex-shrink-0 brightness-0 invert opacity-90`}
        width={512}
        height={512}
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
