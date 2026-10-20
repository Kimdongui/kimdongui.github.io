import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../lib/posts';
import { postUrl, site } from '../lib/site';
export async function GET(context: APIContext) {
  const posts = (await getPosts()).filter(post => !post.data.draft && post.data.date <= new Date());
  return rss({
    title: site.title,
    description: site.description,
    site: context.site!,
    items: posts.map(post => ({title: post.data.title, pubDate: post.data.date, description: post.data.description, link: postUrl(post.id), categories: post.data.tags})),
    customData: '<language>ko-kr</language>',
  });
}
