import SectionHeading from '../components/layout/SectionHeading'

function TermsPage() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Legal"
          title="Terms of Service"
          text="These website terms are a basic placeholder for KenTar-Builders & Engineering Services and should be reviewed and finalized before public launch."
        />
        <div className="mt-12 grid gap-6">
          <section className="rounded-[2rem] border border-brandBlue/10 bg-[#f8faff] p-8 shadow-panel">
            <h3 className="font-display text-2xl uppercase text-brandBlue">Website Use</h3>
            <p className="mt-4 leading-7 text-brandGray/80">
              This website is provided for general information about KenTar-Builders & Engineering Services,
              including its construction, engineering, plumbing, and design-build services.
            </p>
          </section>
          <section className="rounded-[2rem] border border-brandBlue/10 bg-[#f8faff] p-8 shadow-panel">
            <h3 className="font-display text-2xl uppercase text-brandBlue">Content Accuracy</h3>
            <p className="mt-4 leading-7 text-brandGray/80">
              Project information, service descriptions, and contact details are presented in good faith, but may
              be updated, revised, or corrected without prior notice.
            </p>
          </section>
          <section className="rounded-[2rem] border border-brandBlue/10 bg-[#f8faff] p-8 shadow-panel">
            <h3 className="font-display text-2xl uppercase text-brandBlue">Inquiries and Quotations</h3>
            <p className="mt-4 leading-7 text-brandGray/80">
              Submitting an inquiry through this website does not create a binding contract. Formal project
              engagement, pricing, and scope are subject to separate discussion, review, and written agreement.
            </p>
          </section>
          <section className="rounded-[2rem] border border-brandBlue/10 bg-[#f8faff] p-8 shadow-panel">
            <h3 className="font-display text-2xl uppercase text-brandBlue">Contact</h3>
            <p className="mt-4 leading-7 text-brandGray/80">
              For official project discussions or clarifications, please contact KenTar-Builders & Engineering
              Services directly through the contact details provided on the website.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}

export default TermsPage
