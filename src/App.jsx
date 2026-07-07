import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './assets/styles.css'
import { HashRouter, Routes, Route, } from 'react-router-dom'
import PageNotFound from './PageNotFound'
import Products from './Products'
import ContactUs from './ContactUs'
import About from './AboutUs'
import Cart from './Cart'
import Home from './Home'
export default function App() {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/products" element={<Products/>} />
                    <Route path="/cart" element={<Cart/>} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </HashRouter>
        </>
    )
}



