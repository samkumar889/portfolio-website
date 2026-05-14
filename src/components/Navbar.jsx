import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">SK</div>
        
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.id)
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
