import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./assets/styles.css";
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

      <button className="shop-btn"><Link className="nav-link" to="/products">Shop Now</Link></button>
      </section>

      <section className="category-section">
        <h2>Our Categories</h2>

        <div className="category-grid">
         <Link className="nav-link" to="/products?category=beauty"><div> 💄 Beauty Products</div> </Link>
         <Link className="nav-link" to="/products?category=fragrances"><div> 🌸 Fragrances</div></Link>
          <Link className="nav-link" to="/products?category=furniture"><div>🛋️ Furniture</div></Link>
          <Link className="nav-link" to="/products?category=cooking essentials"><div>🍳 Cooking Essentials</div></Link>
          <Link className="nav-link" to="/products?category=condiments"><div>🌶️ Condiments</div></Link>
          <Link className="nav-link" to="/products?category=vegetables"><div>🥬 Vegetables</div></Link>
          <Link className="nav-link" to="/products?category=fruits"><div>🍎 Fruits</div></Link>
          <Link className="nav-link" to="/products?category=dairy"><div>🥚 Eggs</div></Link>
          <Link className="nav-link" to="/products?category=meat"><div>🍗 Meat</div></Link>
          <Link className="nav-link" to="/products?category=seafood"><div>🐟 Seafood</div></Link>
          <Link className="nav-link" to="/products?category=desserts"><div>🍦 Ice Cream</div></Link>
          <Link className="nav-link" to="/products?category=beverages"><div>🧃 Juice</div></Link>
          <Link className="nav-link" to="/products?category=dog food"><div>🐶 Dog Food</div></Link>
          <Link className="nav-link" to="/products?category=cat food"><div>🐱 Cat Food</div></Link >
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