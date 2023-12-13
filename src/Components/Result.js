import React from "react";
import Card from "./Card";
function Result({ productData }) {
  return (
    // result
    <div className="bg-body-background">
      {/* result title */}
      <h1 className="font-Inter mx-auto max-w-[1200px] pt-[30px] text-primary col-span-5 text-xl 
      font-bold text-[2.3rem]">Results</h1>
      {/* result body */}
      <div className="bg-body-background grid grid-cols-5 gap-[16px] pt-[30px] pb-[50px] gap-y-[42px] 
      max-w-[1200px] mx-auto  ">
        {productData.map((product) => (
          <Card key={product.id + product.title} product={product} />
        ))}
      </div>
    </div>
  );
}
export default Result;
