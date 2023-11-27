import React from "react";
import Rating from "react-rating-stars-component";

function Card({ product }) {
 

  return (
    <div className="card">
      <div className="image">
        <img src={product.image} alt="Product" />
        <div className="overlay">
          <button>Add to cart</button>
        </div>
      </div>
      <div className="content">
        <div className="title">
          <p>{product.title}</p>
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
