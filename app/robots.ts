import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://saaedimam.com";
  return {
    rules: { 
      userAgent: "*", 
      allow: "/",
      disallow: ["/api/", "/_next/", "/admin/"]
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
