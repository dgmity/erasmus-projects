import "./ProductsList.css";

function ProductsList({ products }) {
  return (
    <section className="products-container">
        {products.map((products, index) => (
            <div key={index} style={{}} className="item">
                <h2>{products.name}</h2>
                <h3>{products.price}</h3>
                <img src={products.image} alt={products.name} style={{maxWidth: "300px"}}></img><br></br>
                <button type="button">Buy now</button>
            </div>
        ))}
    </section>
  )
}

export default ProductsList