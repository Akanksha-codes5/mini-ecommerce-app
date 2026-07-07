import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import EmptyCart from "./EmptyCart";
function Cart() {
    const cartList = sessionStorage.getItem("cart")
    const cartData = JSON.parse(cartList)
    const totalPrice = cartData.reduce((total, item) => total + item.price * item.quantity, 0)
    console.log("TOTAL PRICE", totalPrice)
    console.log("CART DATA", cartData)
    const [cart, setCart] = useState(() => {
        const storedCart = sessionStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    })

    return (
        <>
        <div className="page-container">
            <Header />
            {cart.length === 0 ? (
                <EmptyCart />
            ) : (
                <div className="cartdata-container">
                    <h2>Cart</h2>
                    <div className="cart-header">
                        <div>Image</div>
                        <div>Title</div>
                        <div>Price</div>
                        <div>Quantity</div>
                        <div>Delete</div>
                    </div>
                    {cart.map((item) => {
                        return (
                            <div className="cart-row" key={item.productId}>
                                <div><img src={item.image} alt={item.title} width="50" /></div>
                                <div>{item.title}</div>
                                <div>{item.price}</div>
                                <div>{item.quantity}</div>
                                <div><button onClick={() => {
                                    const updatedCart = cart.filter((cartItem) => cartItem.productId !== item.productId);
                                    setCart(updatedCart);
                                    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
                                }}>Delete</button>
                                </div>
                            </div>
                        );
                    })}
                    <div className="cart-total">
                        <h3>Subtotal({cart.reduce((total, item) => total + item.quantity, 0)} items ): {totalPrice.toFixed(2)}</h3>
                    </div>
                </div>
            )}
            <Footer />
            </div>
        </>
    )
}
export default Cart;