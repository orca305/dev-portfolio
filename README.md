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
- `/projects`: 오로르 실제 개발 화면 4개와 확대 보기
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
