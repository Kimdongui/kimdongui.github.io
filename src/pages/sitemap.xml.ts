import type { APIContext } from 'astro';
import { getPosts } from '../lib/posts';
import { pathTo, postUrl } from '../lib/site';
export async function GET(context: APIContext) {
  const posts = (await getPosts()).filter(post => !post.data.draft && post.data.date <= new Date());
  const paths = [pathTo(), pathTo('tags/'), ...posts.map(post => postUrl(post.id))];
  const escape = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `<url><loc>${escape(new URL(path, context.site!).href)}</loc></url>`).join('')}</urlset>`;
  return new Response(body, {headers: {'Content-Type': 'application/xml; charset=utf-8'}});
}
