import Link from 'next/link';
import Portfolio from '../portfolio';
import { ProjectsIndex } from '../project-pages';
import { pageMetadata, pageDescriptions } from '../seo';
export const metadata={...pageMetadata(pageDescriptions.projects.title,pageDescriptions.projects.description,'/projects'),robots:{index:false,follow:true}};
export default function MiniProjectsCompatibility() {return <><meta httpEquiv="refresh" content="0;url=/projects"/><Portfolio style={2} section="projects" selected><p className="fine-print">미니프로젝트는 <Link href="/projects">Projects</Link>로 통합되었습니다.</p><ProjectsIndex/></Portfolio></>;}
