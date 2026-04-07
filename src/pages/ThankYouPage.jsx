import { Link } from 'react-router-dom'
import SectionHeading from '../components/layout/SectionHeading'

function ThankYouPage() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-[2rem] bg-brandMist p-10 shadow-panel">
          <SectionHeading
            eyebrow="Inquiry Sent"
            title="Thank You"
            text="Your inquiry has been submitted successfully. KenTar-Builders & Engineering Services will review your message and get back to you as soon as possible."
          />
          <div className="mt-8">
            <Link
              to="/#contact"
              className="rounded-full bg-brandBlue px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-brandGreen hover:text-brandBlue"
            >
              Back to Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThankYouPage
