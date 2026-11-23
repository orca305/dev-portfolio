import Link from 'next/link';
import type { ReactNode } from 'react';
import { ProjectsIndex } from './project-pages';
import { skills, experiences } from './data';
import ExperienceCarousel from './experience-carousel';
import Certificates from './certificates';
import ThemeToggle from './theme-toggle';
export const concepts = [
  {
    name: 'Editorial',
    headline: '구조를 읽고,\n흐름을 만듭니다.',
    description: '아이보리 종이, 세리프 제목, 넓은 여백의 편집 디자인',
  },
  {
    name: 'Developer Console',
    headline: 'Interfaces.\nAPIs.\nSystems.',
    description: '검은 캔버스와 라임 포인트, 터미널을 닮은 개발자 작업실',
  },
  {
    name: 'Blueprint',
    headline: '연결의 가치를\n설계합니다.',
    description: '블루 그리드, 사이드 내비게이션, 모듈형 대시보드',
  },
  {
    name: 'Bold / Raw',
    headline: 'MAKE\nIT WORK.',
    description: '강한 타이포그래피, 오렌지와 굵은 선의 브루탈리즘',
  },
  {
    name: 'Quiet Studio',
    headline: '단단한 기반,\n자연스러운 연결.',
    description: '따뜻한 색감과 둥근 카드, 부드러운 스튜디오 스타일',
  },
];
export const sections = [
  { id: 'home', label: '첫 페이지', en: 'Overview' },
  { id: 'about', label: '소개', en: 'About' },
  { id: 'experience', label: '실무 경험', en: 'Experience' },
  { id: 'projects', label: '프로젝트', en: 'Projects' },
  { id: 'contact', label: '연락', en: 'Contact' },
];
export default function Portfolio({
  style,
  section,
  selected = false,
  children,
}: {
  style: number;
  section: string;
  selected?: boolean;
  children?: ReactNode;
}) {
  const concept = concepts[style - 1],
    index = sections.findIndex((s) => s.id === section);
  const url = (id: string) =>
    selected ? (id === 'home' ? '/' : `/${id}`) : `/design/${style}/${id}`;
  return (
    <div
      className={`portfolio concept-${style}${selected ? ' selected-portfolio' : ''}`}
    >
      {!selected && (
        <div className="review-bar">
          <Link href="/designs">← 시안 전체 보기</Link>
          <span>
            0{style} / {concept.name}
          </span>
          <div className="style-switch" aria-label="다른 디자인 시안">
            {concepts.map((c, i) => (
              <Link
                key={c.name}
                href={`/design/${i + 1}/${section}`}
                aria-label={`${c.name} 시안`}
                aria-current={style === i + 1 ? 'page' : undefined}
              >
                {i + 1}
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="portfolio-shell">
        <header className="site-header">
          <Link className="logo" href={url('home')}>
            {style === 2 ? '> wjb.dev' : style === 4 ? 'WJB®' : 'WJB.'}
          </Link>
          <span className="header-note">
            FULL-STACK DEVELOPER
            <br />
            PORTFOLIO / 2026
          </span>
          <nav aria-label="페이지 이동">
            {sections.map((s, i) => (
              <Link
                href={url(s.id)}
                key={s.id}
                aria-current={section === s.id ? 'page' : undefined}
              >
                <small>0{i + 1}</small>
                {s.en}
              </Link>
            ))}
          </nav>
          <a
            className="header-github"
            href="https://github.com/orca305"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <ThemeToggle />
        </header>
        <main
          className={`page-content page-${section}`}
          id="main"
          key={`${style}-${section}`}
        >
          {section === 'home' && (
            <div className="home-grid">
              <div className="hero-copy">
                <p className="kicker">
                  <span className="dot" /> FRONTEND · BACKEND · OPERATIONS
                </p>
                <h1>{concept.headline}</h1>
                <p className="intro">
                  안녕하세요, 풀스택 개발자 <b>우정범</b>입니다.
                  <br />
                  공공 정보시스템에서 Java 기반 기능 개발, API 연계,데이터베이스
                  이관, 서버 운영과 장애 대응을 수행했습니다.
                  <br />
                  기존 시스템의 구조를 이해하고, 문제의 원인을 분석해 안정적인
                  서비스로 개선하는 데 집중합니다.
                </p>
                <div className="actions">
                  <Link className="action primary" href={url('experience')}>
                    실무 경험 보기 <span>↗</span>
                  </Link>
                  <Link className="action" href={url('projects')}>
                    미니 프로젝트 보기 <span>→</span>
                  </Link>
                </div>
                <div className="hero-meta">
                  <span>Next.js · Java · Spring · SQL · Linux</span>
                  <span>SELECTED WORK / 01—{String(experiences.length).padStart(2, '0')}</span>
                </div>
              </div>
              <aside className="hero-visual">
                <div className="visual-heading">
                  <span>
                    {style === 2
                      ? '~/engineering-notes'
                      : 'ENGINEERING LANDSCAPE'}
                  </span>
                  <span>↗</span>
                </div>
                <div className="structure-art">
                  <div className="orbit orbit-one" />
                  <div className="orbit orbit-two" />
                  <div className="orbit orbit-three" />
                  <span className="art-core">
                    {style === 4 ? 'BUILD.' : 'W'}
                  </span>
                  <span className="art-label label-one">UI</span>
                  <span className="art-label label-two">API</span>
                  <span className="art-label label-three">SYSTEM</span>
                </div>
                <div className="visual-bottom">
                  <strong>
                    사용자 화면부터,
                    <br />
                    서비스의 기반까지.
                  </strong>
                  <span>01 / ENGINEERING</span>
                </div>
              </aside>
            </div>
          )}
          {section === 'about' && (
            <>
              <PageTitle
                no="02"
                title="화면부터 서버까지, 하나의 서비스로."
                subtitle="업무의 맥락을 이해하고, 기능이 동작하는 전체 흐름을 살핍니다."
              />
              <div className="about-layout">
                <article className="bio">
                  <h2>
                    사용자 화면에서
                    <br />
                    개발과 운영, 문제 해결까지.
                  </h2>
                  <p>
                    공공 정보시스템의 개발과 유지보수 업무를 수행하며
                    Java/Spring 기반 백엔드 개발, 데이터베이스 운영 및 이관,
                    Linux 서버 운영을 경험했습니다.
                  </p>
                  <p>
                    기존 시스템에서 문제가 발생하면 로그와 데이터 흐름을 분석해
                    원인을 파악하고, 기능 수정뿐 아니라 동일한 문제가 반복되지
                    않도록 개선하는 데 집중해 왔습니다.
                  </p>
                  <p>
                    최근에는 기존 실무 경험을 바탕으로 AI 기반 서비스와 데이터
                    처리 도구를 직접 설계하고 개발하며 기술 역량을 확장하고
                    있습니다.
                  </p>
                </article>
                <div className="skill-list">
                  {skills.map((s, i) => (
                    <article key={s.label}>
                      <span>0{i + 1}</span>
                      <div>
                        <h3>{s.label}</h3>
                        <strong>{s.items}</strong>
                        <p>{s.desc}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <section
                className="education-section"
                aria-labelledby="education-heading"
              >
                <div className="about-section-heading">
                  <p className="kicker">EDUCATION</p>
                  <h2 id="education-heading">학력사항</h2>
                </div>
                <div className="education-list">
                  <article>
                    <div>
                      <h3>한국방송통신대학교</h3>
                      <p>컴퓨터과학과 · 학사</p>
                    </div>
                    <div>
                      <strong>2025.03 — 현재</strong>
                      <span className="education-status">
                        재학(12월 졸업예정)
                      </span>
                    </div>
                  </article>
                  <article>
                    <div>
                      <h3>충남대학교</h3>
                      <p>회계학과 · 학사</p>
                    </div>
                    <div>
                      <strong>2009.03 — 2016.02</strong>
                      <span className="education-status">졸업</span>
                    </div>
                  </article>
                </div>
              </section>
              <Certificates />
            </>
          )}
          {section === 'experience' && (
            <>
              <PageTitle
                no="03"
                title="운영을 이해하는 개발 경험."
                subtitle="공공 정보시스템의 기능 개선, 시스템 연계, 데이터베이스 이관과 장애 대응까지. 실제 프로젝트에서 수행한 업무와 문제 해결 과정을 소개합니다."
              />
              <ExperienceCarousel />
              <p className="fine-print">
                공공기관 프로젝트의 실제 소스코드, 내부 화면 및 운영 데이터는
                공개하지 않습니다.
              </p>
            </>
          )}
          {section === 'projects' && (children ?? <ProjectsIndex/>)}
          {section === 'contact' && (
            <div className="contact-layout">
              <p className="kicker">05 / LET’S CONNECT</p>
              <h1>
                다음 연결은,
                <br />
                <em>함께.</em>
              </h1>
              <p>
                새로운 기술을 배우고, 실제 문제를 해결하는 과정에서 성장하고
                있습니다.
                <br />
                프로젝트 협업이나 개발과 관련된 이야기는 언제든 환영합니다. 주요
                프로젝트와 개발 기록은 GitHub에서 확인하실 수 있습니다.
              </p>
              <a
                className="action primary"
                href="https://github.com/orca305"
                target="_blank"
                rel="noreferrer"
              >
                github.com/orca305
              </a>
              <span className="contact-sign">
                우정범 / Full-Stack Developer
              </span>
            </div>
          )}
        </main>
        <footer className="page-footer">
          <span>© 2026 WOO JEONGBEOM</span>
          <div className="page-pagination">
            {index > 0 ? (
              <Link href={url(sections[index - 1].id)}>← 이전</Link>
            ) : (
              <span>시작</span>
            )}
            <span>
              0{index + 1} <i>/ 0{sections.length}</i>
            </span>
            {index < sections.length - 1 ? (
              <Link href={url(sections[index + 1].id)}>다음 →</Link>
            ) : (
              <Link href={url('home')}>처음으로</Link>
            )}
          </div>
          <span>{sections[index].en.toUpperCase()}</span>
        </footer>
      </div>
    </div>
  );
}
function PageTitle({
  no,
  title,
  subtitle,
}: {
  no: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="page-title">
      <p className="kicker">{no} / FULL-STACK DEVELOPER</p>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
