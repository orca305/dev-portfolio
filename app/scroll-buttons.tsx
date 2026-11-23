"use client";
import { useEffect, useState } from "react";

/** 화면 오른쪽 아래의 맨 위로 / 맨 아래로 이동 버튼. 이미 끝에 있으면 해당 방향 버튼을 비활성화한다. */
export default function ScrollButtons() {
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      setAtTop(window.scrollY < 40);
      setAtBottom(window.scrollY + window.innerHeight >= doc.scrollHeight - 40);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const observer = new ResizeObserver(update);
    observer.observe(document.body);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, []);

  const go = (top: number) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className="scroll-buttons" role="group" aria-label="페이지 이동">
      <button type="button" onClick={() => go(0)} disabled={atTop} aria-label="맨 위로" title="맨 위로">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 15l6-6 6 6" /></svg>
      </button>
      <button type="button" onClick={() => go(document.documentElement.scrollHeight)} disabled={atBottom} aria-label="맨 아래로" title="맨 아래로">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
      </button>
    </div>
  );
}
