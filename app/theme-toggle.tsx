"use client";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);
  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try { localStorage.setItem("portfolio-theme", next); } catch { /* Theme works even when storage is unavailable. */ }
  }
  const label = theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환";
  return <button className="theme-toggle" type="button" onClick={toggle} aria-label={label} title={label}><span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span><span>{theme === "dark" ? "Light" : "Dark"}</span></button>;
}
