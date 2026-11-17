import { notFound } from 'next/navigation';
import Portfolio, { sections } from '../portfolio';
export function generateStaticParams() {return sections.filter(s=>s.id!=='home').map(s=>({section:s.id}));}
export const dynamicParams=false;
export default async function Page({params}:{params:Promise<{section:string}>}) {
 const {section}=await params;
 if(!sections.some(s=>s.id===section&&s.id!=='home')) notFound();
 return <Portfolio style={2} section={section} selected />;
}
