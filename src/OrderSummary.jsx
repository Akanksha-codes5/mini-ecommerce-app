import Header from "./Header";
import Footer from "./Footer";
import {CurrencyIcon} from "./Constant";
import "./assets/styles.css";

function OrderSummary() {
    const orderDetails = JSON.parse(sessionStorage.getItem("orderDetails"))
    const totalAmount = orderDetails.cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="order-summary">
            <div className="page-container">
                <Header />
                <main className="order-summary-content">
                    <h1>Order Summary</h1>
                    <section className="order-details">
                        <h2>Order Details</h2>
                        <div className="order-products">
                            <div className="order-product-header">
                                <span>Product</span>
                                <span>Quantity</span>
                                <span>Price</span>
                            </div>
                            {orderDetails.cart.map((item) => (
                                <div className="order-product" key={item.id}>
                                    <div className="product-info">
                                        <img src={item.image} alt={item.title} /><span>{item.title}</span>
                                    </div>
                                    <span className="product-quantity">{item.quantity}</span>
                                    <span className="ordered-product-price"><CurrencyIcon />{(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                            <div className="order-total">
                                <span>Total Amount</span><strong><CurrencyIcon />{totalAmount.toFixed(2)}</strong>
                            </div>
                        </div>
                    </section>
                    <div className="order-information">
                        <section className="shipping-information">
                            <h2>Shipping Information</h2>
                            <div className="information-content">
                                <p>
                                    <strong>Name:</strong>{" "}
                                    {orderDetails.name}
                                </p>
                                <p>
                                    <strong>Email:</strong>{" "}
                                    {orderDetails.email}
                                </p>
                                <p>
                                    <strong>Address:</strong>{" "}
                                    {orderDetails.address}
                                </p>
                                <p>
                                    <strong>City:</strong>{" "}
                                    {orderDetails.city}
                                </p>
                                <p>
                                    <strong>ZIP Code:</strong>{" "}
                                    {orderDetails.zip}
                                </p>
                                <p>
                                    <strong>Phone:</strong>{" "}
                                    {orderDetails.phone}
                                </p>
                            </div>
                        </section>
                        <section className="payment-information">
                            <h2>Payment Information</h2>
                            <div className="information-content">
                                <p>
                                    <strong>Card Number:</strong>{" "}**** **** ****{" "}
                                    {orderDetails.cardNumber.slice(-4)}
                                </p>
                                <p>
                                    <strong>Expiry Date:</strong>{" "}
                                    {orderDetails.expiryDate}
                                </p>
                                <p>
                                    <strong>CVV:</strong> ***
                                </p>
                            </div>
                        </section>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}
export default OrderSummary;