import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <div className="relative flex-1">
      <Search className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" size={20} />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full py-2 pl-10 pr-4 text-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;