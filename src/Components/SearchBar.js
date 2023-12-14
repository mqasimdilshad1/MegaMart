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
    <div
      className="flex items-center order-2 justify-between bg-searchbar-background rounded-[10px] relative 
      basis-[50%] md:basis-[60%] sm:order-3 sm:basis-[100%] sm:rounded-tr-[0] sm:rounded-br-[0] sm:rounded-tl-[0] sm:rounded-bl-[0] sm:h-[48px] sm:mt-[20px] sm:ml-[0]"
    >
      <div
        onClick={toggleDropdown}
        className="flex gap-[5px] hover:cursor-pointer bg-searchbar-background p-[0.95rem] rounded-tl-[10px] rounded-bl-[10px] font-Inter basis-[30%] md:p-[0.95rem] md:flex md:basis-[15%] md:flex-nowrap md:gap-[5px] sm:p-[0.5rem]"
      >
        <span>{limitTitleWords(selectedCategory, 1)} </span>
        <img src="./icons/dropdown.svg" alt="dropdown" />
      </div>

      {/* this if condition loops through catagory array and list the options when dropdown open  */}
      {isDropdownOpen && (
        <div className="block absolute top-full left-0 w-[40%] bg-white border border-solid border-dropdown-border text-text font-Inter z-[3] md:w-[50%] sm:w-[100%] sm:top-[100%] sm:z-[3]">
          {categories.map((category) => (
            <option
              className="bg-card-border cursor-pointer border-b-[1px] border-solid border-dropdown-border text-heading font-Inter  hover:cursor-pointer hover:border-b-[1px] hover:border-solid hover:border-dropdown-border hover:text-heading hover:bg-dropdown-border"
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
        className="h-[3rem] shrink-0 bg-transparent text-[medium] border-none font-Inter basis-[65%] focus:outline-none md:basis-[60%] sm:rounded-[0] sm:rounded-t-[2px] "
        onChange={handleInputChange}
      />
      <div className="h-[1.1rem] shrink-0 cursor-pointer basis-[10%] justify-end md:basis-[10%] md:justify-end">
        <img src="./icons/search.svg" alt="search" />
      </div>
    </div>
  );
};

export default SearchBar;
