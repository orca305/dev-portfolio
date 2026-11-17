# 우정범 풀스택 개발자 포트폴리오

## 실행

```powershell
npm install
npm run dev -- --hostname 127.0.0.1 --port 3002
```

http://127.0.0.1:3002 에서 확정한 2번 Developer Console 디자인을 엽니다. 소개·실무 경험·오로르·연락은 /about, /experience, /projects, /contact 페이지로 이동합니다. 기존 시안 모음은 /designs 에 보관했습니다.

- Editorial: 아이보리 편집 디자인
- Developer Console: 다크 콘솔
- Blueprint: 블루 사이드바 대시보드
- Bold / Raw: 오렌지 브루탈리즘
- Quiet Studio: 웜 미니멀

각 시안은 `/design/1/home` 형식으로 접근하며 home / about / experience / projects / contact 페이지가 있습니다. 상단 시안 번호를 바꾸면 현재 페이지를 유지하며 다른 스타일을 확인할 수 있습니다.

## 오로르 미리보기

프로젝트 페이지는 `C:/dev/easy-law-ai/frontend`의 실제 화면 구성을 참고한 독립 미리보기를 제공합니다. 대화, 법규 검색, 판례 검색 화면을 전환할 수 있습니다. 미리보기에는 데이터 조회나 AI 응답이 연결되어 있지 않습니다.

실제 사이트 연결 탭 및 크게 열기는 http://127.0.0.1:3000 의 기존 오로르 개발 서버에 연결합니다. 해당 서버의 일부 스타일 파일이 오류를 반환하여 독립 미리보기를 기본으로 사용합니다. 외부 배포 시 로컬 주소를 실제 배포 주소로 바꿔야 합니다.

## 검증

```powershell
npm run typecheck
npm run build
```

정적 배포 결과는 `out/`에 생성됩니다. 공공기관 프로젝트의 실제 코드 및 내부 화면은 포함하지 않습니다. 공개 전 프로젝트·기관명 공개 범위, 실제 참여 기간과 소속을 확인해야 합니다.

