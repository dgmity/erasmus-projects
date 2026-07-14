import "./Hero.css";

function Hero() {
  return (
    <section className="hero-container">
      <form>
        <input type="text" placeholder="Search Product..."></input>
        <input type="submit" value="Search"></input>
      </form>
      <div>
        <button type="button">Laptop</button>
        <button type="button">Mobile</button>
        <button type="button">Accessories</button>
        <button type="button">Gaming</button>
      </div>
    </section>
  )
}

export default Hero