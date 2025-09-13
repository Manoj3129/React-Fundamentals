import "./ProductCart.css"
function ProductCart({ name, price, isAvailable }) {
    const stockStyle = {
        color: isAvailable ? 'green' : 'blue'
    };

    return (
        <div style={{
            border: '1px solid #ccc',
            padding: '20px',
            width: '200px',
            margin: '10px',
            backgroundColor: '#f5f5f5'
        }}>
            <p>{name}</p>
            <p>₹{price}</p>
            <p style={stockStyle}>
                {isAvailable ? "Stock is available" : "Out of stock"}
            </p>
        </div>
    );
}

export default ProductCart;