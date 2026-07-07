import { NavLink } from "react-router-dom";
import "./App.css";

function Navigation() {
  return (
    <nav className="navbar">
      <NavLink to="/">🏠 Home</NavLink>
      <NavLink to="/about">ℹ️ About Us</NavLink>
      <NavLink to="/contact">📞 Contact Us</NavLink>
      <NavLink to="/products">🛍️ Products</NavLink> 
    </nav>
  );
}

export default Navigation;