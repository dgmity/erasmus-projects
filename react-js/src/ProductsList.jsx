function ProductsList({ products }) {
  return (
    <div>
        {products.map((products, index) => (
            <div key={index}>
                <h1>{products.name}</h1>
                <h2>{products.price}</h2>
            </div>
        ))}
    </div>
  )
}

export default ProductsList