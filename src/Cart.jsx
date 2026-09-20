import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import EmptyCart from "./EmptyCart";
import { CurrencyIcon} from "./Constant";
import { Link } from "react-router-dom";
import Products from "./Products";
import Checkout from "./Checkout";
import "./assets/styles.css";

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
                        <div className="cart-header">
                            <div></div>
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
                                    <div><CurrencyIcon />{item.price}</div>
                                    <div className="quantity-control">
                                        <button onClick={() => {
                                            const updatedCart = cart.map((cartItem) => {
                                                if (cartItem.productId === item.productId) {
                                                    return { ...cartItem, quantity: cartItem.quantity - 1 };
                                                }
                                                return cartItem;
                                            }).filter((cartItem) => cartItem.quantity > 0);
                                            setCart(updatedCart);
                                            sessionStorage.setItem("cart", JSON.stringify(updatedCart));
                                        }}>-</button>
                                        {item.quantity}
                                        <button onClick={() => {
                                            const updatedCart = cart.map((cartItem) => {
                                                if (cartItem.productId === item.productId) {
                                                    return { ...cartItem, quantity: cartItem.quantity + 1 };
                                                }
                                                return cartItem;
                                            });
                                            setCart(updatedCart);
                                            sessionStorage.setItem("cart", JSON.stringify(updatedCart));
                                        }}>+</button>
                                    </div>
                                    <div><button onClick={() => {
                                        const updatedCart = cart.filter((cartItem) => cartItem.productId !== item.productId);
                                        setCart(updatedCart);
                                        sessionStorage.setItem("cart", JSON.stringify(updatedCart));
                                    }}>Delete</button>
                                    </div>
                                </div>
                            );
                        })}
                        <div className="cart-bottom">
                            <div><button className="continue-shopping"><Link className="nav-link" to="/products">Continue Shopping</Link></button></div>
                            <div className="cart-total">
                                <h3>Subtotal({cart.reduce((total, item) => total + item.quantity, 0)} items ):<CurrencyIcon />{totalPrice.toFixed(2)}</h3>
                                <button className="checkout-btn">
                                    <Link className="nav-link" to="/checkout">
                                        Proceed to Checkout
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <Footer />
            </div>
        </>
    )
}
export default Cart;