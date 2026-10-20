import { getCollection } from 'astro:content';
export async function getPosts() {
  const showDrafts = import.meta.env.DEV || import.meta.env.INCLUDE_DRAFTS === 'true';
  const posts = await getCollection('blog', ({ data }) => showDrafts || (!data.draft && data.date <= new Date()));
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || a.id.localeCompare(b.id));
}
