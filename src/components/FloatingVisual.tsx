import type { ReactNode } from "react";

interface FloatingVisualProps {
  children: ReactNode;
  className?: string;
  /** Reserved for API compatibility — no longer affects motion */
  variant?: "default" | "alt" | "slow";
}

/**
 * Simplified wrapper — visual sits flat with no glow rings or float animation.
 * Kept as a component for layout consistency across sections.
 */
const FloatingVisual = ({ children, className = "" }: FloatingVisualProps) => {
  return <div className={`relative ${className}`}>{children}</div>;
};

export default FloatingVisual;
