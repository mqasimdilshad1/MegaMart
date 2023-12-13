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
  //  function to limit category words
  const limitTitleWords = (title, limit) => {
    const words = title.split(" ");

    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }

    return title;
  };

  return (
     // card
     <div
     className="relative rounded-[16px] w-[14.1rem] h-[18rem] overflow-hidden box-border 
   shadow-card-shadow border border-solid shadow-lg border-gray-300 group"
   >
     {/* image */}
     <div className="w-[100%] h-[72%] overflow-hidden relative bg-white flex justify-center items-center transition-transform duration-[0.3s] ease-in-out group-hover:scale-110 ">
       {/* sales-tag */}
       <div className="absolute flex top-[-8px] right-[-13px] bg-primary text-white pt-[20px] pr-[33px] pb-[2px] pl-[7px] rounded-[10px] text-[14px] font-Inter z-[1] flex-col items-end justify-end ">
         <span>{56}%</span>
         <span>OFF</span>
       </div>
       <img
         className="w-[9.3rem] h-[12rem] group-hover:transition-transform duration-[0.3s] ease-in-out group-hover:transform:scale-[1.1] "
         src={product.image}
         alt={product.title}
       />
       {/* card-overlay */}
       <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-overlay opacity-0 flex justify-center items-center z-[2] pointer-events-none group-hover:opacity-[1]"></div>
     </div>
     {/* card content */}
     <div className="pl-[20px] font-Inter flex-col bg-searchbar-background ">
       {/* title price container */}
       <div className="flex-col">
         {/* title */}
         <div>
           <p className="text-[1rem] font-Inter whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] ">
             {product.title}
           </p>
         </div>
         {/* price */}
         <div>
           <p className="text-[0.9rem] text-heading mb-0 mt-[5px] font-bold  ">
             ${product.price}
           </p>
         </div>
       </div>
       {/* rating button container */}
       <div className="flex ">
         {/* rating */}
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
           className="bg-white pt-[8px] pr-[23px] pb-[8px] pl-[23px] rounded-[8px] border-none 
         text-[0.9rem] font-Inter font-[500] outline-none absolute top-[30%] invisible z-[2] left-[21%]
         w-[132px] group-hover:visible hover:bg-button-hover focus:flex-row focus:items-baseline "
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
