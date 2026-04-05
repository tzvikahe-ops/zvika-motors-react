import logoMark from "@/assets/logo-mark-pdf.webp";
import logoText from "@/assets/logo-text-clean.webp";

interface BrandLockupProps {
  size?: "navbar" | "footer";
}

export default function BrandLockup({ size = "navbar" }: BrandLockupProps) {
  const isFooter = size === "footer";

  return (
    <div className="flex items-center" style={{ gap: isFooter ? "10px" : "8px" }} dir="rtl">
      {/* סמל הרכב - תמיד גלוי */}
      <img
        src={logoMark}
        alt={isFooter ? "המוסך של צביקה" : ""}
        aria-hidden={!isFooter}
        className="object-contain shrink-0"
        style={{ height: isFooter ? "52px" : "54px", width: "auto" }}
        width={1200}
        height={273}
      />

      {/* טקסט הלוגו - בפוטר תמיד, בנאב-בר רק דסקטופ (רחב מדי למובייל) */}
      <img
        src={logoText}
        alt="המוסך של צביקה - אור-צת שירותי רכב"
        className={isFooter ? "block" : "hidden md:block"}
        style={{
          height: isFooter ? "52px" : "60px",
          width: "auto",
          objectFit: "contain",
          mixBlendMode: "lighten",
        }}
      />
    </div>
  );
}
