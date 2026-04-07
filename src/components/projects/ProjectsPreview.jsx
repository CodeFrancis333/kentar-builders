import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard'
import ProjectsIntro from './ProjectsIntro'
import { projectsContent } from '../../data/projects'

function ProjectsPreview() {
  const featuredProjects = projectsContent.items.slice(0, 4)

  return (
    <section id="projects" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ProjectsIntro />
        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            to="/projects"
            className="rounded-full bg-brandBlue px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-brandGreen hover:text-brandBlue"
          >
            View More Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsPreview
