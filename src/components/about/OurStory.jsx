import { aboutContent } from '../../data/company'

function OurStory() {
  return (
    <div className="rounded-[2rem] border border-brandBlue/10 bg-white p-8 shadow-panel">
      <h3 className="font-display text-3xl uppercase text-brandBlue">Our Story</h3>
      <p className="mt-5 leading-8 text-brandGray/80">{aboutContent.ourStory}</p>
    </div>
  )
}

export default OurStory
