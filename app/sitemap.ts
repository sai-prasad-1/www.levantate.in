import { MetadataRoute } from "next";

/**
 * Global sitemap for Levantate Labs.
 *
 * This is structured so you can easily plug in dynamic content later
 * (e.g. blog posts, career listings) from a CMS or database.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.levantate.in";
  const now = new Date();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  // Example stubs for dynamic content (replace with real data later)
  const blogPosts: { slug: string; updatedAt?: string | Date }[] = [];
  const careerPosts: { slug: string; updatedAt?: string | Date }[] = [];

  const dynamicBlogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const dynamicCareerRoutes: MetadataRoute.Sitemap = careerPosts.map((job) => ({
    url: `${baseUrl}/careers/${job.slug}`,
    lastModified: job.updatedAt ? new Date(job.updatedAt) : now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...dynamicBlogRoutes, ...dynamicCareerRoutes];
}
