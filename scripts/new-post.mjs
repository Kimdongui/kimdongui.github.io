import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const [slug, ...words] = process.argv.slice(2);
if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error('사용법: npm run new -- post-slug "글 제목"\n주소는 영문 소문자, 숫자, 하이픈으로 적어주세요.');
  process.exit(1);
}
const title = words.join(' ') || slug;
const date = new Intl.DateTimeFormat('en-CA', {timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit'}).format(new Date());
const directory = fileURLToPath(new URL('../src/content/blog/', import.meta.url));
await mkdir(directory, { recursive: true });
const file = `${directory}${slug}.md`;
const text = `---\ntitle: ${JSON.stringify(title)}\ndescription: ""\ndate: ${date}\ntags: []\ndraft: true\n---\n\n## 문제 상황\n\n\n## 원인 분석\n\n\n## 해결 방법\n\n\n## 검증 결과\n\n`;
try { await writeFile(file, text, { flag: 'wx' }); }
catch (error) { if (error.code === 'EEXIST') { console.error('같은 주소의 글이 이미 있습니다. 다른 주소를 사용해주세요.'); process.exit(1); } throw error; }
console.log(`초안 생성: src/content/blog/${slug}.md\n공개할 준비가 되면 draft: false로 변경하세요.`);
