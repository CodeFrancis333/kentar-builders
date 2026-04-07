import SectionHeading from '../layout/SectionHeading'
import { homeContent } from '../../data/company'

function WelcomeSection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <SectionHeading eyebrow="Welcome" title={homeContent.welcomeTitle} text={homeContent.welcomeBody} />
        <div className="rounded-[2rem] bg-brandMist p-8 shadow-panel">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brandBlue">Vision and Mission</p>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-display text-2xl uppercase text-brandBlue">Vision</h3>
              <p className="mt-2 leading-7 text-brandGray/80">{homeContent.previewVision}</p>
            </div>
            <div>
              <h3 className="font-display text-2xl uppercase text-brandBlue">Mission</h3>
              <p className="mt-2 leading-7 text-brandGray/80">{homeContent.previewMission}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection
