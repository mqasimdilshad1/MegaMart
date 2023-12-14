import React, { useState } from "react";
import Rating from "react-rating-stars-component";
import { BsCart2 } from "react-icons/bs";
import { useCart } from "./CartContext";

function Card({ product }) {
  const { addToCart } = useCart();
  const [buttonText, setButtonText] = useState("Add to Cart");
  const [showCartIcon, setShowCartIcon] = useState(false);

  // function to change button text when clicked
  const toggleButtonText = () => {
    setButtonText(" View Cart");
    setShowCartIcon(true);
  };

  const handleAddToCart = (buttonText) => {
    addToCart(product.id, buttonText);
  };

  const handleButtonClick = () => {
    toggleButtonText();
    handleAddToCart(buttonText);
  };

  return (
    <div className="card">
      <div className="image">
        <div className="sale-tag">
          <span>{56}%</span>
          <span>OFF</span>
        </div>
        <img src={product.image} alt={product.title} />
        <div className="card-overlay"></div>
      </div>
      <div className="card-content">
        <div className="title-price-container">
          <div className="title">
            <p>{product.title}</p>
          </div>
          <div className="price">
            <p>${product.price}</p>
          </div>
        </div>
        <div className="rating-button-container">
          <div className="rating">
            <Rating
              count={5}
              value={product.rating.rate}
              size={24}
              edit={false}
              isHalf={true}
              activeColor="#ffc915"
            />
          </div>
          <button onClick={handleButtonClick}>
            {showCartIcon && <BsCart2 size={13} />}
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
