import React from "react";

const SearchItem = React.forwardRef(
  (
    { label, placeholder, value, isActive, onClick, children, isLastItem },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`search-item ${isActive ? "active" : ""} ${
          isLastItem ? "last-item" : ""
        }`}
        onClick={onClick}
      >
        <div className="search-item__label">{label}</div>
        <div className="search-item__input">{value || placeholder}</div>
        {children}
      </div>
    );
  }
);

export default SearchItem;
