import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "우정범 | Full-Stack Developer",
  description: "공공 정보시스템 개발과 운영 경험을 바탕으로 사용자 화면부터 서버, 데이터베이스까지 연결하는 풀스택 개발자 우정범의 포트폴리오.",
};

const themeScript = `(function(){try{var t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=t==='light'||t==='dark'?t:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body>{children}</body></html>;
}

