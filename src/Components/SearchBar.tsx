import React from "react";
import { CiSearch } from "react-icons/ci";

interface SearchBarProps {
  onSearch: (searchQuery: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className="relative w-full max-w-[500px]">
      <input
        className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
        type="text"
        placeholder="Search Product..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <CiSearch
        className="absolute top-0 right-0 mt-4 mr-5 text-gray-500"
        size={20}
      />
    </div>
  );
};

export default SearchBar;
