import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/private/"],
    },
    sitemap: "https://calculatify.com/sitemap.xml",
    host: "https://calculatify.com",
  };
}
