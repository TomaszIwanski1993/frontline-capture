import logoNew from "@/assets/logo-quantum-new.svg";
import iconOnLight from "@/assets/logo-quantum-icon-on-light.svg";

interface LogoProps {
  /** Background the logo will sit on (kept for API compatibility) */
  surface?: "light" | "dark";
  /** Full logo with wordmark, or icon only */
  variant?: "full" | "icon";
  className?: string;
  alt?: string;
}

const Logo = ({
  variant = "full",
  className,
  alt = "Quantum",
}: LogoProps) => {
  const src = variant === "icon" ? iconOnLight : logoNew;
  return <img src={src} alt={alt} className={className} loading="eager" />;
};

export default Logo;
