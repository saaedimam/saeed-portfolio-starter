import { allPosts, allWorks } from "@/lib/data";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://saaedimam.com";
  const staticRoutes = ["", "/work", "/products", "/writing", "/about", "/contact"].map((p) => ({
    url: `${base}${p || "/"}`,
    lastModified: new Date().toISOString(),
    changeFrequency: (p === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: p === "" ? 1 : 0.8,
  }));
  
  const workRoutes = allWorks.map((w) => ({ 
    url: `${base}${w.url}`, 
    lastModified: w.date,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  
  const postRoutes = allPosts.map((p) => ({ 
    url: `${base}${p.url}`, 
    lastModified: p.date,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  
  return [...staticRoutes, ...workRoutes, ...postRoutes];
}
