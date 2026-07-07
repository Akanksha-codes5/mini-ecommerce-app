import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
function CartIcon(props) {
  return (
    <>
      <div className="cart-container">
        <Link to="/cart">
          <FaShoppingCart size={28} /></Link>

        {props.cartCount >= 0 && (
          <span className="cart-count">{props.cartCount}</span>
        )}
      </div>
    </>
  )
}
export default CartIcon