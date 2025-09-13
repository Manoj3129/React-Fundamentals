function ProductCart({ productname, price, isAvailable }) {
    return (
        <div className="product-cart">
            <p>{productname}</p>
            <p>₹{price}</p>
            <p className={isAvailable ? "in-stock" : "out-of-stock"}>
                {isAvailable ? "Stock is available" : "Out of stock"}
            </p>
        </div>
    );
}

export default ProductCart;