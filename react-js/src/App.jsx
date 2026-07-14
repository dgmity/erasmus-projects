function App() {
  function handleClick() {
    alert("Hello React!");
  }
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App