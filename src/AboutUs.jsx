import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
function AboutUs() {
  return (
    <div className="page-container">
      <Header />

      <section className="about-section">
        <h1>About ShopSphere</h1>

        <p>
          Welcome to <strong>ShopSphere</strong>, a modern and responsive
          e-commerce web application developed using <strong>React.js</strong>.
          This project was created to demonstrate the core concepts of
          front-end web development by building a functional online shopping
          experience with a clean, intuitive, and user-friendly interface.
        </p>

        <p>
          ShopSphere allows users to browse products, search for items, manage a
          shopping cart, and view real-time price calculations. Product
          information is dynamically fetched from the <strong>DummyJSON API</strong>,
          providing a realistic shopping experience while showcasing API
          integration and state management in React.
        </p>

        <section className="about-section">
          <h2>Features</h2>

          <ul>
            <li>✔ Browse products from multiple categories.</li>
            <li>✔ Search products instantly by name with real-time filtering.</li>
            <li>
              ✔ View detailed product information, including images, titles,
              prices, ratings, and descriptions.
            </li>
            <li>✔ Add products to the shopping cart with a single click.</li>

            <li>✔ Remove products from the cart whenever needed.</li>
            <li>
              ✔ Automatically calculate item totals, cart subtotal, and total
              price.
            </li>
            <li>✔ Display the total number of items in the shopping cart.</li>
            <li>
              ✔ Navigate seamlessly between pages using React Router.
            </li>
            <li>
              ✔ Responsive layout optimized for desktop, tablet, and mobile
              devices.
            </li>
            <li>✔ Dynamic product data fetched from the DummyJSON REST API.</li>
            <li>
              ✔ Clean and reusable React component architecture for better
              maintainability.
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Technologies Used</h2>

          <ul>
            <li><strong>React.js</strong> for building reusable UI components.</li>
            <li><strong>JavaScript (ES6+)</strong> for application logic.</li>
            <li><strong>HTML5</strong> for semantic page structure.</li>
            <li><strong>CSS3</strong> for responsive styling and layouts.</li>
            <li>
              <strong>React Router</strong> for client-side routing and
              navigation.
            </li>
            <li>
              <strong>React Hooks (useState & useEffect)</strong> for state
              management and data fetching.
            </li>
            <li>
              <strong>DummyJSON API</strong> for retrieving product information
              dynamically.
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Purpose</h2>

          <p>
            The primary goal of ShopSphere is to demonstrate the development of
            a single-page e-commerce application using React. This project
            showcases important front-end development concepts such as:
          </p>

          <ul className="purpose-list">
            <li>Component-based architecture</li>
            <li>API integration and asynchronous data fetching</li>
            <li>State management using React Hooks</li>
            <li>Client-side routing</li>
            <li>Responsive web design</li>
            <li>Shopping cart functionality</li>
            <li>Dynamic rendering of data</li>
            <li>Reusable and maintainable code structure</li>
          </ul>

          <p>
            This project serves as a practical demonstration of modern React
            development practices and highlights the skills required to build
            interactive and scalable web applications.
          </p>
        </section>

        <section className="about-section">
          <h2>Thank You!</h2>

          <p>
            Thank you for visiting <strong>ShopSphere</strong>. We hope you
            enjoy exploring the application and its features. Your interest and
            feedback are greatly appreciated. This project reflects continuous
            learning and hands-on experience in React development, and we hope
            it provides an enjoyable and seamless shopping experience.
          </p>
        </section>
      </section>

      <Footer />
    </div>
  );
}

export default AboutUs;