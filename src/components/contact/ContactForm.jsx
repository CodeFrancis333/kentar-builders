import { contactContent } from '../../data/company'

function ContactForm() {
  return (
    <div className="rounded-[2rem] bg-[#f8faff] p-8 shadow-panel">
      <h3 className="font-display text-3xl uppercase text-brandBlue">{contactContent.formTitle}</h3>
      <p className="mt-4 leading-7 text-brandGray/80">{contactContent.formBody}</p>
      <form className="mt-8 grid gap-5 md:grid-cols-2">
        {contactContent.formFields.map((label) => (
          <label key={label} className="grid gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-brandBlue">
            {label}
            <input
              type="text"
              placeholder={label}
              className="rounded-2xl border border-brandBlue/10 bg-white px-5 py-4 text-sm font-medium normal-case tracking-normal text-brandGray outline-none transition focus:border-brandGreen"
            />
          </label>
        ))}
        <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-brandBlue md:col-span-2">
          Message
          <textarea
            rows="6"
            placeholder={contactContent.messagePlaceholder}
            className="rounded-[1.5rem] border border-brandBlue/10 bg-white px-5 py-4 text-sm font-medium normal-case tracking-normal text-brandGray outline-none transition focus:border-brandGreen"
          />
        </label>
        <button
          type="button"
          className="rounded-full bg-brandGreen px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-brandBlue transition hover:bg-brandBlue hover:text-white"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  )
}

export default ContactForm
