interface SectionBgImageProps {
  src: string;
  alt: string;
  opacity?: number;
  position?: string;
}

const SectionBgImage = ({ src, alt, opacity = 0.06, position = "center" }: SectionBgImageProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity,
          objectPosition: position,
          filter: "grayscale(20%) blur(1px)",
          mixBlendMode: "multiply",
        }}
      />
      <div
        className="absolute inset-0 bg-primary/15 mix-blend-multiply"
        style={{ opacity }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, hsl(var(--background)) 0%, transparent 15%, transparent 85%, hsl(var(--background)) 100%)",
        }}
      />
    </div>
  );
};

export default SectionBgImage;
