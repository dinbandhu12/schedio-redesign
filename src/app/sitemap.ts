import type { MetadataRoute } from 'next';

const BASE = 'https://schedio.studio';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                        lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0  },
    { url: `${BASE}/about`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8  },
    { url: `${BASE}/services`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9  },
    { url: `${BASE}/work`,              lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9  },
    { url: `${BASE}/blog`,              lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7  },
    { url: `${BASE}/contact`,           lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.8  },
    { url: `${BASE}/privacy-policy`,    lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.2  },
    { url: `${BASE}/terms`,             lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.2  },
    { url: `${BASE}/cookie-policy`,     lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.2  },
  ];
}
