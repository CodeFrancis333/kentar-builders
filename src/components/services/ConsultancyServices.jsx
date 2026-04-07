import { servicesContent } from '../../data/services'

function ConsultancyServices() {
  return (
    <div>
      <h3 className="font-display text-3xl uppercase text-brandBlue">Engineering & Consultancy</h3>
      <ul className="mt-6 grid gap-3 text-sm leading-6 text-brandGray/80">
        {servicesContent.consultancy.map((service) => (
          <li key={service} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-brandGreen" />
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ConsultancyServices
