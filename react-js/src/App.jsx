import StudentList from "./StudentList";

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
    <StudentList students={students} />
  );
}

export default App;