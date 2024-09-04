import React from "react";

interface CartCountBadgeProps {
  size: string;
  count: number; // Add this line
}

const CartCountBadge: React.FC<CartCountBadgeProps> = ({ size, count }) => {
  return (
    <div
      className={`absolute bg-red-600 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid place-items-center`}
    >
      {count}
    </div>
  );
};

export default CartCountBadge;
