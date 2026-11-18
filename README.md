# 우정범 풀스택 개발자 포트폴리오

공개 주소: https://wjb-portfolio.vercel.app

Next.js, React, TypeScript 기반의 페이지 전환형 포트폴리오입니다. 확정 디자인은 2번 Developer Console입니다.

## 데스크톱에서 작업 시작

```powershell
git clone https://github.com/orca305/dev-portfolio.git
cd dev-portfolio
npm ci
npm run dev
```

이미 저장소를 받은 경우 작업 내용을 확인한 뒤 `git pull`하고 `npm ci`를 실행합니다. Node.js 24 LTS를 기준으로 검증했습니다.

## 페이지

- `/`: 첫 화면
- `/about`: 소개, 기술, 학력, 자격증 이미지 확대
- `/experience`: 03 실무 경험. 프로젝트 한 개씩 표시하며 이전·다음 및 번호 버튼으로 전환
- `/projects`: AURORE·QuizForge·TableFlow 목록
- `/projects/aurore`, `/projects/quizforge`, `/projects/tableflow`: 공통 구조의 프로젝트 상세 소개
- `/mini-projects`: 기존 주소 호환. `/projects`로 정적 이동
- `/contact`: 연락
- `/designs`: 기존 디자인 시안 보관

## 내용 수정 위치

- 프로젝트 제목, 기간, 담당 업무, 문제 해결: `app/data.ts`의 `experiences`
- 프로젝트 전환 및 표시 구조: `app/experience-carousel.tsx`
- 학력과 페이지 소개: `app/portfolio.tsx`
- 자격증 표시·확대 기능: `app/certificates.tsx`
- 자격증 공개 이미지: `public/certificates/`
- 전체 디자인과 안내 문구 크기: `app/globals.css`
- 오로르 소개와 스타일: `app/aurore-preview.tsx`, `app/aurore-preview.module.css`

프로젝트 배열에 항목을 추가하면 프로젝트 개수와 이동 버튼도 함께 반영됩니다. 담당 업무와 문제 해결 내용은 접기 없이 표시됩니다.

## 반영 기준

- 국무조정실 규제정보화시스템 유지관리: 2026.01.01부터 2026.11.17 현재 진행 중
- 한국방송통신대학교 컴퓨터과학과: 2025.03 입학, 재학 중
- 충남대학교 회계학과: 2009.03–2016.02, 학사 졸업. 졸업 연도는 사용자 확인값 사용
- SQLD: 2026.11.17 발급된 유효기간 영구 증빙으로 교체

자격증은 생년월일, 자격번호, 문서 확인 코드를 가린 공개용 이미지입니다. 원본 PDF, 경력 문서, 임시 추출 자료와 환경설정 비밀값은 Git과 배포 대상에 넣지 않습니다.

## 검사와 배포

```powershell
npm run typecheck
npm run build
```

정적 결과는 `out/`에 생성됩니다. Vercel 프로젝트는 `wjb-portfolio`입니다. `vercel.json`은 Next.js 배포 설정이며, 계정 로그인 후 Vercel CLI로 연결할 수 있습니다. GitHub 원격 저장소와 Vercel의 자동 배포 연결 여부는 별도로 확인해야 합니다.

기존 Sites 주소는 공개를 종료했습니다. `.openai/hosting.json`은 이전 사이트 식별 기록이며 새 Vercel 배포에는 사용하지 않습니다.

## 개인 프로젝트 소개와 화면 관리

`app/project-data.ts`에서 제목·소개·상태·기술·구현 기능·계획 기능·아키텍처·개발 경험·GitHub·배포 주소·화면 설명을 수정합니다. UI 코드를 수정할 필요가 없습니다.

- QuizForge 배포 주소: https://quizforge-nine-chi.vercel.app/
- AURORE 정식 저장소: https://github.com/orca305/AURORE
- 프로젝트 목록·상세 UI: `app/project-pages.tsx`
- 공통 화면 선택·이전/다음·확대 UI: `app/project-gallery.tsx`
- 실무 경험의 `storyTitle`을 생략하면 `문제 해결 경험`으로 표시합니다.

화면은 `public/aurore`, `public/quizforge`, `public/tableflow`에 실제 촬영한 이미지를 넣고 `screenshots`에 `{ src, title, description }`를 추가합니다. `screenshots: []`는 정상적인 빈 갤러리 상태입니다. TableFlow는 설계·개발 준비 단계로 표시하며 계획 기능과 구현 기능을 구분합니다. QuizForge에는 공개 사이트에서 실제 촬영한 설정·텍스트 입력 화면만 포함했습니다. 문제 풀이와 채점 결과 사진은 이후 추가할 수 있습니다.

공유 이미지: `public/social/`. 페이지별 canonical·Open Graph는 `app/seo.ts`와 각 페이지의 metadata에서 관리합니다. 기존 5개 디자인 시안과 과거 mini-projects 경로도 유지합니다.

추가 검증: `npm run build` 후 `node scripts/verify-export.mjs`. 운영 배포나 GitHub 업로드는 변경 검토 및 사용자 승인 뒤 진행합니다. 기존 Vercel 프로젝트 `wjb-portfolio`를 그대로 사용합니다.
