const Skills = ({ skills }) => {
  if (!skills || skills.length === 0) {
    return null
  }

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
        
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div className="skill-category" key={index}>
              <h3>{skillGroup.category}</h3>
              <div className="skill-list">
                {skillGroup.items.map((skill, idx) => (
                  <span className="skill-tag" key={idx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
