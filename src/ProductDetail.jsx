import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { CurrencyIcon } from "./Constant";
import "./App.css";
function ProductDetail() {

    const { id } = useParams();
    console.log("Product ID:", id);

    const [product, setProduct] = useState(null);
    const [cart, setCart] = useState(() => {
        const storedCart = sessionStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    })
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => response.json())
            .then((result) => {
                console.log("Product Detail Result:", result);
                setProduct(result);
            });
    }, [id]);

    const addToCart = (id, price, title, image) => {
        console.log("image", image)
        console.log("price", price)
        console.log("id", id)
        setCart((prevCart) => {
            console.log("prevCart", prevCart)
            const existingProduct = prevCart.some((item) => {
                return item.productId == id
            })
            console.log("EXISTING PRODUCT", existingProduct)
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.productId === id ? {
                        ...item, quantity: item.quantity + 1
                    } : item

                )
            }
            else {
                console.log("Adding new product to cart")
                return [...prevCart,
                {
                    productId: id,
                    price: price,
                    quantity: 1,
                    title: title,
                    image: image[0],
                }
                ]
            }
        })
    }
    useEffect(() => {
        sessionStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
    const isInCart = cart.some((item) => item.productId === product?.id);
    return (
        <div className="page-container">
            <Header />
            <section className="product-detail-section">
                {product ? (
                    <div className="product-detail-card">
                        <img src={product.images[0]} alt={product.title} className="product-detail-image" />
                        <div className="product-detail-info">
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p><strong>Rating:</strong>  {product.rating}</p>
                            <p><strong>Price:</strong> <CurrencyIcon />{product.price}</p>
                            <p><strong>Brand:</strong> {product.brand}</p>
                            <p><strong>Category:</strong> {product.category}</p>
                            <p><strong>Availability:</strong> {product.availabilityStatus}</p>
                            <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
                            <p><strong>Warranty Information:</strong> {product.warrantyInformation}</p>
                            <p><strong>Shipping Information:</strong> {product.shippingInformation}</p>
                            <p>
                                <strong>Dimensions:</strong>{" "}
                                {product.dimensions.width} * {product.dimensions.height} * {product.dimensions.depth}
                            </p>
                            <button
                                className="product-button"
                                onClick={() =>
                                    addToCart(
                                        product.id,
                                        product.price,
                                        product.title,
                                        product.images
                                    )
                                }
                            >
                                {isInCart ? "Added to Cart" : "Add to Cart"}
                            </button>

                            {isInCart && (
                                <p className="success-message">
                                    ✔ Product added to cart!
                                </p>
                            )}
                        </div>
                    </div>
                ) : (
                    <p>Loading product details...</p>
                )}
            </section>

            <Footer />
        </div>
    );
}
export default ProductDetail