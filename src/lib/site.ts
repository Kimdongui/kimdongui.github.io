export const site = {
  title: 'Kimdongui 개발 블로그',
  author: 'Kimdongui',
  eyebrow: 'NOTES ON DEVELOPMENT',
  subtitle: '',
  description: 'Kimdongui 개발 블로그',
};

export function pathTo(path = ''): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
export function postUrl(id: string): string {
  return pathTo(`posts/${id.split('/').map(encodeURIComponent).join('/')}/`);
}
export function tagUrl(tag: string): string {
  return `${pathTo('tags/')}?tag=${encodeURIComponent(tag)}`;
}
export function formatDate(value: Date): string {
  return new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Seoul' }).format(value);
}
export function readingMinutes(body = ''): number {
  const prose = body.replace(/```[\s\S]*?```/g, '').replace(/[#*>`\[\]()]/g, '');
  return Math.max(1, Math.ceil(prose.length / 700));
}
