const ProductInfo = () => {
    const product = {
        name:"laptop",
        price : 50000,
        availability : "in stock"
    };
    return (
        <div>
            <h1>Name : {product.name}</h1>
            <h1>Price: {product.price}</h1>
            <h1>Availability : {product.availability}</h1>
        </div>
    )
}

export default ProductInfo;