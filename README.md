# Kimdongui 개발 블로그

차분한 블루와 살구색 포인트를 사용하는 Astro 기술 블로그입니다. 글 목록, 태그 필터, 다크 모드, 글 목차, 코드 복사를 제공합니다. 부제는 비워두었습니다.

## 로컬 실행

Node.js 24 LTS를 사용합니다. nvm 사용자는 `nvm use`로 맞출 수 있습니다.

```sh
npm ci
npm run dev
```

로컬 개발 화면에는 초안이 표시됩니다. `npm run build`로 만든 배포본에는 `draft: true` 글과 미래 날짜의 글이 포함되지 않습니다. RSS와 사이트맵에도 초안이 포함되지 않습니다.

## 글 작성

```sh
npm run new -- my-first-post "첫 글 제목"
```

`src/content/blog/my-first-post.md`가 생깁니다. 같은 이름의 기존 글은 덮어쓰지 않습니다.

```yaml
---
title: "글 제목"
description: "목록에 보이는 한 줄 요약"
date: 2026-10-21
tags: ["Java", "문제 해결"]
draft: true
---
```

본문은 Markdown으로 작성합니다. `##`와 `###` 제목은 자동으로 목차에 표시됩니다. 코드 블록에 `js`, `java`, `sql` 등의 언어를 쓰면 구문이 강조됩니다. 준비가 끝나면 `draft: false`로 바꾸고 main에 push합니다.

첫 글 작성에 참고할 `src/content/blog/first-post.md`는 사이트에 게시되지 않는 초안입니다. 공개 저장소에서는 초안 Markdown 원문도 GitHub에서 볼 수 있습니다. 삭제하거나 실제 글로 바꾸어 사용하세요. 작성하지 않은 경험을 예시 게시물로 공개하지 않습니다.

이미지는 `public/images/`에 넣을 수 있습니다. 사용자 사이트(`username.github.io`)에서는 `![설명](/images/example.png)`로 참조합니다. 저장소 경로가 붙는 프로젝트 사이트에서는 그 경로를 포함하거나 글 폴더 안의 상대 경로 이미지를 사용하세요.

## GitHub Pages 배포

사이트: https://kimdongui.github.io/

저장소: https://github.com/Kimdongui/kimdongui.github.io

`main` 브랜치에 push하면 `Deploy blog to GitHub Pages` 워크플로가 빌드하고 자동 배포합니다. 저장소 **Settings → Pages → Source**는 **GitHub Actions**를 사용합니다.

워크플로가 실제 Pages 주소를 받아 사이트 주소와 경로를 자동 설정합니다. 다른 이름의 프로젝트 저장소에도 배포할 수 있습니다. 별도의 토큰을 파일에 넣을 필요가 없습니다.

로컬에서 배포 주소로 확인하려면:

```sh
SITE_URL=https://kimdongui.github.io npm run build
npm run preview
```

`SITE_URL`은 도메인 또는 도메인과 저장소 경로를 포함한 전체 주소입니다.

## 제목·부제·색상

- 블로그 제목과 부제: `src/lib/site.ts` (`subtitle: ''`에 나중에 부제를 입력)
- 글꼴, 레이아웃, 라이트·다크 색상: `src/styles/global.css`
- favicon: `public/favicon.svg`

## 확인

```sh
npm run check
npm run build
```

Astro 공식 문서: https://docs.astro.build/en/guides/deploy/github/
