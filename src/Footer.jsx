import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-section">
          <h2>ShopSphere</h2>
          <p>
            ShopSphere is a modern e-commerce web application built with React
            and Vite. It demonstrates product browsing, search functionality,
            shopping cart management, and responsive design using the
            DummyJSON API.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/cart">Cart</Link>
        </div>

        {/* Project Information */}
        <div className="footer-section">
          <h3>Project Information</h3>

          <p>⚛️ Built with React</p>
          <p>🛒 Shopping Cart Functionality</p>
          <p>🔍 Product Search</p>
          <p>📦 Product Data: DummyJSON API</p>
        </div>

        {/* GitHub */}
        <div className="footer-section">
          <h3>Source Code</h3>

          <a
            href="https://github.com/Akanksha-codes5/mini-ecommerce-app"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaGithub />
            <span>View on GitHub</span>
          </a>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © {new Date().getFullYear()} ShopSphere. This application is created
        for educational and demonstration purposes. Product information is
        provided by the DummyJSON API.
      </p>
    </footer>
  );
}

export default Footer;