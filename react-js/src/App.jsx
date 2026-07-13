function App() {
  const students = ["Rahim", "Karim", "Sakib", "Hasan", "Hayeem", "Rafi"];
  
  return (
    <div>
      {students.slice(0,2).map((student, index) => (
        <h2 key={index}>{student}</h2>
      ))}
    </div>
  );
}

export default App;