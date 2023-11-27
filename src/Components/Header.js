import React from "react";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="container">
      <div className="header-content">
        <div className="logo">
          <h1>M</h1>
          <img src="./icons/megamart.svg" alt="MegaMart" />
        </div>
        <SearchBar />
        <div className="cart-icon">
          <img src="./icons/cart.svg" alt="cart" />
          <div className="cart-detail">
            <p>Cart</p>
            <span>{3}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
