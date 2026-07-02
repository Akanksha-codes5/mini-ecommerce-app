
import { useEffect, useState } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { FcCheckmark } from "react-icons/fc";
import CartIcon from "./CartIcon";
import Header from "./Header";

function Products() {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState(() => {
        const storedCart = sessionStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    })
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((response) => response.json())
            .then((result) => {
                console.log("result", result)
                setData(result.products)
            })
    }, [])


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
    const removeFromCart = (id) => {
        const updatedCart = cart.map((item) => {
            if (item.productId === id) {
                return { ...item, quantity: item.quantity - 1 }
            }
            return item
        })
        setCart(updatedCart.filter((item) => { return item.quantity > 0 }))
    }
    console.log("CART", cart)
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)
    useEffect(() => {
        sessionStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return (
        <>
            <Header />
            <h1>Product List</h1>
            <div><CartIcon cartCount={cartCount} /></div>
            <div>Total Price: {totalPrice.toFixed(2)} </div>
            <div class="product-container">
                {
                    data.length > 0 && data.map((item) => {
                        const isInCart = cart.find((cartitem) => cartitem.productId === item.id);
                        return (
                            <div class="product-card">
                                <img src={item.images[0]} class="product-image" />

                                <div class="product-details">
                                    <h3 class="product-title">{item.title}</h3>
                                    <p class="product-description">
                                        {item.description}
                                    </p>
                                    <p class="product-price"><span><MdCurrencyRupee /></span><span class="price">{item.price}</span> </p>
                                    <button class="product-button" onClick={() => addToCart(item.id, item.price, item.title, item.images)}>Add to Cart </button>
                                    <button class="product-button" onClick={() => removeFromCart(item.id)}>Remove from Cart </button>
                                    {isInCart && <p>Product added to cart <FcCheckmark /></p>}
                                </div>
                            </div>

                        )

                    })
                }
            </div>
        </>
    )
}
export default Products;