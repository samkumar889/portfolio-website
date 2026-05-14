import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">Sameer Kumar</h1>
        <div className="hero-title">
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'React Developer',
              2000,
              'Node.js Developer',
              2000,
              'Problem Solver',
              2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="hero-description">
          I build exceptional digital experiences that make an impact. 
          Specializing in modern web technologies with a focus on creating 
          elegant, efficient, and user-friendly applications.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
            View My Work
          </button>
          <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
            Contact Me
          </button>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FaGithub /> GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/sameer-kumar-gehlot-b24015324" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
