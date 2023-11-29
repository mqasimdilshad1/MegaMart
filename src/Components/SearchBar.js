import React, { useState } from "react";

const SearchBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  const categories = [
    "All",
    "men's clothing",
    "women's clothing",
    "electronics",
    "jewelery",
  ];
  return (
    <div className="search-field-container">
      <div className="search-dropdown">
        <div onClick={toggleDropdown} className="dropdown-arrow">
          <span>{selectedCategory} </span>
          <img src="./icons/dropdown.svg" alt="dropdown" />
        </div>

        {isDropdownOpen && (
          <div className="dropdown-content">
            {categories.map((category) => (
              <option
                key={category}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </option>
            ))}
          </div>
        )}
      </div>
      <input
        type="text"
        placeholder="Search here ..."
        className="search-field"
      />
      <div className="search-icon">
        <img src="./icons/search.svg" alt="search" />
      </div>
    </div>
  );
};

export default SearchBar;
