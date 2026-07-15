function Hero(props) {
  return (
    <section id="hero">
      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile_image"/>

      <h2>{props.name}</h2>
      <h3>{props.profession}</h3>
      <h4>{props.text}</h4>
    </section>
  )
}

export default Hero