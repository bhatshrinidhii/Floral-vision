import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrendingPlants from "../components/TrendingPlants";
import Reviews from "../components/Reviews";
import Products from "../components/Products";
import Footer from "../components/Footer";

function Home() {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <>
      <Navbar cartItems={cartItems} />
      <Hero />
      <TrendingPlants />
      <Products addToCart={addToCart} />
      <Reviews />
      <Footer />
    </>
  );
}

export default Home;