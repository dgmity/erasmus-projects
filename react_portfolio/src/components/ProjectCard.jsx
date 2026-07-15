function ProjectCard(props) {
  return (
    <section>
      {props.projects.map((item, index) => (
        <section key={index}>
          <img src={item.image} />
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <button type="button">See project</button>
        </section>
      ))}
    </section>
  )
}

export default ProjectCard