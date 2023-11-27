import React from "react";
import Rating from "react-rating-stars-component";
import { useState } from "react";


function Card({ product }) {

  const [buttonText, setbuttonText] = useState("Add to Cart");

function toggleButtonText() {
     setbuttonText("View Cart");
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
        <img src={product.image} alt="Product" />
        <div className="overlay">
          <button onClick={toggleButtonText}>{buttonText}</button>
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
