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
    <div className="flex items-center lg:order-2 justify-between bg-searchbar-background lg:rounded-[10px] relative md:rounded-[10px] lg:basis-[50%] lg:mb-[10px] md:basis-[50%] order-3 basis-[100%] rounded-tr-[0] rounded-br-[0] rounded-tl-[0] rounded-bl-[0] h-[48px] mt-[20px] ml-[0] md:order-2 md:">
      <div
        onClick={toggleDropdown}
        className="flex gap-[5px] hover:cursor-pointer bg-searchbar-background lg:p-[0.7rem] md:p-[0.7rem] lg:rounded-tl-[10px] lg:rounded-bl-[10px] md:rounded-tl-[10px] md:rounded-bl-[10px] font-Inter lg:basis-[30%] md:flex md:basis-[15%] md:flex-nowrap md:gap-[5px] p-[0.5rem]"
      >
        <span>{limitTitleWords(selectedCategory, 1)} </span>
        <img src="./icons/dropdown.svg" alt="dropdown" />
      </div>

      {/* this if condition loops through catagory array and list the options when dropdown open  */}
      {isDropdownOpen && (
        <div className="block absolute top-full lg:left-0 lg:w-[40%] bg-white border border-solid border-dropdown-border text-text font-Inter lg:z-[3] md:w-[50%] w-[100%] z-[3]">
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
        className="h-[3rem] shrink-0 bg-transparent text-[medium] border-none font-Inter lg:basis-[65%] focus:outline-none md:basis-[60%] rounded-[0] rounded-t-[2px] "
        onChange={handleInputChange}
      />
      <div className="h-[1.1rem] shrink-0 cursor-pointer basis-[10%] justify-end md:basis-[10%] md:justify-end">
        <img src="./icons/search.svg" alt="search" />
      </div>
    </div>
  );
};

export default SearchBar;
