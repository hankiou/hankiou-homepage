// Extract unique tags from portfolio items
export const extractUniqueTags = (items) => {
  const tagSet = new Set();
  items.forEach((item) => item.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
};

// Filter items by selected tags (OR logic - items with ANY selected tag)
export const filterByTags = (items, selectedTags) => {
  if (!selectedTags || selectedTags.length === 0) return items;
  return items.filter((item) => item.tags.some((tag) => selectedTags.includes(tag)));
};

// Get file type (image/video)
export const getFileType = (mimeType) => {
  if (mimeType.startsWith('image/')) return 'image';
  if (mimeType.startsWith('video/')) return 'video';
  return 'unknown';
};
