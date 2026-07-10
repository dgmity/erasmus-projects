import "./Footer.css";

function Footer(props) {
  return (
    <footer className="footer-container">
        <p>{props.text}</p>
    </footer>
  )
}

export default Footer