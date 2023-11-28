import React from "react";
import Card from "./Card";
import { useState } from "react";
function Result({ productData }) {

  return (
    <div className="result-body">
      {productData.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
export default Result;
