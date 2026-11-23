# 문구 수정 위치 안내

화면에 보이는 문구를 고칠 때 어느 파일의 어디를 보면 되는지 정리한 문서입니다. 줄 번호는 2026-11-23 기준(`59acb80` 이후)이며, 코드를 고치면 조금씩 밀리므로 **줄 번호보다 "찾을 문구"를 검색**해서 찾으세요(VS Code `Ctrl+Shift+F`).

## 1. 작업 순서 (노트북)

```powershell
git clone https://github.com/orca305/dev-portfolio.git   # 처음 한 번
cd dev-portfolio
npm ci                                                    # 처음 한 번
git pull                                                  # 이후에는 작업 전에 항상
npm run dev                                               # http://localhost:3000 에서 보면서 수정
npm run typecheck                                         # 수정 후 확인
npm run build                                             # 수정 후 확인(정적 결과는 out/)
git add -A
git commit -m "문구 수정"
git push origin main                                      # main에 올리면 Vercel이 자동 배포
```

- Node.js 24 기준입니다. 자동 배포는 Vercel의 `wjb-portfolio` 프로젝트가 GitHub `orca305/dev-portfolio`와 연결되어 있어서 `main` 푸시 때마다 실행됩니다. 배포에는 보통 1~2분이 걸립니다.
- 배포 주소: https://wjb-portfolio.vercel.app (짧은 시간에 여러 번 접속하면 Vercel 보안 확인 화면이 뜰 수 있습니다. 브라우저에서 직접 열어 확인하세요.)
- `AGENTS.md`의 Next.js 주의 문구는 `next dev`가 자동으로 다시 넣는 블록입니다. 건드리지 마세요.
- 수정은 문구(문자열)만 바꾸면 되고, 따옴표(`'` `"`)·쉼표·백틱은 지우지 않도록 주의합니다. 작은따옴표 문자열 안에 `'`를 쓰려면 `\'`로 씁니다.

## 2. 페이지별 문구 위치

| 화면 | 주소 | 문구가 있는 파일 |
|---|---|---|
| 첫 페이지 | `/` | `app/portfolio.tsx` (home 영역), `app/data.ts` |
| 소개 | `/about` | `app/portfolio.tsx` (about 영역), `app/data.ts`의 `skills`, `app/certificates.tsx` |
| 실무 경험 | `/experience` | `app/data.ts`의 `experiences`, `app/experience-carousel.tsx`(버튼·라벨) |
| 프로젝트 목록 | `/projects` | `app/project-data.ts`, `app/project-pages.tsx` |
| 프로젝트 상세 | `/projects/aurore` 등 | `app/project-data.ts`, `app/project-pages.tsx`(섹션 제목), `app/project-gallery.tsx`(갤러리 라벨) |
| 연락 | `/contact` | `app/portfolio.tsx` (contact 영역) |
| 검색·공유 미리보기 | 전체 | `app/seo.ts` |

## 3. 파일별 상세 위치

### `app/portfolio.tsx` (첫 페이지·소개·연락·공통)
| 찾을 문구 | 줄 | 설명 |
|---|---|---|
| `구조를 읽고,` / `Interfaces.` 등 `headline:` | 10~30 | 디자인 시안별 큰 제목. **확정 디자인은 2번 Developer Console이라 `Interfaces.\nAPIs.\nSystems.`(15행)가 실제로 보입니다** |
| `label: '첫 페이지'` 등 | 35~39 | 상단 메뉴 이름(첫 페이지·소개·실무 경험·프로젝트·연락) |
| `GitHub ↗` | 107 | 상단 GitHub 링크. 주소는 바로 위 `href="https://github.com/orca305"` |
| `FRONTEND · BACKEND · OPERATIONS` | 119 | 첫 화면 작은 제목 |
| `안녕하세요, 풀스택 개발자` | 123~133 | **첫 화면 자기소개 3문단** |
| `미니 프로젝트 보기` | 136 | 버튼 문구(실제 이동은 프로젝트 목록) |
| `Next.js · Java · Spring · SQL · Linux` | 140 | 첫 화면 기술 한 줄 |
| `사용자 화면부터,` | 166 | 첫 화면 오른쪽 장식 문구 |
| `화면부터 서버까지, 하나의 서비스로.` | 179~180 | 소개 페이지 제목·부제 |
| `사용자 화면에서` | 185 | 소개 소제목 |
| `공공 정보시스템의 개발과` / `기존 시스템에서 문제가` / `최근에는 기존 실무 경험을` | 190, 195, 200 | **소개 본문 3문단** |
| `EDUCATION` / `학력사항` | 223~224 | 학력 영역 제목 |
| `한국방송통신대학교` | 229~235 | 학교·학과·기간(`2025.03 — 현재`)·상태(`재학(12월 졸업예정)`) |
| `충남대학교` | 241~247 | 학교·학과·기간(`2009.03 — 2016.02`)·`졸업` |
| `운영을 이해하는 개발 경험.` | 258~259 | 실무 경험 페이지 제목·부제 |
| `공공기관 프로젝트의 실제 소스코드` | 263~264 | 실무 경험 아래 비공개 안내 문구 |
| `LET’S CONNECT` / `다음 연결은,` | 271~275 | 연락 페이지 제목 |
| `새로운 기술을 배우고` / `프로젝트 협업이나` | 278, 281 | 연락 본문 |
| `우정범 / Full-Stack Developer` | 293 | 연락 페이지 하단 이름 |
| `© 2026 WOO JEONGBEOM` | 299 | 하단 저작권 |

