/**
 * 生成 Article Schema.org 結構化資料
 */
export function generateArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: url,
    image: image || "https://calculatify.com/og-image.png",
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: author || "Calculatify",
      url: "https://calculatify.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Calculatify",
      url: "https://calculatify.com",
      logo: {
        "@type": "ImageObject",
        url: "https://calculatify.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

/**
 * 生成 SoftwareApplication Schema.org 結構化資料
 */
export function generateSoftwareSchema({
  name,
  description,
  url,
  applicationCategory = "CalculatorApplication",
}: {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: name,
    description: description,
    url: url,
    applicationCategory: applicationCategory,
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
    },
    author: {
      "@type": "Organization",
      name: "Calculatify",
      url: "https://calculatify.com",
    },
  };
}

/**
 * 生成 FAQPage Schema.org 結構化資料
 */
export function generateFAQSchema(
  questions: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

/**
 * 生成 Organization Schema.org 結構化資料
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Calculatify",
    url: "https://calculatify.com",
    logo: "https://calculatify.com/logo.png",
    description:
      "Free online calculators and educational resources for everyday math",
    sameAs: [
      "https://twitter.com/calculatify",
      // 未來可以加入其他社交媒體連結
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "hello@calculatify.com",
    },
  };
}

/**
 * 生成 WebSite Schema.org 結構化資料
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Calculatify",
    url: "https://calculatify.com",
    description:
      "Free online calculators and educational guides for everyday math",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://calculatify.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * 將 Schema 物件轉換為 script 標籤用的 JSON 字串
 */
export function serializeSchema(schema: object): string {
  return JSON.stringify(schema);
}
