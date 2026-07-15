import logo from '../assets/logo.jpg';

function Navbar(props) {
  return (
    <nav id="nav">
        <img src={logo} alt="logo" />
        <a href='#'>{props.item1}</a>
        <a href='#about'>{props.item2}</a>
        <a href='#skills'>{props.item3}</a>
        <a href='#projects'>{props.item4}</a>
        <a href='#contact'>{props.item5}</a>
    </nav>
  )
}

export default Navbar