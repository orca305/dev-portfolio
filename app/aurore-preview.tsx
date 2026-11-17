"use client";
import { useState } from "react";
import styles from "./aurore-preview.module.css";

const screens = [
  { id: "compare", label: "법령 변경 비교", path: "/legals/:id/compare", title: "달라진 문장을, 나란히.", description: "비교 전·후 시행본의 조문과 부칙을 나란히 배치하고, 추가·삭제·변경된 항목과 문구를 구분하는 실제 화면입니다.", points: ["시행본 두 개를 선택해 비교", "변경된 항목만 모아보기", "원문 출처로 이어지는 구조"] },
  { id: "versions", label: "시행 이력 탐색", path: "/legals/:id/versions", title: "같은 법령, 다른 시점.", description: "하나의 법령에 저장된 여러 시행본을 시행일 기준으로 살펴보고, 기준일 조회와 조문 확인으로 이어지는 화면입니다.", points: ["기준일에 따른 시행본 조회", "시행일 정렬과 페이지 분할", "시행본별 조문·원문 연결"] },
  { id: "legals", label: "법규 검색", path: "/legals", title: "이름으로 찾고, 원문으로 연결.", description: "법규 이름으로 저장된 법령을 찾고, 검색 결과에서 해당 법령의 시행본으로 이동하는 실제 검색 화면입니다.", points: ["법규 이름 검색", "등록일 정렬과 결과 목록", "시행본 탐색으로 연결"] },
  { id: "conversation", label: "대화 시작", path: "/", title: "법률 용어보다, 나의 상황부터.", description: "사용자가 상황을 편하게 입력할 수 있는 대화 시작 화면입니다. 예시 질문과 법규 검색을 함께 배치했습니다.", points: ["상황 중심의 질문 입력", "예시 질문으로 진입 지원", "근거 탐색을 위한 검색 연결"] },
];

export default function AurorePreview() {
  const [selected, setSelected] = useState(0);
  const screen = screens[selected];
  return <section className={styles.showcase} aria-label="오로르 실제 서비스 화면">
    <div className={styles.topline}><div className={styles.identity}><img src="/aurore/mark.png" alt="" width={30} height={30}/><span>AURORE <small>PRODUCT WALKTHROUGH</small></span></div><span className={styles.liveLabel}><i/> 실제 개발 화면 · 2026.11</span></div>
    <div className={styles.layout}>
      <aside className={styles.rail}><p className={styles.railHeading}>화면 살펴보기 <span>04 SCREENS</span></p><div className={styles.screenList}>{screens.map((item,i)=><button key={item.id} aria-pressed={selected===i} onClick={()=>setSelected(i)}><span className={styles.number}>0{i+1}</span><span><strong>{item.label}</strong><small>{item.path}</small></span><span className={styles.arrow}>↗</span></button>)}</div><div className={styles.railNote}><span>PERSONAL PROJECT</span><p>법령의 원문과 이력,<br/>그리고 사용자의 질문을<br/>하나의 흐름으로.</p><a href="https://github.com/orca305/easy-law-ai" target="_blank" rel="noreferrer">프로젝트 소스 ↗</a></div></aside>
      <div className={styles.stage}><div className={styles.stageHeading}><span>0{selected+1} / {screen.label}</span><a href={`/aurore/${screen.id}.jpg`} target="_blank" rel="noreferrer">원본 크기로 보기 ↗</a></div><a className={styles.screenImage} href={`/aurore/${screen.id}.jpg`} target="_blank" rel="noreferrer" aria-label={`${screen.label} 실제 화면 원본 보기`}><img src={`/aurore/${screen.id}.jpg`} alt={`실제 오로르 개발 서버에서 촬영한 ${screen.label} 화면`} width={1360} height={900}/><span className={styles.zoomHint}>＋ 화면 확대</span></a><div className={styles.caption}><div><h2>{screen.title}</h2><p>{screen.description}</p></div><ul>{screen.points.map(point=><li key={point}><span>↳</span>{point}</li>)}</ul></div></div>
    </div><div className={styles.bottomline}><span>실제 개발 서버에서 촬영한 화면입니다. 이미지 선택 시 원본으로 확대됩니다.</span><span>화면 기록 · 라이브 서비스 연결 없음</span></div>
  </section>;
}
