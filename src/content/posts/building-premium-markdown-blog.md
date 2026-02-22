---
title: "Building a Premium Markdown Blog"
date: "2026-09-28"
excerpt: "How to leverage Next.js and GitHub Pages to build an SEO-optimized, premium developer portfolio that cross-posts beautifully."
canonicalUrl: "https://alinddwivedi.github.io/blog/building-premium-markdown-blog"
---

Welcome to my new portfolio.

I decided to build this using **Next.js** because of its phenomenal Static Site Generation capabilities. By pairing it with GitHub Pages, I get a blazing-fast, globally distributed portfolio for absolutely zero cost.

## The Architecture

1. **Next.js (SSG)**: We output static HTML/CSS.
2. **Vanilla CSS**: Kept things incredibly light, no heavy JS frameworks for styling.
3. **Markdown First**: All content is written in Markdown so that it effortlessly cross-posts to platforms like Dev.to and Hashnode.

Here is a quick look at the core recursive function used to parse posts:

```typescript
export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  return {
    id,
    contentHtml: processedContent.toString(),
    ...matterResult.data,
  };
}
```

Stay tuned for more deep dives into AI and Data Engineering.
