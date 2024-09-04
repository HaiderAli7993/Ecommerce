import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import CartCountBadge from "./CartCountBadge";
import SearchBar from "./SearchBar";

const Navbar: React.FC<{ onSearch: (searchQuery: string) => void }> = ({
  onSearch,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-accent text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">ShopLogo</h1>
        <SearchBar onSearch={onSearch} />
        <div className="relative">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaRegUser size={24} />
            <span className="ml-2">Account</span>
          </div>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100">Profile</li>
                <li className="px-4 py-2 hover:bg-gray-100">Orders</li>
                <li className="px-4 py-2 hover:bg-gray-100">Logout</li>
              </ul>
            </div>
          )}
        </div>
        <div className="relative ml-6">
          <CiShoppingCart size={24} />
          <CartCountBadge size="w-[20px] h-[20px]" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
