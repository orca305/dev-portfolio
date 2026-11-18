import Portfolio from './portfolio';
import { pageDescriptions, pageMetadata } from './seo';
export const metadata = pageMetadata(pageDescriptions.home.title,pageDescriptions.home.description,'/');
export default function Home() {return <Portfolio style={2} section="home" selected/>;}
