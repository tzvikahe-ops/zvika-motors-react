import logoMark from "@/assets/logo-mark-pdf.webp";
import logoText from "@/assets/logo-text-clean.webp";

interface BrandLockupProps {
  size?: "navbar" | "footer";
}

export default function BrandLockup({ size = "navbar" }: BrandLockupProps) {
  const isFooter = size === "footer";

  return (
    <div className="flex items-center" style={{ gap: isFooter ? "10px" : "7px" }} dir="rtl">

      {/* Car mark — RIGHT */}
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        className="object-contain shrink-0"
        style={{ height: isFooter ? "50px" : "38px", width: "auto" }}
        width={1200}
        height={273}
      />

      {/* Logo text — LEFT */}
      <img
        src={logoText}
        alt="המוסך של צביקה - אור-צת שירותי רכב"
        className="object-contain shrink"
        style={{
          height: isFooter ? "64px" : "72px",
          width: "auto",
          maxWidth: isFooter ? "240px" : "220px",
          mixBlendMode: "lighten",
        }}
      />

    </div>
  );
}
