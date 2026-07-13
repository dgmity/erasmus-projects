function App() {
  const students = ["Rahim", "Karim", "Sakib", "Hasan", "Hayeem", "Rafi"];
  
  const showStudents = ["Rahim", "Sakib"];
  return (
    <div>
      {students.filter((student) => showStudents.includes(student)).map((student, index) => (
        <h2 key={index}>{student}</h2>
      ))}
    </div>
  );
}

export default App;