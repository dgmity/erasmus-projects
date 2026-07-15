function About(props) {
  return (
    <section id="about">
      <p>My name is {props.name}. I am {props.age} guy from {props.city}. I graduated from {props.university} and now I am working as FullStack Developer in a huge corporation.</p>
    </section>
  )
}

export default About