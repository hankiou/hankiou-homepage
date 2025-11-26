// Color configuration for tags
// User can manually edit these colors
export const TAG_COLORS = {
  dev: {
    background: "rgba(34, 197, 94, 0.15)",
    border: "#22c55e",
    text: "#4ade80",
  },
  web: {
    background: "rgba(59, 130, 246, 0.15)",
    border: "#3b82f6",
    text: "#60a5fa",
  },
  ux: {
    background: "rgba(168, 85, 247, 0.15)",
    border: "#a855f7",
    text: "#c084fc",
  },
  design: {
    background: "rgba(236, 72, 153, 0.15)",
    border: "#ec4899",
    text: "#f472b6",
  },
  "3D": {
    background: "rgba(244, 114, 182, 0.15)",
    border: "#f472b6",
    text: "#fbcfe8",
  },
  game: {
    background: "rgba(139, 92, 246, 0.15)",
    border: "#8b5cf6",
    text: "#a78bfa",
  },
  art: {
    background: "rgba(251, 113, 133, 0.15)",
    border: "#fb7185",
    text: "#fda4af",
  },
  pixelart: {
    background: "rgba(34, 211, 238, 0.15)",
    border: "#22d3ee",
    text: "#67e8f9",
  },
  gamedev: {
    background: "rgba(99, 102, 241, 0.15)",
    border: "#6366f1",
    text: "#818cf8",
  },
  "paper drawing": {
    background: "rgba(245, 158, 11, 0.15)",
    border: "#f59e0b",
    text: "#fbbf24",
  },
  "digital drawing": {
    background: "rgba(236, 72, 153, 0.15)",
    border: "#ec4899",
    text: "#f472b6",
  },
  handcraft: {
    background: "rgba(217, 119, 6, 0.15)",
    border: "#d97706",
    text: "#f59e0b",
  },
  streaming: {
    background: "rgba(244, 63, 94, 0.15)",
    border: "#f43f5e",
    text: "#fb7185",
  },
};

// Default color for tags not in the map
export const DEFAULT_TAG_COLOR = {
  background: "rgba(148, 163, 184, 0.15)",
  border: "#94a3b8",
  text: "#cbd5e1",
};

// Helper to get tag color
export const getTagColor = (tag) => {
  return TAG_COLORS[tag] || DEFAULT_TAG_COLOR;
};
