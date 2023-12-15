import React from "react";
import Card from "./Card";
function Result({ productData }) {
  return (
    <div className="bg-body-background">
      {/* result */}
      <div className="bg-body-background grid max-w-[1200px] mx-auto ">
        {/* result title */}
        <h1
          className="font-Inter lg:pt-[30px] text-primary  
      font-bold text-[35px] pt-[70px] col-span-1 ml-[40px] lg:ml-[10px]"
        >
          Results
        </h1>

        {/* result body */}
        <div
          className="bg-body-background lg:grid-cols-5 lg:gap-[16px] pt-[30px] pb-[50px] lg:gap-y-[42px] 
      max-w-[1200px] mx-auto md:flex md:flex-wrap md:gap-x-[12px] md:gap-y-[46px] md:justify-center grid grid-cols-1 gap-y-[16px] justify-items-center "
        >
          {productData.map((product) => (
            <Card key={product.id + product.title} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Result;
