import React from 'react';

const FilterSelect = ({ value, onChange, options }) => {
  return (
    <select
      className="px-4 py-2 text-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      value={value}
      onChange={onChange}
    >
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
};

export default FilterSelect;