import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import { useActiveSection } from './hooks/useActiveSection'
import { useReveal } from './hooks/useReveal'
import { NAV_LINKS } from './data/portfolio'

export default function App() {
  const activeSection = useActiveSection(NAV_LINKS.map((l) => l.id))
  useReveal()

  return (
    <div className="relative min-h-screen bg-ink text-white">
      <div className="bg-grid pointer-events-none absolute inset-0 z-[1]" />
      <Header activeSection={activeSection} />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
