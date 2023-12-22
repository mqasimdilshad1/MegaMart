import React, { useState } from "react";
import Rating from "react-rating-stars-component";
import { BsCart2 } from "react-icons/bs";
import { useCart } from './CartStore';

function Card({ product }) {
  const { addToCart } = useCart();
  const [buttonText, setButtonText] = useState("Add to Cart");
  const [showCartIcon, setShowCartIcon] = useState(false);

  // function to change button text when clicked
  const toggleButtonText = () => {
    setButtonText("View Cart");
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
    <div
      className="lg:relative md:relative rounded-[16px] lg:w-[14.1rem] lg:h-[18rem] overflow-hidden box-border 
      shadow-card-shadow border border-solid shadow-lg border-gray-300 group md:w-[14.1rem] md:h-[17.7rem] w-[18.7rem] h-[18.2rem]"
    >
      <div className="w-[100%] h-[72%] overflow-hidden relative bg-white flex justify-center items-center      ">
        <div className="absolute flex top-[-8px] right-[-13px] bg-primary text-white pt-[20px] pr-[33px] pb-[6px] pl-[10px] rounded-[10px] text-[14px] font-Inter flex-col items-end justify-end z-[1]">
          <span>{56}%</span>
          <span>OFF</span>
        </div>
        <img
          className="w-[9.3rem] h-[12rem] group-hover:transition-transform duration-[0.3s] ease-in-out group-hover:transform group-hover:scale-[1.1] "
          src={product.image}
          alt={product.title}
        />
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-overlay opacity-0 flex justify-center items-center pointer-events-none group-hover:opacity-[1] z-[2]"></div>
      </div>
      <div className="pl-[20px] font-Inter flex-col bg-searchbar-background ">
        <div className="lg:flex-col md:flex-col flex items-center justify-around mb-[10px] lg:items-start lg:mb-[-1px] md:items-start md:mb-[-3px] ">
          <div>
            <p className="text-[1rem] font-Inter whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px] ml-[-30px] mt-2 lg:mt-[0.1rem] lg:ml-[0px] md:mt-[0.1rem] md:ml-[0px] ">
              {product.title}
            </p>
          </div>
          <div>
            <p className="text-[0.9rem] text-heading mb-0  lg:mt-[5px]  md:mt-[5px] font-bold mt-[5px] ">
              ${product.price}
            </p>
          </div>
        </div>
        <div className="flex gap-0 ">
          <div className="mt-0">
            <Rating
              count={5}
              value={product.rating.rate}
              size={24}
              edit={false}
              isHalf={true}
              activeColor="#ffc915"
            />
          </div>
          <button
            className="lg:bg-white md:bg-white flex items-center gap-[3px] pt-[6px] pr-[23px] pb-[6px] pl-[23px] border-none 
            text-[0.9rem] font-Inter font-[500] outline-none lg:absolute md:absolute top-[30%] lg:invisible md:invisible z-[2] lg:left-[34%] md:left-[34%] left-[21%]
            w-[132px] lg:group-hover:visible md:group-hover:visible hover:bg-button-hover focus:flex-row focus:items-baseline relative visible ml-[-30px] bg-button-hover rounded-[6px] p-x-[20px] p-y-[5px] mb-1 whitespace-nowrap"
            onClick={handleButtonClick}
          >
            {showCartIcon && <BsCart2 size={13} />}
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
