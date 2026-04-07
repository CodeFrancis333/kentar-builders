import { homeContent } from '../../data/company'

function VisionMissionPreview() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#00104f] p-8">
      <h3 className="font-display text-3xl uppercase">Vision and Mission Preview</h3>
      <div className="mt-6 space-y-6 text-white/80">
        <div>
          <h4 className="font-display text-2xl uppercase text-white">Vision</h4>
          <p className="mt-2 leading-7">{homeContent.previewVision}</p>
        </div>
        <div>
          <h4 className="font-display text-2xl uppercase text-white">Mission</h4>
          <p className="mt-2 leading-7">{homeContent.previewMission}</p>
        </div>
      </div>
    </div>
  )
}

export default VisionMissionPreview
