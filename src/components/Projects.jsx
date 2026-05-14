import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="projects section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
          <p style={{ textAlign: 'center', color: '#94a3b8' }}>Loading projects...</p>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span className="tech-tag" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link github"
                  >
                    <FaGithub /> Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link live"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
