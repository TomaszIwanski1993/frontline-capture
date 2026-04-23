/**
 * Per-section tuning for the KnowledgeFlow ambient particle layer.
 *
 * Adjust `intensity` (0..1, opacity multiplier) and `density` (particles per 100k px²)
 * to make each section feel distinct while staying calm and quiet.
 *
 *  - mode      : "disperse" (knowledge fading) or "align" (knowledge stabilized)
 *  - intensity : master opacity (lower = quieter)
 *  - density   : particle count per area (lower = sparser, more air)
 */
export type FlowMode = "disperse" | "align";

export interface FlowConfig {
  mode: FlowMode;
  intensity: number;
  density: number;
}

export const flowConfig = {
  // Knowledge dispersing — keep slightly quieter so it feels like loss, not noise
  problem: {
    mode: "disperse",
    intensity: 0.5,
    density: 1.2,
  },
  // First "stabilized" moment — sparse, almost contemplative
  positioning: {
    mode: "align",
    intensity: 0.45,
    density: 1.0,
  },
  // Active solution — slightly more present, denser lattice
  howItWorks: {
    mode: "align",
    intensity: 0.55,
    density: 1.4,
  },
  // Outcomes — calm, balanced, structured
  outcomes: {
    mode: "align",
    intensity: 0.45,
    density: 1.1,
  },
} satisfies Record<string, FlowConfig>;
