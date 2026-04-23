import { useEffect, useRef } from "react";

type Mode = "disperse" | "align";

interface KnowledgeFlowProps {
  /**
   * "disperse" — particles drift outward and fade (problem state, knowledge loss)
   * "align"    — particles settle into a soft lattice grid (solution state, structure)
   */
  mode?: Mode;
  /** Approximate density of particles per 100,000 px². Default 1.4. Keep low. */
  density?: number;
  /** Master opacity multiplier. Default 0.55 — already very subtle. */
  intensity?: number;
  className?: string;
}

interface Particle {
  // Anchor position (target lattice point in align mode, origin in disperse mode)
  ax: number;
  ay: number;
  // Current position
  x: number;
  y: number;
  // Drift velocity (disperse mode)
  vx: number;
  vy: number;
  // Per-particle base alpha
  baseAlpha: number;
  // Phase offset for breathing
  phase: number;
  // Lifecycle progress 0..1 (disperse mode resets to 0 when reaching ~1)
  life: number;
  // Lifetime in seconds
  lifespan: number;
  // Radius
  r: number;
}

const PRIMARY_RGB = "5, 13, 235"; // #050deb cobalt

/**
 * Lightweight, calm canvas particle layer.
 *  - "disperse" → particles slowly drift away and fade (knowledge loss)
 *  - "align"    → particles settle onto a structural grid lattice (knowledge stabilized)
 *
 * Performance:
 *  - DPR-aware sizing
 *  - Respects prefers-reduced-motion (renders one quiet frame, no loop)
 *  - Pauses when the section is offscreen via IntersectionObserver
 *  - Pauses when the document is hidden
 */
