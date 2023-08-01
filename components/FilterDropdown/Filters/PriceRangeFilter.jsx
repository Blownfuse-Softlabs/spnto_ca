import { useState } from "react";

const PriceRangeFilter = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="range"
        min="0"
        max="100"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <input
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
    </div>
  );
};

export default PriceRangeFilter;
