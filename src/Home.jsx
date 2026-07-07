import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="page-container">
      <Header />
      <section className="hero-section">
        <h1>Welcome to ShopSphere</h1>
        <p className="hero-text">
          Everything You Need, All in One Place.
        </p>
        <p>
          Shop beauty products, groceries, fresh fruits, vegetables,
          furniture, beverages, meat, dairy products, and pet food—all
          from one convenient online store.
        </p>

      <button className="shop-btn"><Link to="/products">Shop Now</Link></button>
      </section>

      <section className="category-section">
        <h2>Our Categories</h2>

        <div className="category-grid">
          <div>💄 Beauty Products</div>
          <div>🛋️ Furniture</div>
          <div>🛒 Groceries</div>
          <div>🥬 Vegetables</div>
          <div>🍎 Fruits</div>
          <div>🥚 Eggs</div>
          <div>🍗 Chicken Meat</div>
          <div>🥩 Beef Steak</div>
          <div>🐟 Fish Steak</div>
          <div>🍦 Ice Cream</div>
          <div>🧃 Juice</div>
          <div>🐶 Dog Food</div>
          <div>🐱 Cat Food</div>
        </div>
      </section>

      <section className="why-section">
        <h2>Why Choose ShopSphere?</h2>

        <div className="features">
          <div>Wide range of quality products</div>
          <div>Easy product browsing</div>
          <div>Simple cart management</div>
          <div>Clean and user-friendly interface</div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;