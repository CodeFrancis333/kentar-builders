import { projectsContent } from '../../data/projects'

function ProjectCategories() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {projectsContent.categories.map(([title, body]) => (
        <div key={title} className="rounded-[2rem] bg-brandBlue p-8 text-white shadow-panel">
          <h3 className="font-display text-2xl uppercase">{title}</h3>
          <p className="mt-4 leading-7 text-white/80">{body}</p>
        </div>
      ))}
    </div>
  )
}

export default ProjectCategories
