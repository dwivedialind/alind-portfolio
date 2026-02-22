import { getSortedPostsData } from "../../lib/posts";

export const dynamic = "force-static";

export async function GET() {
  const allPosts = getSortedPostsData();
  const site_url = "https://alinddwivedi.github.io"; // Replace with actual GitHub pages URL

  const feedOptions = {
    title: "Alind Dwivedi | Blog",
    description: "Thoughts on software engineering, AI, and Data Engineering.",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    pubDate: new Date().toUTCString(),
  };

  const rssItemsXml = allPosts
    .map((post) => {
      return `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${site_url}/blog/${post.id}</link>
        <guid>${site_url}/blog/${post.id}</guid>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <description><![CDATA[${post.excerpt || ""}]]></description>
      </item>
    `;
    })
    .join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>${feedOptions.title}</title>
        <link>${feedOptions.site_url}</link>
        <description>${feedOptions.description}</description>
        <atom:link href="${feedOptions.feed_url}" rel="self" type="application/rss+xml"/>
        <pubDate>${feedOptions.pubDate}</pubDate>
        ${rssItemsXml}
      </channel>
    </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=1200, stale-while-revalidate=600",
    },
  });
}
