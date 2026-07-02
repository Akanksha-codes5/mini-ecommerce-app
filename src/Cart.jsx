import Header from "./Header";

function Cart() {
    const cartList = sessionStorage.getItem("cart")
    const cartData = JSON.parse(cartList)
    console.log("CART DATA", cartData)
    return (
        <>
            <Header />
            <div className="cartdata-container">
                <h2>Cart</h2>
                <div className="cart-header">
                    <div>Image</div>
                    <div>Title</div>
                    <div>Price</div>
                    <div>Quantity</div>
                </div>
                {cartData.map((item) => {
                    return (
                        <div className="cart-row" key={item.productId}>
                            <div><img src={item.image} alt={item.title} width="50" /></div>
                            <div>{item.title}</div>
                            <div>{item.price}</div>
                            <div>{item.quantity}</div>
                        </div>
                    );
                })}
            </div>

        </>
    );
}
export default Cart;