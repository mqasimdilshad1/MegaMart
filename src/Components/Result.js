import React from "react";
import Card from "./Card";
function Result({ productData }) {
  return (
    // result
    <div className="bg-body-background sm:grid">
      {/* result title */}
      <h1
        className="font-Inter mx-auto max-w-[1200px] pt-[30px] text-primary col-span-5 text-xl 
      font-bold text-[35px] md:ml-[40px] sm:pt-[70px] sm:col-span-1 sm:ml-[40px] sm:text-start"
      >
        Results
      </h1>
      {/* result body */}
      <div
        className="bg-body-background grid grid-cols-5 gap-[16px] pt-[30px] pb-[50px] gap-y-[42px] 
      max-w-[1200px] mx-auto md:flex md:flex-wrap md:gap-x-[12px] md:gap-y-[46px] md:justify-center sm:grid sm:grid-cols-1 sm:gap-y-[16px] sm:justify-items-center "
      >
        {productData.map((product) => (
          <Card key={product.id + product.title} product={product} />
        ))}
      </div>
    </div>
  );
}
export default Result;