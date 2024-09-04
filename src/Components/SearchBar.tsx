import React, { useState } from "react";

const SearchBar: React.FC<{ onSearch: (searchQuery: string) => void }> = ({
  onSearch,
}) => {
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="p-2 rounded"
      />
      <button type="submit" className="ml-2 p-2 bg-white text-accent rounded">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
