"use client";
import { useRef, useState } from "react";
const certificates = [
  { name: "정보처리기사", date: "2024.09.10 취득", issuer: "한국산업인력공단", image: "/certificates/information-processing-engineer.png", note: "생년월일·자격번호·문서 확인 코드를 가린 공개용 이미지입니다." },
  { name: "SQL 개발자 (SQLD)", date: "2024.04.05 취득 · 유효기간 영구", issuer: "한국데이터산업진흥원", image: "/certificates/sqld.png", note: "2026.11.17 발급된 갱신 증빙입니다. 유효기간은 영구이며, 생년월일과 자격번호를 가렸습니다." },
];
export default function Certificates() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(certificates[0]);
  return <section className="certificates-section" aria-labelledby="certificates-heading"><div className="about-section-heading"><p className="kicker">CERTIFICATIONS</p><h2 id="certificates-heading">자격사항</h2><p>자격증을 선택하면 증빙 이미지를 크게 볼 수 있습니다.</p></div><div className="certificate-list">{certificates.map(certificate => <button key={certificate.name} className="certificate-card" onClick={() => { setSelected(certificate); dialog.current?.showModal(); }} aria-haspopup="dialog"><span className="certificate-icon" aria-hidden="true">▤</span><span><strong>{certificate.name}</strong><span>{certificate.date}</span><small>{certificate.issuer}</small></span><span className="certificate-view">이미지 보기 ↗</span></button>)}</div><dialog className="certificate-dialog" ref={dialog} aria-labelledby="certificate-dialog-title"><header><div><p className="kicker">CERTIFICATE</p><h2 id="certificate-dialog-title">{selected.name}</h2></div><button className="dialog-close" onClick={() => dialog.current?.close()} autoFocus aria-label="자격증 이미지 닫기">닫기 ✕</button></header><p className="certificate-note">{selected.note}</p><div className="certificate-image"><img src={selected.image} alt={`${selected.name} 자격증 공개용 증빙 이미지`} /></div></dialog></section>;
}
