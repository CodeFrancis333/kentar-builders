import { useEffect, useState } from 'react'

function ProjectCard({ project }) {
  const gallery = Array.isArray(project.gallery) && project.gallery.length > 0 ? project.gallery : [project.image]
  const hasGallery = gallery.length > 1
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setActiveIndex(0)
  }, [project.name])

  useEffect(() => {
    if (!hasGallery) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % gallery.length)
    }, 3000)

    return () => window.clearInterval(intervalId)
  }, [gallery.length, hasGallery])

  const showImage = (index) => setActiveIndex(index)
  const showPrevious = () => setActiveIndex((current) => (current - 1 + gallery.length) % gallery.length)
  const showNext = () => setActiveIndex((current) => (current + 1) % gallery.length)

  return (
    <article className="rounded-[2rem] border border-brandBlue/10 bg-[#f8faff] p-8 shadow-panel">
      <div className="mb-6">
        <div className="relative overflow-hidden rounded-[1.5rem]">
          <img src={gallery[activeIndex]} alt={`${project.name} ${activeIndex + 1}`} className="h-56 w-full object-cover" />
          {hasGallery ? (
            <>
              <button
                type="button"
                onClick={showPrevious}
                aria-label={`Show previous ${project.name} image`}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl font-light leading-none text-white/95 transition hover:text-brandGreen"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label={`Show next ${project.name} image`}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl font-light leading-none text-white/95 transition hover:text-brandGreen"
              >
                ›
              </button>
            </>
          ) : null}
        </div>
        {hasGallery ? (
          <div className="mt-4 flex justify-center gap-2">
            {gallery.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => showImage(index)}
                aria-label={`Show ${project.name} image ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  activeIndex === index ? 'bg-brandGreen' : 'bg-brandBlue/20 hover:bg-brandBlue/40'
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brandGreen">{project.location}</p>
      <h3 className="mt-3 font-display text-3xl uppercase text-brandBlue">{project.name}</h3>
      <div className="mt-5 grid gap-2 text-sm leading-6 text-brandGray/80">
        <p>
          <span className="font-semibold text-brandBlue">Scope:</span> {project.scope}
        </p>
        <p>
          <span className="font-semibold text-brandBlue">Client:</span> {project.client}
        </p>
        {project.role ? (
          <p>
            <span className="font-semibold text-brandBlue">Role:</span> {project.role}
          </p>
        ) : null}
        {project.dateStarted ? (
          <p>
            <span className="font-semibold text-brandBlue">Date Started:</span> {project.dateStarted}
          </p>
        ) : null}
        {project.dateFinished ? (
          <p>
            <span className="font-semibold text-brandBlue">Date Finished:</span> {project.dateFinished}
          </p>
        ) : null}
        {project.contractAmount ? (
          <p>
            <span className="font-semibold text-brandBlue">Contract Amount:</span> {project.contractAmount}
          </p>
        ) : null}
      </div>
      <p className="mt-5 leading-7 text-brandGray/80">{project.description}</p>
    </article>
  )
}

export default ProjectCard
