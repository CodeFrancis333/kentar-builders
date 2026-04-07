import { aboutContent } from '../../data/company'

function CoreValues() {
  return (
    <div className="rounded-[2rem] bg-[#f5f7fb] p-8 shadow-panel">
      <h3 className="font-display text-3xl uppercase text-brandBlue">Core Values</h3>
      <div className="mt-6 grid gap-4">
        {aboutContent.coreValues.map(([title, body]) => (
          <div key={title} className="rounded-2xl bg-white p-5">
            <h4 className="font-display text-xl uppercase text-brandBlue">{title}</h4>
            <p className="mt-2 text-sm leading-6 text-brandGray/80">{body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoreValues
