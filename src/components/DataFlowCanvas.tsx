import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  speed: number;
  length: number;
  opacity: number;
  drift: number;
}

const PARTICLE_COUNT = 28;
const BASE_SPEED = 0.25;

const DataFlowCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const raf = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      particles.current = Array.from({ length: PARTICLE_COUNT }, () => spawn(w, h, true));
    };

    const spawn = (w: number, h: number, initial = false): Particle => ({
      x: Math.random() * w,
      y: initial ? Math.random() * h : -20 - Math.random() * 120,
      speed: BASE_SPEED + Math.random() * 0.35,
      length: 18 + Math.random() * 40,
      opacity: 0.06 + Math.random() * 0.1,
      drift: (Math.random() - 0.5) * 0.15,
    });

    let lastTime = 0;

    const draw = (time: number) => {
      const delta = lastTime ? Math.min((time - lastTime) / 16, 3) : 1;
      lastTime = time;

      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Resolve CSS custom property for primary color
      const style = getComputedStyle(canvas);
      const fg = style.getPropertyValue("color").trim() || "rgba(139,92,246,1)";

      for (const p of particles.current) {
        p.y += p.speed * delta;
        p.x += p.drift * delta;

        // Draw thin vertical line segment
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.drift * p.length * 0.5, p.y + p.length);
        ctx.strokeStyle = fg;
        ctx.globalAlpha = p.opacity;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Small dot at leading edge
        ctx.beginPath();
        ctx.arc(p.x + p.drift * p.length * 0.5, p.y + p.length, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = fg;
        ctx.globalAlpha = p.opacity * 1.4;
        ctx.fill();

        // Recycle when off-screen
        if (p.y > h + 40) {
          Object.assign(p, spawn(w, h));
        }
      }

      ctx.globalAlpha = 1;
      raf.current = requestAnimationFrame(draw);
    };

    resize();
    seed();
    raf.current = requestAnimationFrame(draw);

    const onResize = () => {
      resize();
      seed();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none text-primary"
      aria-hidden="true"
      style={{ opacity: 0.55 }}
    />
  );
};

export default DataFlowCanvas;
