import React, { useState } from "react";

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([
    // Example item; normally you would fetch this from state or context
    {
      id: 1,
      title: "Product Title",
      price: 29.99,
      image: "https://example.com/image.jpg",
      quantity: 1,
    },
  ]);

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + quantity } : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
      <div className="grid grid-cols-1 gap-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 border-b pb-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-cover"
            />
            <div className="flex-grow">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p>${item.price}</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="px-2 py-1 border rounded"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-2 py-1 border rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right mt-6">
        <h4 className="text-2xl font-bold">Total: ${calculateTotal()}</h4>
        <button className="mt-4 bg-accent text-white px-4 py-2 rounded">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
