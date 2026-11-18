export interface Experience { no: string; period: string; ongoing: boolean; category: string; title: string; summary: string; tags: string[]; tasks: string[]; story?: string; storyTitle?: string; }

export const experiences: Experience[] = [
  {
    no: '01',
    period: '2024.02.13 — 2024.12.31',
    ongoing: false,
    storyTitle: '기능 개선 경험',
    category: 'SYSTEM DEVELOPMENT',
    title: '연계솔루션 개발',
    summary:
      '신입 개발자로서 기존 연계솔루션의 구조와 코드 흐름을 파악하고, 관리자 기능과 사용자 화면 개선 업무를 수행했습니다.',
    tags: ['React', 'Java', 'Spring Boot', '장애 대응'],
    tasks: [
      'React 기반 관리자 화면 및 UI 개선',
      '관리자 기능 개발 및 기존 기능 수정',
      '기존 소스코드 분석과 기능 유지보수',
    ],
    story:
      '기존 연계솔루션의 코드 구조와 화면 구성 방식을 분석하고, 관리자 기능 및 UI 개선 요구사항을 반영했습니다. 기존 기능에 영향을 최소화하면서 필요한 부분을 수정하는 경험을 쌓았습니다.',
  },
  {
    no: '02',
    period: '2024.06.03 — 2024.12.31',
    ongoing: false,
    category: 'SYSTEM OPERATIONS',
    title: '충청북도 재난위험감지 센싱정보 연계시스템 유지관리',
    summary:
      'Linux 서버와 PostgreSQL 기반 솔루션 시스템의 설치·운영 및 장애 대응을 담당했습니다.',
    tags: ['Linux', 'PostgreSQL', '장애 대응'],
    tasks: [
      'Linux 서버 설치 및 운영 환경 관리',
      'PostgreSQL 설치·이관 및 서버 장애 대응',
    ],
    story:
      '데이터베이스 연결 장애가 발생했을 때 서버와 DB 로그를 분석하여 로그 저장공간 관리 문제를 확인했습니다. 이후 운영 환경과 관련 설정을 점검해 서비스를 복구하고, 동일한 장애를 방지하기 위해 설치 가이드와 모니터링 정책을 보완했습니다.',
  },
  {
    no: '03',
    period: '2025.01.01 — 2025.07.31',
    ongoing: false,
    category: 'SERVICE INTEGRATION',
    title: '한국철도공사 모바일오피스 고도화',
    summary:
      '한국철도공사 모바일오피스 고도화 사업에서 내부 업무시스템 연계, 모바일 앱 통합, 사용자 기능 개선 및 서버 이중화 업무에 참여했습니다.',
    tags: [
      'API 연계',
      '모바일 앱 통합',
      '서버 이중화',
      'jQuery',
      'Spring',
      'MariaDB',
    ],
    tasks: [
      '내부 업무시스템 API 연계 및 모바일 앱 통합',
      '간편 로그인 및 즐겨찾기 기능, 일정관리 기능 개발',
      '업무 매뉴얼 트리 구조와 사용자 화면 개선',
      '물품 조회 SQL 및 전자결재 공람 기능 개선',
      'JEUS 기반 서버 이중화 업무 참여',
    ],
    story:
      '기존 모바일오피스의 업무 기능을 분석하고, 간편 로그인·즐겨찾기·일정관리 등 사용자 편의 기능을 개발했습니다. 또한 물품 조회 SQL과 전자결재 공람 기능을 개선하며 기존 시스템의 업무 흐름을 보완했습니다.',
  },
  {
    no: '04',
    period: '2025.09.10 — 2025.12.31',
    ongoing: false,
    category: 'DATA MIGRATION',
    title: '스마트축산 빅데이터 플랫폼 고도화',
    summary:
      'PostgreSQL에서 Oracle로의 DB 이관과 백엔드 개선 업무를 수행했습니다.',
    tags: ['PostgreSQL', 'Oracle', 'Spring', 'MyBatis'],
    tasks: [
      'PostgreSQL → Oracle 데이터베이스 이관',
      '백엔드 및 Oracle 최적화',
      '데이터 변경 관리 및 대시보드 관련 업무',
    ],
    story:
      'PostgreSQL에서 Oracle로 데이터베이스를 이관하는 과정에서 기존 SQL과 데이터 처리 로직을 검토하고, Oracle 환경에 맞게 백엔드 기능을 수정했습니다. 변경된 데이터베이스 환경에서도 기존 업무 기능이 정상적으로 동작하도록 개선했습니다.',
  },
  {
    no: '05',
    period: '2026.01.01 — 현재',
    ongoing: true,
    category: 'PUBLIC SERVICE',
    title: '국무조정실 규제정보화시스템 유지관리',
    summary:
      '데이터베이스 운영과 서비스 모니터링, 업무 화면 개선을 담당하고 있습니다.',
    tags: [
      'JBoss',
      'CUBRID',
      'Jennifer',
      'WebSquare',
      'laf',
      'jsp',
      'Spring',
      'MyBatis',
    ],
    tasks: [
      'CUBRID 운영 및 Jennifer 기반 모니터링',
      '규제합리화위원회 관련 신 기능 개발 및 기존 업무 기능 개선',
      '내부망·외부망 설계 및 구축 업무 참여',
    ],
    story:
      'CUBRID와 Jennifer를 활용해 시스템 운영 상태를 점검하고, 기존 업무 기능을 분석하여 신규 요구사항을 반영했습니다. 또한 내·외부망 환경의 차이를 고려하며 시스템 구축 및 업무 화면 개선에 참여했습니다.',
  },
];

export const skills = [
  {
    label: 'Frontend',
    items: 'JavaScript · jQuery · React · WebSquare · jsp',
    desc: '개인 프로젝트 웹 화면 개발 및 공공 업무시스템 화면 개선',
  },
  {
    label: 'Backend',
    items: 'Java · Spring · 전자정부프레임워크 · MyBatis',
    desc: '공공 업무시스템의 기능 개발과 유지보수',
  },
  {
    label: 'Database',
    items: 'Oracle · PostgreSQL · CUBRID · MariaDB',
    desc: 'SQL 개발, 데이터베이스 이관 및 운영',
  },
  {
    label: 'Operations',
    items: 'Linux · Tomcat · Jennifer',
    desc: '서버 운영, 로그 분석 및 장애 대응',
  },
  {
    label: 'Project stack',
    items: 'Next.js · NestJS · FastAPI · Prisma · LLM · RAG',
    desc: '개인 프로젝트의 설계 기술 스택',
  },
];
