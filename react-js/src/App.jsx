import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  return (
    <div>
      <input placeholder="Enter name" onChange={(e) => setName(e.target.value)}></input>
      <h2>Hello {name}</h2>
    </div>
  )
}

export default App