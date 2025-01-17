import React from "react";

const SearchItem = React.forwardRef(
  (
    {
      label,
      placeholder,
      type = "text",
      isActive,
      onClick,
      children,
      isLastItem,
    },
    ref
  ) => {
    return (
      <div
        className={`header__searchItem ${isActive ? "active" : ""} ${
          isLastItem ? "last-item" : ""
        }`}
        onClick={onClick}
        ref={ref}
      >
        <span>{label}</span>
        <input type={type} placeholder={placeholder} />
        {children}
      </div>
    );
  }
);

export default SearchItem;
