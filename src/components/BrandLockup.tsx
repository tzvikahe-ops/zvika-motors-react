import logoNavbar from "@/assets/logo-navbar.png";

interface BrandLockupProps {
  size?: "navbar" | "footer";
}

export default function BrandLockup({ size = "navbar" }: BrandLockupProps) {
  const isFooter = size === "footer";
  return (
    <img
      src={logoClean}
      alt="המוסך של צביקה - אור-צת שירותי רכב"
      className="object-contain shrink-0"
      style={{
        height: isFooter ? "56px" : undefined,
        maxHeight: isFooter ? undefined : "50px",
        width: "auto",
      }}
    />
  );
}
