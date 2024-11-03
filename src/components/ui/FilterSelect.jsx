import React from "react";

const FilterSelect = ({ value, onChange, options }) => {
  return (
    <select
      className="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-lg outline-none"
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;
