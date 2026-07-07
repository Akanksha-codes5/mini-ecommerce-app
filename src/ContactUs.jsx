import Header from "./Header";
import Footer from "./Footer";

function ContactUs() {
    return (
        <div className="page-container">
            <Header />

            <section className="contact-section">
                <h1>Contact Us</h1>

                <p>
                    Thank you for visiting ShopSphere! If you have any questions,
                    feedback, or suggestions about this project, feel free to get in touch.
                </p>

                <div className="contact-card">
                    <h2>Get in Touch</h2>

                    <p><strong>📍 Location:</strong> Bangalore, Karnataka, India</p>

                    <p>
                        <strong>📧 Email:</strong>{" "}
                        <a href="mailto:akankshashivakumar05@gmail.com">
                            akankshashivakumar05@gmail.com
                        </a>
                    </p>
                </div>

                <div className="contact-message">
                    <h2>About This Project</h2>

                    <p>
                        ShopSphere is a React-based e-commerce web application that demonstrates
                        viewing products, searching by product name, shopping cart management,
                        routing, and responsive design. Product data is fetched from the DummyJSON API.
                    </p>

                    <p>
                        If you have any feedback or suggestions, feel free to
                        reach out via email or visit the GitHub repository to
                        explore the source code.
                    </p>
                    <p>
                        You can explore the complete source code on GitHub:
                    </p>

                    <a
                        href="https://github.com/Akanksha-codes5/mini-ecommerce-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        View Project on GitHub
                    </a>
                </div>

                <div className="thank-you">
                    <h2>Thank You!</h2>

                    <p>
                        Thank you for taking the time to explore <strong>ShopSphere</strong>.
                        We hope you enjoyed exploring the application and its features.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default ContactUs;