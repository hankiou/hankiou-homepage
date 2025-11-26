import {
  Box,
  Code2,
  Globe,
  Palette,
  Sparkles,
  WandSparkles,
} from "lucide-react";

import { getTagColor } from "../config/tagColors";

const TAG_ICONS = {
  dev: Code2,
  web: Globe,
  ux: WandSparkles,
  design: Palette,
  "3d": Box,
};

const getTagIcon = (tag) => {
  return TAG_ICONS[tag] || Sparkles;
};

export const TagBadge = ({ tag, onClick, isSelected, iconVisible = true }) => {
  const colors = getTagColor(tag);
  const Icon = getTagIcon(tag);

  return (
    <span
      className={`tag transition-all ${onClick ? "cursor-pointer" : ""} ${
        isSelected ? "ring-2 ring-accent" : ""
      }`}
      style={{
        backgroundColor: colors.background,
        borderColor: colors.border,
        color: colors.text,
      }}
      onClick={() => onClick?.(tag)}
    >
      {iconVisible && <Icon className="w-3 h-3" />}
      {tag}
    </span>
  );
};
