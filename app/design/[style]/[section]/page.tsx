import { notFound } from 'next/navigation';
import Portfolio, { sections } from '../../../portfolio';
export function generateStaticParams() {return [1,2,3,4,5].flatMap(style=>sections.map(section=>({style:String(style),section:section.id})));}
export const dynamicParams=false;
export default async function Page({params}:{params:Promise<{style:string;section:string}>}) {
 const {style,section}=await params;
 if(!['1','2','3','4','5'].includes(style)||!sections.some(s=>s.id===section)) notFound();
 return <Portfolio style={Number(style)} section={section}/>;
}
