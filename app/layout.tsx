import type { Metadata } from 'next';
import './globals.css';
import { siteUrl, pageMetadata, pageDescriptions } from './seo';

export const metadata: Metadata = { metadataBase: new URL(siteUrl), ...pageMetadata(pageDescriptions.home.title, pageDescriptions.home.description, '/') };

const themeScript = `(function(){try{var t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=t==='light'||t==='dark'?t:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
