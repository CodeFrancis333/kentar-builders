import ContactCTA from '../components/contact/ContactCTA'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'

function ContactPage() {
  return (
    <section id="contact" className="bg-white py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="grid gap-8">
          <ContactInfo />
          <ContactCTA />
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactPage
