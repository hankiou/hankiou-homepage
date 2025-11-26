import { useState, useEffect, useMemo } from 'react';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { TagBadge } from '../components/TagBadge';
import { PortfolioCard } from '../components/PortfolioCard';
import { PortfolioModal } from '../components/PortfolioModal';
import { extractUniqueTags, filterByTags } from '../utils/portfolioHelpers';

function Portfolio() {
  const [portfolioData, setPortfolioData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [allTags, setAllTags] = useState([]);

  // Fetch portfolio data
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        setLoading(true);
        const response = await fetch('/portfolio.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setPortfolioData(data);
        setAllTags(extractUniqueTags(data));
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

  // Toggle tag selection
  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
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
          <button
            className={`tag transition-all cursor-pointer ${selectedTags.length === 0 ? 'ring-2 ring-accent' : ''}`}
            onClick={() => setSelectedTags([])}
          >
            All
          </button>
          {allTags.map((tag) => (
            <TagBadge
              key={tag}
              tag={tag}
              isSelected={selectedTags.includes(tag)}
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredItems.map((item) => (
                    <PortfolioCard
                      key={item.title}
                      item={item}
                      onClick={() => setSelectedItem(item)}
                    />
                  ))}
                </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularItems.map((item) => (
                <PortfolioCard
                  key={item.title}
                  item={item}
                  onClick={() => setSelectedItem(item)}
                />
              ))}
            </div>
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