### `app/data.ts` (실무 경험·기술)
`experiences` 배열에 경력 5개가 있습니다. 항목마다 `period`(기간), `category`, `title`(제목), `summary`(요약), `tags`(태그), `tasks`(담당 업무 목록), `story`(문제 해결 경험 본문), `storyTitle`(소제목, 없으면 "문제 해결 경험")이 있습니다.

| 번호 | 프로젝트 | 줄 |
|---|---|---|
| 01 | 연계솔루션 개발 | 5~21 |
| 02 | 충청북도 재난위험감지 센싱정보 연계시스템 유지관리 | 23~37 |
| 03 | 한국철도공사 모바일오피스 고도화 | 39~63 |
| 04 | 스마트축산 빅데이터 플랫폼 고도화 | 65~80 |
| 05 | 국무조정실 규제정보화시스템 유지관리 | 82~106 (`period: '2026.01.01 —'`, `ongoing: true`) |

- `ongoing: true`이면 "현재 진행 중" 배지가 붙습니다. 끝난 프로젝트로 바꾸려면 `false`로 하고 `period`에 종료일을 적으세요.
- `skills`(109~135): Frontend / Backend / Database / Operations / Project stack의 `items`(기술 나열)와 `desc`(설명).

### `app/experience-carousel.tsx` (실무 경험 화면의 라벨)
`실무 프로젝트`(9), `프로젝트`(12), `← 이전 프로젝트`(17), `다음 프로젝트 →`(23), **`현재 진행 중`(39)**, `담당 업무`(55), `문제 해결 경험`(64, `storyTitle`이 없을 때만).

### `app/certificates.tsx` (자격증)
- 4행 정보처리기사, 5행 SQLD: `name`, `date`, `issuer`, `note`(이미지 설명). 이미지는 `public/certificates/`.
- 5행 `note`에 `2026.11.17 발급된 갱신 증빙` 문구가 있습니다.

### `app/project-data.ts` (프로젝트 소개 전체)
화면에 나오는 프로젝트 문구는 모두 이 파일입니다. 프로젝트마다 같은 이름의 항목이 있고, 줄 번호는 아래와 같습니다.

| 항목 | 화면 위치 |
|---|---|
| `title`, `summary`, `description` | 목록 카드, 상세 상단 |
| `statusLabel` | 상태 배지("개발 중 · …"). `status`는 `planning`/`developing`/`completed` |
| `technologies` | 기술 태그 |
| `metrics` | 상세 상단 수치 카드(`value` 큰 글씨, `label` 설명) |
| `purpose` | 개발 목적 및 배경 |
| `features` | 구현한 주요 기능 |
| `usage` | 사용 방법(번호 단계) |
| `architecture` | 시스템 아키텍처 |
| `challenges` | 개발 포인트와 검증 |
| `limitations` | 한계와 알려진 제약 |
| `plannedFeatures` | 개발 및 고도화 중 |
| `github`, `liveUrl` | 상단 GitHub·배포 사이트 버튼 |
| `screenshotNote` | 갤러리 아래 안내 문구 |
| `screenshots[]` | 갤러리 화면별 `title`(제목), `headline`(큰 문구), `path`(주소 표시), `description`, `points`(사용법 등), `src`(이미지) |

| 프로젝트 | 시작 줄 | 비고 |
|---|---|---|
| 프로젝트 소개 문구(`projectsIntroduction`) | 31 | 프로젝트 목록 맨 위 제목·설명 |
| AURORE | 37 | 접속 코드 `123456`이 `usage`(첫 단계)와 `screenshotNote`(79행)에 있음. 화면 이미지 `public/aurore/` |
| QuizForge | 93 | 배포 주소 `quizforge-nine-chi.vercel.app`. 화면 이미지 `public/quizforge/` |
| TableFlow | 116 | 데모 주소 `table-flow-blond.vercel.app`. 화면 이미지 `public/tableflow/` |

