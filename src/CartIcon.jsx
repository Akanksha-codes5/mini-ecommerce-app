import { FaShoppingCart } from "react-icons/fa";
function CartIcon(props){
    return (
        <>
          <div className="cart-container">
        <FaShoppingCart size={28} />

        {props.cartCount >= 0 && (
          <span className="cart-count">{props.cartCount}</span>
        )}
      </div>
        </>
    )
}
export default CartIcon