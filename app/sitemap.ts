import type { MetadataRoute } from "next";
import { POSTS } from "./blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://landineuropecoaching.com";

  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/cv-rewrite`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/linkedin-optimization`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/career-coaching`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
  ];

  const blogPages = POSTS.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...blogPages];
}
