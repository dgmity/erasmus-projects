import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <h2>Welcome To React!</h2>}
    </div>
  )
}

export default App