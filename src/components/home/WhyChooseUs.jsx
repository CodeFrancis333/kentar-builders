import SectionHeading from '../layout/SectionHeading'
import { homeContent } from '../../data/company'

function WhyChooseUs() {
  return (
    <section className="bg-[#f5f7fb] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow="Why Choose Us" title={homeContent.whyTitle} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {homeContent.reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="rounded-[2rem] border border-brandBlue/10 bg-white p-8 shadow-panel transition hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl uppercase text-brandBlue/15">0{index + 1}</span>
                <span className="h-3 w-3 rounded-full bg-brandGreen" />
              </div>
              <h3 className="mt-5 font-display text-2xl uppercase text-brandBlue">{reason.title}</h3>
              <p className="mt-4 leading-7 text-brandGray/80">{reason.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
