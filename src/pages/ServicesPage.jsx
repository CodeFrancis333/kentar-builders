import FeaturedServices from '../components/home/FeaturedServices'
import ConstructionServices from '../components/services/ConstructionServices'
import ConsultancyServices from '../components/services/ConsultancyServices'
import ServiceApproach from '../components/services/ServiceApproach'
import ServicesIntro from '../components/services/ServicesIntro'

function ServicesPage() {
  return (
    <section id="services" className="bg-brandBlue py-20 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ServicesIntro />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div>
            <FeaturedServices />
          </div>
          <div className="rounded-[2rem] bg-white p-8 text-brandGray shadow-panel lg:col-span-2">
            <div className="grid gap-8 xl:grid-cols-2">
              <ConstructionServices />
              <ConsultancyServices />
            </div>
          </div>
        </div>
        <ServiceApproach />
      </div>
    </section>
  )
}

export default ServicesPage
