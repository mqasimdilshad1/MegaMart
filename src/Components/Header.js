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
        <div className="h-[5.6rem] flex justify-between items-center lg:bg-white flex-wrap">
          {/* logo */}
          <div className="fill-primary text-primary lg:w-[8.6rem] lg:h-[2rem]  flex items-baseline gap-[0.6rem] order-1 lg:basis-[25%] hover:cursor-pointer lg:mb-[20px] md:basis-[25%] md:pl-[30px] basis-[30%] mt-[25px] pl-[20px] w-[6.6rem] ">
            {/* logo h1 */}
            <h1 className="text-primary text-center font-Inter lg:text-[2rem] font-bold leading-normal m-0 bg-logo-text-background lg:pl-[9.5px] lg:pr-[9.5px] lg:pb-[0] rounded-[10px] md:text-[1.7rem] text-[1.7rem] pl-[6.5px] pr-[6.5px] pt-[0px] pb-[0px] ">
              M
            </h1>
            <img
              className="lg:h-[1.7rem] lg:w-[8.6rem] md:h-[1.5rem] md:w-[5.6rem] h-[1.5rem] w-[5.6rem] "
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
          <div className="min-w-[1.5rem] min-h-[1.5rem] flex justify-end items-center gap-[5px] lg:order-3 lg:basis-1/5 hover:cursor-pointer md:basis-[20%] md:pr-[30px] order-2 basis-[30%] mt-[25px] pr-[20px] ">
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
