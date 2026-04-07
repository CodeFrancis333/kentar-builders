import { aboutContent } from '../../data/company'

function CompanyOverview() {
  return (
    <div className="rounded-[2rem] bg-brandBlue p-8 text-white shadow-panel">
      <h3 className="font-display text-3xl uppercase">Company Overview</h3>
      <p className="mt-5 leading-8 text-white/80">{aboutContent.companyOverview}</p>
    </div>
  )
}

export default CompanyOverview
