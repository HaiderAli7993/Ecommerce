import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface ProductDetailProps {
  // You can also use TypeScript interfaces to define the product data shape.
}

const ProductDetail: React.FC<ProductDetailProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    // Fetch product data from an API or a mock data source
    fetch(`https://fakeapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row">
        <img
          className="w-full lg:w-1/2 object-cover rounded-lg"
          src={product.image}
          alt={product.title}
        />
        <div className="lg:ml-6">
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 text-xl mb-4">${product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex gap-4 mb-4">
            {product.colors.map((color: string) => (
              <button
                key={color}
                className={`w-8 h-8 rounded-full`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <button className="bg-accent text-white px-6 py-3 rounded hover:bg-accentDark transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
