import { notFound } from 'next/navigation';
import Portfolio, { sections } from '../../../portfolio';
export function generateStaticParams() {return [1,2,3,4,5].flatMap(style=>[...sections.map(s=>s.id),'mini-projects'].map(section=>({style:String(style),section})));}
export const dynamicParams=false;
export async function generateMetadata(){return {robots:{index:false,follow:true}};}
export default async function Page({params}:{params:Promise<{style:string;section:string}>}) {
 const {style,section}=await params;
 const displaySection=section==='mini-projects'?'projects':section;
 if(!['1','2','3','4','5'].includes(style)||!sections.some(s=>s.id===displaySection)) notFound();
 return <Portfolio style={Number(style)} section={displaySection}/>;
}
