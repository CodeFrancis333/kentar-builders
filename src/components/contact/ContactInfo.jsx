import SectionHeading from '../layout/SectionHeading'
import { contactContent } from '../../data/company'

function ContactInfo() {
  return (
    <div className="rounded-[2rem] bg-brandBlue p-8 text-white shadow-panel">
      <SectionHeading eyebrow="Contact" title={contactContent.introTitle} text={contactContent.introBody} invert />
      <div className="mt-8 grid gap-5">
        {contactContent.details.map((detail) => (
          <div key={detail.label} className="rounded-2xl border border-white/10 bg-white/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brandGreen">{detail.label}</p>
            <p className="mt-2 leading-7 text-white/85">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContactInfo
