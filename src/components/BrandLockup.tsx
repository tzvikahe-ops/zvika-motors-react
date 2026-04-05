import logoMark from "@/assets/logo-mark-pdf.webp";

interface BrandLockupProps {
  size?: "navbar" | "footer";
}

export default function BrandLockup({ size = "navbar" }: BrandLockupProps) {
  const isFooter = size === "footer";

  return (
    <div className="flex flex-col items-center" style={{ gap: "1px" }} dir="rtl">
      {/* Car icon — top */}
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        style={{ maxWidth: isFooter ? "190px" : "150px", maxHeight: isFooter ? "46px" : "34px" }}
        className="w-auto object-contain"
        width={1200}
        height={273}
      />

      {/* "המוסך של צביקה" */}
      <span
        className="text-brand-red font-black tracking-tight whitespace-nowrap leading-none"
        style={{ fontSize: isFooter ? "22px" : "16px" }}
      >
        המוסך של צביקה
      </span>

      {/* White badge "(אור-צת שירותי רכב)" */}
      <div
        className="bg-white w-full text-center px-2"
        style={{
          border: "1px solid #cc0000",
          borderRadius: "2px",
          paddingTop: "1px",
          paddingBottom: "1px",
        }}
      >
        <span
          className="text-brand-red font-bold whitespace-nowrap"
          style={{ fontSize: isFooter ? "9.5px" : "8px" }}
        >
          (אור-צת שירותי רכב)
        </span>
      </div>
    </div>
  );
}
