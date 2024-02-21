import React, { useState } from "react";

const SearchBar = ({
  setSearchItem,
  setSelectedCategory,
  selectedCategory,
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  const handleInputChange = (event) => {
    const trimmed = event.target.value.trim();
    setSearchItem(trimmed);
  };

  const categories = [
    "All",
    "men's clothing",
    "women's clothing",
    "electronics",
    "jewelery",
  ];
  // function to limit the words in dropdown title
  const limitTitleWords = (title, limit) => {
    const words = title.split(" ");

    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }

    return title;
  };

  return (
    <div className="search-field-container">
      <div onClick={toggleDropdown} className="dropdown-arrow">
        <span>{limitTitleWords(selectedCategory, 1)} </span>
        <img src="./icons/dropdown.svg" alt="dropdown" />
      </div>

      {/* this if condition loops through catagory array and list the options when dropdown open  */}
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
