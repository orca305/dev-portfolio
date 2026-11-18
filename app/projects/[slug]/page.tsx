import { notFound } from 'next/navigation';
import Portfolio from '../../portfolio';
import { projects } from '../../project-data';
import { ProjectDetail } from '../../project-pages';
import { pageMetadata } from '../../seo';
export function generateStaticParams() {return projects.map(project=>({slug:project.id}));}
export const dynamicParams = false;
export async function generateMetadata({params}:{params:Promise<{slug:string}>}) {const {slug}=await params;const project=projects.find(project=>project.id===slug);if(!project)notFound();return pageMetadata(`${project.title} | 우정범`,project.summary,`/projects/${project.id}`,`/social/${project.id}.png`);}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}) {const {slug}=await params;const project=projects.find(project=>project.id===slug);if(!project)notFound();return <Portfolio style={2} section="projects" selected><ProjectDetail project={project}/></Portfolio>;}
