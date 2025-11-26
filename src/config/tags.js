import {
  Box,
  Brush,
  Code2,
  DraftingCompass,
  Gamepad2,
  Globe,
  Image,
  Pen,
  Sparkles,
  WandSparkles,
} from "lucide-react";

export const TAGS = [
  {
    tag: "dev",
    icon: Code2,
    colors: {
      background: "rgba(34, 197, 94, 0.15)",
      border: "#22c55e",
      text: "#4ade80",
    },
  },
  {
    tag: "web",
    icon: Globe,
    colors: {
      background: "rgba(59, 130, 246, 0.15)",
      border: "#3b82f6",
      text: "#60a5fa",
    },
  },
  {
    tag: "ux",
    icon: WandSparkles,
    colors: {
      background: "rgba(168, 85, 247, 0.15)",
      border: "#a855f7",
      text: "#c084fc",
    },
  },
  {
    tag: "3D",
    icon: Box,
    colors: {
      background: "rgba(244, 114, 182, 0.15)",
      border: "#f472b6",
      text: "#fbcfe8",
    },
  },
  {
    tag: "pixelart",
    icon: Image,
    colors: {
      background: "rgba(34, 211, 238, 0.15)",
      border: "#22d3ee",
      text: "#67e8f9",
    },
  },
  {
    tag: "gamedev",
    icon: Gamepad2,
    colors: {
      background: "rgba(99, 102, 241, 0.15)",
      border: "#6366f1",
      text: "#818cf8",
    },
  },
  {
    tag: "paper drawing",
    icon: Pen,
    colors: {
      background: "rgba(245, 158, 11, 0.15)",
      border: "#f59e0b",
      text: "#fbbf24",
    },
  },
  {
    tag: "digital drawing",
    icon: Brush,
    colors: {
      background: "rgba(236, 72, 153, 0.15)",
      border: "#ec4899",
      text: "#f472b6",
    },
  },
  {
    tag: "handcraft",
    icon: DraftingCompass,
    colors: {
      background: "rgba(255, 87, 34, 0.15)",
      border: "#ff5722",
      text: "#ff7043",
    },
  },
];

// Default color for tags not in the map
export const DEFAULT_TAG_COLOR = {
  background: "rgba(148, 163, 184, 0.15)",
  border: "#94a3b8",
  text: "#cbd5e1",
};

export const getTagIcon = (tag) => {
  const tagItem = TAGS.find((item) => item.tag === tag);
  return tagItem?.icon || Sparkles;
};

export const getTagColor = (tag) => {
  const tagItem = TAGS.find((item) => item.tag === tag);
  return tagItem?.colors || DEFAULT_TAG_COLOR;
};
