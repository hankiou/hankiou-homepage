import { Link, useLocation } from "react-router-dom";

import { ChevronRight } from "lucide-react";

export function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Don't show breadcrumb on homepage
  if (pathnames.length === 0) return null;

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    ...pathnames.map((name, index) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      path: `/${pathnames.slice(0, index + 1).join("/")}`,
    })),
  ];

  // Generate structured data for breadcrumbs
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://hankiou.com${item.path}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 py-4">
        <ol className="flex items-center gap-2 text-sm">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                )}
                {isLast ? (
                  <span className="text-accent font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-accent transition-colors flex items-center gap-1"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

Breadcrumb.propTypes = {};
