import logoMark from "@/assets/logo-mark-pdf.webp";

// logo-full-transparent.webp is 945×540px.
// The text area (המוסך של צביקה + subtitle box) occupies roughly
// 35%–67% of the image height (y: 189–362 of 540).
// We clip it via overflow:hidden + negative margin-top.

interface BrandLockupProps {
  size?: "navbar" | "footer";
}

export default function BrandLockup({ size = "navbar" }: BrandLockupProps) {
  const isFooter = size === "footer";

  // Target display height for the text portion
  const textH = isFooter ? 56 : 44;
  // Original text region height in the source image (pixels)
  const srcTextH = 173;
  const scale = textH / srcTextH;
  const imgW = Math.round(945 * scale);
  const imgH = Math.round(540 * scale);
  // Top of text region in source = 189px
  const offsetTop = -Math.round(189 * scale);

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

      {/* ── Logo text area — LEFT, clipped to show only title + subtitle box ── */}
      <div
        aria-hidden="true"
        style={{
          width: imgW,
          height: textH,
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <img
          src="/logo-full-transparent.webp"
          alt="המוסך של צביקה - אור-צת שירותי רכב"
          style={{
            width: imgW,
            height: imgH,
            marginTop: offsetTop,
            display: "block",
          }}
          width={945}
          height={540}
        />
      </div>

    </div>
  );
}
