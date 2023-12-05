import React, { useState } from "react";

const SearchBar = ({ setSearchItem }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleInputChange = (event) => {
    setSearchItem(event.target.value);
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

  const limitTitleWords = (title, limit) => {
    const words = title.split(" ");

    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }

    return title;
  };
  return (
    <div className="search-field-container">
      <div className="search-dropdown">
        <div onClick={toggleDropdown} className="dropdown-arrow">
          <span>{limitTitleWords(selectedCategory, 1)} </span>
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
        onChange={handleInputChange}
      />
      <div className="search-icon">
        <img src="./icons/search.svg" alt="search" />
      </div>
    </div>
  );
};

export default SearchBar;
