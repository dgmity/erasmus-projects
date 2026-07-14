function App() {
  function handleSubmit (event) {
    event.preventDefault();
    alert("Form Submitted!");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nmae"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App