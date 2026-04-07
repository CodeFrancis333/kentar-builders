import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { brandAssets, navigationLinks } from '../../data/company'

function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (location.pathname !== '/') {
      return undefined
    }

    const sectionIds = ['home', 'about', 'services', 'team', 'contact']

    const updateActiveSection = () => {
      const scrollY = window.scrollY
      const threshold = 160
      let currentSection = 'home'

      sectionIds.forEach((id) => {
        const element = document.getElementById(id)
        if (!element) {
          return
        }

        if (scrollY >= element.offsetTop - threshold) {
          currentSection = id
        }
      })

      setActiveSection(currentSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [location.pathname])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname, location.hash])

  const isActiveLink = (to) => {
    if (to === '/') {
      return location.pathname === '/' && activeSection === 'home'
    }

    if (to.startsWith('/#')) {
      return location.pathname === '/' && activeSection === to.replace('/#', '')
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

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/12 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <Link
          to="/"
          onClick={handleBrandClick}
          className="flex min-w-0 items-center gap-3 sm:gap-4"
        >
          <img
            src={brandAssets.logo}
            alt="KenTar-Builders & Engineering Services logo"
            className="h-12 w-12 shrink-0 object-contain sm:h-16 sm:w-16 lg:h-24 lg:w-24"
          />
          <span className="min-w-0">
            <span className="block bg-gradient-to-r from-[#0b1e9a] via-[#1033b6] to-[#1982d1] bg-clip-text font-display text-lg uppercase leading-none tracking-[0.08em] text-transparent sm:text-xl lg:text-[1.9rem]">
              Kentar
            </span>
            <span className="mt-1 block max-w-[10rem] text-[9px] font-medium leading-tight tracking-[0.01em] text-[#5c5c5c] sm:max-w-none sm:text-[10px] lg:text-[0.95rem]">
              Builders &amp; Engineering Services
            </span>
          </span>
        </Link>
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-brandBlue/10 bg-white/80 text-brandBlue shadow-[0_8px_18px_rgba(0,20,117,0.08)]"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${mobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${mobileMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${mobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>
        <nav className="hidden items-center gap-2 rounded-full bg-[#f3f5fb] px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_24px_rgba(0,20,117,0.08)] lg:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={handleNavClick}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                isActiveLink(link.to)
                  ? 'bg-white text-brandBlue shadow-[0_8px_18px_rgba(0,20,117,0.12)]'
                  : 'text-brandGray/80 hover:text-brandBlue'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/#contact"
          className="hidden rounded-full border border-brandGreen bg-brandGreen px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-brandBlue shadow-[0_10px_24px_rgba(75,168,0,0.28)] transition hover:-translate-y-0.5 hover:bg-[#61c400] lg:inline-flex"
        >
          Request a Quote
        </Link>
      </div>
      {mobileMenuOpen ? (
        <div className="border-t border-brandBlue/10 bg-white/95 px-6 pb-6 pt-4 shadow-[0_16px_32px_rgba(0,20,117,0.08)] lg:hidden">
          <nav className="grid gap-2">
            {navigationLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={handleNavClick}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition ${
                  isActiveLink(link.to)
                    ? 'bg-brandBlue text-white'
                    : 'bg-[#f4f6fb] text-brandBlue hover:bg-brandMist'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              onClick={handleNavClick}
              className="mt-2 inline-flex justify-center rounded-2xl border border-brandGreen bg-brandGreen px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-brandBlue shadow-[0_10px_24px_rgba(75,168,0,0.22)] transition hover:bg-[#61c400]"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default Header
