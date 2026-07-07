import { Link } from "react-router-dom";
function EmptyCart() {
    return (
        <div className="page-container">
            <div className="empty-cart">
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added any items to your cart yet.</p>
                <p><Link to="/products">Browse Products</Link></p>
            </div>
        </div>
    );
}
export default EmptyCart;