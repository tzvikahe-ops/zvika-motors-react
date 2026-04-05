import logoMark from "@/assets/logo-mark-pdf.webp";
import logoText from "@/assets/logo-text-clean.webp";

interface BrandLockupProps {
  size?: "navbar" | "footer";
}

export default function BrandLockup({ size = "navbar" }: BrandLockupProps) {
  const isFooter = size === "footer";

  return (
    /* RTL: first child = rightmost → car on right, text on left */
    <div className="flex items-center" style={{ gap: isFooter ? "10px" : "7px" }} dir="rtl">

      {/* ── Car mark — RIGHT (first in RTL) ── */}
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        className="object-contain shrink-0"
        style={{
          height: isFooter ? "58px" : "46px",
          width: "auto",
        }}
        width={1200}
        height={273}
      />

      {/* ── Logo text image — LEFT ── */}
      <img
        src={logoText}
        alt="המוסך של צביקה - אור-צת שירותי רכב"
        className="object-contain shrink-0"
        style={{
          height: isFooter ? "48px" : "38px",
          width: "auto",
        }}
        width={1714}
        height={328}
      />

    </div>
  );
}
