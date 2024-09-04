import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import CartCountBadge from "./CartCountBadge";
import SearchBar from "./SearchBar";

const Navbar: React.FC<{ onSearch: (searchQuery: string) => void }> = ({
  onSearch,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-accent text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">
          EloBuy
        </Link>
        <SearchBar onSearch={onSearch} />
        <div className="flex items-center gap-6">
          <Link to="/cart" className="relative flex items-center">
            <CiShoppingCart size={24} />
            <CartCountBadge count={3} /> {/* Adjust count as needed */}
          </Link>
          <div
            className="relative cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaRegUser size={24} />
            <span className="ml-2">Account</span>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black border rounded shadow-lg">
                <ul>
                  <li className="p-2 hover:bg-gray-200">
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-200">
                    <Link to="/orders">Orders</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-200">
                    <Link to="/logout">Logout</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
