import { servicesContent } from '../../data/services'

function ConstructionServices() {
  return (
    <div>
      <h3 className="font-display text-3xl uppercase text-brandBlue">Construction Services</h3>
      <ul className="mt-6 grid gap-3 text-sm leading-6 text-brandGray/80">
        {servicesContent.construction.map((service) => (
          <li key={service} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-brandGreen" />
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ConstructionServices
