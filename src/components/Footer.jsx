import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-social">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/sameer-kumar-gehlot-b24015324" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:sameerkumar88977@gmail.com" 
              className="social-link"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
          
          <p>
            Made with <FaHeart style={{ color: '#ec4899', display: 'inline' }} /> by Sameer Kumar
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            &copy; {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
