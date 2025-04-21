import React, { useState } from "react";
import "./Shoesize.css";
import { useFavorite } from "./Favouriteprovider";

function Shoesize({ shoeid }) {
  const [activeSize, setActiveSize] = useState(null);
  const { addfavorite, favorites } = useFavorite();

  const handleSizeClick = (size,shoeid) => {
    setActiveSize(size);
    addfavorite((prevFavorites) =>
      prevFavorites.map((item) =>
        item.id === shoeid ? { ...item, size } : item
      )
    );
  };

  const sizes = [];
  for (let i = 5; i <= 12; i += 0.5) {
    sizes.push(i);
  }

  const rows = [];
  for (let i = 0; i < sizes.length; i += 4) {
    rows.push(sizes.slice(i, i + 4));
  }

  return (
    <div className="button-container">
      <h1 className="text-2xl font-normal">Select Size</h1>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((size) => (
            <button
              key={size}
              className={`btn ${activeSize === size ? "active" : ""}`}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Shoesize;
