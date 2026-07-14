function App() {
  const isLogin = false;
  return (
    <div>
      {isLogin ? <h1>Welcome back</h1> : <h1>Please login</h1>}
    </div>
  )
}

export default App