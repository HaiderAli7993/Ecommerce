import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center h-96 text-white flex items-center justify-center"
      style={{ backgroundImage: "url('https://example.com/hero-image.jpg')" }}
    >
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-4">Welcome to Our Store</h2>
        <p className="text-lg mb-8">
          Find the best products at unbeatable prices
        </p>
        <button className="bg-accent px-6 py-3 rounded hover:bg-accentDark transition-colors duration-200">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
