function App() {
  const students = ["Rahim", "Karim", "Sakib", "Hasan", "Hayeem", "Rafi"];

  return (
    <div>
      {students.filter((student) => student !== "Rahim" && student !== "Hasan").map((student, index) => (
        <h2 key={index}>{student}</h2>
      ))}
    </div>
  );
}

export default App;