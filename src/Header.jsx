import { Link } from "react-router-dom";
import { FaShoppingCart, FaStore } from "react-icons/fa";
import "./App.css";
import Navigation from "./Navigation";


function Header({ search, setSearch }) {
  return (
    <>
      <header className="header">

        <div className="logo-section">
          <h2>
            <FaStore /> ShopSphere
          </h2>
          <p>Everything You Need, All in One Place</p>
        </div>

        <Navigation />

        <div className="header-right">
          {search !== undefined ? (
            <input
              type="text"
              placeholder="🔍 Search products..."
              className="search-box"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          ) : (
            <div style={{ width: "200px" }}></div>
          )}

          <Link to="/cart" className="cart">
            <FaShoppingCart />
            <span>Cart</span>
          </Link>
        </div>

      </header>
    </>
  );
}

export default Header;