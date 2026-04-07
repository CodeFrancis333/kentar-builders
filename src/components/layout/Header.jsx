import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { brandAssets, navigationLinks } from '../../data/company'

function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('home')

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

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="border-b border-brandBlue/8 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
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
        <nav className="hidden items-center gap-2 rounded-full bg-[#f3f5fb] px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_24px_rgba(0,20,117,0.08)] lg:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
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
          className="rounded-full border border-brandGreen bg-brandGreen px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-brandBlue shadow-[0_10px_24px_rgba(75,168,0,0.28)] transition hover:-translate-y-0.5 hover:bg-[#61c400]"
        >
          Request a Quote
        </Link>
      </div>
      </div>
      <div className="h-10 bg-[linear-gradient(180deg,rgba(21,45,170,0.12)_0%,rgba(21,45,170,0.5)_55%,rgba(0,20,117,0.95)_100%)]" />
    </header>
  )
}

export default Header