const KnowledgeFlow = ({
  mode = "align",
  density = 1.4,
  intensity = 0.55,
  className,
}: KnowledgeFlowProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    let dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let rafId = 0;
    let lastTime = performance.now();
    let visible = true;
    let docVisible = !document.hidden;

    const computeCount = (w: number, h: number) => {
      const area = w * h;
      // Cap to keep things light on big screens
      const raw = (area / 100_000) * density;
      return Math.max(18, Math.min(110, Math.round(raw)));
    };

    const seedAlign = (w: number, h: number, count: number): Particle[] => {
      // Lay out on a soft lattice with small jitter so it doesn't look mechanical
      const aspect = w / h;
      const cols = Math.max(4, Math.round(Math.sqrt(count * aspect)));
      const rows = Math.max(3, Math.ceil(count / cols));
      const cellW = w / cols;
      const cellH = h / rows;
      const out: Particle[] = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const ax = (c + 0.5) * cellW + (Math.random() - 0.5) * cellW * 0.15;
          const ay = (r + 0.5) * cellH + (Math.random() - 0.5) * cellH * 0.15;
          // Start a bit offset so they "settle" into place
          const offset = 18 + Math.random() * 22;
          const angle = Math.random() * Math.PI * 2;
          out.push({
            ax,
            ay,
            x: ax + Math.cos(angle) * offset,
            y: ay + Math.sin(angle) * offset,
            vx: 0,
            vy: 0,
            baseAlpha: 0.18 + Math.random() * 0.22,
            phase: Math.random() * Math.PI * 2,
            life: Math.random(),
            lifespan: 6 + Math.random() * 4,
            r: 0.8 + Math.random() * 1.0,
          });
        }
      }
      return out;
    };

    const seedDisperse = (w: number, h: number, count: number): Particle[] => {
      const out: Particle[] = [];
      for (let i = 0; i < count; i++) {
        const ax = Math.random() * w;
        const ay = Math.random() * h;
        // Slow outward drift, biased slightly upward (knowledge "leaving")
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 0.9;
        const speed = 3 + Math.random() * 6; // px/sec — extremely slow
        out.push({
          ax,
          ay,
          x: ax,
          y: ay,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          baseAlpha: 0.16 + Math.random() * 0.22,
          phase: Math.random() * Math.PI * 2,
          life: Math.random(),
          lifespan: 7 + Math.random() * 5,
          r: 0.7 + Math.random() * 1.1,
        });
      }
      return out;
    };

    const resize = () => {
      const rect = wrapper.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = computeCount(width, height);
      particles =
        mode === "align"
          ? seedAlign(width, height, count)
          : seedDisperse(width, height, count);
    };

    const drawFrame = (dt: number) => {
      ctx.clearRect(0, 0, width, height);

      // Optional: faint connector lines in align mode for nearest neighbors
      if (mode === "align") {
        const maxDist = Math.min(width, height) * 0.12;
        const maxDistSq = maxDist * maxDist;
        ctx.lineWidth = 1;
        for (let i = 0; i < particles.length; i++) {
          const a = particles[i];
          for (let j = i + 1; j < particles.length; j++) {
            const b = particles[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < maxDistSq) {
              const t = 1 - d2 / maxDistSq;
              const alpha = 0.06 * t * intensity;
              ctx.strokeStyle = `rgba(${PRIMARY_RGB}, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      }

      for (const p of particles) {
        if (mode === "align") {
          // Spring-settle toward anchor with very soft damping
          const k = 0.9; // spring strength (per second)
          const damp = 2.4; // damping (per second)
          const ax = (p.ax - p.x) * k - p.vx * damp;
          const ay = (p.ay - p.y) * k - p.vy * damp;
          p.vx += ax * dt;
          p.vy += ay * dt;
          p.x += p.vx * dt;
          p.y += p.vy * dt;

          // Gentle breathing alpha
          p.phase += dt * 0.6;
          const breathe = 0.75 + Math.sin(p.phase) * 0.25;
          const alpha = p.baseAlpha * breathe * intensity;

          ctx.fillStyle = `rgba(${PRIMARY_RGB}, ${alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Disperse: drift, age, fade, respawn
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          p.life += dt / p.lifespan;

          if (
            p.life >= 1 ||
            p.x < -20 ||
            p.x > width + 20 ||
            p.y < -20 ||
            p.y > height + 20
          ) {
            // Respawn near bottom area
            p.ax = Math.random() * width;
            p.ay = height * (0.55 + Math.random() * 0.45);
            p.x = p.ax;
            p.y = p.ay;
            const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 0.9;
            const speed = 3 + Math.random() * 6;
            p.vx = Math.cos(angle) * speed;
            p.vy = Math.sin(angle) * speed;
            p.life = 0;
            p.lifespan = 7 + Math.random() * 5;
          }

          // Fade in then out across lifetime
          const fade =
            p.life < 0.2
              ? p.life / 0.2
              : p.life > 0.7
                ? Math.max(0, 1 - (p.life - 0.7) / 0.3)
                : 1;
          const alpha = p.baseAlpha * fade * intensity;

          ctx.fillStyle = `rgba(${PRIMARY_RGB}, ${alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - lastTime) / 1000); // clamp to 50ms
      lastTime = now;
      if (visible && docVisible) drawFrame(dt);
      rafId = requestAnimationFrame(tick);
    };

    // Setup
    resize();

    if (reduceMotion) {
      // Render a single still frame and stop
      drawFrame(0);
    } else {
      lastTime = performance.now();
      rafId = requestAnimationFrame(tick);
    }

    // Resize observer
    const ro = new ResizeObserver(() => {
      resize();
      if (reduceMotion) drawFrame(0);
    });
    ro.observe(wrapper);

    // Pause when offscreen
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) visible = entry.isIntersecting;
        if (visible) lastTime = performance.now();
      },
      { threshold: 0.01 }
    );
    io.observe(wrapper);

    // Pause when tab hidden
    const onVis = () => {
      docVisible = !document.hidden;
      if (docVisible) lastTime = performance.now();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [mode, density, intensity]);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className={
        "pointer-events-none absolute inset-0 overflow-hidden " + (className ?? "")
      }
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default KnowledgeFlow;
