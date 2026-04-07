import MoreProjectsList from '../components/projects/MoreProjectsList'
import ProjectCard from '../components/projects/ProjectCard'
import ProjectCategories from '../components/projects/ProjectCategories'
import ProjectsIntro from '../components/projects/ProjectsIntro'
import { projectsContent } from '../data/projects'

function ProjectsPage() {
  return (
    <section id="projects" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ProjectsIntro />
        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {projectsContent.items.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
        <MoreProjectsList />
        <ProjectCategories />
      </div>
    </section>
  )
}

export default ProjectsPage
