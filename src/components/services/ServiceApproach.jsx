import { servicesContent } from '../../data/services'

function ServiceApproach() {
  return (
    <div className="mt-8 rounded-[2rem] border border-white/10 bg-[#00104f] p-8">
      <h3 className="font-display text-3xl uppercase">Service Approach</h3>
      <p className="mt-5 max-w-4xl leading-8 text-white/80">{servicesContent.approach}</p>
    </div>
  )
}

export default ServiceApproach
