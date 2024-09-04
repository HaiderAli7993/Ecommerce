import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

interface ProductListProps {
  searchQuery: string;
  addToCart: (product: any) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  searchQuery,
  addToCart,
}) => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
