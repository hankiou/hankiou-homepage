import { getTagColor, getTagIcon } from "../config/tags";

export const TagBadge = ({
  tag,
  onClick,
  isSelected,
  iconVisible = true,
  hasActiveSelection = false,
}) => {
  const colors = getTagColor(tag);
  const Icon = getTagIcon(tag);
  const shouldGrayscale = hasActiveSelection && !isSelected;

  return (
    <span
      className={`tag select-none transition-all ${
        onClick ? "cursor-pointer" : ""
      } ${isSelected ? "ring-2 ring-accent" : ""} ${
        shouldGrayscale ? "grayscale opacity-50" : ""
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
