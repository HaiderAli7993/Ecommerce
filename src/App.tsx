import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <main>
      <Navbar onSearch={handleSearch} />
      <HeroSection />
      <ProductList searchQuery={searchQuery} />
      <Footer />
    </main>
  );
};

export default App;
