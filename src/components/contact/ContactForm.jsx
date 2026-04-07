import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { contactContent } from '../../data/company'

const fieldConfig = {
  'Full Name': { name: 'full_name', type: 'text', autoComplete: 'name' },
  'Email Address': { name: 'email', type: 'email', autoComplete: 'email' },
  'Mobile Number': { name: 'mobile_number', type: 'tel', autoComplete: 'tel' },
  'Project Type': { name: 'project_type', type: 'text', autoComplete: 'off' },
  'Project Location': { name: 'project_location', type: 'text', autoComplete: 'street-address' },
}

function ContactForm() {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const encodedData = new URLSearchParams()

    for (const [key, value] of formData.entries()) {
      encodedData.append(key, value.toString())
    }

    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      navigate('/thank-you')
      return
    }

    try {
      setIsSubmitting(true)

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encodedData.toString(),
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      navigate('/thank-you')
    } catch (error) {
      console.error(error)
      window.alert('Unable to submit your inquiry right now. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rounded-[2rem] bg-[#f8faff] p-8 shadow-panel">
      <h3 className="font-display text-3xl uppercase text-brandBlue">{contactContent.formTitle}</h3>
      <p className="mt-4 leading-7 text-brandGray/80">{contactContent.formBody}</p>
      <form
        name="project-inquiry"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="mt-8 grid gap-5 md:grid-cols-2"
      >
        <input type="hidden" name="form-name" value="project-inquiry" />
        <input type="hidden" name="subject" value="New project inquiry from KenTar website" />
        <p className="hidden">
          <label>
            Do not fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        {contactContent.formFields.map((label) => {
          const config = fieldConfig[label]

          return (
          <label key={label} className="grid gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-brandBlue">
            {label}
            <input
              type={config.type}
              name={config.name}
              placeholder={label}
              autoComplete={config.autoComplete}
              required
              className="rounded-2xl border border-brandBlue/10 bg-white px-5 py-4 text-sm font-medium normal-case tracking-normal text-brandGray outline-none transition focus:border-brandGreen"
            />
          </label>
          )
        })}
        <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-brandBlue md:col-span-2">
          Message
          <textarea
            name="message"
            rows="6"
            placeholder={contactContent.messagePlaceholder}
            required
            className="rounded-[1.5rem] border border-brandBlue/10 bg-white px-5 py-4 text-sm font-medium normal-case tracking-normal text-brandGray outline-none transition focus:border-brandGreen"
          />
        </label>
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-brandGreen px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-brandBlue transition hover:bg-brandBlue hover:text-white"
        >
          {isSubmitting ? 'Sending...' : 'Send Inquiry'}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
