import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import { useCart } from "./CartContext";

function Header({ setSearchItem, setSelectedCategory, selectedCategory }) {
  const { cartCount } = useCart();

  // runs when ever add to cart clicked and cartCount changed in local storage
  useEffect(() => {}, [cartCount]);

  return (
    <header className="bg-white">
      {/* container */}
      <div className="p-0 max-w-[1200px] mx-auto">
        {/* header content */}
        <div className="h-[5.6rem] flex-row justify-between items-center bg-white flex sm:items-center sm:flex sm:flex-wrap ">
          {/* logo */}
          <div className="fill-primary text-primary w-[8.6rem] h-[1.7rem] flex items-baseline gap-[0.6rem] order-1 basis-[25%] hover:cursor-pointer mb-[20px] md:basis-[25%] md:pl-[30px] sm:order-1 sm:basis-[30%] sm:mt-[25px] sm:pl-[20px]">
            {/* logo h1 */}
            <h1 className="text-primary text-center font-Inter text-[2.2rem] font-bold leading-normal m-0 bg-logo-text-background pl-[9.5px] pr-[9.5px] pt-[0px] pb-[0px] rounded-[10px] md:text-[1.7rem] sm:text-[1.7rem]">
              M
            </h1>
            <img
              className="h-[1.7rem] w-[8.6rem] md:h-[1.5rem] md:w-[5.6rem] sm:h-[1.5rem] sm:w-[5.6rem] "
              src="./icons/megamart.svg"
              alt="MegaMart"
            />
          </div>
          <SearchBar
            setSearchItem={setSearchItem}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
          {/* cart icon */}
          <div className="min-w-[1.5rem] min-h-[1.5rem] flex justify-end items-center gap-[5px] order-3 basis-1/5 hover:cursor-pointer md:basis-[20%] md:pr-[30px] sm:order-2 sm:basis-[30%] sm:mt-[25px] sm:pr-[20px] ">
            <img src="./icons/cart.svg" alt="cart" />
            {/* cart detail */}
            <div className="flex items-center justify-center gap-[0.3rem]">
              <p className="font-Inter font-bold text-[small] ">Cart</p>
              {cartCount > 0 && (
                <span className="pt-[0.2rem] pb-[0.2rem] pr-[0.5rem] pl-[0.5rem] rounded-[70%] bg-primary text-white text-[smaller]  ">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
