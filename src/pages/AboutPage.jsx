import CompanyOverview from '../components/about/CompanyOverview'
import CoreValues from '../components/about/CoreValues'
import OurStory from '../components/about/OurStory'
import VisionMission from '../components/about/VisionMission'
import SectionHeading from '../components/layout/SectionHeading'
import { aboutContent } from '../data/company'

function AboutPage() {
  return (
    <section id="about" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow="About" title={aboutContent.introTitle} text={aboutContent.introBody} />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-8">
            <CompanyOverview />
            <OurStory />
          </div>
          <div className="grid gap-8">
            <VisionMission />
            <CoreValues />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
