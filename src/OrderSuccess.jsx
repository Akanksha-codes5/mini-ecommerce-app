import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./App.css";

function OrderSuccess() {
    return (
        <>
         <div className="page-container">
            <Header />
            <div className="order-success">
                <h2>Order Success</h2>
                <p>Thank you for your order! Your order has been successfully placed.</p>
                <p>You will receive a confirmation email shortly.</p>
                <p><Link to="/order-summary">Click here</Link> to view your order details.</p>
            </div>
            <Footer />
            </div>
        </>
    );

}
export default OrderSuccess;