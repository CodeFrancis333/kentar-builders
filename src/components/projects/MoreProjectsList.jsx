import { projectsContent } from '../../data/projects'

function MoreProjectsList() {
  return (
    <section className="mt-16">
      <div className="rounded-[2rem] bg-brandBlue p-8 text-white shadow-panel">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brandGreen">More Projects</p>
        <h3 className="mt-3 font-display text-4xl uppercase">Additional Project Listings</h3>
        <p className="mt-4 max-w-3xl leading-7 text-white/80">
          The following projects are included as listed project experience and are presented without image galleries.
        </p>
      </div>
      <div className="mt-8 grid gap-8">
        {projectsContent.moreProjects.map((group) => (
          <section key={group.title} className="rounded-[2rem] border border-brandBlue/10 bg-[#f8faff] p-8 shadow-panel">
            <h3 className="font-display text-3xl uppercase text-brandBlue">{group.title}</h3>
            <div className="mt-8 grid gap-4">
              {group.items.map((item, index) => (
                <article key={`${group.title}-${index}`} className="rounded-2xl bg-white p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brandGreen">
                    Project {index + 1}
                  </p>
                  <h4 className="mt-2 font-display text-xl uppercase text-brandBlue">{item.description}</h4>
                  <p className="mt-3 text-sm leading-6 text-brandGray/80">
                    <span className="font-semibold text-brandBlue">Location:</span> {item.location}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-brandGray/80">
                    <span className="font-semibold text-brandBlue">Owner/s:</span> {item.owner}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}

export default MoreProjectsList