**항목 작성 형식 (가독성용)**
- `features`, `usage`, `challenges`, `limitations`는 한 항목을 `'제목::설명'` 형식으로 씁니다. `::` 앞은 굵은 제목, 뒤는 짧은 설명으로 표시됩니다. `::`가 없으면 제목 없이 설명만 나옵니다.
- `purpose`, `architecture`는 문장 사이에 `\n`을 넣으면 문단이 나뉩니다. 한 문단은 2~3문장 이내로 짧게 쓰는 것을 권장합니다.
- 설명은 한 항목당 1~2문장으로 쓰고, 긴 내용은 항목을 나눠 주세요.

**같은 수치가 여러 곳에 있으니 함께 고치세요.**
- AURORE: 법령 5,631개·판례 14,131건·조문 299,601개는 `metrics`, `challenges`, `screenshots`의 설명에 나옵니다.
- 접속 코드·배포 주소 `www.aurore-law.com`은 `liveUrl`, `usage`, `screenshotNote`에 나옵니다.
- TableFlow의 테스트 수·100만 행 41.4초는 `metrics`와 `challenges`에 나옵니다.

### `app/project-pages.tsx` (프로젝트 화면의 고정 문구)
`04 / PERSONAL PROJECTS`, `상세 소개 →`, `배포 사이트 ↗`, `← 전체 프로젝트`, 상세 섹션 제목(`개발 목적 및 배경`, `구현한 주요 기능`, `사용 방법`, `시스템 아키텍처`, `개발 포인트와 검증`, `한계와 알려진 제약`, `개발 및 고도화 중`)이 있습니다. 이 파일은 줄이 길어서 문구를 검색해서 찾으세요.

### `app/project-gallery.tsx` (갤러리 고정 문구)
`PRODUCT WALKTHROUGH`, `실제 구현 화면`, `화면 살펴보기`, `화면 확대`, `이전 화면`/`다음 화면`, `이미지 선택 시 확대`가 있습니다. 한 줄이 매우 길어서 문구를 검색해서 찾으세요.

### `app/seo.ts` (검색 결과·공유 미리보기 문구)
`pageDescriptions`에 페이지별 `title`/`description`이 있습니다(home·about·experience·projects·contact). 공유 이미지는 `public/social/`입니다.

## 4. 문구가 아닌 것 (실수로 바꾸지 마세요)
- `app/globals.css`: 디자인(글자 크기·색). 문구 수정만 할 때는 건드리지 않습니다.
- `README.md`: 개발 안내입니다. 화면에는 나오지 않지만 `2026.11.17 현재 진행 중`처럼 오래된 기준일 설명이 남아 있습니다(43, 46행). 원하면 함께 정리하세요.
- `app/design/**`, `app/designs/page.tsx`: 보관용 디자인 시안 화면입니다.
- `app/mini-projects/page.tsx`: `/projects`로 이동시키는 옛 주소 호환 페이지입니다.

## 5. 수정 후 확인 목록
1. `npm run dev`로 해당 페이지에서 문구가 의도대로 나오는지 확인합니다.
2. 목록 카드(`/projects`)와 상세 화면(`/projects/…`)이 모두 자연스러운지 봅니다.
3. 모바일 폭에서도 문장이 넘치지 않는지 봅니다(브라우저 폭을 좁혀서).
4. `npm run typecheck`, `npm run build`가 오류 없이 끝나는지 확인합니다.
5. 푸시한 뒤 1~2분 후 https://wjb-portfolio.vercel.app 에서 반영을 확인합니다.

## 6. 라이트/다크 모드
- 상단 오른쪽의 토글 버튼(☀ Light / ☾ Dark)으로 전환하며, 선택은 브라우저(`localStorage`의 `portfolio-theme`)에 저장됩니다. **저장된 값이 없는 첫 방문은 항상 다크**입니다.
- 기본값 변경: `app/layout.tsx`의 `themeScript`에서 `t==='light'||t==='dark'?t:'dark'`의 마지막 `'dark'`를 `'light'`로 바꿉니다.
- 버튼 코드·문구: `app/theme-toggle.tsx`(버튼 글자 `Light`/`Dark`와 접근성 문구), 헤더 배치는 `app/portfolio.tsx`의 `<ThemeToggle />`.
- 라이트 색: `app/globals.css` 맨 아래 `:root[data-theme="light"] .concept-2`의 변수(`--bg`, `--surface`, `--text`, `--muted`, `--accent`, `--line`)만 바꾸면 됩니다. 다크 색은 같은 파일 4행의 `.concept-2`입니다.
- 프로젝트 화면 갤러리(`app/aurore-preview.module.css`)는 양쪽 모드에서 모두 어두운 녹색 틀로 표시합니다.
