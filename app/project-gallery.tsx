'use client';
import { useRef, useState } from 'react';
import type { PortfolioProject } from './project-data';
import styles from './aurore-preview.module.css';

export default function ProjectGallery({ project }: { project: PortfolioProject }) {
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const screen = project.screenshots[selected];
  const changeScreen = (index: number) => setSelected(index);
  if (!screen) return <section className="project-empty" aria-label={`${project.title} 실제 화면`}><p className="kicker">SCREENSHOTS / COMING LATER</p><h2>실제 구현 화면은 개발 진행에 맞춰 추가합니다.</h2><p>현재는 {project.statusLabel} 단계입니다. 계획한 기능을 완성된 화면처럼 표시하지 않습니다.</p></section>;
  return <section className={styles.showcase} aria-label={`${project.title} 실제 서비스 화면`}>
    <div className={styles.topline}><div className={styles.identity}>{project.logo && <img src={project.logo} alt="" width={30} height={30}/>}<span>{project.title} <small>PRODUCT WALKTHROUGH</small></span></div><span className={styles.liveLabel}><i/>실제 구현 화면</span></div>
    <div className={styles.layout}>
      <aside className={styles.rail}><p className={styles.railHeading}>화면 살펴보기 <span>{String(project.screenshots.length).padStart(2, '0')} SCREENS</span></p><div className={styles.screenList}>{project.screenshots.map((item,index)=><button key={item.src} aria-pressed={selected===index} onClick={()=>changeScreen(index)}><span className={styles.number}>{String(index+1).padStart(2,'0')}</span><span><strong>{item.title}</strong>{item.path && <small>{item.path}</small>}</span><span className={styles.arrow}>↗</span></button>)}</div></aside>
      <div className={styles.stage}><div className={styles.stageHeading}><span aria-live="polite">{String(selected+1).padStart(2,'0')} / {screen.title}</span><button className="gallery-open" onClick={()=>dialog.current?.showModal()} aria-haspopup="dialog">화면 확대 ↗</button></div><button className={`${styles.screenImage} gallery-image-button`} onClick={()=>dialog.current?.showModal()} aria-label={`${screen.title} 화면 확대`} aria-haspopup="dialog"><img src={screen.src} alt={`${project.title} 실제 ${screen.title} 화면`}/><span className={styles.zoomHint}>＋ 화면 확대</span></button><div className="gallery-controls" aria-label="이미지 이동"><button disabled={selected===0} onClick={()=>changeScreen(selected-1)}>← 이전 화면</button><span>{selected+1} / {project.screenshots.length}</span><button disabled={selected===project.screenshots.length-1} onClick={()=>changeScreen(selected+1)}>다음 화면 →</button></div><div className={styles.caption}><div><h2>{screen.headline ?? screen.title}</h2><p>{screen.description}</p></div>{screen.points?.length ? <ul>{screen.points.map(point=><li key={point}><span>↳</span>{point}</li>)}</ul> : null}</div></div>
    </div><div className={styles.bottomline}><span>{project.screenshotNote}</span><span>이미지 선택 시 확대</span></div>
    <dialog ref={dialog} className="project-image-dialog" aria-label={`${project.title} ${screen.title} 확대 보기`} onKeyDown={event=>{if(event.key==='ArrowLeft'&&selected>0){event.preventDefault();changeScreen(selected-1);}if(event.key==='ArrowRight'&&selected<project.screenshots.length-1){event.preventDefault();changeScreen(selected+1);}}}><header><h2>{project.title} / {screen.title}</h2><button autoFocus onClick={()=>dialog.current?.close()} className="dialog-close">닫기 ✕</button></header><p>{screen.description}</p><div className="gallery-controls"><button disabled={selected===0} onClick={()=>changeScreen(selected-1)}>← 이전 화면</button><a href={screen.src} target="_blank" rel="noreferrer">원본 이미지 ↗</a><button disabled={selected===project.screenshots.length-1} onClick={()=>changeScreen(selected+1)}>다음 화면 →</button></div><img src={screen.src} alt={`${project.title} ${screen.title} 원본 화면`}/></dialog>
  </section>;
}
