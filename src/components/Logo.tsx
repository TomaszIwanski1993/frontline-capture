import logoNew from "@/assets/logo-quantum-new.svg";

interface LogoProps {
  /** Background the logo will sit on (kept for API compatibility) */
  surface?: "light" | "dark";
  /** Full logo with wordmark, or icon only (kept for API compatibility) */
  variant?: "full" | "icon";
  className?: string;
  alt?: string;
}

const Logo = ({
  className,
  alt = "Quantum",
}: LogoProps) => {
  return <img src={logoNew} alt={alt} className={className} loading="eager" />;
};

export default Logo;
