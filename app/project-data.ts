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
  metrics?: { value: string; label: string }[];
  usage?: string[];
  limitations?: string[];
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
    summary: '법령 원문을 근거로 일상의 법률 질문에 쉽게 답하는 AI 법률 안내 서비스.',
    description: '근거가 확인된 문장에만 조문을 붙이고 원문과 글자 단위로 대조해, AI가 지어낸 인용을 구조적으로 막는 법령 해설 서비스입니다.',
    status: 'developing', statusLabel: '개발 중 · 지인 대상 테스트 운영',
    technologies: ['Next.js', 'NestJS', 'Python FastAPI', 'PostgreSQL', 'Prisma', 'Claude Haiku', 'bge-m3', 'Cloudflare Tunnel'],
    purpose: '일반 LLM은 존재하지 않는 조문과 숫자를 그럴듯하게 만들어 내고, 법률 정보에서는 이것이 치명적입니다. 법제처 공식 원문을 해시 검증해 보관하고, 모델은 근거 번호만 고르게 한 뒤 코드가 원문과 대조하는 구조로, 기획·설계·백엔드·화면·AI 파이프라인·평가·운영·배포를 1인으로 개발했습니다(2026.09~, 커밋 약 60개).',
    features: [
      '질문 분석 → 조문 짚기 → 검색(어휘 + bge-m3 의미 검색 + 핵심 법령 가점) → 답변 생성 → 코드 검증의 근거 기반 답변. 원문에 없는 조문 번호·숫자·단정 표현은 제거하거나 "확인되지 않음"으로 표시하고, 근거가 없는 일반 설명에는 근거 표시를 붙이지 않습니다',
      '답변 화면: 한 줄 결론, 번호 단계, 근거 칩, 접힌 근거 조문과 원문 패널, 관련 판례, 도움 받을 곳. 답변 아래 피드백(도움 됐어요/개선이 필요해요)',
      '법령 시행본 이력·두 시행본 비교, 기간 검색, 판례 검색, 법률용어사전과 대화 속 용어 툴팁, 나의 사건(타임라인·다음 할 일), 대화 고정, 관심 항목·알림',
      '관리자 콘솔: 법령 갱신·판례 수집 검토와 승인, AI 답변 모델 교체(이력·롤백), 호출 모니터링(지연·오류율·비용 추정·알림), 사용자 피드백 처리, 개인정보 보관 점검',
      '운영: 외부 모델 장애·예산 소진 시 로컬 모델로 자동 전환, 서비스 감시·자동 복구, 접속 코드 보호와 Cloudflare 터널 외부 공개',
    ],
    metrics: [
      { value: '5,631', label: '법제처 원문 법령(전부 임베딩)' },
      { value: '14,131', label: '대법원 판례(2010~2026)' },
      { value: '29 / 30', label: '합성 홀드아웃 통과(개선 전 18)' },
      { value: '66 → 81', label: '의미 검색 도입 효과(100문항)' },
      { value: '156 + 68', label: '백엔드·AI 서버 자동 테스트' },
    ],
    usage: [
      '접속: www.aurore-law.com에 접속 코드 123456을 입력합니다(지인 테스트용, 개발자 PC가 켜져 있을 때만 접속).',
      '첫 화면에서 법률 용어 대신 내 상황을 문장으로 입력하거나 상황 카드를 선택합니다.',
      '답변은 한 줄 결론, 번호 단계, 근거 칩, 접힌 근거 조문 순으로 나옵니다. 근거 칩을 누르면 오른쪽에 조문 원문이 열립니다.',
      '근거가 확인되지 않은 문장에는 조문을 붙이지 않고, 법과 무관한 질문에는 답을 지어내지 않고 거절합니다. 답변 아래에서 "도움 됐어요/개선이 필요해요"로 피드백을 남길 수 있습니다.',
      '법령 검색에서 시행본 이력을 보고 두 시행본을 비교하거나, 판례·용어사전·나의 사건(타임라인·할 일)을 이용합니다. 관리자는 모델 교체·호출 모니터링·피드백을 처리합니다.',
    ],
    limitations: [
      '평가 질문은 직접 만든 합성 질문(표본 30~100개)이며 법령 이름 단위 정답이고 전문가 검토가 없습니다. 실제 사용자 로그 기반 평가가 아닙니다.',
      '법무 검토를 받은 약관·개인정보 처리방침이 없고, 법률 자문이 아닌 정보 제공 서비스입니다.',
      '판례 연결은 조문 번호 기준이라 주제가 어긋날 수 있고 관련 판례가 붙는 비율은 질문의 10~30% 수준입니다. 답변은 완성 후 한 번에 표시되며 평균 약 10초가 걸립니다.',
      '단일 PC 운영이며 백업·장애 대응과 질문 횟수 제한이 없습니다. 자치법규·하급심 판례는 아직 수집하지 않았습니다.',
    ],
    plannedFeatures: ['답변 항목 수 제한의 품질 영향을 새 문항으로 측정', '하급심 판례·자치법규 수집', '질문 횟수 제한·약관·백업을 갖춘 공개 범위 확대'],
    architecture: 'Next.js 화면 → NestJS API(대화·작업 큐·검색·검증·관리자) → PostgreSQL·Prisma. AI 처리(질문 분석·조문 짚기·답변)는 FastAPI 서비스로 분리하고, 답변 모델은 Claude Haiku, 장애·예산 소진 시 로컬 12B 모델로 전환합니다. 서비스는 127.0.0.1에서만 열고 화면만 Cloudflare 터널과 접속 코드 보호로 외부에 노출합니다.',
    challenges: [
      '저장 현황(2026-11-22): 법제처 원문 법령 5,631개(현행 조문 20만 개 이상, 전부 bge-m3 임베딩), 대법원 판례 14,131건(2010~2026), 법령용어 DB 초안 4,939개(공개 66개). 원문은 해시 검증한 스냅샷으로 보관하며 수집은 중단 후 이어 받기·중복 방지를 지원합니다.',
      '품질 측정: 재현 가능한 평가 도구로 합성 홀드아웃 30문항 통과 18 → 29, 오인용 3 → 1, 비법률 질문에 억지로 답한 경우 0. 의미 검색 도입으로 같은 100문항 통과 66 → 81. 같은 50문항에서 Haiku 48 / Sonnet 48 / 로컬 12B 43이라 정확도가 같고 6초 빠른 Haiku로 결정했습니다.',
      '평가 중 원문 캐시가 핵심 법령을 밀어내 후보가 사라지는 버그를 찾아 수정했습니다(민법·형법 질문에 엉뚱한 법령이 인용되던 원인).',
      '검증: 백엔드 테스트 156개와 AI 서버 테스트 68개 통과. 한계: 평가는 직접 만든 합성 질문(표본 30~100개)이고 전문가 검토가 없으며, 단일 PC 운영이라 전체 공개는 하지 않고 지인 테스트까지만 열었습니다. 정보 제공 서비스이며 법률 자문이 아닙니다.',
    ],
    github: 'https://github.com/orca305/AURORE', liveUrl: 'https://www.aurore-law.com', logo: '/aurore/mark.png',
    screenshotNote: '배포 사이트(www.aurore-law.com)는 지인 테스트용으로 열려 있으며 접속 코드는 123456입니다. 개발자 PC에서 운영 중이라 PC가 꺼져 있으면 접속되지 않을 수 있습니다. 아래 화면은 이전 버전(UI 개편 전)의 실제 개발 서버 캡처이며, 개편한 답변·관리자 화면 캡처는 추후 교체합니다.',
    screenshots: [
      { src: '/aurore/compare.jpg', title: '법령 변경 비교', headline: '달라진 문장을, 나란히.', path: '/legals/:id/compare', description: '비교 전·후 시행본의 조문과 부칙을 나란히 배치하고, 추가·삭제·변경된 항목과 문구를 구분하는 실제 화면입니다.', points: ['사용법: 법령 상세의 시행 이력에서 비교할 시행본 두 개를 고릅니다', '추가·삭제·변경된 항목만 모아볼 수 있습니다', '조문과 부칙을 나란히 보고 원문 출처로 이동합니다'] },
      { src: '/aurore/versions.jpg', title: '시행 이력 탐색', headline: '같은 법령, 다른 시점.', path: '/legals/:id/versions', description: '하나의 법령에 저장된 여러 시행본을 시행일 기준으로 살펴보고, 기준일 조회와 조문 확인으로 이어지는 화면입니다.', points: ['사용법: 법령을 선택하면 저장된 시행본이 시행일순으로 나열됩니다', '기준일을 입력해 그날 시행 중이던 버전을 조회합니다', '시행본을 열어 조문과 원문을 확인하거나 비교 화면으로 이동합니다'] },
      { src: '/aurore/legals.jpg', title: '법규 검색', headline: '이름으로 찾고, 원문으로 연결.', path: '/legals', description: '법규 이름으로 저장된 법령을 찾고, 검색 결과에서 해당 법령의 시행본으로 이동하는 실제 검색 화면입니다.', points: ['사용법: 검색창에 법령 이름(예: 민법, 근로기준법)을 입력합니다', '결과는 페이지 단위로 나뉘며 등록일 순으로 정렬됩니다', '결과를 누르면 해당 법령의 시행본 탐색으로 이어집니다. 법제처 5,631개 법령이 저장되어 있습니다'] },
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
    id: 'tableflow', title: 'TableFlow', summary: '파일과 4종 DB를 오가는 데이터 이관·변환 ETL 워크스페이스',
    description: 'Excel/CSV/PDF/이미지와 관계형 DB(Oracle·PostgreSQL·MySQL·MariaDB)의 표를 검토·변환해 SQL·파일로 내보내거나, DB에서 DB로 분할 이관하는 마이그레이션 도구입니다.',
    status: 'developing', statusLabel: '개발 중 · 로컬 검증 완료, 소개용 화면 배포',
    technologies: ['Next.js', 'Spring Boot', 'Java 21', 'FastAPI', 'Python', 'RapidOCR'],
    purpose: '공공 SI에서 PostgreSQL→Oracle DB 이관 등을 경험하며, 반복되는 컬럼 매핑·형식 검증·SQL 작성·건수 대조를 한 화면의 검토 흐름으로 묶어 보고자 개발했습니다.',
    features: [
      '파일 변환: CSV(UTF-8/MS949/EUC-KR, 구분자 자동), XLSX(시트·헤더 행 선택), PDF 텍스트 표, 이미지·스캔 PDF는 로컬 OCR(RapidOCR + ONNX Runtime)로 인식하고 셀별 신뢰도와 원본 대조 후 INSERT SQL·CSV·XLSX 출력 또는 DB 적재',
      'DB → DB 이관: 컬럼 자동 매핑 추천 → 사전 점검(Dry-run, 생성될 DDL 미리보기) → 동의 후 적재. 대상 테이블 자동 생성(인덱스·기본값·외래 키 복제 옵션, 부모 테이블 이관 순서 계산)',
      '분할 적재와 재개: 기본 키 기준 keyset 읽기로 5,000행마다 별도 트랜잭션과 영수증을 남기고, 중단되면 같은 요청으로 이어서 실행(서버 재시작 후에도 작업 목록 유지)',
      '행 조건(WHERE)·컬럼 선택, 값 변환 규칙, 이관 후 건수·집계 검증, 여러 테이블을 외래 키 순서로 옮기는 일괄 이관(최대 200개), 매일·일정 간격 스케줄',
      '안전장치: 모든 SQL은 바인딩과 식별자 인용, DML/DDL·주석·UNION 차단, 저장 비밀번호는 AES-256-GCM 암호화, 외부 OCR은 서버 허용과 파일별 동의가 모두 필요',
    ],
    metrics: [
      { value: '4종', label: 'Oracle·PostgreSQL·MySQL·MariaDB' },
      { value: '41.4초', label: '100만 행 DB→DB 이관(약 24,200행/초)' },
      { value: '139', label: '백엔드 테스트 통과(실패 0)' },
      { value: '30', label: '브라우저 E2E 통과(실서버 DB 포함)' },
      { value: '5,000행', label: '분할 적재 단위, 중단 후 재개' },
    ],
    usage: [
      '소개용 Vercel 화면(table-flow-blond.vercel.app)은 백엔드가 없어 기능이 동작하지 않습니다. 실제 사용은 로컬에서 백엔드(8080)와 프런트엔드(3100)를 실행합니다.',
      '파일 변환: "샘플 데이터로 시작" 또는 파일 업로드 → 컬럼 이름·자료형·필수값 설정 → "데이터 검증" → SQL·Excel·CSV 다운로드 또는 DB 적재. 이미지·스캔 PDF는 로컬 OCR 서비스를 켜면 셀별 신뢰도와 원본 대조를 거칩니다.',
      'DB 이관: 원본·대상 DB를 연결하고 테이블을 고르면 컬럼 매핑을 추천합니다. 사전 점검(Dry-run)에서 행 수·타입 변환·생성될 DDL을 확인한 뒤 동의하고 적재합니다.',
      '대용량·일괄: 10,000행을 넘으면 백그라운드로 진행률을 보며 취소·이어서 실행하고, 여러 테이블은 외래 키 순서로 일괄 이관하며, 완료 후 건수·집계 검증과 스케줄 실행을 설정합니다.',
    ],
    limitations: [
      '인증·권한이 없어 개인 PC나 내부망 전제이며 인터넷에 그대로 공개할 수 없습니다. DB 기능은 기본값이 꺼져 있습니다.',
      'MySQL·MariaDB·Oracle은 DDL이 롤백되지 않아 새 테이블 생성 뒤 적재가 실패하면 빈 테이블이 남을 수 있습니다. 순환 외래 키는 안내만 합니다.',
      'PDF/OCR은 페이지당 정방향 표 한 개와 첫 행 헤더를 전제로 하며, 외부 OCR 공급자는 모의 HTTP 계약만 검증했습니다. 원격 CI에는 DB 컨테이너가 없어 실서버 테스트는 로컬에서만 실행합니다.',
      '변환 규칙에 날짜 포맷·정규식·조건식이 없고, SQL Server·SQLite 등은 지원하지 않습니다.',
    ],
    plannedFeatures: ['인증·권한 관리(현재는 개인 PC·내부망 전제)', '증분 이관과 실행 결과 알림', 'SQL Server 등 추가 DBMS와 백엔드 공개 배포'],
    architecture: 'Next.js 16 화면 → Spring Boot 3.5(Java 21) ETL 엔진(파싱·정규화·검증·SQL 생성·JDBC 적재) → 필요 시 FastAPI(Python) 로컬 OCR 서비스. Vercel에는 프런트엔드만 소개용 데모 모드로 올렸고, 백엔드와 OCR은 로컬에서 실행합니다.',
    challenges: [
      '검증 현황(2026-11-22): 백엔드 단위·통합 테스트 139개 실패 0, 브라우저 E2E 30개 통과(실서버 DB 포함), GitHub Actions 원격 CI 성공. PostgreSQL 17·MySQL 8.4·MariaDB 11.8·Oracle Free 23의 일회용 Docker 컨테이너에서 Oracle→PostgreSQL, PostgreSQL→Oracle, MySQL→MariaDB, MariaDB→PostgreSQL 이관을 실서버로 확인했습니다.',
      '성능: Oracle→PostgreSQL 100만 행(5개 컬럼)을 41.4초(약 24,200행/초)에 이관했고, 분할마다 걸린 시간이 거의 일정했습니다(백엔드 -Xmx768m 기준).',
      '실서버 테스트로 Oracle IDENTITY 검사 버그(ORA-17027)를 찾아 수정했고, OFFSET 방식의 뒤쪽 청크 지연을 keyset 페이지로 바꿔 해소했습니다. 한계: 인증이 없어 인터넷에 그대로 공개할 수 없고, MySQL·MariaDB·Oracle은 DDL이 롤백되지 않아 적재 실패 시 빈 테이블이 남을 수 있으며, CI에는 DB 컨테이너가 없어 실서버 테스트는 로컬에서만 실행합니다.',
    ],
    github: 'https://github.com/orca305/TableFlow', liveUrl: 'https://table-flow-blond.vercel.app/',
    screenshotNote: '로컬에서 실행한 TableFlow의 실제 화면입니다(2026-11-22 기준). Vercel 소개용 배포는 백엔드가 없어 화면만 볼 수 있고 기능은 동작하지 않습니다.',
    screenshots: [
      { src: '/tableflow/01-workspace-validated.png', title: '파일 변환 · 검증', headline: '올리고, 고치고, 내보내기.', path: '파일 변환', description: '샘플 CSV를 불러와 컬럼 매핑과 검증을 마친 워크스페이스 화면입니다. 라이트·다크 테마를 지원합니다.', points: ['사용법: "샘플 데이터로 시작" 또는 파일(CSV/XLSX/PDF/이미지) 업로드', '컬럼 이름·자료형·필수값을 정하고 "데이터 검증"으로 오류 셀과 중복 행 확인', '대상(Oracle/PostgreSQL/MySQL/MariaDB SQL, Excel, CSV)을 골라 다운로드하거나 DB에 적재'] },
      { src: '/tableflow/02-db-to-db-dry-run.png', title: 'DB → DB 이관 사전 점검', headline: '옮기기 전에, 먼저 점검.', path: 'DB 이관', description: 'Oracle에서 PostgreSQL로 테이블을 옮기기 전, 실제 적재 없이 결과를 확인하는 Dry-run 화면입니다.', points: ['사용법: 원본·대상 DB 연결 후 테이블을 고르면 컬럼 매핑을 자동 추천', 'Dry-run으로 행 수·타입 변환·거부 사유를 사전 확인', '문제가 없을 때만 동의 후 트랜잭션 적재'] },
      { src: '/tableflow/03-db-to-db-create-table-preview.png', title: '새 테이블 만들기', headline: '없으면, 정의대로 만들기.', path: 'DB 이관', description: '대상 DB에 테이블이 없을 때 원본 정의로 CREATE TABLE을 만들어 미리 보여주는 화면입니다.', points: ['사용법: 생성될 DDL을 미리보기로 확인하고 동의', '인덱스·기본값·외래 키 복제 옵션과 부모 테이블 이관 순서 계산', '원본 키 보존 옵션 사용 시 적재 후 시퀀스 재동기화'] },
      { src: '/tableflow/04-db-to-db-chunked-done.png', title: '대용량 분할 이관', headline: '큰 테이블도, 나눠서.', path: 'DB 이관', description: '대용량 테이블을 5,000행 단위로 나눠 이관을 완료한 화면입니다.', points: ['사용법: 10,000행을 넘으면 백그라운드 작업으로 진행률 확인·취소', '실패하면 같은 요청으로 이어서 실행(완료된 분할은 건너뜀)', '완료 후 원본·대상 건수와 집계를 비교하는 사후 검증'] },
      { src: '/tableflow/05-history.png', title: '작업 이력', headline: '무엇을 옮겼는지, 남겨두기.', path: '작업 이력', description: '적재·이관의 성공·재시도·실패 기록을 모아 보는 작업 이력 화면입니다.', points: ['사용법: 왼쪽 메뉴의 "작업 이력"에서 지난 작업 확인', '비밀번호·호스트·데이터는 저장하지 않음', '스케줄·일괄 이관 실행 결과도 함께 확인'] },
    ],
  },
];
