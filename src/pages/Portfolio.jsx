import { useState, useEffect, useMemo } from 'react';
import Masonry from 'react-masonry-css';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { TagBadge } from '../components/TagBadge';
import { PortfolioCard } from '../components/PortfolioCard';
import { PortfolioModal } from '../components/PortfolioModal';
import { filterByTags } from '../utils/portfolioHelpers';
import { TAGS } from '../config/tags';

function Portfolio() {
  const [portfolioData, setPortfolioData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);

  // Fetch portfolio data
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        setLoading(true);
        const response = await fetch('/portfolio.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setPortfolioData(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching portfolio:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  // Filter items based on selected tags
  const filteredItems = useMemo(
    () => filterByTags(portfolioData, selectedTags),
    [portfolioData, selectedTags]
  );

  // Separate featured and non-featured items, sort non-featured by year
  const { featuredItems, regularItems } = useMemo(() => {
    const featured = filteredItems.filter(item => item.featured);
    const regular = filteredItems
      .filter(item => !item.featured)
      .sort((a, b) => (b.year || 0) - (a.year || 0)); // Sort by year descending
    return { featuredItems: featured, regularItems: regular };
  }, [filteredItems]);

  // Toggle tag selection - single selection mode
  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? [] : [tag]
    );
  };

  // Masonry breakpoint configuration
  const breakpointColumns = {
    default: 3,
    1024: 2,
    640: 1
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="bg-blueprint-fade py-12 px-8 rounded-lg mb-12 text-center">
        <h1 className="heading-1 mb-4">Portfolio</h1>
        <p className="mono-label">SELECTED WORKS & PROJECTS</p>
      </div>

      {/* Tag Filter Section */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {TAGS.map(({ tag }) => (
            <TagBadge
              key={tag}
              tag={tag}
              isSelected={selectedTags.includes(tag)}
              hasActiveSelection={selectedTags.length > 0}
              onClick={toggleTag}
            />
          ))}
        </div>
      </div>

      {/* Loading State */}
      {loading && <LoadingSpinner />}

      {/* Error State */}
      {error && (
        <div className="text-center py-20">
          <p className="body-base text-red-400 mb-4">Error loading portfolio: {error}</p>
          <button
            className="btn btn-secondary"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && filteredItems.length === 0 && (
        <div className="text-center py-20">
          <p className="body-base text-slate-400">No projects found</p>
        </div>
      )}

      {/* Portfolio Grid */}
      {!loading && !error && filteredItems.length > 0 && (
        <>
          {/* Featured Section */}
          {featuredItems.length > 0 && (
            <>
              <div className="mb-6">
                <h2 className="heading-2 text-center mb-6">Featured</h2>
                <Masonry
                  breakpointCols={breakpointColumns}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {featuredItems.map((item) => (
                    <div key={item.title}>
                      <PortfolioCard
                        item={item}
                        onClick={() => setSelectedItem(item)}
                      />
                    </div>
                  ))}
                </Masonry>
              </div>

              {/* Divider */}
              {regularItems.length > 0 && (
                <div className="my-12 flex items-center justify-center">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
                  <span className="px-4 mono-label text-slate-400">All Projects</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
                </div>
              )}
            </>
          )}

          {/* Regular Items (Sorted by Year) */}
          {regularItems.length > 0 && (
            <Masonry
              breakpointCols={breakpointColumns}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {regularItems.map((item) => (
                <div key={item.title}>
                  <PortfolioCard
                    item={item}
                    onClick={() => setSelectedItem(item)}
                  />
                </div>
              ))}
            </Masonry>
          )}
        </>
      )}

      {/* Modal */}
      {selectedItem && (
        <PortfolioModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}

export default Portfolio;
