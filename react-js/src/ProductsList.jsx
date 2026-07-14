import "./ProductsList.css";

function ProductsList({ products }) {
  return (
    <div>
        {products.map((products, index) => (
            <div key={index} style={{}}>
                <h1>{products.name}</h1>
                <h2>{products.price}</h2>
                <img src={products.image} alt={products.name} style={{maxWidth: "300px"}}></img>
                
            </div>
        ))}
    </div>
  )
}

export default ProductsList