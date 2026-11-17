"use client";

export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const current = root.dataset.theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("portfolio-theme", next); } catch { /* Theme works even when storage is unavailable. */ }
  }
  return <button className="theme-toggle" type="button" onClick={toggle} aria-label="밝은 테마와 어두운 테마 전환"><span aria-hidden="true">◐</span><span>테마</span></button>;
}
