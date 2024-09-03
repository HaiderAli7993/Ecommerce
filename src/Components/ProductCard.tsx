import React from "react";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
      <img
        className="w-full h-48 object-cover rounded"
        src={image}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">${price}</p>
      </div>
      <button className="mt-4 bg-accent text-white px-4 py-2 rounded hover:bg-accentDark transition-colors duration-200">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
