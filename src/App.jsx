import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ServicesPage from './pages/ServicesPage'
import TeamPage from './pages/TeamPage'
import TermsPage from './pages/TermsPage'

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => {
        const element = document.querySelector(location.hash)
        if (element) {
          element.scrollIntoView({ block: 'start' })
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        }
      })
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

  return null
}

function HomeRoute() {
  return (
    <>
      <HomePage />
      <AboutPage />
      <ServicesPage />
      <TeamPage />
      <ContactPage />
    </>
  )
}

function App() {
  return (
    <div className="font-body text-brandGray">
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
