import { useEffect } from "react";
import { SEO_CONFIG } from "../../config/seo.config";

const SEOHead = () => {
  useEffect(() => {
    // Set document title
    document.title = SEO_CONFIG.title;

    // Create meta tags
    const metaTags = [
      { name: 'description', content: SEO_CONFIG.description },
      { name: 'keywords', content: SEO_CONFIG.keywords },
      { name: 'author', content: SEO_CONFIG.author },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },

      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: SEO_CONFIG.url },
      { property: 'og:title', content: SEO_CONFIG.title },
      { property: 'og:description', content: SEO_CONFIG.description },
      { property: 'og:image', content: SEO_CONFIG.image },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: SEO_CONFIG.url },
      { name: 'twitter:title', content: SEO_CONFIG.title },
      { name: 'twitter:description', content: SEO_CONFIG.description },
      { name: 'twitter:image', content: SEO_CONFIG.image },
      { name: 'twitter:creator', content: SEO_CONFIG.twitterHandle },
    ];

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      if (tag.name) meta.name = tag.name;
      if (tag.property) meta.setAttribute('property', tag.property);
      meta.content = tag.content;
      document.head.appendChild(meta);
    });

    // Add canonical link
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = SEO_CONFIG.url;
    document.head.appendChild(link);

  }, []);

  return null;
};

export default SEOHead;