import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import ProductDetails from "./Components/ProductDetails";
import CartPage from "./Components/CartPage";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ProductList searchQuery={searchQuery} />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
