import { NavLink } from "react-router-dom";
import "./App.css";

function Navigation() {
  return (
    <nav className="navbar">
      <NavLink to="/">🏠 Home</NavLink>
      <NavLink to="/about">ℹ️ About Us</NavLink>
      <NavLink to="/products">🛍️ Products</NavLink> 
      <NavLink to="/contact">📞 Contact Us</NavLink>
    </nav>
  );
}

export default Navigation;