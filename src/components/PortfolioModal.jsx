import { useEffect, useRef } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { TagBadge } from './TagBadge';
import { TechBadge } from './TechBadge';
import { getFileType } from '../utils/portfolioHelpers';

export const PortfolioModal = ({ item, onClose }) => {
  const modalRef = useRef(null);
  const triggerRef = useRef(document.activeElement);

  // ESC key handler
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Focus management
  useEffect(() => {
    const closeButton = modalRef.current?.querySelector('button[aria-label="Close modal"]');
    closeButton?.focus();

    return () => {
      triggerRef.current?.focus();
    };
  }, []);

  // Click outside to close
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-h-[90vh] animate-slide-up"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 z-10 p-2 hover:bg-slate-800 rounded-lg transition-colors bg-slate-900/80 backdrop-blur"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 h-[90vh]">
          {/* File Viewer - 8 columns - VERTICAL SCROLL VIEW */}
          <div className="md:col-span-8 overflow-y-auto scrollbar-transparent">
            <div className="space-y-6">
              {item.files.map((file, index) => (
                <div key={index} className="space-y-2">
                  {/* Image or Video */}
                  <div className="relative rounded-lg overflow-hidden">
                    {getFileType(file.type) === 'image' ? (
                      <img
                        src={file.path}
                        alt={file.caption || `${item.title} - image ${index + 1}`}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    ) : getFileType(file.type) === 'video' ? (
                      <video src={file.path} controls className="w-full h-auto" />
                    ) : (
                      <div className="aspect-video flex items-center justify-center bg-slate-800">
                        <p className="mono-text text-slate-400">Unsupported file type</p>
                      </div>
                    )}
                  </div>

                  {/* Caption below each file */}
                  {file.caption && (
                    <p className="mono-text text-sm text-slate-400 px-2">{file.caption}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Info Panel - 4 columns - Card on right side */}
          <div className="md:col-span-4">
            <div className="card h-full overflow-y-auto scrollbar-transparent">
              <h2 id="modal-title" className="heading-3 mb-4">
                {item.title}
              </h2>
              <p className="body-base text-slate-300 mb-6">{item.description}</p>

              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary inline-flex items-center gap-2 mb-6"
                >
                  Visit Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {item.tags && item.tags.length > 0 && (
                <div className="mb-6">
                  <h3 className="mono-label mb-3">TAGS</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <TagBadge key={tag} tag={tag} />
                    ))}
                  </div>
                </div>
              )}

              {item.tech && item.tech.length > 0 && (
                <div>
                  <h3 className="mono-label mb-3">TECH STACK</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <TechBadge key={tech} tech={tech} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
