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

  return (
    <div className="search-field-container">
      <div className="search-dropdown">
        <div onClick={toggleDropdown} className="dropdown-arrow">
          <span>{selectedCategory} </span>
          <img src="./icons/dropdown.svg" alt="dropdown" />
        </div>

        {isDropdownOpen && (
          <div className="dropdown-content">
            <option onClick={() => handleCategorySelect("Mobiles")}>
              Mobiles
            </option>
            <option onClick={() => handleCategorySelect("Games")}>Games</option>
            <option onClick={() => handleCategorySelect("Toys")}>Toys</option>
            <option onClick={() => handleCategorySelect("Deals")}>Deals</option>
            <option onClick={() => handleCategorySelect("Books")}>Books</option>
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
