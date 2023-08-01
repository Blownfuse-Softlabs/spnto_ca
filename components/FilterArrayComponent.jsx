import React, { useState, useEffect } from "react";

// Simple filters. Update this according to your needs.
const filters = {
  none: (a) => a,
  ascending: (a) => [...a].sort((a, b) => a - b),
  descending: (a) => [...a].sort((a, b) => b - a),
};

function FilterArrayComponent({ arrayData }) {
  const [currentFilter, setCurrentFilter] = useState("none");
  const [filteredArray, setFilteredArray] = useState([]);

  // Run the filter whenever arrayData or currentFilter changes.
  useEffect(() => {
    const filter = filters[currentFilter];
    setFilteredArray(filter(arrayData));
  }, [arrayData, currentFilter]);

  return (
    <div>
      <select
        value={currentFilter}
        onChange={(e) => setCurrentFilter(e.target.value)}
      >
        {Object.keys(filters).map((filterName) => (
          <option key={filterName} value={filterName}>
            {filterName}
          </option>
        ))}
      </select>

      <ul>
        {filteredArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterArrayComponent;
