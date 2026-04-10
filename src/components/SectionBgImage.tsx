import { useEffect, useRef, useState } from "react";

interface SectionBgImageProps {
  src: string;
  alt: string;
  opacity?: number;
  position?: string;
  parallaxStrength?: number;
}

const SectionBgImage = ({
  src,
  alt,
  opacity = 0.06,
  position = "center",
  parallaxStrength = 0.15,
}: SectionBgImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const rafId = useRef(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !containerRef.current) return;

    const update = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      // Only compute when visible
      if (rect.bottom < 0 || rect.top > viewH) return;
      // Range: -1 (section fully above center) to 1 (fully below)
      const center = rect.top + rect.height / 2;
      const ratio = (center - viewH / 2) / (viewH / 2 + rect.height / 2);
      setOffset(ratio * parallaxStrength * 100);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, [parallaxStrength]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute w-full object-cover will-change-transform"
        style={{
          opacity,
          objectPosition: position,
          top: "-10%",
          height: "120%",
          transform: `translateY(${offset}px)`,
          transition: "transform 0.1s linear",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--background)) 0%, transparent 15%, transparent 85%, hsl(var(--background)) 100%)",
        }}
      />
    </div>
  );
};

export default SectionBgImage;
