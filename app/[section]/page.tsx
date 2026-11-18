import { notFound } from 'next/navigation';
import Portfolio, { sections } from '../portfolio';
import { pageDescriptions, pageMetadata } from '../seo';
export function generateStaticParams() {return sections.filter(s=>s.id!=='home'&&s.id!=='projects').map(s=>({section:s.id}));}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{section:string}>}) {const {section}=await params;const meta=pageDescriptions[section];if(!meta)notFound();return pageMetadata(meta.title,meta.description,`/${section}`);}
export default async function Page({params}:{params:Promise<{section:string}>}) {
 const {section}=await params;
 if(!sections.some(s=>s.id===section&&s.id!=='home'&&s.id!=='projects')) notFound();
 return <Portfolio style={2} section={section} selected />;
}
