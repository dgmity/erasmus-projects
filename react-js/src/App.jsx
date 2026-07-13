import ProductsList from "./ProductsList";

function App() {
  const products = [
    { name: "Laptop", price: 800},
    { name: "Phone" ,price: 500},
    { name: "Headphone", price: 100}
  ];

  return (
    <ProductsList products = {products}/>
  );
}

export default App;