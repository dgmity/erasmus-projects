function App() {
  const stock = 5;
  return (
    <div>
      {stock > 0
        ? <h2>In Stock</h2>
        : <h2>Out Of Stock</h2>
      }
    </div>
  )
}

export default App