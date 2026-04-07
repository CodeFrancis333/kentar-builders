import { homeContent } from '../../data/company'

function FeaturedServices() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur">
      <h3 className="font-display text-3xl uppercase">Featured Services</h3>
      <ul className="mt-6 space-y-3 text-sm leading-6 text-white/80">
        {homeContent.featuredServices.map((service) => (
          <li key={service} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-brandGreen" />
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FeaturedServices
