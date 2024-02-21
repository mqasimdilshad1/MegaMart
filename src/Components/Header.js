import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import { useCart } from "./CartContext";

function Header() {
  const { cartCount } = useCart();

  // runs when ever add to cart clicked and cartCount changed in local storage
  useEffect(() => {}, [cartCount]);

  return (
    <header>
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
              {cartCount > 0 && <span>{cartCount}</span>}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
