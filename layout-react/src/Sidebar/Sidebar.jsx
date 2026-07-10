import "./Sidebar.css";

function Sidebar(props) {
  return (
    <aside className="sidebar-container">
        <h3>{props.title}</h3>
        <a href="#">{props.item1}</a><br></br>
        <a href="#">{props.item2}</a><br></br>
        <a href="#">{props.item3}</a><br></br>
    </aside>
  )
}

export default Sidebar