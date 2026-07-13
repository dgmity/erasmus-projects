function App() {
  const students = [
    {
      name: "Maksim",
      age: 17,
      city: "Grodno"
    },
    {
      name: "Stas",
      age: 17,
      city: "Novovolynsk"
    },
    {
      name: "Wojtek",
      age: 17,
      city: "Komodzianka"
    }, 
    {
      name: "Konrad",
      age: 17,
      city: "Mircze"
    }
  ]

  return (
    <div>
      {students.map((student, index) => (
        <div key={index}>
          <h2>{student.name}</h2>
          <p>Age: {student.age}</p>
          <p>City: {student.city}</p>          
        </div>
      ))}
    </div>
  );
}

export default App;