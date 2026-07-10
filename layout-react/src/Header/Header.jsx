import "./Header.css";

function Header(proms) {
  return (
    <div className="header-container">
        <header>
            <h1>{proms.title}</h1>
        </header>
        <nav style={{color: "black"}}>
            <a href="">{proms.nav1}</a>
            <a href="">{proms.nav2}</a>
            <a href="">{proms.nav3}</a>
            <a href="">{proms.nav4}</a>    
        </nav>
    </div>

  )
}

export default Header