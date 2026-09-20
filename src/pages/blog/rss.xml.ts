import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts');
  return rss({
    title: "Dave's Lawn Care Blog",
    description: 'Lawn care tips and updates',
    site: context.site!,
    items: posts
      .sort((a, b) => (b.data.date?.valueOf() ?? 0) - (a.data.date?.valueOf() ?? 0))
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.date,
        link: `/blog/${post.id}/`,
      })),
  });
}
