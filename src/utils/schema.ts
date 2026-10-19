export interface SchemaBreadcrumb {
  name: string;
  item: string;
}

// CSK's PRIMARY area list — leads with West/Old-Bangalore areas, deliberately different order from CSK
export const CITIES_BANGALORE = [
  "Sarjapur Road",
  "Bellandur",
  "Hennur",
  "Rajajinagar",
  "Malleshwaram",
  "Basavanagudi",
  "Vijayanagar",
  "Banashankari",
  "CV Raman Nagar",
  "Kalyan Nagar",
  "Horamavu",
  "Whitefield",
  "Koramangala",
];

export const ALL_18_SERVICES = [
  "Balcony Safety Nets",
  "Children Safety Nets",
  "Pet Safety Nets",
  "Pigeon Safety Nets",
  "Monkey Safety Nets",
  "Cricket Nets",
  "Sports Nets",
  "Construction Safety Nets",
  "Duct Area Safety Nets",
  "Anti-Bird Spikes",
  "Balcony Invisible Grills",
  "Window Invisible Grills",
  "Staircase Invisible Grills",
  "Custom Invisible Grills",
  "Ceiling Cloth Hangers",
  "Balcony Cloth Hangers",
  "Wall Mounted Cloth Hangers",
  "Pull Down Cloth Hangers",
];

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CSK Safety Nets & Invisible Grills",
    "url": "https://csksafetynets.in",
    "logo": "https://csksafetynets.in/images/logo/csk-safetynets-logo.webp",
    "image": "https://csksafetynets.in/images/og-image.webp",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 79819 10891",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Telugu", "Kannada", "Hindi"],
      },
    ],
  };
}

export function generateLocalBusinessSchema(areaName?: string) {
  const citiesServed = areaName
    ? [areaName]
    : CITIES_BANGALORE;

  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": "https://csksafetynets.in/#localbusiness",
    "name": "CSK Safety Nets & Invisible Grills",
    "url": "https://csksafetynets.in",
    "telephone": "+91 79819 10891",
    "email": "csksafetynets45@gmail.com",
    "image": "https://csksafetynets.in/images/og-image.webp",
    "logo": "https://csksafetynets.in/images/logo/csk-safetynets-logo.webp",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bangalore, Karnataka",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716,
      "longitude": 77.5946,
    },
    "areaServed": citiesServed.map((city) => ({
      "@type": "City",
      "name": `${city}, Bangalore, Karnataka`,
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Safety Nets, Invisible Grills & Cloth Hangers Installation Services",
      "itemListElement": ALL_18_SERVICES.map((srv, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": srv,
          "provider": {
            "@type": "LocalBusiness",
            "name": "CSK Safety Nets & Invisible Grills",
          },
        },
        "position": idx + 1,
      })),
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "08:00",
      "closes": "20:00",
    },
    "sameAs": [
      "https://wa.me/917981910891",
    ],
  };
}

export function generateServiceProductSchema(serviceName: string, serviceSlug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${serviceName} Installation in Bangalore`,
    "description": `Premium ${serviceName.toLowerCase()} with certified installation and written warranty — by CSK Safety Nets & Invisible Grills, Bangalore, Karnataka.`,
    "brand": {
      "@type": "Brand",
      "name": "CSK Safety Nets & Invisible Grills",
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "15",
      "highPrice": "180",
      "offerCount": "100+",
      "availability": "https://schema.org/InStock",
      "url": `https://csksafetynets.in/services/${serviceSlug}`,
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CSK Safety Nets & Invisible Grills",
    "url": "https://csksafetynets.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://csksafetynets.in/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(items: SchemaBreadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": crumb.name,
      "item": crumb.item.startsWith("http")
        ? crumb.item
        : `https://csksafetynets.in${crumb.item}`,
    })),
  };
}

export function generateServiceSchema(serviceName: string, categoryName?: string, description?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": categoryName || serviceName,
    "name": serviceName,
    "description": description || `${serviceName} in Bangalore, Karnataka — premium materials, fast installation, written warranty by CSK Safety Nets & Invisible Grills.`,
    "provider": {
      "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
      "@id": "https://csksafetynets.in/#localbusiness",
      "name": "CSK Safety Nets & Invisible Grills",
      "telephone": "+91 79819 10891",
      "email": "csksafetynets45@gmail.com",
      "url": "https://csksafetynets.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bangalore, Karnataka",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560001",
        "addressCountry": "IN",
      },
    },
    "areaServed": {
      "@type": "City",
      "name": "Bangalore, Karnataka",
    },
  };
}

export function generateServiceAreaSchema(serviceName: string, areaName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "name": `${serviceName} in ${areaName}, Bangalore`,
    "provider": {
      "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
      "@id": "https://csksafetynets.in/#localbusiness",
      "name": "CSK Safety Nets & Invisible Grills",
      "telephone": "+91 79819 10891",
      "email": "csksafetynets45@gmail.com",
      "url": "https://csksafetynets.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bangalore, Karnataka",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560001",
        "addressCountry": "IN",
      },
    },
    "areaServed": {
      "@type": "City",
      "name": `${areaName}, Bangalore, Karnataka`,
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

export const generateFAQPageSchema = generateFAQSchema;

export function generateAggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": "https://csksafetynets.in/#localbusiness",
    "name": "CSK Safety Nets & Invisible Grills",
    "url": "https://csksafetynets.in",
    "image": "https://csksafetynets.in/images/og-image.webp",
    "telephone": "+91 79819 10891",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bangalore, Karnataka",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN",
    },
  };
}

export function generateArticleSchema(
  articleOrTitle:
    | string
    | {
        title: string;
        description: string;
        slug?: string;
        datePublished: string;
        authorName?: string;
        image?: string;
      },
  description?: string,
  image?: string,
  datePublished?: string
) {
  if (typeof articleOrTitle === "object") {
    const article = articleOrTitle;
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "description": article.description,
      "mainEntityOfPage": article.slug ? `https://csksafetynets.in/blog/${article.slug}` : "https://csksafetynets.in",
      "datePublished": article.datePublished,
      "dateModified": article.datePublished,
      "author": {
        "@type": "Organization",
        "name": article.authorName || "CSK Safety Nets & Invisible Grills",
      },
      "publisher": {
        "@type": "Organization",
        "name": "CSK Safety Nets & Invisible Grills",
        "logo": {
          "@type": "ImageObject",
          "url": "https://csksafetynets.in/images/logo/csk-logo-PLACEHOLDER.svg",
        },
      },
      "image": article.image || "https://csksafetynets.in/images/og-image.webp",
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleOrTitle,
    "description": description || "",
    "mainEntityOfPage": "https://csksafetynets.in",
    "datePublished": datePublished || new Date().toISOString(),
    "dateModified": datePublished || new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "CSK Safety Nets & Invisible Grills",
    },
    "publisher": {
      "@type": "Organization",
      "name": "CSK Safety Nets & Invisible Grills",
      "logo": {
        "@type": "ImageObject",
        "url": "https://csksafetynets.in/images/logo/csk-logo-PLACEHOLDER.svg",
      },
    },
    "image": image || "https://csksafetynets.in/images/og-image.webp",
  };
}
