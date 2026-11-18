import ProjectGallery from './project-gallery';
import { projects } from './project-data';
export default function AurorePreview() {
  return <ProjectGallery project={projects.find(project=>project.id==='aurore')!}/>;
}
