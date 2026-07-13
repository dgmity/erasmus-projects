function ProductsList({ products }) {
  return (
    <div>
        {products.map((products, index) => (
            <div key={index}>
                <h1>{products.name}</h1>
                <h2>{products.price}</h2>
                <img src={products.image} alt={products.name}></img>
            </div>
        ))}
    </div>
  )
}

export default ProductsList