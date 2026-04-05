import logoPrimary from "@/assets/logo-primary.png";

interface BrandLockupProps {
  size?: "navbar" | "footer";
}

export default function BrandLockup({ size = "navbar" }: BrandLockupProps) {
  return (
    <img
      src={logoPrimary}
      alt="המוסך של צביקה - אור-צת שירותי רכב"
      className="object-contain shrink-0"
      style={{ height: size === "footer" ? "56px" : "60px", width: "auto" }}
    />
  );
}
