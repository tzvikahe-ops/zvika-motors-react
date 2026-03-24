interface BrandLockupProps {
  size?: "navbar" | "footer";
}

export default function BrandLockup({ size = "navbar" }: BrandLockupProps) {
  const isFooter = size === "footer";

  return (
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
  );
}