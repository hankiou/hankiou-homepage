import { TagBadge } from "./TagBadge";

export const PortfolioCard = ({ item, onClick }) => {
  const thumbnailFile = item.files?.[0];

  return (
    <div
      className="card cursor-pointer hover:scale-105 transition-transform overflow-hidden !p-0"
      onClick={onClick}
    >
      {/* Thumbnail Image */}
      <div className="relative aspect-video overflow-hidden">
        {thumbnailFile ? (
          <>
            <img
              src={thumbnailFile.path}
              alt={item.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity">
              <div className="absolute bottom-4 left-4 right-4">
                <p className="body-small text-primary line-clamp-3">{item.description}</p>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
            <p className="mono-text text-slate-400">No preview</p>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="heading-5 mb-3">{item.title}</h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} iconVisible={false} />
          ))}
        </div>
      </div>
    </div>
  );
};
