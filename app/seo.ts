import type { Metadata } from 'next';
export const siteUrl = 'https://wjb-portfolio.vercel.app';
export function pageMetadata(title: string, description: string, path: string, image?: string): Metadata {
  const images = [{url: image ?? '/social/portfolio.png',alt:title}];
  return {title,description,alternates:{canonical:path},openGraph:{title,description,url:path,siteName:'우정범 | Full-Stack Developer',locale:'ko_KR',type:'website',images},twitter:{card:'summary_large_image',title,description,images:images.map(image=>image.url)}};
}
export const pageDescriptions: Record<string,{title:string;description:string}> = {
  home:{title:'우정범 | Full-Stack Developer',description:'공공 정보시스템에서 Java 기반 기능 개발, API 연계, 데이터베이스 이관, 서버 운영과 장애 대응을 수행한 풀스택 개발자 우정범의 포트폴리오.'},
  about:{title:'소개·기술·학력·자격사항 | 우정범',description:'풀스택 개발자 우정범의 기술 스택, 학력사항과 자격증 증빙을 소개합니다.'},
  experience:{title:'실무 경험 | 우정범',description:'공공 정보시스템의 기능 개선, 시스템 연계, 데이터베이스 이관과 장애 대응까지. 실제 프로젝트에서 수행한 업무와 문제 해결 과정을 소개합니다.'},
  projects:{title:'Projects | 우정범',description:'AURORE·QuizForge·TableFlow의 소개, 기술 스택, 개발 상태와 실제 구현 화면을 살펴보세요.'},
  contact:{title:'Contact | 우정범',description:'풀스택 개발자 우정범의 프로젝트와 개발 기록, 협업 연락 경로입니다.'},
};
