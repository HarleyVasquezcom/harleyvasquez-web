import RSS            from "rss";
import { getAllPosts } from "./mdx";

export function generateRSS(locale: string, siteUrl: string): string {
  const feed = new RSS({
    title:       `Harley Vásquez — Blog (${locale.toUpperCase()})`,
    description: "Distributed systems, software architecture and engineering culture.",
    feed_url:    `${siteUrl}/${locale}/blog/rss.xml`,
    site_url:    `${siteUrl}/${locale}`,
    language:    locale,
    pubDate:     new Date().toUTCString(),
  });
  getAllPosts(locale).forEach((post) => {
    feed.item({
      title:       post.title,
      description: post.description,
      url:         `${siteUrl}/${locale}/blog/${post.slug}`,
      date:        post.date,
      categories:  post.tags,
    });
  });
  return feed.xml({ indent: true });
}
