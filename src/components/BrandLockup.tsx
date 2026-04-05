interface BrandLockupProps {
  size?: "navbar" | "footer";
}

export default function BrandLockup({ size = "navbar" }: BrandLockupProps) {
  const isFooter = size === "footer";

  // Logo natural size: 945x540px
  // Top 68% = car + "המוסך של צביקה" + badge, without year/phone
  // To show 68% of 540px in 60px: image height = 60 / 0.68 ≈ 88px
  const clipH = isFooter ? 76 : 60;
  const imgH = Math.round(clipH / 0.68);

  return (
    <div
      style={{ height: `${clipH}px`, overflow: "hidden", flexShrink: 0 }}
    >
      <img
        src="/logo-full-transparent.webp"
        alt="המוסך של צביקה (אור-צת)"
        style={{ height: `${imgH}px`, width: "auto", display: "block" }}
        width={945}
        height={540}
      />
    </div>
  );
}
