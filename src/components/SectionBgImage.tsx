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
        className="absolute inset-0 w-full h-full object-cover dark:mix-blend-luminosity"
        style={{
          opacity,
          objectPosition: position,
          filter: "grayscale(40%)",
          mixBlendMode: undefined,
        }}
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
