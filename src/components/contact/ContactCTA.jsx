import { contactContent } from '../../data/company'

function ContactCTA() {
  return (
    <div className="rounded-[2rem] bg-brandMist p-8 shadow-panel">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brandGreen">{contactContent.ctaTitle}</p>
      <h3 className="mt-3 font-display text-3xl uppercase text-brandBlue">{contactContent.closingTitle}</h3>
      <p className="mt-4 leading-7 text-brandGray/80">{contactContent.closingBody}</p>
    </div>
  )
}

export default ContactCTA
