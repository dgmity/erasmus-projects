function Layout(props) {
  return (
    <div style={{border: "2px solid white", borderRadius: "10px", padding: "5px", margin: "10px"}}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Layout