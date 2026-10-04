import { getCollection } from 'astro:content';

/** Every post, newest first. */
export async function getPosts() {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || b.id.localeCompare(a.id));
}

/** The date as YYYY-MM-DD, for a `<time>` element's `datetime`. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

// a frontmatter date is midnight UTC, so it is read back in UTC and the day never shifts with the time zone
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
