import SectionHeading from '../layout/SectionHeading'
import { servicesContent } from '../../data/services'

function ServicesIntro() {
  return (
    <SectionHeading
      eyebrow="Services"
      title={servicesContent.introTitle}
      text={servicesContent.introBody}
      invert
    />
  )
}

export default ServicesIntro
