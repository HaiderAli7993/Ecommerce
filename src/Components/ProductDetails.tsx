import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface ProductDetailsProps {
  addToCart: (product: any) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ addToCart }) => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <img
          className="w-full lg:w-1/2 h-auto object-cover rounded"
          src={product.image}
          alt={product.title}
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl text-gray-700 mb-4">${product.price}</p>
          <p className="text-lg text-gray-600 mb-6">{product.description}</p>
          <button
            className="bg-accent text-white px-4 py-2 rounded hover:bg-accentDark transition-colors duration-200"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
