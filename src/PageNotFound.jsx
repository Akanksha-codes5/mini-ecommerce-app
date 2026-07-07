import header from "./Header";
import Footer from "./Footer";
function PageNotFound() {
    return (
        <div className="page-container">
            <Header />
            <div>
                <h1>404</h1>
                <p>Page not found</p>
            </div>
            <Footer />
        </div>
    )
}
export default PageNotFound;