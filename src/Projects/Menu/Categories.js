import React from "react";
import "./Categories.css";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="categories-btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="categories-filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
