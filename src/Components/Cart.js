import React from "react";

function Cart({ cartCount }) {
  return (
    <div className="cart-icon">
      <img src="./icons/cart.svg" alt="cart" />
      <div className="cart-detail">
        <p>Cart</p>
        {cartCount > 0 && <span>{cartCount}</span>}
      </div>
    </div>
  );
}

export default Cart;
