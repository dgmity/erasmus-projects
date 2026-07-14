import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Greeting App</h1>
      <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/>
      <h2>Hello {name}</h2>
    </div>
  )
}

export default App