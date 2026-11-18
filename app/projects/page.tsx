import Portfolio from '../portfolio';
import { pageMetadata, pageDescriptions } from '../seo';
export const metadata = pageMetadata(pageDescriptions.projects.title,pageDescriptions.projects.description,'/projects');
export default function ProjectsPage() {return <Portfolio style={2} section="projects" selected/>;}
