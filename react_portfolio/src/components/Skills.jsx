function Skills() {
  const skills = ["Rust", "Axum", "Git", "TS", "JS", "NodeJS", "React", "ReactNative", "HTML", "CSS"];
  
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-container"> 
        {skills.map((skill) => (
          <p key={skill}>{skill}</p>
        ))}
      </div>
    </section>
  )
}

export default Skills;