import Header from "./Header";
import Footer from "./Footer";

function AboutUs() {
  return (
    <div className="page-container">
      <Header />

      <section className="about-section">
        <h1>About ShopSphere</h1>

        <p>
          Welcome to <strong>ShopSphere</strong>, a simple e-commerce web
          application built using React. This project demonstrates
          the basic features of an online shopping website with a clean and
          user-friendly interface.
        </p>

        <h2>Features</h2>

        <ul>
          <li>✔ View products from different categories</li>
          <li>✔ Search products by name</li>
          <li>✔ Add and remove products from the shopping cart</li>
          <li>✔ View product image, title, price, and quantity in the cart</li>
          <li>✔ Automatic subtotal calculation</li>
          <li>✔ Responsive design for different screen sizes</li>
          <li>✔ Product data fetched from the DummyJSON API</li>
        </ul>

        <h2>Technologies Used</h2>

        <p>
          This project is built using React, JavaScript, HTML5, CSS3,
          React Router, and the DummyJSON API.
        </p>

        <h2>Purpose</h2>

        <p>
          The purpose of this project is to demonstrate the implementation of
          a modern e-commerce application using React, including routing,
          API integration, state management, and shopping cart functionality.
        </p>

        <h2>Thank You!</h2>

        <p>
          Thank you for visiting <strong>ShopSphere</strong>. We hope you enjoy
          exploring the application and its features.
        </p>
      </section>

      <Footer />
    </div>
  );
}

export default AboutUs;