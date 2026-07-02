import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="main-nav">
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}

export default Navigation;