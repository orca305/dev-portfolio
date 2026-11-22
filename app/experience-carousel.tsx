'use client';
import { useState } from 'react';
import { experiences } from './data';

export default function ExperienceCarousel() {
  const [index, setIndex] = useState(0);
  const project = experiences[index];
  return (
    <section className="experience-carousel" aria-label="실무 프로젝트">
      <div className="experience-toolbar">
        <p aria-live="polite">
          프로젝트 <strong>{String(index + 1).padStart(2, '0')}</strong>
          <span> / {String(experiences.length).padStart(2, '0')}</span>
        </p>
        <div className="experience-controls">
          <button onClick={() => setIndex(index - 1)} disabled={index === 0}>
            ← 이전 프로젝트
          </button>
          <button
            onClick={() => setIndex(index + 1)}
            disabled={index === experiences.length - 1}
          >
            다음 프로젝트 →
          </button>
        </div>
      </div>
      <article
        className="experience-slide"
        key={project.no}
        aria-labelledby="experience-title"
      >
        <div className="experience-slide-heading">
          <div>
            <p className="kicker">{project.category}</p>
            <h2 id="experience-title">{project.title}</h2>
            <p className="experience-period">
              {project.period}
              {project.ongoing && (
                <span className="ongoing-badge">현재 진행 중</span>
              )}
            </p>
          </div>
          <span className="experience-slide-number" aria-hidden="true">
            {project.no}
          </span>
        </div>
        <p className="experience-summary">{project.summary}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="experience-body">
          <section>
            <h3>담당 업무</h3>
            <ul>
              {project.tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </section>
          {project.story && (
            <section className="experience-case">
              <h3>{project.storyTitle ?? '문제 해결 경험'}</h3>
              <p>{project.story}</p>
            </section>
          )}
        </div>
      </article>
      <nav className="experience-position" aria-label="프로젝트 바로 선택">
        {experiences.map((item, i) => (
          <button
            key={item.no}
            onClick={() => setIndex(i)}
            aria-label={`${item.no} ${item.title}`}
            aria-current={i === index ? 'true' : undefined}
          >
            {item.no}
          </button>
        ))}
      </nav>
    </section>
  );
}
