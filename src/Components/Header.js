import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
function Header() {
  return (
    <div className="container">
      <div className="header-content">
        <div className="logo">
          <h1>M</h1>
          <img src="./icons/megamart.svg" alt="MegaMart" />
        </div>
        <SearchBar />
        <Cart />
      </div>
    </div>
  );
}
export default Header;
