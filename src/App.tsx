import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import ProductDetails from "./Components/ProductDetails";
import CartPage from "./Components/CartPage";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity?: number;
}

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max((item.quantity || 1) + quantity, 1) }
          : item
      )
    );
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} cartCount={cartItems.length} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ProductList searchQuery={searchQuery} addToCart={addToCart} />
            </>
          }
        />
        <Route
          path="/product/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage cartItems={cartItems} updateQuantity={updateQuantity} />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
