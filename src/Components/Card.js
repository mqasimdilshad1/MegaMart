import React from "react";
import Rating from "react-rating-stars-component";
import { useState } from "react";
import { BsCart2 } from "react-icons/bs";

function Card({ product }) {
  const [buttonText, setbuttonText] = useState("Add to Cart");
  const [showCartIcon, setShowCartIcon] = useState(false);

  function toggleButtonText() {
    setbuttonText(" View Cart");
    setShowCartIcon(true);
  }
  const limitTitleWords = (title, limit) => {
    const words = title.split(" ");

    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }

    return title;
  };

  return (
    <div className="card">
      <div className="image">
        <div className="sale-tag">
          <span>{56}%</span>
          <span>OFF</span>
        </div>
        <img src={product.image} alt="Product" />
        <div className="overlay">
          <button onClick={toggleButtonText}>
            {showCartIcon && <BsCart2 size={17} />}
            {buttonText}
          </button>
        </div>
      </div>
      <div className="content">
        <div className="title">
          <p>{limitTitleWords(product.title, 2)}</p>
        </div>
        <div className="price">
          <p>${product.price}</p>
        </div>
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
      </div>
    </div>
  );
}

export default Card;
