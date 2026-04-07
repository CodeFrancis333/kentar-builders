import { Link, useLocation, useNavigate } from 'react-router-dom'
import { brandAssets, navigationLinks } from '../../data/company'

function Header() {
  const location = useLocation()
  const navigate = useNavigate()

  const isActiveLink = (to) => {
    if (to === '/') {
      return location.pathname === '/' && !location.hash
    }

    if (to.startsWith('/#')) {
      return location.pathname === '/' && location.hash === to.slice(1)
    }

    return location.pathname === to
  }

  const handleBrandClick = (event) => {
    if (location.pathname === '/' && !location.hash) {
      event.preventDefault()
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }

    if (location.pathname === '/' && location.hash) {
      event.preventDefault()
      navigate('/')
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/8 shadow-[0_12px_40px_rgba(0,20,117,0.16)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          to="/"
          onClick={handleBrandClick}
          className="flex items-center gap-4"
        >
          <img
            src={brandAssets.logo}
            alt="KenTar-Builders & Engineering Services logo"
            className="h-16 w-16 object-contain sm:h-20 sm:w-20 lg:h-24 lg:w-24"
          />
          <span className="min-w-0">
            <span className="block bg-gradient-to-r from-[#0b1e9a] via-[#1033b6] to-[#1982d1] bg-clip-text font-display text-xl uppercase leading-none tracking-[0.08em] text-transparent sm:text-2xl lg:text-[1.9rem]">
              Kentar
            </span>
            <span className="mt-1 block text-[10px] font-medium tracking-[0.02em] text-[#5c5c5c] sm:text-xs lg:text-[0.95rem]">
              Builders &amp; Engineering Services
            </span>
          </span>
        </Link>
        <nav className="hidden gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/82 lg:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-full px-3 py-2 transition ${
                isActiveLink(link.to)
                  ? 'bg-brandBlue/10 text-brandBlue'
                  : 'text-brandGray/80 hover:text-brandGreen'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/#contact"
          className="rounded-full border border-brandGreen bg-brandGreen px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-brandBlue transition hover:border-white hover:bg-white hover:text-brandBlue"
        >
          Request a Quote
        </Link>
      </div>
    </header>
  )
}

export default Header
