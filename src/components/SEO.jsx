import PropTypes from "prop-types";
import { useEffect } from "react";

export function SEO({
  title = "Enzo GUENY - Full-Stack Developer | hankiou.com",
  description = "Homepage of Enzo GUENY, a full-stack developer from France. Explore innovative web applications including GeoWarmup and Dofus games. Specializing in React, Node.js, frontend, backend and UX design.",
  keywords = "Enzo GUENY, full-stack developer, web developer, software engineer, France, React, Node.js, expressjs, REST API, rubyonrails, game development, GeoWarmup, Dofus, portfolio",
  image = "https://hankiou.com/preview.png",
  url = "https://hankiou.com/",
  type = "website",
  structuredData = null,
}) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (selector, content) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute("content", content);
      } else {
        element = document.createElement("meta");
        const [attr, value] =
          selector.match(/\[(.+?)="(.+?)"\]/)?.slice(1, 3) || [];
        if (attr && value) {
          element.setAttribute(attr, value);
          element.setAttribute("content", content);
          document.head.appendChild(element);
        }
      }
    };

    // Update basic meta tags
    updateMetaTag('meta[name="description"]', description);
    updateMetaTag('meta[name="keywords"]', keywords);

    // Update Open Graph tags
    updateMetaTag('meta[property="og:title"]', title);
    updateMetaTag('meta[property="og:description"]', description);
    updateMetaTag('meta[property="og:url"]', url);
    updateMetaTag('meta[property="og:type"]', type);
    updateMetaTag('meta[property="og:image"]', image);

    // Update Twitter tags
    updateMetaTag('meta[property="twitter:title"]', title);
    updateMetaTag('meta[property="twitter:description"]', description);
    updateMetaTag('meta[property="twitter:url"]', url);
    updateMetaTag('meta[property="twitter:image"]', image);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", url);
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", url);
      document.head.appendChild(canonical);
    }

    // Update or add structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (script) {
        script.textContent = JSON.stringify(structuredData);
      } else {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    }
  }, [title, description, keywords, image, url, type, structuredData]);

  return null;
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  structuredData: PropTypes.object,
};
