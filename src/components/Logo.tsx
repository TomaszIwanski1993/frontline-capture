import logoOnLight from "@/assets/logo-quantum-on-light.svg";
import logoOnDark from "@/assets/logo-quantum-on-dark.svg";
import iconOnLight from "@/assets/logo-quantum-icon-on-light.svg";
import iconOnDark from "@/assets/logo-quantum-icon-on-dark.svg";

interface LogoProps {
  /** Background the logo will sit on */
  surface?: "light" | "dark";
  /** Full logo with wordmark, or icon only */
  variant?: "full" | "icon";
  className?: string;
  alt?: string;
}

const Logo = ({
  surface = "light",
  variant = "icon",
  className,
  alt = "Quantum",
}: LogoProps) => {
  const src =
    variant === "full"
      ? surface === "dark"
        ? logoOnDark
        : logoOnLight
      : surface === "dark"
        ? iconOnDark
        : iconOnLight;

  return <img src={src} alt={alt} className={className} loading="eager" />;
};

export default Logo;
