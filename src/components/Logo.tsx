import logoFull from "@/assets/logo-quantum-new.png";

interface LogoProps {
  /** Background the logo will sit on */
  surface?: "light" | "dark";
  /** Full logo with wordmark, or icon only */
  variant?: "full" | "icon";
  className?: string;
  alt?: string;
}

const Logo = ({
  className,
  alt = "Quantum Making",
}: LogoProps) => {
  return <img src={logoFull} alt={alt} className={className} loading="eager" />;
};

export default Logo;
