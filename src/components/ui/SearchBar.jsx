import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <div className="relative flex-1">
      <Search
        className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
        size={18}
      />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full py-2.5 pl-10 pr-4 text-gray-700 bg-white border border-gray-200 rounded-lg shadow-sm transition-all duration-200 placeholder-gray-400 outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
