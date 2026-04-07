import { teamContent } from '../../data/team'

function FieldOperations() {
  return (
    <div className="rounded-[2rem] bg-brandBlue p-8 text-white shadow-panel">
      <h3 className="font-display text-3xl uppercase">Field Operations</h3>
      <p className="mt-5 leading-8 text-white/80">{teamContent.fieldOperationsBody}</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {teamContent.fieldOperationsItems.map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-5">
            <p className="font-display text-xl uppercase">{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FieldOperations
