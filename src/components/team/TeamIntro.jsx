import SectionHeading from '../layout/SectionHeading'
import { teamContent } from '../../data/team'

function TeamIntro() {
  return <SectionHeading eyebrow="Team" title={teamContent.introTitle} text={teamContent.introBody} />
}

export default TeamIntro
