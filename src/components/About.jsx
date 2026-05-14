const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>
        
        <div className="about-content">
          <div className="about-image">
            <div className="about-image-wrapper">
              <div className="about-image-inner">SK</div>
            </div>
          </div>
          
          <div className="about-text">
            <h3>Full Stack Developer based in India</h3>
            <p>
              Hi! I'm Sameer Kumar, a passionate Full Stack Developer with expertise in building 
              modern web applications. I love turning ideas into reality through code.
            </p>
            <p>
              With a strong foundation in both frontend and backend technologies, I create 
              scalable, efficient, and user-friendly applications. My goal is to deliver 
              high-quality solutions that exceed expectations and make a positive impact.
            </p>
            <p>
              I'm constantly learning and staying updated with the latest technologies and 
              best practices. When I'm not coding, you'll find me exploring new tech trends, 
              contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
