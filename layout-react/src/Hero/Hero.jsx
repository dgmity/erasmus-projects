import "./Hero.css";

function Hero(props) {
  return (
    <section className="hero-container">
        <h2>{props.headline}</h2>
        <p>{props.description}</p>
    </section>
  )
}

export default Hero