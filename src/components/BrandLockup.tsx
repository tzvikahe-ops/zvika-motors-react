import logoMark from "@/assets/logo-mark.png";

interface BrandLockupProps {
  size?: "navbar" | "footer";
}

export default function BrandLockup({ size = "navbar" }: BrandLockupProps) {
  const isFooter = size === "footer";

  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        className={`object-contain flex-shrink-0 ${
          isFooter
            ? "h-[52px] md:h-[62px] w-auto"
            : "h-[36px] md:h-[42px] w-auto"
        }`}
        loading={isFooter ? "lazy" : "eager"}
      />
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`text-primary-foreground font-black tracking-[-0.01em] ${
            isFooter
              ? "text-[20px] md:text-[24px]"
              : "text-[16px] md:text-[18px]"
          }`}
        >
          המוסך של צביקה
        </span>
        <span
          className={`font-semibold mt-0.5 ${
            isFooter
              ? "text-primary-foreground/60 text-[13px] md:text-[15px]"
              : "text-primary-foreground/50 text-[10px] md:text-[11px]"
          }`}
        >
          אור-צת שירותי רכב
        </span>
      </div>
    </div>
  );
}