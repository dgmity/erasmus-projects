import { useState } from 'react';

function App() {
  const [students, setStudents] = useState(["Ahmed", "Ali", "Aisha", "Fatima", "John"]);

  function addStudent() {
    setStudents([...students, "David"]);
  }

  function deleteStudent() {
    setStudents(
      students.filter(
        student => student !== "John"
      )
    )
  }

  function editStudent() {
    setStudents(
      students.map(
        student => student === "Aisha" ? "Ayesha" : student
      )
    )
  }

  return (
    <div>
      <button onClick={addStudent}>Add</button>
      <button onClick={editStudent}>Edit</button>
      <button onClick={deleteStudent}>Delete</button>
      {students.map((student, index) =>(
        <h2 key={index}>{student}</h2>
      ))}
    </div>
  )
}

export default App