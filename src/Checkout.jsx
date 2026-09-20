import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./assets/styles.css";

function Checkout() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [phone, setPhone] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        //alert("Order placed successfully!");
        const cartList = sessionStorage.getItem("cart");
        const cartData = JSON.parse(cartList);
        console.log("CART DATA", cartData);
        const orderDetails = {
            cart: cartData,
            name,
            email,
            address,
            city,
            zip,
            phone,
            cardNumber,
            expiryDate,
            cvv,
        };
        console.log("Order Details:", orderDetails);
        sessionStorage.setItem("orderDetails", JSON.stringify(orderDetails));
        // Clear form fields after submission
        setName("");
        setEmail("");
        setAddress("");
        setCity("");
        setZip("");
        setPhone("");
        setCardNumber("");
        setExpiryDate("");
        setCvv("");
        sessionStorage.setItem("cart", JSON.stringify([]));
        navigate("/order-success");
    }
    return (
        <>
            <div className="page-container">
                <Header />
                <h1>Checkout Page</h1>
                <div className="checkout-container">
                    <form className="checkout-form" onSubmit={handleSubmit}>

                        <h2>Shipping Information</h2>

                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <input type="text" id="address" name="address" onChange={(e) => setAddress(e.target.value)} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="city">City:</label>
                            <input type="text" id="city" name="city" onChange={(e) => setCity(e.target.value)} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="zip">Zip Code:</label>
                            <input type="text" id="zip" name="zip" onChange={(e) => setZip(e.target.value)} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="text" id="phone" name="phone" onChange={(e) => setPhone(e.target.value)} required />
                        </div>

                        <h2>Payment Information</h2>

                        <div className="form-group">
                            <label htmlFor="card-number">Card Number:</label>
                            <input type="text" id="card-number" name="card-number" onChange={(e) => setCardNumber(e.target.value)} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="expiry-date">Expiry Date:</label>
                            <input type="text" id="expiry-date" name="expiry-date" onChange={(e) => setExpiryDate(e.target.value)} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="cvv">CVV:</label>
                            <input type="text" id="cvv" name="cvv" onChange={(e) => setCvv(e.target.value)} required />
                        </div>

                        <button type="submit" className="place-order-btn">
                            Place Order
                        </button>
                    </form>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Checkout;