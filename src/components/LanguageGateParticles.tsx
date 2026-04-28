import { useEffect, useRef } from "react";

/**
 * Subtle particle backdrop for the LanguageGate.
 *
 * Brief:
 *  - Very light, almost-white background (handled by the gate itself)
 *  - Small dots: mostly white / light grey, a few soft desaturated red
 *  - Slow drift + gentle wave + fade in/out + respawn loop
 *  - No text, no connecting lines, no bright colors
 *  - Sparser in the center (room for logo + buttons), denser toward edges
 *  - Pauses when tab hidden / element offscreen, honors reduced-motion
 */

interface Particle {
  x: number;
  y: number;
  // Drift velocity (px/sec) — extremely slow
  vx: number;
  vy: number;
  // Wave parameters for gentle horizontal sway
  wavePhase: number;
  waveSpeed: number;
  waveAmp: number;
  // Lifecycle
  life: number;       // 0..1
  lifespan: number;   // seconds
  // Visual
  r: number;
  baseAlpha: number;
  isRed: boolean;
}

const LIGHT_RGB = "210, 210, 215"; // soft light grey
const RED_RGB = "232, 160, 160";   // #E8A0A0 — soft desaturated red
const RED_RATIO = 0.12;            // ~12% of particles are soft red

const LanguageGateParticles = () => {
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
      // Sparse: ~0.9 particles per 100k px², capped for big screens / mobile sanity
      const raw = (area / 100_000) * 0.9;
      return Math.max(20, Math.min(95, Math.round(raw)));
    };

    /**
     * Bias spawn position toward edges. Reject samples that fall inside a
     * soft central ellipse so the logo + buttons stay clean.
     */
    const spawnPosition = (w: number, h: number) => {
      // Center-avoidance: reject up to N times, then accept.
      for (let i = 0; i < 6; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        // Normalized distance from center (ellipse)
        const nx = (x - w / 2) / (w / 2);
        const ny = (y - h / 2) / (h / 2);
        const d = Math.sqrt(nx * nx + ny * ny);
        // Probability of keeping increases with distance from center
        // d=0 (center) → 0.15 chance; d>=1 (edge) → 1.0 chance
        const keep = 0.15 + 0.85 * Math.min(1, d);
        if (Math.random() < keep) return { x, y };
      }
      return { x: Math.random() * w, y: Math.random() * h };
    };

    const makeParticle = (w: number, h: number, randomLife = false): Particle => {
      const { x, y } = spawnPosition(w, h);
      // Very slow upward-ish drift with slight randomness
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 0.7;
      const speed = 2 + Math.random() * 5; // px/sec
      const isRed = Math.random() < RED_RATIO;
      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        wavePhase: Math.random() * Math.PI * 2,
        waveSpeed: 0.25 + Math.random() * 0.5, // rad/sec
        waveAmp: 0.3 + Math.random() * 0.7,    // px
        life: randomLife ? Math.random() : 0,
        lifespan: 7 + Math.random() * 7,
        r: 0.7 + Math.random() * 1.3,
        baseAlpha: isRed
          ? 0.25 + Math.random() * 0.2
          : 0.35 + Math.random() * 0.3,
        isRed,
      };
    };

    const seed = (w: number, h: number) => {
      const count = computeCount(w, h);
      particles = Array.from({ length: count }, () => makeParticle(w, h, true));
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
      seed(width, height);
    };

    const drawFrame = (dt: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        // Motion: drift + gentle wave on x
        p.wavePhase += p.waveSpeed * dt;
        p.x += (p.vx + Math.sin(p.wavePhase) * p.waveAmp) * dt;
        p.y += p.vy * dt;
        p.life += dt / p.lifespan;

        // Respawn when faded out or off-screen
        if (
          p.life >= 1 ||
          p.x < -10 ||
          p.x > width + 10 ||
          p.y < -10 ||
          p.y > height + 10
        ) {
          Object.assign(p, makeParticle(width, height, false));
          continue;
        }

        // Smooth fade in (0..0.25), hold, fade out (0.7..1)
        const fade =
          p.life < 0.25
            ? p.life / 0.25
            : p.life > 0.7
              ? Math.max(0, 1 - (p.life - 0.7) / 0.3)
              : 1;

        const alpha = p.baseAlpha * fade;
        const rgb = p.isRed ? RED_RGB : LIGHT_RGB;

        ctx.fillStyle = `rgba(${rgb}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;
      if (visible && docVisible) drawFrame(dt);
      rafId = requestAnimationFrame(tick);
    };

    resize();

    if (reduceMotion) {
      drawFrame(0);
    } else {
      lastTime = performance.now();
      rafId = requestAnimationFrame(tick);
    }

    const ro = new ResizeObserver(() => {
      resize();
      if (reduceMotion) drawFrame(0);
    });
    ro.observe(wrapper);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) visible = entry.isIntersecting;
        if (visible) lastTime = performance.now();
      },
      { threshold: 0.01 }
    );
    io.observe(wrapper);

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
  }, []);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default LanguageGateParticles;
