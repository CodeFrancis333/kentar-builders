import { Link } from 'react-router-dom'
import { brandAssets, homeContent } from '../../data/company'

function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-brandBlue text-white">
      <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.92)_34%,rgba(255,255,255,0.4)_62%,rgba(255,255,255,0)_100%)]" />
      <div className="absolute inset-0 bg-grid bg-[size:44px_44px] opacity-30" />
      <div className="absolute -right-24 top-12 h-72 w-72 rounded-full bg-brandGreen/20 blur-3xl" />
      <div className="absolute left-0 top-1/2 h-80 w-80 -translate-x-1/3 rounded-full bg-white/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.25fr_0.75fr] lg:px-8 lg:py-28">
        <div className="animate-rise">
          <p className="mb-5 inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            {homeContent.heroEyebrow}
          </p>
          <h1 className="max-w-4xl font-display text-5xl uppercase leading-none tracking-tight md:text-7xl">
            {homeContent.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{homeContent.heroBody}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to={homeContent.heroButtons[0].to}
              className="rounded-full bg-brandGreen px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.24em] text-brandBlue transition hover:bg-white"
            >
              {homeContent.heroButtons[0].label}
            </Link>
            <Link
              to={homeContent.heroButtons[1].to}
              className="rounded-full border border-white/25 px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white/10"
            >
              {homeContent.heroButtons[1].label}
            </Link>
          </div>
        </div>

        <div className="grid gap-5 self-end">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-panel">
            <img src={brandAssets.heroImage} alt="KenTar-Builders project site" className="h-64 w-full object-cover" />
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-panel backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brandGreen">{homeContent.sinceLabel}</p>
            <p className="mt-3 text-2xl font-semibold text-white">{homeContent.sinceBody}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[2rem] bg-white p-7 text-brandBlue shadow-panel">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brandGreen">{homeContent.coverageLabel}</p>
              <p className="mt-3 text-3xl font-display uppercase">{homeContent.coverageTitle}</p>
              <p className="mt-2 text-sm leading-6 text-brandGray/80">{homeContent.coverageBody}</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-[#00104f] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brandGreen">Approach</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/80">
                {homeContent.process.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brandGreen" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
