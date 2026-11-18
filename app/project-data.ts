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
    technologies: ['Next.js', 'NestJS', 'Python FastAPI', 'PostgreSQL', 'Prisma'],
    features: ['법령 검색 및 시행 이력', '법령 변경 비교', '법률 질문 인터페이스'],
    plannedFeatures: ['RAG 및 로컬 AI 고도화'],
    architecture: 'Next.js 사용자 화면 → NestJS 법령·시행본 API → PostgreSQL·Prisma. AI 처리는 Python FastAPI 서비스로 분리합니다.',
    github: 'https://github.com/orca305/AURORE', logo: '/aurore/mark.png',
    screenshotNote: '실행 중인 오로르 개발 서버에서 직접 촬영한 화면입니다. 서비스의 실제 구성과 조회 결과를 보여주며, 포트폴리오에서는 이미지로 제공합니다.',
    screenshots: [
      { src: '/aurore/compare.jpg', title: '법령 변경 비교', headline: '달라진 문장을, 나란히.', path: '/legals/:id/compare', description: '비교 전·후 시행본의 조문과 부칙을 나란히 배치하고, 추가·삭제·변경된 항목과 문구를 구분하는 실제 화면입니다.', points: ['시행본 두 개를 선택해 비교', '변경된 항목만 모아보기', '원문 출처로 이어지는 구조'] },
      { src: '/aurore/versions.jpg', title: '시행 이력 탐색', headline: '같은 법령, 다른 시점.', path: '/legals/:id/versions', description: '하나의 법령에 저장된 여러 시행본을 시행일 기준으로 살펴보고, 기준일 조회와 조문 확인으로 이어지는 화면입니다.', points: ['기준일에 따른 시행본 조회', '시행일 정렬과 페이지 분할', '시행본별 조문·원문 연결'] },
      { src: '/aurore/legals.jpg', title: '법규 검색', headline: '이름으로 찾고, 원문으로 연결.', path: '/legals', description: '법규 이름으로 저장된 법령을 찾고, 검색 결과에서 해당 법령의 시행본으로 이동하는 실제 검색 화면입니다.', points: ['법규 이름 검색', '등록일 정렬과 결과 목록', '시행본 탐색으로 연결'] },
      { src: '/aurore/conversation.jpg', title: '대화 시작', headline: '법률 용어보다, 나의 상황부터.', path: '/', description: '사용자가 상황을 편하게 입력할 수 있는 대화 시작 화면입니다. 예시 질문과 법규 검색을 함께 배치했습니다.', points: ['상황 중심의 질문 입력', '예시 질문으로 진입 지원', '근거 탐색을 위한 검색 연결'] },
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
    description: 'Excel/CSV 데이터 처리, Oracle/MySQL SQL 생성, PDF 및 이미지 AI OCR을 다루는 플랫폼을 설계하고 있습니다.',
    status: 'planning', statusLabel: '설계 및 개발 준비',
    technologies: ['Next.js', 'Spring Boot', 'Java 21', 'FastAPI', 'Python'],
    features: [],
    plannedFeatures: ['Excel/CSV 데이터 처리', '데이터 미리보기와 컬럼 매핑·검증', 'Oracle/MySQL SQL 생성', 'PDF 및 이미지 AI OCR'],
    architecture: 'Next.js 화면, Spring Boot / Java 21, FastAPI / Python을 결합하는 하이브리드 구성을 계획하고 있습니다.',
    screenshots: [],
  },
];
