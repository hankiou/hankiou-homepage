// Color configuration for tags
// User can manually edit these colors
export const TAG_COLORS = {
  dev: {
    background: 'rgba(34, 197, 94, 0.15)',
    border: '#22c55e',
    text: '#4ade80',
  },
  web: {
    background: 'rgba(59, 130, 246, 0.15)',
    border: '#3b82f6',
    text: '#60a5fa',
  },
  ux: {
    background: 'rgba(168, 85, 247, 0.15)',
    border: '#a855f7',
    text: '#c084fc',
  },
  design: {
    background: 'rgba(236, 72, 153, 0.15)',
    border: '#ec4899',
    text: '#f472b6',
  },
  '3d': {
    background: 'rgba(245, 158, 11, 0.15)',
    border: '#f59e0b',
    text: '#fbbf24',
  },
};

// Default color for tags not in the map
export const DEFAULT_TAG_COLOR = {
  background: 'rgba(148, 163, 184, 0.15)',
  border: '#94a3b8',
  text: '#cbd5e1',
};

// Helper to get tag color
export const getTagColor = (tag) => {
  return TAG_COLORS[tag] || DEFAULT_TAG_COLOR;
};
