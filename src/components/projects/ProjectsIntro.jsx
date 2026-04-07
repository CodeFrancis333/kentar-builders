import SectionHeading from '../layout/SectionHeading'
import { projectsContent } from '../../data/projects'

function ProjectsIntro() {
  return <SectionHeading eyebrow="Projects" title={projectsContent.introTitle} text={projectsContent.introBody} />
}

export default ProjectsIntro
