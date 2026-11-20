export interface ProjectScreenshot {
  src: string;
  title: string;
  description: string;
  headline?: string;
  path?: string;
  points?: string[];
}
export interface PortfolioProject {
  id: string;
  title: string;
  summary: string;
  description: string;
  status: 'planning' | 'developing' | 'completed';
  statusLabel: string;
  technologies: string[];
  purpose?: string;
  features: string[];
  plannedFeatures?: string[];
  architecture?: string;
  challenges?: string[];
  github?: string;
  liveUrl?: string;
  logo?: string;
  screenshotNote?: string;
  screenshots: ProjectScreenshot[];
}
export const projectsIntroduction = {
  title: '직접 설계하고 구현한 프로젝트.',
  description: '실무에서 경험한 기술을 바탕으로 AI 서비스와 데이터 처리 도구를 개발하고 있습니다. 문제 정의부터 시스템 설계, 구현과 검증까지 직접 수행한 프로젝트를 소개합니다.',
};
export const projects: PortfolioProject[] = [
  {
    id: 'aurore', title: 'AURORE',
    summary: '법을 이해하는 시작. 법령·판례와 대화를 연결하는 AI 법률 서비스.',
    description: '법령의 원문과 이력, 그리고 사용자의 질문을 하나의 흐름으로.',
    status: 'developing', statusLabel: '개발 중 · RAG 및 로컬 AI 고도화',
    technologies: ['Next.js', 'NestJS', 'Python FastAPI', 'PostgreSQL', 'Prisma', 'Gemma 4 E4B (로컬 LLM)'],
    purpose: '법령은 원문이 어렵고 개정 이력이 복잡해 일반 사용자가 자신의 상황에 맞는 조문을 찾기 어렵습니다. 공식 원문(국가법령정보 공동활용)을 그대로 저장·인용하고, 그 근거 위에서만 쉬운 설명을 덧붙이는 법령 해설 서비스를 목표로 개발하고 있습니다.',
    features: [
      '법령 검색, 시행본(시행일) 이력 조회, 두 시행본의 조문·부칙 변경 비교',
      '상황 중심 법률 질문 → 검색 → 관련성 검토 → 원문 인용 → "AI 쉬운 해설 · 참고용" 순서의 근거 기반 답변. 근거 구간 일치·원문에 없는 숫자·조문 금지·단정 표현 금지 검사에 실패하면 고정 문구로 되돌립니다',
      '회원·대화 보관·사건관리·첨부문서 질의·관심 법규/판례·알림·관리자 화면·법률용어사전',
      '법령·판례 수집 도구: 제한 배치, 중단 후 재개, 중복 수집 방지, 원문 해시 검증',
    ],
    plannedFeatures: ['나머지 현행 법령, 행정규칙·자치법규·판례·연혁 본문 수집 확대', '검색 재현율 개선과 쉬운 해설의 법률 품질 검증', 'RAG 및 로컬 AI 고도화, 장시간 운전·외부 접속 검증'],
    architecture: 'Next.js 사용자 화면 → NestJS 법령·시행본 API → PostgreSQL·Prisma. AI 처리(의도 분석, 원문 근거 추출, 쉬운 해설)는 Python FastAPI 서비스로 분리하고, 기본값은 데스크탑 GPU의 로컬 Gemma 4 E4B입니다. 외부 모델 사용은 선택 옵션이며 기본 꺼짐입니다.',
    challenges: [
      '실제 저장 현황(2026-11-19 기준): 공식 현행 법령 목록 5,631개를 확보했고, 그중 85개 법령의 현행 시행본 85개와 조문·부칙 항목 10,169개를 PostgreSQL에 저장했습니다(본문 수집률 약 1.51%). 첫 수집(2026-11-18)은 민법 1,230·형법 432·상법 1,220·근로기준법 162·개인정보 보호법 140·도로교통법 277·건축법 253·소비자기본법 117, 합계 8개 법령 3,831개 항목이었고, 이후 51개를 추가해 85개로 늘렸습니다. 판례·행정규칙·자치법규 본문은 아직 저장하지 않았고 목록 API 건수만 확인했습니다.',
      '수집은 법령별 트랜잭션과 중복 검사를 거치며 중단 후 같은 명령으로 재개됩니다. 재수집 시 법령·시행본·항목 수가 늘지 않는 것(duplicate)을 확인했고, 원문 JSON 8개를 다시 읽어 해시와 인용 구간을 검증했습니다.',
      '검증: 로컬 AI 근거 추출 합성 질문 13/13 통과(평균 약 2.0초), 쉬운 해설 평가 합성 34문항 중 23문항 통과(소표본이라 법률 정확도를 뜻하지 않음), AI 서버 테스트 26개·백엔드 테스트 61개 통과. 개인정보는 마스킹 후에만 모델로 전달합니다.',
    ],
    github: 'https://github.com/orca305/AURORE', logo: '/aurore/mark.png',
    screenshotNote: '실행 중인 오로르 개발 서버에서 직접 촬영한 화면입니다. 서비스의 실제 구성과 조회 결과를 보여주며, 포트폴리오에서는 이미지로 제공합니다.',
    screenshots: [
      { src: '/aurore/compare.jpg', title: '법령 변경 비교', headline: '달라진 문장을, 나란히.', path: '/legals/:id/compare', description: '비교 전·후 시행본의 조문과 부칙을 나란히 배치하고, 추가·삭제·변경된 항목과 문구를 구분하는 실제 화면입니다.', points: ['사용법: 법령 상세의 시행 이력에서 비교할 시행본 두 개를 고릅니다', '추가·삭제·변경된 항목만 모아볼 수 있습니다', '조문과 부칙을 나란히 보고 원문 출처로 이동합니다'] },
      { src: '/aurore/versions.jpg', title: '시행 이력 탐색', headline: '같은 법령, 다른 시점.', path: '/legals/:id/versions', description: '하나의 법령에 저장된 여러 시행본을 시행일 기준으로 살펴보고, 기준일 조회와 조문 확인으로 이어지는 화면입니다.', points: ['사용법: 법령을 선택하면 저장된 시행본이 시행일순으로 나열됩니다', '기준일을 입력해 그날 시행 중이던 버전을 조회합니다', '시행본을 열어 조문과 원문을 확인하거나 비교 화면으로 이동합니다'] },
      { src: '/aurore/legals.jpg', title: '법규 검색', headline: '이름으로 찾고, 원문으로 연결.', path: '/legals', description: '법규 이름으로 저장된 법령을 찾고, 검색 결과에서 해당 법령의 시행본으로 이동하는 실제 검색 화면입니다.', points: ['사용법: 검색창에 법령 이름(예: 민법, 근로기준법)을 입력합니다', '결과는 페이지 단위로 나뉘며 등록일 순으로 정렬됩니다', '결과를 누르면 해당 법령의 시행본 탐색으로 이어집니다. 현재 85개 법령이 저장되어 있습니다'] },
      { src: '/aurore/conversation.jpg', title: '대화 시작', headline: '법률 용어보다, 나의 상황부터.', path: '/', description: '사용자가 상황을 편하게 입력할 수 있는 대화 시작 화면입니다. 예시 질문과 법규 검색을 함께 배치했습니다.', points: ['사용법: 법률 용어 대신 내가 처한 상황을 문장으로 입력하거나 예시 질문을 선택합니다', '답변은 원문 인용과 "AI 쉬운 해설 · 참고용"이 구분되어 표시됩니다', '근거를 찾지 못하면 답을 지어내지 않고 보류합니다. 법규 검색으로 직접 찾을 수도 있습니다'] },
    ],
  },
  {
    id: 'quizforge', title: 'QuizForge', summary: '학습 자료를 퀴즈로, 풀이를 복습으로.',
    description: '주제나 텍스트·TXT 파일을 바탕으로 AI가 문제를 만들고, 답안을 제출하면 서버에서 채점해 정답·해설과 원문 근거를 보여주는 학습 도구입니다.',
    status: 'developing', statusLabel: '공개 배포 · 입력 주제 검증 고도화 중',
    technologies: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'Gemini'],
    features: [
      '주제·직접 입력·UTF-8 TXT 불러오기, 난이도와 문항 수 설정, 객관식·OX·단답형 선택',
      'Gemini 기반 문제 생성, 입력·응답 구조 검증, 생성 대기 및 오류 안내, 유형별 답안 작성',
      '정답을 인증 암호화 토큰으로 보호하고 서버에서 채점. 제출 후 점수·정답·해설과 텍스트 모드 원문 근거 표시',
    ],
    plannedFeatures: ['입력 주제 검증 기능 고도화'],
    architecture: '브라우저 → Next.js 화면·API 연결 → FastAPI → Gemini(퀴즈 생성) 또는 서버 채점 → 문제 풀이·결과 화면.',
    challenges: [
      'Next.js 화면과 FastAPI 업무 로직을 분리하고, 생성 응답에서 정답과 해설을 제외했습니다. TXT 파일은 브라우저에서 읽고, 사용자가 내용을 확인하고 AI 전송에 동의한 뒤에만 생성 요청을 보냅니다.',
      '외부 AI 호출 없이 검증하는 백엔드 테스트 112개와 TXT 입력 테스트 9개를 통과했습니다.',
    ],
    github: 'https://github.com/orca305/QuizForge', liveUrl: 'https://quizforge-nine-chi.vercel.app/',
    screenshotNote: '공개 배포된 QuizForge에서 직접 촬영한 실제 입력 화면입니다. 문제 풀이와 채점 결과 이미지는 추후 추가할 수 있습니다.',
    screenshots: [
      { src: '/quizforge/settings.jpg', title: '퀴즈 생성 설정', description: '공개 사이트의 주제 입력과 출제 설정 화면입니다. 난이도, 문항 수, 문제 유형을 선택할 수 있습니다.' },
      { src: '/quizforge/text-input.jpg', title: '텍스트·TXT 입력', description: '공개 사이트에서 텍스트·TXT 입력 방식을 선택한 실제 화면입니다. 입력 내용을 확인한 뒤 생성 요청을 보내는 흐름입니다.' },
    ],
  },
  {
    id: 'tableflow', title: 'TableFlow', summary: 'Java + Python 하이브리드 데이터 변환 플랫폼',
    description: 'Excel/CSV/PDF/이미지와 관계형 DB(Oracle·PostgreSQL·MySQL·MariaDB)의 표를 검토·수정하고, INSERT SQL·CSV/XLSX로 내보내거나 다른 DB로 이전하는 ETL 워크스페이스입니다.',
    status: 'developing', statusLabel: '개발 중 · 로컬 검증 완료, 공개 배포 준비',
    technologies: ['Next.js', 'Spring Boot', 'Java 21', 'FastAPI', 'Python', 'RapidOCR'],
    purpose: '현업에서 Excel·CSV·스캔 문서의 표를 DB에 옮기거나 DBMS 간에 이전할 때 반복되는 컬럼 매핑, 형식 검증, SQL 작성을 한 화면의 검토 흐름으로 묶기 위해 개발하고 있습니다.',
    features: [
      '파일 입력: CSV(UTF-8/MS949/EUC-KR, 구분자 자동 처리), XLSX(시트·헤더 행 선택), PDF 텍스트 표(최대 20페이지), PNG/JPEG/스캔 PDF는 로컬 OCR(RapidOCR + ONNX Runtime)로 인식하고 셀별 신뢰도와 원본 대조를 제공',
      '검토·변환: 셀 편집, 컬럼 이름·자료형·필수값·길이·정밀도 설정, 정수/소수/날짜/불리언 정규화, 오류 셀·중복 행 검증',
      '출력: Oracle/PostgreSQL/MySQL/MariaDB INSERT SQL, CSV/XLSX 다운로드, 4종 DB 직접 적재(전체 트랜잭션·롤백, 영수증 기반 중복 요청 방지)',
      'DB 연동: 스키마/테이블/컬럼/PK 탐색, 읽기 전용 행 추출(최대 10,000행), 대상 컬럼 자동 매핑 추천',
      'DB → DB 이전: 컬럼 매핑 → Dry-run → 동의 → 적재. 최대 1,000,000행까지 5,000행 청크 단위 트랜잭션·백그라운드 진행률·취소·이어서 실행, 대상 테이블 자동 생성(CREATE 미리보기), 원본 키 보존과 시퀀스 재동기화, 작업 이력(비밀번호·데이터 미저장)',
    ],
    plannedFeatures: ['FK·인덱스·기본값 복제와 이전 순서 자동 계산', '대형 테이블 성능 측정 및 키 기반 페이지 최적화', 'SQL Server 등 추가 DBMS, 공개 배포와 원격 CI'],
    architecture: 'Next.js 16 화면 → Spring Boot(Java 21) ETL 엔진(파싱·정규화·검증·SQL 생성·JDBC 적재) → 필요 시 FastAPI(Python) 로컬 OCR 서비스. 외부 OCR은 서버 허용과 파일별 동의가 모두 있을 때만 쓰며, 로컬 실패 시 자동으로 외부 전송하지 않습니다.',
    challenges: [
      '검증 현황(2026-11-20 문서 기준): PostgreSQL 17, MySQL 8.4, MariaDB 11.8, Oracle Free 23의 일회용 Docker 컨테이너 4종에서 연결·메타데이터·적재·재시도·충돌·롤백과 DB→DB 8개 경로를 통합 테스트했고, 실제 브라우저로 Oracle→PostgreSQL 이전도 확인했습니다.',
      '테스트: Java 48개(실서버 4종 포함 시 67개) 실패 0, Playwright 화면 테스트 통과, OCR 샘플 4종 헤더 포함 36/36 셀 일치(샘플당 약 0.6~1.2초). 합성 소규모 표 측정이라 일반 문서 정확도를 뜻하지 않습니다.',
      '실서버 테스트로 Oracle IDENTITY 검사 버그(ORA-17027)를 찾아 수정했고, 한글을 잘못 회전시키는 OCR 방향 분류기는 비활성화했습니다. 한계: 대용량 이전은 12,500행 규모까지만 검증했고, PostgreSQL 외에는 테이블 자동 생성 DDL이 롤백되지 않습니다.',
    ],
    github: 'https://github.com/orca305/TableFlow',
    screenshotNote: '로컬에서 실행한 TableFlow의 실제 화면입니다(2026-11-20 기준). 개발이 계속 진행 중이라 화면과 기능은 이후 달라질 수 있습니다.',
    screenshots: [
      { src: '/tableflow/01-workspace-validated.png', title: '파일 검토 및 검증', headline: '올리고, 고치고, 내보내기.', path: '/', description: '샘플 CSV를 불러와 컬럼 매핑과 검증을 마친 워크스페이스 화면입니다. 검증 결과를 확인한 뒤 SQL, Excel, CSV로 내보냅니다.', points: ['사용법: "샘플 데이터로 시작" 또는 파일 업로드(CSV/XLSX/PDF/이미지)', '컬럼 이름·자료형·필수값을 정하고 "데이터 검증"으로 오류 셀과 중복 행 확인', '대상(Oracle/PostgreSQL/MySQL/MariaDB SQL, Excel, CSV)을 골라 다운로드'] },
      { src: '/tableflow/02-db-to-db-dry-run.png', title: 'DB → DB 이전 점검', headline: '옮기기 전에, 먼저 점검.', description: 'Oracle에서 PostgreSQL로 테이블을 옮기기 전, 실제 적재 없이 결과를 확인하는 Dry-run 화면입니다.', points: ['사용법: 원본·대상 DB 연결 후 테이블과 컬럼 매핑을 선택', 'Dry-run으로 행 수 한도·시간 정보 손실·FK 경고를 사전 확인', '문제가 없을 때만 동의 후 트랜잭션 적재'] },
      { src: '/tableflow/03-db-to-db-create-table-preview.png', title: '새 테이블 만들기', headline: '없으면, 정의대로 만들기.', description: '대상 DB에 테이블이 없을 때 원본 정의로 CREATE TABLE을 만들어 미리 보여주는 화면입니다.', points: ['사용법: 생성될 DDL을 미리보기로 확인하고 동의', 'FK·자동 증가 컬럼은 경고하거나 거부', '원본 키 보존 옵션 사용 시 적재 후 시퀀스를 재동기화'] },
      { src: '/tableflow/04-db-to-db-chunked-done-history.png', title: '대용량 이전과 작업 이력', headline: '큰 테이블도, 나눠서.', description: '12,500행을 5,000행 청크로 나눠 이전을 완료하고 작업 이력이 남은 화면입니다.', points: ['사용법: 10,000행 초과 시 백그라운드 작업으로 진행률 확인·취소', '실패하면 같은 요청으로 이어서 실행(완료된 청크는 건너뜀)', '작업 이력에는 비밀번호·호스트·데이터를 저장하지 않음'] },
    ],
  },
];
