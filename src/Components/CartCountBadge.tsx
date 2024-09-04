import React from "react";

const CartCountBadge: React.FC<{ count: number }> = ({ count }) => {
  return (
    <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 bg-red-600 text-white text-xs font-bold rounded-full">
      {count}
    </span>
  );
};

export default CartCountBadge;
