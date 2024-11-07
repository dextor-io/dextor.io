import React from 'react';

const FilterSelect = ({ value, onChange, options }) => {
  return (
      <select
          className="px- py-2 text-black border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          value={value}
          onChange={onChange}
      >
        {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
        ))}
      </select>
  );
};

export default FilterSelect;