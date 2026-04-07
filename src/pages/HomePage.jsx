import HeroSection from '../components/home/HeroSection'
import ProjectsPreview from '../components/projects/ProjectsPreview'
import WelcomeSection from '../components/home/WelcomeSection'
import WhyChooseUs from '../components/home/WhyChooseUs'

function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <WhyChooseUs />
      <ProjectsPreview />
    </>
  )
}

export default HomePage
