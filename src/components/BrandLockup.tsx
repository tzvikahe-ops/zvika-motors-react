import logoMark from "@/assets/logo-mark-pdf.webp";

// logo-full-transparent.webp: 945×540px
// Clip region: y=177→377 (title + subtitle badge, before "1993")
// scale = displayH / 200 (source region height)

interface BrandLockupProps {
  size?: "navbar" | "footer";
}

export default function BrandLockup({ size = "navbar" }: BrandLockupProps) {
  const isFooter = size === "footer";
  // Source region y:178→330 (152px) — safely before "1993" row
  const displayH = isFooter ? 48 : 38;
  const scale = displayH / 152;
  const imgW = Math.round(945 * scale);
  const imgH = Math.round(540 * scale);
  const marginTop = -Math.round(178 * scale);

  return (
    <div className="flex items-center" style={{ gap: isFooter ? "10px" : "7px" }} dir="rtl">

      {/* Car mark — RIGHT */}
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        className="object-contain shrink-0"
        style={{ height: isFooter ? "58px" : "46px", width: "auto" }}
        width={1200}
        height={273}
      />

      {/* Logo text clip — LEFT: title + badge only, no car, no 1993 */}
      <div style={{ width: imgW, height: displayH, overflow: "hidden", flexShrink: 0 }}>
        <img
          src="/logo-full-transparent.webp"
          alt="המוסך של צביקה - אור-צת שירותי רכב"
          style={{ width: imgW, height: imgH, marginTop, display: "block" }}
          width={945}
          height={540}
        />
      </div>

    </div>
  );
}
