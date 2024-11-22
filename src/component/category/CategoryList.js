import React from "react";
import "./categoryList.css";

const CategoryList = ({ categories, onCategorySelect }) => {
  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <div
          className="category-item"
          key={index}
          onClick={() => onCategorySelect(category.name)}
        >
          <img src={category.image} alt={category.name} />
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
