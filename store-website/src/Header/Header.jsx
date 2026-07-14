import "./Header.css";

function Header() {
  return (
    <header className="header-container">
        <h2>MaksShop</h2>
        <nav>
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
    </header>
  )
}

export default Header