import type { ReactNode } from "react";

interface FloatingVisualProps {
  children: ReactNode;
  className?: string;
  /** Float variant: changes timing and motion curve */
  variant?: "default" | "alt" | "slow";
}

/**
 * Wraps a visual element with:
 * - A slow-rotating glow ring behind it (parallax depth layer)
 * - Floating animation on the main visual
 * - Subtle depth separation between layers
 */
const FloatingVisual = ({
  children,
  className = "",
  variant = "default",
}: FloatingVisualProps) => {
  const floatClass =
    variant === "alt"
      ? "animate-float-alt"
      : variant === "slow"
        ? "animate-float-slow"
        : "animate-float";

  return (
    <div className={`relative ${className}`}>
      {/* Background depth layer — slow rotating glow ring */}
      <div
        className="absolute inset-[-15%] rounded-full animate-subtle-rotate pointer-events-none"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, hsl(258 48% 58% / 0.06) 25%, transparent 50%, hsl(272 44% 50% / 0.04) 75%, transparent 100%)",
          filter: "blur(20px)",
        }}
        aria-hidden="true"
      />

      {/* Mid depth layer — counter-floating soft glow */}
      <div
        className="absolute inset-[-5%] rounded-lg animate-float-slow pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(258 48% 58% / 0.08) 0%, transparent 70%)",
          filter: "blur(12px)",
          animationDirection: "reverse",
        }}
        aria-hidden="true"
      />

      {/* Main visual — floats with glow pulse */}
      <div className={`relative ${floatClass} animate-glow-pulse`}>
        {children}
      </div>
    </div>
  );
};

export default FloatingVisual;
