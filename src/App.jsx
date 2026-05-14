import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { fetchData } from './services/api'

function App() {
  const [projects, setProjects] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData()
      setProjects(data.projects || [])
      setSkills(data.skills || [])
    }
    loadData()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </>
  )
}

export default App
