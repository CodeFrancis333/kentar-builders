import { aboutContent } from '../../data/company'

function VisionMission() {
  return (
    <div className="rounded-[2rem] bg-brandLimeMist p-8 shadow-panel">
      <h3 className="font-display text-3xl uppercase text-brandBlue">Vision</h3>
      <p className="mt-4 leading-7 text-brandGray/80">{aboutContent.vision}</p>
      <h3 className="mt-8 font-display text-3xl uppercase text-brandBlue">Mission</h3>
      <p className="mt-4 leading-7 text-brandGray/80">{aboutContent.mission}</p>
    </div>
  )
}

export default VisionMission
