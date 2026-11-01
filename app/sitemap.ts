import type { MetadataRoute } from "next";
import { concepts, insights } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-21T00:00:00.000Z");

  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/for-brands", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/for-creators", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/process", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/work", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/insights", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/cookies", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route.path === "/" ? "" : route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...concepts.map((concept) => ({
      url: `${siteUrl}/work/${concept.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...insights.map((article) => ({
      url: `${siteUrl}/insights/${article.slug}`,
      lastModified: new Date(`${article.dateISO}T00:00:00.000Z`),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
