import { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'
import { sendMessage } from '../services/api'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const showToast = (message, isError = false) => {
    setToast({ message, isError })
    setTimeout(() => setToast(null), 3000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await sendMessage({
        ...formData,
        timestamp: new Date().toISOString()
      })
      
      showToast('Message sent successfully! I will get back to you soon.', false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      showToast('Failed to send message. Please try again.', true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's work together</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Talk</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your vision. Feel free to reach out!
            </p>
            
            <div className="contact-links">
              <a 
                href="mailto:sameerkumar88977@gmail.com" 
                className="contact-link"
              >
                <FaEnvelope className="contact-icon" />
                <div>
                  <strong>Email</strong>
                  <p>sameerkumar88977@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/sameer-kumar-gehlot-b24015324" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaLinkedin className="contact-icon" />
                <div>
                  <strong>LinkedIn</strong>
                  <p>Connect with me</p>
                </div>
              </a>
              
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaGithub className="contact-icon" />
                <div>
                  <strong>GitHub</strong>
                  <p>Check out my code</p>
                </div>
              </a>
              
              <div className="contact-link">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <strong>Location</strong>
                  <p>India</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Discussion"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
              />
            </div>
            
            <button 
              type="submit" 
              className="form-submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner"></span> Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
      
      {toast && (
        <div className={`toast ${toast.isError ? 'error' : ''}`}>
          {toast.message}
        </div>
      )}
    </section>
  )
}

export default Contact
